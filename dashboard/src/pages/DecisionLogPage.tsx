import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import { STATUS_LABEL, formatDateTime, formatNumber } from "../lib/data";
import { EmptyState, SectionCard } from "../components/common/SectionCard";
import { PageTitle } from "../components/layout/AppShell";

export default function DecisionLogPage() {
  const { data } = useData();
  const logs = data.decisionLog;

  return (
    <div className="space-y-3">
      <PageTitle title="决策记录" desc="每一次分数、子项、排名与状态变化都必须留下原因和新证据。" />
      {logs.length === 0 ? (
        <EmptyState text="暂无决策记录。" />
      ) : (
        <div className="space-y-2">
          {logs.map((log) => (
            <SectionCard
              key={log.id}
              title={`${formatDateTime(log.date)} · ${log.skuName}`}
              extra={<span className="text-[11px] text-slate-500">{log.model}</span>}
            >
              <div className="grid gap-2 text-[12px] md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <div className="text-slate-500">SKU</div>
                  {log.skuId ? (
                    <Link to={`/sku/${log.skuId}`} className="text-amber-200 hover:underline">
                      {log.skuName}
                    </Link>
                  ) : (
                    log.skuName
                  )}
                </div>
                <div>
                  <div className="text-slate-500">商业机会分</div>
                  <div className="score-num text-slate-100">
                    {formatNumber(log.oldScore)} → {formatNumber(log.newScore)}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500">排名</div>
                  <div className="score-num text-slate-100">
                    {log.oldRank ?? "—"} → {log.newRank ?? "—"}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500">状态</div>
                  <div className="text-slate-100">
                    {log.oldStatus ? STATUS_LABEL[log.oldStatus] : "—"} →{" "}
                    {log.newStatus ? STATUS_LABEL[log.newStatus] : "—"}
                  </div>
                </div>
              </div>
              {log.changedItems.length > 0 ? (
                <div className="mt-2 text-[12px]">
                  <div className="text-slate-500">哪些子项改变</div>
                  <ul className="mt-1 space-y-0.5 text-slate-200">
                    {log.changedItems.map((c) => (
                      <li key={c.item}>
                        {c.item}：{c.oldVal ?? "—"}→{c.newVal ?? "—"}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mt-2 text-[12px] text-slate-500">子项分未变，变更在置信度/完整度/状态。</div>
              )}
              <div className="mt-2 text-[12px] text-slate-300">
                <span className="text-slate-500">为什么改变：</span>
                {log.reason}
              </div>
              {log.newEvidence.length > 0 ? (
                <div className="mt-1 text-[12px]">
                  <div className="text-slate-500">新证据</div>
                  <ul className="list-disc pl-4 text-slate-300">
                    {log.newEvidence.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {log.statusReason ? (
                <div className="mt-2 rounded border border-slate-800 bg-slate-950/40 px-2 py-1.5 text-[12px] text-amber-100/90">
                  {log.statusReason}
                </div>
              ) : null}
            </SectionCard>
          ))}
        </div>
      )}
    </div>
  );
}
