import { COMPLETENESS_FIELDS, DIMENSION_META, EVIDENCE_META } from "./data";
import type {
  CompletenessFieldKey,
  EvidenceConfidenceBreakdown,
  OpportunitySubScores,
  PairwiseInsight,
  SampleGateResult,
  Sku,
} from "../types";
import { getHardStops, getSevereOpenRisks, getTopRisks, riskValue } from "./risk";

export type SubKey = keyof OpportunitySubScores;

export function sumNullable(values: Array<number | null | undefined>): number | null {
  const nums = values.filter((v): v is number => typeof v === "number" && !Number.isNaN(v));
  if (nums.length === 0) return null;
  return nums.reduce((a, b) => a + b, 0);
}

export function computeOpportunityFromBreakdown(
  breakdown: OpportunitySubScores | null | undefined,
): number | null {
  if (!breakdown) return null;
  const values = DIMENSION_META.flatMap((d) => d.items.map((item) => breakdown[item.key as SubKey]));
  const valid = DIMENSION_META.every((d) => d.items.every((item) => {
    const value = breakdown[item.key as SubKey];
    return typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= item.max;
  }));
  if (!valid) return null;
  const total = sumNullable(values);
  return total === null ? null : Math.round(total);
}

export function computeEvidenceFromBreakdown(
  breakdown: EvidenceConfidenceBreakdown | null | undefined,
): number | null {
  if (!breakdown) return null;
  const values = EVIDENCE_META.map((m) => breakdown[m.key]);
  const valid = EVIDENCE_META.every((m) => {
    const value = breakdown[m.key];
    return typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= m.max;
  });
  if (!valid) return null;
  const total = sumNullable(values);
  return total === null ? null : Math.round(total);
}

export function computeCompleteness(confirmed: CompletenessFieldKey[] | undefined): number {
  const set = new Set(confirmed ?? []);
  const n = COMPLETENESS_FIELDS.filter((f) => set.has(f.key)).length;
  return Math.round((n / COMPLETENESS_FIELDS.length) * 100);
}

export function completenessCounts(confirmed: CompletenessFieldKey[] | undefined) {
  const set = new Set(confirmed ?? []);
  const confirmedN = COMPLETENESS_FIELDS.filter((f) => set.has(f.key)).length;
  return {
    confirmed: confirmedN,
    pending: COMPLETENESS_FIELDS.length - confirmedN,
    total: COMPLETENESS_FIELDS.length,
    pct: computeCompleteness(confirmed),
  };
}

export function resolveSkuScores(sku: Sku) {
  const opportunity =
    sku.opportunityBreakdown
      ? computeOpportunityFromBreakdown(sku.opportunityBreakdown)
      : sku.opportunityScore;
  const evidence =
    sku.evidenceBreakdown
      ? computeEvidenceFromBreakdown(sku.evidenceBreakdown)
      : sku.evidenceConfidence;
  const completeness = computeCompleteness(sku.confirmedFields);
  return { opportunity, evidence, completeness };
}

export function dimensionTotal(
  breakdown: OpportunitySubScores | null | undefined,
  dimKey: string,
): number | null {
  if (!breakdown) return null;
  const dim = DIMENSION_META.find((d) => d.key === dimKey);
  if (!dim) return null;
  return sumNullable(dim.items.map((i) => breakdown[i.key as SubKey]));
}

export function getSampleGate(sku: Sku): SampleGateResult {
  const { opportunity, evidence, completeness } = resolveSkuScores(sku);
  const reasons: string[] = [];

  if (opportunity === null) {
    reasons.push("商业机会分尚未完成V2重评");
  } else if (opportunity < 80) {
    reasons.push(`商业机会分 ${opportunity} < 80`);
  }

  if (evidence === null) {
    reasons.push("证据置信度尚未完成V2重评");
  } else if (evidence < 70) {
    reasons.push(`证据置信度 ${evidence} < 70`);
  }

  if (completeness < 75) {
    reasons.push(`数据完整度 ${completeness} < 75`);
  }

  const hardStops = getHardStops(sku);
  for (const r of hardStops) {
    reasons.push(`存在 硬性阻断：${r.name}`);
  }

  const severe = getSevereOpenRisks(sku);
  for (const r of severe) {
    reasons.push(`存在尚未解决的严重风险：${r.name}（风险值 ${riskValue(r)}）`);
  }

  return { allowed: reasons.length === 0, reasons };
}

export function getTopAdvantage(sku: Sku) {
  if (!sku.advantages || sku.advantages.length === 0) return null;
  return [...sku.advantages].sort((a, b) => b.impactLevel - a.impactLevel)[0];
}

export function getMaxRisk(sku: Sku) {
  const top = getTopRisks(sku, 1);
  return top[0] ?? null;
}

export function allSubItemRows(sku: Sku) {
  if (!sku.opportunityBreakdown) return [];
  return DIMENSION_META.flatMap((d) =>
    d.items.map((item) => ({
      dimKey: d.key,
      dimName: d.name,
      key: item.key,
      name: `${item.key} ${item.name}`,
      shortName: item.name,
      value: sku.opportunityBreakdown![item.key as SubKey],
      max: item.max,
    })),
  );
}

export function pairwiseInsights(left: Sku, right: Sku): PairwiseInsight {
  const leftRows = allSubItemRows(left);
  const rightMap = new Map(allSubItemRows(right).map((r) => [r.key, r]));
  const diffs: {
    item: string;
    diff: number;
    left: number | null;
    right: number | null;
  }[] = [];

  for (const row of leftRows) {
    const other = rightMap.get(row.key);
    if (!other) continue;
    if (row.value === null || other.value === null) continue;
    diffs.push({
      item: `${row.key} ${row.shortName}`,
      diff: row.value - other.value,
      left: row.value,
      right: other.value,
    });
  }

  const advantages = [...diffs].filter((d) => d.diff > 0).sort((a, b) => b.diff - a.diff).slice(0, 3);
  const disadvantages = [...diffs].filter((d) => d.diff < 0).sort((a, b) => a.diff - b.diff).slice(0, 3);

  return {
    leftId: left.id,
    leftName: left.name,
    rightId: right.id,
    rightName: right.name,
    advantages,
    disadvantages,
  };
}

export function scoreTone(score: number | null): "high" | "mid" | "low" | "none" {
  if (score === null) return "none";
  if (score >= 80) return "high";
  if (score >= 65) return "mid";
  return "low";
}
