import { riskLevel, riskLevelLabel, riskValue } from "../../lib/risk";
import type { Risk } from "../../types";
import { cn } from "../../utils/cn";

const TONE = {
  low: "border-emerald-500/40 bg-emerald-500/15 text-emerald-200",
  mid: "border-amber-500/40 bg-amber-500/15 text-amber-200",
  high: "border-orange-500/40 bg-orange-500/15 text-orange-200",
  severe: "border-red-500/50 bg-red-500/20 text-red-200",
};

export function RiskBadge({ risk, value }: { risk?: Risk; value?: number }) {
  const v = value ?? (risk ? riskValue(risk) : 0);
  const lv = riskLevel(v);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded border px-1.5 py-0.5 text-[11px] font-medium",
        TONE[lv],
      )}
    >
      {riskLevelLabel(v)} {v}
    </span>
  );
}

export function HardStopTag() {
  return (
    <span className="inline-flex items-center rounded border border-red-500/60 bg-red-600/25 px-1.5 py-0.5 text-[11px] font-semibold text-red-200">
      硬性阻断
    </span>
  );
}
