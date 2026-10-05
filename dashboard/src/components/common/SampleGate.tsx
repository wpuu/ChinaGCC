import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { getSampleGate } from "../../lib/scoring";
import type { Sku } from "../../types";

export function SampleGate({ sku }: { sku: Sku }) {
  const gate = getSampleGate(sku);
  if (gate.allowed) {
    return (
      <div className="flex items-start gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
        <div>
          <div className="font-semibold">可以进入样品验证</div>
          <div className="mt-0.5 text-xs text-emerald-300/80">
            商业机会分、证据置信度、数据完整度均过线，且无 硬性阻断 与未解决严重风险。
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-100">
      <div className="flex items-start gap-2">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        <div className="font-semibold">暂不允许进入样品验证</div>
      </div>
      <ul className="mt-2 space-y-1 pl-6 text-xs text-amber-100/80">
        {gate.reasons.map((r) => (
          <li key={r} className="list-disc">
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SampleGateChip({ sku }: { sku: Sku }) {
  const gate = getSampleGate(sku);
  if (gate.allowed) {
    return (
      <span className="inline-flex rounded border border-emerald-500/40 bg-emerald-500/15 px-1.5 py-0.5 text-[11px] text-emerald-200">
        可取样
      </span>
    );
  }
  return (
    <span className="inline-flex rounded border border-slate-700 bg-slate-800/80 px-1.5 py-0.5 text-[11px] text-slate-400">
      不可取样
    </span>
  );
}
