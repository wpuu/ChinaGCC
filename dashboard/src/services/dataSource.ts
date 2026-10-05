import defaultRaw from "../data/default-data.json";
import type {
  Advantage,
  Category,
  Channel,
  ChangedItem,
  ChinaGCCData,
  CompletenessFieldKey,
  DailyRadar,
  DailySession,
  DecisionLogEntry,
  EvidenceConfidenceBreakdown,
  EvidenceLink,
  HanlinMask,
  Market,
  MitigationCost,
  OpportunitySubScores,
  Persistence,
  ProjectMeta,
  RankPoint,
  Risk,
  ScoreChange,
  SimpleChange,
  Sku,
  SkuStatus,
  Supplier,
  SupplierRegion,
  VerificationStatus,
} from "../types";
import { COMPLETENESS_FIELDS, DIMENSION_META, EVIDENCE_META } from "../lib/data";
import {
  computeCompleteness,
  computeEvidenceFromBreakdown,
  computeOpportunityFromBreakdown,
} from "../lib/scoring";

const LOCAL_KEY = "chinagcc-local-data";
const SOURCE_KEY = "chinagcc-data-source";

const STATUSES: SkuStatus[] = [
  "NEW",
  "P1",
  "P1_CONDITIONAL",
  "P2",
  "WATCH",
  "DROP",
];
const CATEGORIES: Category[] = [
  "beauty",
  "auto",
  "travel",
  "cleaning",
  "hotel",
  "other",
];
const CHANNELS: Channel[] = ["B2C", "B2B"];
const MARKETS: Market[] = ["UAE", "Saudi", "GCC"];
const REGIONS: SupplierRegion[] = ["tianjin", "hebei", "north-china", "national"];
const PERSIST: Persistence[] = ["short", "medium", "long"];
const VERIFY: VerificationStatus[] = ["verified", "partial", "unverified"];
const COSTS: MitigationCost[] = ["low", "medium", "high"];
const TIMES = ["08:00", "14:00", "20:00", "22:00"] as const;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function asString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function asStringOrNull(v: unknown): string | null {
  if (v === null || v === undefined || v === "") return null;
  if (typeof v === "string") return v;
  if (typeof v === "number" && !Number.isNaN(v)) return String(v);
  return null;
}

function asNumberOrNull(v: unknown): number | null {
  if (v === null || v === undefined || v === "") return null;
  if (typeof v === "number" && !Number.isNaN(v)) return v;
  if (typeof v === "string" && v.trim() !== "") {
    const n = Number(v);
    return Number.isNaN(n) ? null : n;
  }
  return null;
}

function asBoolOrNull(v: unknown): boolean | null {
  if (v === true || v === false) return v;
  return null;
}

function asArray(v: unknown): unknown[] {
  return Array.isArray(v) ? v : [];
}

function pick<T extends string>(v: unknown, allowed: readonly T[], fallback: T): T {
  return typeof v === "string" && (allowed as readonly string[]).includes(v)
    ? (v as T)
    : fallback;
}

function pickOrNull<T extends string>(v: unknown, allowed: readonly T[]): T | null {
  return typeof v === "string" && (allowed as readonly string[]).includes(v)
    ? (v as T)
    : null;
}

const SUB_KEYS: (keyof OpportunitySubScores)[] = [
  "A1", "A2", "A3", "A4", "A5",
  "B1", "B2", "B3", "B4", "B5",
  "C1", "C2", "C3", "C4",
  "D1", "D2", "D3", "D4",
  "E1", "E2", "E3", "E4",
  "F1", "F2", "F3", "F4",
  "G1", "G2", "G3",
  "H1", "H2", "H3",
  "I1", "I2", "I3",
  "J1", "J2", "J3", "J4",
  "K1", "K2",
];

