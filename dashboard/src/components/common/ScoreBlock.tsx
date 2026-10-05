import { WAITING_V2 } from "../../lib/data";
import { scoreTone } from "../../lib/scoring";
import { cn } from "../../utils/cn";

const TONE = {
  high: "text-emerald-300",
  mid: "text-amber-300",
  low: "text-rose-300",
  none: "text-slate-500",
};

export function ScoreBlock({
  label,
  value,
  sub,
  size = "md",
}: {
  label: string;
  value: number | null;
  sub?: string;
  size?: "sm" | "md" | "lg";
}) {
  const tone = scoreTone(value);
  const numClass =
    size === "lg" ? "text-4xl" : size === "sm" ? "text-xl" : "text-3xl";
  return (
    <div className="min-w-0">
      <div className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
        {label}
      </div>
      <div className={cn("score-num mt-1 font-semibold leading-none", numClass, TONE[tone])}>
        {value === null ? WAITING_V2 : value}
      </div>
      {sub ? <div className="mt-1 text-[11px] text-slate-500">{sub}</div> : null}
    </div>
  );
}

export function MiniScore({
  label,
  value,
}: {
  label: string;
  value: number | null;
}) {
  const tone = scoreTone(value);
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span className="text-[11px] text-slate-500">{label}</span>
      <span className={cn("score-num text-sm font-semibold", TONE[tone])}>
        {value === null ? "—" : value}
      </span>
    </div>
  );
}

export function ScoreBar({
  value,
  max = 100,
  tone,
}: {
  value: number | null;
  max?: number;
  tone?: "cyan" | "amber" | "emerald" | "rose";
}) {
  const pct = value === null ? 0 : Math.max(0, Math.min(100, (value / max) * 100));
  const color =
    tone === "cyan"
      ? "bg-cyan-400"
      : tone === "amber"
        ? "bg-amber-400"
        : tone === "rose"
          ? "bg-rose-400"
          : "bg-emerald-400";
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
      <div className={cn("h-full rounded-full", color)} style={{ width: `${pct}%` }} />
    </div>
  );
}
