import { useMemo, useState } from "react";
import { useData } from "../context/DataContext";
import { formatNumber } from "../lib/data";
import { EmptyState, SectionCard } from "../components/common/SectionCard";
import { PageTitle } from "../components/layout/AppShell";
import type { DailyRadar, DailySession } from "../types";

const TIMES = ["08:00", "14:00", "20:00", "22:00"] as const;

function SessionBody({ session }: { session: DailySession }) {
  const empty =
    session.newEvidence.length === 0 &&
    session.newSkus.length === 0 &&
    session.droppedSkus.length === 0 &&
    session.scoreChanges.length === 0 &&
    session.confidenceChanges.length === 0 &&
    session.completenessChanges.length === 0 &&
    session.rankChanges.length === 0;
  if (empty) {
    return <div className="text-[12px] text-slate-600">本轮无变更。</div>;
  }
  return (
    <div className="space-y-2 text-[12px]">
      {session.newEvidence.length > 0 ? (
        <div>
          <div className="text-slate-500">新增证据</div>
          <ul className="list-disc pl-4 text-slate-200">
            {session.newEvidence.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {session.newSkus.length > 0 ? (
        <div>
          <div className="text-slate-500">新 SKU</div>
          <div className="text-emerald-200">{session.newSkus.join("、")}</div>
        </div>
      ) : null}
      {session.droppedSkus.length > 0 ? (
        <div>
          <div className="text-slate-500">被淘汰 SKU</div>
          <div className="text-rose-200">{session.droppedSkus.join("、")}</div>
        </div>
      ) : null}
      {session.scoreChanges.map((c) => (
        <div key={`${c.skuId}-${c.subItem}-${c.oldScore}-${c.newScore}`} className="rounded border border-slate-800 p-2">
          <div className="text-amber-200">
            {c.skuName}
            {c.subItem}：{c.oldScore ?? "—"}→{c.newScore ?? "—"}
          </div>
          <div className="mt-0.5 text-slate-400">原因：{c.reason}</div>
          <div className="text-slate-600">{c.dimension}</div>
        </div>
      ))}
      {session.confidenceChanges.map((c) => (
        <div key={`c-${c.skuId}`} className="text-slate-300">
          {c.skuName} 证据置信度：{formatNumber(c.old)}→{formatNumber(c.new)}
        </div>
      ))}
      {session.completenessChanges.map((c) => (
        <div key={`p-${c.skuId}`} className="text-slate-300">
          {c.skuName} 数据完整度：{formatNumber(c.old)}→{formatNumber(c.new)}
        </div>
      ))}
      {session.rankChanges.map((c) => (
        <div key={`r-${c.skuId}`} className="text-slate-300">
          {c.skuName} 排名：{c.oldRank ?? "—"}→{c.newRank ?? "—"}
        </div>
      ))}
    </div>
  );
}

export default function DailyRadarPage() {
  const { data } = useData();
  const dates = data.dailyRadar.map((d) => d.date);
  const [date, setDate] = useState(dates[0] ?? "");
  const day: DailyRadar | undefined = useMemo(
    () => data.dailyRadar.find((d) => d.date === date) ?? data.dailyRadar[0],
    [data.dailyRadar, date],
  );

  return (
    <div className="space-y-3">
      <PageTitle title="每日雷达" desc="08:00 / 14:00 / 20:00 / 22:00 复盘。展示子项原分→新分与原因，不只写“+2分”。" />
      <div className="flex flex-wrap gap-2">
        {dates.length === 0 ? (
          <span className="text-sm text-slate-500">暂无每日雷达数据</span>
        ) : (
          dates.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDate(d)}
              className={`rounded border px-2 py-1 text-[12px] ${
                day?.date === d
                  ? "border-amber-400/50 bg-amber-400/10 text-amber-200"
                  : "border-slate-700 text-slate-400"
              }`}
            >
              {d}
            </button>
          ))
        )}
      </div>
      {!day ? (
        <EmptyState text="暂无每日复盘。" />
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {TIMES.map((t) => {
            const session = day.sessions.find((s) => s.time === t);
            return (
              <SectionCard key={t} title={`${day.date} ${t}`}>
                {session ? <SessionBody session={session} /> : <div className="text-[12px] text-slate-600">本轮无记录。</div>}
              </SectionCard>
            );
          })}
        </div>
      )}
    </div>
  );
}