function normalizeBreakdown(v: unknown): OpportunitySubScores | null {
  if (!isRecord(v)) return null;
  const maxByKey = new Map<string, number>();
  for (const d of DIMENSION_META) for (const item of d.items) maxByKey.set(item.key, item.max);
  const out = {} as OpportunitySubScores;
  let filled = 0;
  for (const k of SUB_KEYS) {
    const n = asNumberOrNull(v[k]);
    const max = maxByKey.get(k) ?? 0;
    out[k] = n !== null && n >= 0 && n <= max ? n : null;
    if (out[k] !== null) filled += 1;
  }
  return filled === 0 ? null : out;
}

function normalizeEvidence(v: unknown): EvidenceConfidenceBreakdown | null {
  if (!isRecord(v)) return null;
  const read = (key: keyof EvidenceConfidenceBreakdown) => {
    const n = asNumberOrNull(v[key]);
    const max = EVIDENCE_META.find((m) => m.key === key)?.max ?? 0;
    return n !== null && n >= 0 && n <= max ? n : null;
  };
  const out: EvidenceConfidenceBreakdown = {
    officialSourceRatio: read("officialSourceRatio"),
    transactionEvidenceQuality: read("transactionEvidenceQuality"),
    sourceDiversity: read("sourceDiversity"),
    dataFreshness: read("dataFreshness"),
    chinaSupplyVerification: read("chinaSupplyVerification"),
    unknownResolvedRate: read("unknownResolvedRate"),
  };
  return Object.values(out).every((x) => x === null) ? null : out;
}

function normalizeAdvantage(v: unknown): Advantage | null {
  if (!isRecord(v)) return null;
  const name = asString(v.name);
  if (!name) return null;
  return {
    name,
    evidence: asString(v.evidence),
    businessImpact: asString(v.businessImpact),
    impactLevel: Math.max(1, Math.min(5, asNumberOrNull(v.impactLevel) ?? 1)),
    persistence: pick(v.persistence, PERSIST, "medium"),
    isOwnerAdvantage: v.isOwnerAdvantage === true,
    verificationStatus: pick(v.verificationStatus, VERIFY, "unverified"),
    evidenceLinks: asArray(v.evidenceLinks)
      .map((x) => asString(x))
      .filter(Boolean),
  };
}

function normalizeRisk(v: unknown): Risk | null {
  if (!isRecord(v)) return null;
  const name = asString(v.name);
  if (!name) return null;
  return {
    name,
    evidence: asString(v.evidence),
    probability: Math.max(1, Math.min(5, asNumberOrNull(v.probability) ?? 1)),
    impact: Math.max(1, Math.min(5, asNumberOrNull(v.impact) ?? 1)),
    isHardStop: v.isHardStop === true,
    canMitigate:
      v.canMitigate === true || v.canMitigate === "yes"
        ? "yes"
        : v.canMitigate === false || v.canMitigate === "no"
          ? "no"
          : "unknown",
    mitigation: asString(v.mitigation),
    mitigationCost: pick(v.mitigationCost, COSTS, "medium"),
    residualRisk: asNumberOrNull(v.residualRisk),
    mitigationVerified: v.mitigationVerified === true,
    source: asString(v.source),
  };
}

function normalizeSupplier(v: unknown, skuId: string): Supplier | null {
  if (!isRecord(v)) return null;
  const name = asString(v.name);
  if (!name) return null;
  return {
    id: asString(v.id, `${skuId}-${name}`),
    name,
    region: pick(v.region, REGIONS, "national"),
    location: asString(v.location),
    skuId: asString(v.skuId, skuId),
    moq: asNumberOrNull(v.moq),
    priceCny: asNumberOrNull(v.priceCny),
    weightG: asNumberOrNull(v.weightG),
    dimensions: asStringOrNull(v.dimensions),
    material: asStringOrNull(v.material),
    inStock: asBoolOrNull(v.inStock),
    customizable: asBoolOrNull(v.customizable),
    sampleFeeCny: asNumberOrNull(v.sampleFeeCny),
    leadTimeDays: asNumberOrNull(v.leadTimeDays),
    qcFocus: asString(v.qcFocus),
    verificationStatus: pick(v.verificationStatus, VERIFY, "unverified"),
  };
}

