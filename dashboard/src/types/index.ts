export type SkuStatus =
  | "NEW"
  | "P1"
  | "P1_CONDITIONAL"
  | "P2"
  | "WATCH"
  | "DROP";

export type VerificationStatus = "verified" | "partial" | "unverified";
export type Persistence = "short" | "medium" | "long";
export type MitigationCost = "low" | "medium" | "high";
export type MitigationState = "yes" | "no" | "unknown";
export type DataSourceType = "github" | "local" | "default";
export type Market = "UAE" | "Saudi" | "GCC";
export type Category =
  | "beauty"
  | "auto"
  | "travel"
  | "cleaning"
  | "hotel"
  | "other";
export type Channel = "B2C" | "B2B";
export type SupplierRegion = "tianjin" | "hebei" | "north-china" | "national";
export type RadarTime = "08:00" | "14:00" | "20:00" | "22:00";

export type CompletenessFieldKey =
  | "gccSalesEvidence"
  | "gccPrice"
  | "competition"
  | "chinaCost"
  | "moq"
  | "weight"
  | "dimensions"
  | "amazonCategory"
  | "platformCommission"
  | "fbaFee"
  | "inboundCost"
  | "adSpend"
  | "returnRate"
  | "contributionProfit"
  | "worstLoss100"
  | "compliance"
  | "supplierCount"
  | "realNegativeReviews"
  | "nextAction";

export interface OpportunitySubScores {
  A1: number | null;
  A2: number | null;
  A3: number | null;
  A4: number | null;
  A5: number | null;
  B1: number | null;
  B2: number | null;
  B3: number | null;
  B4: number | null;
  B5: number | null;
  C1: number | null;
  C2: number | null;
  C3: number | null;
  C4: number | null;
  D1: number | null;
  D2: number | null;
  D3: number | null;
  D4: number | null;
  E1: number | null;
  E2: number | null;
  E3: number | null;
  E4: number | null;
  F1: number | null;
  F2: number | null;
  F3: number | null;
  F4: number | null;
  G1: number | null;
  G2: number | null;
  G3: number | null;
  H1: number | null;
  H2: number | null;
  H3: number | null;
  I1: number | null;
  I2: number | null;
  I3: number | null;
  J1: number | null;
  J2: number | null;
  J3: number | null;
  J4: number | null;
  K1: number | null;
  K2: number | null;
}

export interface EvidenceConfidenceBreakdown {
  officialSourceRatio: number | null;
  transactionEvidenceQuality: number | null;
  sourceDiversity: number | null;
  dataFreshness: number | null;
  chinaSupplyVerification: number | null;
  unknownResolvedRate: number | null;
}

export interface Advantage {
  name: string;
  evidence: string;
  businessImpact: string;
  impactLevel: number;
  persistence: Persistence;
  isOwnerAdvantage: boolean;
  verificationStatus: VerificationStatus;
  evidenceLinks: string[];
}

export interface Risk {
  name: string;
  evidence: string;
  probability: number;
  impact: number;
  isHardStop: boolean;
  canMitigate: MitigationState;
  mitigation: string;
  mitigationCost: MitigationCost;
  residualRisk: number | null;
  mitigationVerified: boolean;
  source: string;
}

export interface Supplier {
  id: string;
  name: string;
  region: SupplierRegion;
  location: string;
  skuId: string;
  moq: number | null;
  priceCny: number | null;
  weightG: number | null;
  dimensions: string | null;
  material: string | null;
  inStock: boolean | null;
  customizable: boolean | null;
  sampleFeeCny: number | null;
  leadTimeDays: number | null;
  qcFocus: string;
  verificationStatus: VerificationStatus;
}

export interface EvidenceLink {
  title: string;
  url: string;
}

export interface RankPoint {
  date: string;
  rank: number;
}

