import { PENDING } from "../../lib/data";
import { cn } from "../../utils/cn";

export function FieldValue({
  label,
  value,
  mono = false,
  className,
}: {
  label: string;
  value: string | number | null | undefined;
  mono?: boolean;
  className?: string;
}) {
  const empty = value === null || value === undefined || value === "";
  return (
    <div className={cn("min-w-0", className)}>
      <div className="text-[11px] text-slate-500">{label}</div>
      <div
        className={cn(
          "mt-0.5 text-sm leading-6",
          empty ? "text-slate-600" : "text-slate-100",
          mono && "score-num",
        )}
      >
        {empty ? PENDING : value}
      </div>
    </div>
  );
}

export function PendingText({ text }: { text?: string | null }) {
  if (!text) return <span className="text-slate-600">{PENDING}</span>;
  return <span>{text}</span>;
}