function normalizeSku(v: unknown, index: number): Sku | null {
  if (!isRecord(v)) return null;
  const id = asString(v.id, `sku-${index}`);
  const name = asString(v.name, `未命名SKU-${index + 1}`);
  const confirmedFields = asArray(v.confirmedFields)
    .map((x) => asString(x))
    .filter((x): x is CompletenessFieldKey =>
      COMPLETENESS_FIELDS.some((f) => f.key === x),
    );

  const breakdown = normalizeBreakdown(v.opportunityBreakdown);
  const evidenceBreakdown = normalizeEvidence(v.evidenceBreakdown);
  const computedOpp = computeOpportunityFromBreakdown(breakdown);
  const computedEv = computeEvidenceFromBreakdown(evidenceBreakdown);

  return {
    id,
    name,
    englishName: asString(v.englishName),
    status: pick(v.status, STATUSES, "WATCH"),
    category: pick(v.category, CATEGORIES, "other"),
    channels: asArray(v.channels)
      .map((c) => pickOrNull(c, CHANNELS))
      .filter((c): c is Channel => c !== null),
    markets: asArray(v.markets)
      .map((m) => pickOrNull(m, MARKETS))
      .filter((m): m is Market => m !== null),
    rank: asNumberOrNull(v.rank),
    rankChange: asNumberOrNull(v.rankChange),
    legacyScore: asNumberOrNull(v.legacyScore),
    opportunityScore: breakdown ? computedOpp : asNumberOrNull(v.opportunityScore),
    evidenceConfidence: evidenceBreakdown ? computedEv : asNumberOrNull(v.evidenceConfidence),
    dataCompleteness: computeCompleteness(confirmedFields),
    opportunityBreakdown: breakdown,
    evidenceBreakdown,
    advantages: asArray(v.advantages)
      .map(normalizeAdvantage)
      .filter((x): x is Advantage => x !== null),
    risks: asArray(v.risks)
      .map(normalizeRisk)
      .filter((x): x is Risk => x !== null),
    knownFacts: asArray(v.knownFacts).map((x) => asString(x)).filter(Boolean),
    pendingVerifications: asArray(v.pendingVerifications)
      .map((x) => asString(x))
      .filter(Boolean),
    uaeDemand: asStringOrNull(v.uaeDemand),
    saudiDemand: asStringOrNull(v.saudiDemand),
    currentPriceAed: asNumberOrNull(v.currentPriceAed),
    currentPriceSar: asNumberOrNull(v.currentPriceSar),
    chinaCostCny: asNumberOrNull(v.chinaCostCny),
    moq: asNumberOrNull(v.moq),
    weightG: asNumberOrNull(v.weightG),
    dimensions: asStringOrNull(v.dimensions),
    amazonCategory: asStringOrNull(v.amazonCategory),
    amazonCommissionPct: asNumberOrNull(v.amazonCommissionPct),
    fbaFeeAed: asNumberOrNull(v.fbaFeeAed),
    inboundCostAed: asNumberOrNull(v.inboundCostAed),
    adSpendAssumptionPct: asNumberOrNull(v.adSpendAssumptionPct),
    returnAssumptionPct: asNumberOrNull(v.returnAssumptionPct),
    contributionProfitAed: asNumberOrNull(v.contributionProfitAed),
    contributionMarginPct: asNumberOrNull(v.contributionMarginPct),
    worstLoss100Aed: asNumberOrNull(v.worstLoss100Aed),
    suppliers: asArray(v.suppliers)
      .map((s) => normalizeSupplier(s, id))
      .filter((x): x is Supplier => x !== null),
    tianjinHebeiAdvantage: asStringOrNull(v.tianjinHebeiAdvantage),
    nextAction: asStringOrNull(v.nextAction),
    githubIssue: asStringOrNull(v.githubIssue),
    evidenceLinks: asArray(v.evidenceLinks)
      .map((x) => {
        if (typeof x === "string") return { title: x, url: x };
        if (!isRecord(x)) return null;
        const url = asString(x.url);
        if (!url) return null;
        return { title: asString(x.title, url), url };
      })
      .filter((x): x is EvidenceLink => x !== null),
    hasRepurchase: v.hasRepurchase === true,
    isStrategicAsset: v.isStrategicAsset === true,
    rankingHistory: asArray(v.rankingHistory)
      .map((x) => {
        if (!isRecord(x)) return null;
        const date = asString(x.date);
        const rank = asNumberOrNull(x.rank);
        if (!date || rank === null) return null;
        return { date, rank };
      })
      .filter((x): x is RankPoint => x !== null),
    confirmedFields,
    complianceNote: asStringOrNull(v.complianceNote),
    realNegativeReviews: asStringOrNull(v.realNegativeReviews),
  };
}