export interface Sku {
  id: string;
  name: string;
  englishName: string;
  status: SkuStatus;
  category: Category;
  channels: Channel[];
  markets: Market[];
  rank: number | null;
  rankChange: number | null;
  legacyScore: number | null;
  opportunityScore: number | null;
  evidenceConfidence: number | null;
  dataCompleteness: number | null;
  opportunityBreakdown: OpportunitySubScores | null;
  evidenceBreakdown: EvidenceConfidenceBreakdown | null;
  advantages: Advantage[];
  risks: Risk[];
  knownFacts: string[];
  pendingVerifications: string[];
  uaeDemand: string | null;
  saudiDemand: string | null;
  currentPriceAed: number | null;
  currentPriceSar: number | null;
  chinaCostCny: number | null;
  moq: number | null;
  weightG: number | null;
  dimensions: string | null;
  amazonCategory: string | null;
  amazonCommissionPct: number | null;
  fbaFeeAed: number | null;
  inboundCostAed: number | null;
  adSpendAssumptionPct: number | null;
  returnAssumptionPct: number | null;
  contributionProfitAed: number | null;
  contributionMarginPct: number | null;
  worstLoss100Aed: number | null;
  suppliers: Supplier[];
  tianjinHebeiAdvantage: string | null;
  nextAction: string | null;
  githubIssue: string | null;
  evidenceLinks: EvidenceLink[];
  hasRepurchase: boolean;
  isStrategicAsset: boolean;
  rankingHistory: RankPoint[];
  confirmedFields: CompletenessFieldKey[];
  complianceNote: string | null;
  realNegativeReviews: string | null;
}

export interface ScoreChange {
  skuId: string;
  skuName: string;
  dimension: string;
  subItem: string;
  oldScore: number | null;
  newScore: number | null;
  reason: string;
}

export interface SimpleChange {
  skuId: string;
  skuName: string;
  old: number | null;
  new: number | null;
}

export interface RankChange {
  skuId: string;
  skuName: string;
  oldRank: number | null;
  newRank: number | null;
}

export interface DailySession {
  time: RadarTime;
  newEvidence: string[];
  newSkus: string[];
  droppedSkus: string[];
  scoreChanges: ScoreChange[];
  confidenceChanges: SimpleChange[];
  completenessChanges: SimpleChange[];
  rankChanges: RankChange[];
}

export interface DailyRadar {
  date: string;
  sessions: DailySession[];
}

export interface ChangedItem {
  item: string;
  oldVal: number | null;
  newVal: number | null;
}

export interface DecisionLogEntry {
  id: string;
  date: string;
  model: string;
  skuId: string;
  skuName: string;
  oldScore: number | null;
  newScore: number | null;
  changedItems: ChangedItem[];
  reason: string;
  newEvidence: string[];
  oldRank: number | null;
  newRank: number | null;
  oldStatus: SkuStatus | null;
  newStatus: SkuStatus | null;
  statusReason: string;
}

export interface BenchmarkSku {
  name: string;
  platform: string;
  price: string;
  notes: string;
}

export interface HanlinMask {
  salesRightsStatus: string;
  gccDemand: string;
  uaeMarket: string;
  saudiMarket: string;
  benchmarkSkus: BenchmarkSku[];
  skuMatchScore: number | null;
  complianceReadiness: number | null;
  channelReadiness: number | null;
  profitReadiness: number | null;
  evidenceConfidence: number | null;
  launchReady: boolean;
  launchBlockers: string[];
  notes: string;
  nextAction: string;
}

export interface ProjectMeta {
  name: string;
  status: string;
  thirtyDayJudgment: string;
  overallConfidence: number | null;
  lastUpdated: string;
  lastSynced: string | null;
}

export interface ChinaGCCData {
  version: string;
  meta: ProjectMeta;
  skus: Sku[];
  dailyRadar: DailyRadar[];
  decisionLog: DecisionLogEntry[];
  hanlinMask: HanlinMask;
}

export interface SampleGateResult {
  allowed: boolean;
  reasons: string[];
}

export interface PairwiseInsight {
  leftId: string;
  leftName: string;
  rightId: string;
  rightName: string;
  advantages: { item: string; diff: number; left: number | null; right: number | null }[];
  disadvantages: { item: string; diff: number; left: number | null; right: number | null }[];
}
