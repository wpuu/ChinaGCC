import { STATUS_LABEL } from "../../lib/data";
import type { SkuStatus } from "../../types";
import { cn } from "../../utils/cn";

const TONE: Record<SkuStatus, string> = {
  NEW: "border-violet-500/40 bg-violet-500/15 text-violet-200",
  P1: "border-emerald-500/40 bg-emerald-500/15 text-emerald-200",
  P1_CONDITIONAL: "border-teal-500/40 bg-teal-500/15 text-teal-200",
  P2: "border-sky-500/40 bg-sky-500/15 text-sky-200",
  WATCH: "border-amber-500/40 bg-amber-500/15 text-amber-200",
  DROP: "border-rose-500/40 bg-rose-500/15 text-rose-200",
};

export function StatusBadge({
  status,
  className,
}: {
  status: SkuStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-1.5 py-0.5 text-[11px] font-medium tracking-wide",
        TONE[status],
        className,
      )}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}