function normalizeSession(v: unknown): DailySession | null {
  if (!isRecord(v)) return null;
  const time = TIMES.includes(v.time as (typeof TIMES)[number])
    ? (v.time as (typeof TIMES)[number])
    : "08:00";
  const mapChange = (x: unknown): ScoreChange | null => {
    if (!isRecord(x)) return null;
    return {
      skuId: asString(x.skuId),
      skuName: asString(x.skuName),
      dimension: asString(x.dimension),
      subItem: asString(x.subItem),
      oldScore: asNumberOrNull(x.oldScore),
      newScore: asNumberOrNull(x.newScore),
      reason: asString(x.reason),
    };
  };
  const mapSimple = (x: unknown): SimpleChange | null => {
    if (!isRecord(x)) return null;
    return {
      skuId: asString(x.skuId),
      skuName: asString(x.skuName),
      old: asNumberOrNull(x.old),
      new: asNumberOrNull(x.new),
    };
  };
  return {
    time,
    newEvidence: asArray(v.newEvidence).map((x) => asString(x)).filter(Boolean),
    newSkus: asArray(v.newSkus).map((x) => asString(x)).filter(Boolean),
    droppedSkus: asArray(v.droppedSkus).map((x) => asString(x)).filter(Boolean),
    scoreChanges: asArray(v.scoreChanges)
      .map(mapChange)
      .filter((x): x is ScoreChange => x !== null),
    confidenceChanges: asArray(v.confidenceChanges)
      .map(mapSimple)
      .filter((x): x is SimpleChange => x !== null),
    completenessChanges: asArray(v.completenessChanges)
      .map(mapSimple)
      .filter((x): x is SimpleChange => x !== null),
    rankChanges: asArray(v.rankChanges)
      .map((x) => {
        if (!isRecord(x)) return null;
        return {
          skuId: asString(x.skuId),
          skuName: asString(x.skuName),
          oldRank: asNumberOrNull(x.oldRank),
          newRank: asNumberOrNull(x.newRank),
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null),
  };
}

function normalizeDaily(v: unknown): DailyRadar | null {
  if (!isRecord(v)) return null;
  const date = asString(v.date);
  if (!date) return null;
  return {
    date,
    sessions: asArray(v.sessions)
      .map(normalizeSession)
      .filter((x): x is DailySession => x !== null),
  };
}

function normalizeLog(v: unknown, i: number): DecisionLogEntry | null {
  if (!isRecord(v)) return null;
  return {
    id: asString(v.id, `log-${i}`),
    date: asString(v.date),
    model: asString(v.model, "未注明模型"),
    skuId: asString(v.skuId),
    skuName: asString(v.skuName),
    oldScore: asNumberOrNull(v.oldScore),
    newScore: asNumberOrNull(v.newScore),
    changedItems: asArray(v.changedItems)
      .map((x) => {
        if (!isRecord(x)) return null;
        return {
          item: asString(x.item),
          oldVal: asNumberOrNull(x.oldVal),
          newVal: asNumberOrNull(x.newVal),
        };
      })
      .filter((x): x is ChangedItem => x !== null),
    reason: asString(v.reason),
    newEvidence: asArray(v.newEvidence).map((x) => asString(x)).filter(Boolean),
    oldRank: asNumberOrNull(v.oldRank),
    newRank: asNumberOrNull(v.newRank),
    oldStatus: pickOrNull(v.oldStatus, STATUSES),
    newStatus: pickOrNull(v.newStatus, STATUSES),
    statusReason: asString(v.statusReason),
  };
}

function normalizeHanlin(v: unknown): HanlinMask {
  const r = isRecord(v) ? v : {};
  return {
    salesRightsStatus: asString(r.salesRightsStatus, "待验证"),
    gccDemand: asString(r.gccDemand, "待验证"),
    uaeMarket: asString(r.uaeMarket, "待验证"),
    saudiMarket: asString(r.saudiMarket, "待验证"),
    benchmarkSkus: asArray(r.benchmarkSkus)
      .map((x) => {
        if (!isRecord(x)) return null;
        return {
          name: asString(x.name),
          platform: asString(x.platform),
          price: asString(x.price),
          notes: asString(x.notes),
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null && !!x.name),
    skuMatchScore: asNumberOrNull(r.skuMatchScore),
    complianceReadiness: asNumberOrNull(r.complianceReadiness),
    channelReadiness: asNumberOrNull(r.channelReadiness),
    profitReadiness: asNumberOrNull(r.profitReadiness),
    evidenceConfidence: asNumberOrNull(r.evidenceConfidence),
    launchReady: r.launchReady === true,
    launchBlockers: asArray(r.launchBlockers)
      .map((x) => asString(x))
      .filter(Boolean),
    notes: asString(r.notes),
    nextAction: asString(r.nextAction, "待验证"),
  };
}

function normalizeMeta(v: unknown): ProjectMeta {
  const r = isRecord(v) ? v : {};
  return {
    name: asString(r.name, "ChinaGCC"),
    status: asString(r.status, "研究推进中"),
    thirtyDayJudgment: asString(r.thirtyDayJudgment, "待验证"),
    overallConfidence: asNumberOrNull(r.overallConfidence),
    lastUpdated: asString(r.lastUpdated, new Date().toISOString()),
    lastSynced: asStringOrNull(r.lastSynced),
  };
}

export function normalizeData(raw: unknown): ChinaGCCData {
  const r = isRecord(raw) ? raw : {};
  const skus = asArray(r.skus)
    .map((s, i) => normalizeSku(s, i))
    .filter((x): x is Sku => x !== null);

  return {
    version: asString(r.version, "2.0.0"),
    meta: normalizeMeta(r.meta),
    skus,
    dailyRadar: asArray(r.dailyRadar)
      .map(normalizeDaily)
      .filter((x): x is DailyRadar => x !== null)
      .sort((a, b) => (a.date < b.date ? 1 : -1)),
    decisionLog: asArray(r.decisionLog)
      .map(normalizeLog)
      .filter((x): x is DecisionLogEntry => x !== null)
      .sort((a, b) => (a.date < b.date ? 1 : -1)),
    hanlinMask: normalizeHanlin(r.hanlinMask),
  };
}

export function isChinaGCCData(raw: unknown): raw is ChinaGCCData {
  if (!isRecord(raw)) return false;
  return Array.isArray(raw.skus);
}

export function loadDefaultData(): ChinaGCCData {
  return normalizeData(defaultRaw);
}

export function loadLocalData(): ChinaGCCData | null {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isChinaGCCData(parsed)) return null;
    return normalizeData(parsed);
  } catch {
    return null;
  }
}

export function saveLocalData(data: ChinaGCCData) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  localStorage.setItem(SOURCE_KEY, "local");
}

export function clearLocalData() {
  localStorage.removeItem(LOCAL_KEY);
  localStorage.removeItem(SOURCE_KEY);
}

export function parseImportedJson(text: string): ChinaGCCData {
  const parsed: unknown = JSON.parse(text);
  if (!isChinaGCCData(parsed)) {
    throw new Error("JSON 缺少 skus 数组，无法导入。");
  }
  return normalizeData(parsed);
}
