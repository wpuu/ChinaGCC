import { Link } from "react-router-dom";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useData } from "../context/DataContext";
import {
  formatMoney,
  formatPct,
  formatScore,
  rankChangeText,
} from "../lib/data";
import {
  getMaxRisk,
  getSampleGate,
  getTopAdvantage,
  resolveSkuScores,
} from "../lib/scoring";
import { StatusBadge } from "../components/common/StatusBadge";
import { ScoreBlock } from "../components/common/ScoreBlock";
import { SectionCard } from "../components/common/SectionCard";
import { CountChip, PageTitle } from "../components/layout/AppShell";
import type { Sku } from "../types";

function RankDelta({ n }: { n: number | null }) {
  if (n === null || n === 0)
    return <span className="text-slate-500">持平</span>;
  if (n > 0) return <span className="text-emerald-300">↑{n}</span>;
  return <span className="text-rose-300">↓{Math.abs(n)}</span>;
}

function TopCard({ sku, index }: { sku: Sku; index: number }) {
  const scores = resolveSkuScores(sku);
  const adv = getTopAdvantage(sku);
  const risk = getMaxRisk(sku);
  const gate = getSampleGate(sku);
  return (
    <Link
      to={`/sku/${sku.id}`}
      className="block rounded-xl border border-slate-800 bg-[#0e1520] p-4 hover:border-amber-500/30 md:p-3"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-[11px] text-slate-500">排名 {sku.rank ?? "—"}</div>
          <div className="mt-1 text-base font-semibold text-slate-100 md:text-sm">{sku.name}</div>
        </div>
        <div className="flex items-center gap-1.5">
          <StatusBadge status={sku.status} />
          <span className="text-[11px]">
            <RankDelta n={sku.rankChange} />
          </span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <ScoreBlock label="商业机会分" value={scores.opportunity} size="sm" />
        <ScoreBlock label="证据置信度" value={scores.evidence} size="sm" />
        <ScoreBlock label="数据完整度" value={scores.completeness} size="sm" />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 md:mt-3 md:gap-2 md:text-[12px]">
        <div>
          <div className="text-slate-500">最大优点</div>
          <div className="truncate text-slate-200">{adv?.name ?? "待验证"}</div>
        </div>
        <div>
          <div className="text-slate-500">最大风险</div>
          <div className="truncate text-slate-200">{risk?.name ?? "待验证"}</div>
        </div>
        <div>
          <div className="text-slate-500">贡献利润</div>
          <div className="score-num text-slate-200">
            {formatMoney(sku.contributionProfitAed)}
          </div>
        </div>
        <div>
          <div className="text-slate-500">100件最坏亏损</div>
          <div className="score-num text-rose-200">
            {formatMoney(sku.worstLoss100Aed)}
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-800 pt-2 text-[12px]">
        <span className="min-w-0 text-sm leading-5 text-slate-400 md:truncate md:text-[12px]">下一步：{sku.nextAction ?? "待验证"}</span>
        {gate.allowed ? (
          <span className="shrink-0 text-emerald-300">可取样</span>
        ) : (
          <span className="shrink-0 text-slate-500">不可取样</span>
        )}
      </div>
      <div className="sr-only">{index}</div>
    </Link>
  );
}

export default function OverviewPage() {
  const { data, skus, toggleCompare, compareIds } = useData();
  const p1 = skus.filter((s) => s.status === "P1").length;
  const p1c = skus.filter((s) => s.status === "P1_CONDITIONAL").length;
  const p2 = skus.filter((s) => s.status === "P2").length;
  const watch = skus.filter((s) => s.status === "WATCH").length;
  const drop = skus.filter((s) => s.status === "DROP").length;
  const top3 = skus.slice(0, 3);
  const top10 = skus.slice(0, 10);

  const rankSeries = top3[0]?.rankingHistory.map((p) => ({
    date: p.date.slice(5),
    排名: p.rank,
  }));

  return (
    <div>
      <PageTitle title="总览" desc="每天查看 SKU 机会、评分、风险、供应链、利润与排名变化。" />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-2 lg:grid-cols-8">
        <div className="col-span-2 rounded-xl border border-slate-800 bg-[#0e1520] px-4 py-3 md:rounded md:px-3 md:py-2">
          <div className="text-[11px] text-slate-500">项目状态</div>
          <div className="text-sm font-medium text-amber-200">{data.meta.status}</div>
        </div>
        <div className="col-span-2 rounded-xl border border-slate-800 bg-[#0e1520] px-4 py-3 md:rounded md:px-3 md:py-2">
          <div className="text-[11px] text-slate-500">30天投入判断</div>
          <div className="line-clamp-2 text-[12px] text-slate-200">
            {data.meta.thirtyDayJudgment}
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#0e1520] px-4 py-3 md:rounded md:px-3 md:py-2">
          <div className="text-[11px] text-slate-500">当前置信度</div>
          <div className="score-num text-xl font-semibold text-slate-100">
            {data.meta.overallConfidence === null ? "待验证" : data.meta.overallConfidence}
          </div>
        </div>
        <CountChip label="P1" value={p1} />
        <CountChip label="P1条件型" value={p1c} />
        <CountChip label="P2" value={p2} />
        <CountChip label="观察" value={watch} />
        <div className="rounded-xl border border-slate-800 bg-[#0e1520] px-4 py-3 md:rounded md:px-3 md:py-2">
          <div className="text-[11px] text-slate-500">淘汰</div>
          <div className="score-num text-xl font-semibold text-rose-300">{drop}</div>
        </div>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        {top3.map((sku, i) => (
          <TopCard key={sku.id} sku={sku} index={i} />
        ))}
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        <SectionCard title="Top10 动态排名" className="lg:col-span-2">
          <div className="space-y-3 md:hidden">
            {top10.map((sku) => {
              const s = resolveSkuScores(sku);
              const adv = getTopAdvantage(sku);
              const risk = getMaxRisk(sku);
              return (
                <Link
                  key={sku.id}
                  to={`/sku/${sku.id}`}
                  className="block rounded-xl border border-slate-800 bg-slate-950/30 p-4 active:border-amber-500/40"
                >
                  <div className="flex items-start gap-3">
                    <div className="score-num flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-slate-200">
                      {sku.rank ?? "—"}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-base font-semibold text-slate-100">{sku.name}</div>
                        <StatusBadge status={sku.status} className="shrink-0" />
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        <RankDelta n={sku.rankChange} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-xs text-slate-500">商业机会</div>
                      <div className="score-num mt-1 text-xl font-semibold text-amber-300">{formatScore(s.opportunity)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">证据置信</div>
                      <div className="score-num mt-1 text-xl font-semibold text-emerald-300">{formatScore(s.evidence)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">数据完整</div>
                      <div className="score-num mt-1 text-xl font-semibold text-rose-300">{s.completeness}</div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
                    <div><span className="text-slate-500">最大优点：</span><span className="text-slate-200">{adv?.name ?? "待验证"}</span></div>
                    <div><span className="text-slate-500">最大风险：</span><span className="text-slate-200">{risk?.name ?? "待验证"}</span></div>
                    <div><span className="text-slate-500">下一步：</span><span className="text-slate-300">{sku.nextAction ?? "待验证"}</span></div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="hidden overflow-x-auto md:block">
            <table className="min-w-[920px] w-full text-left text-[12px]">
              <thead className="text-[11px] text-slate-500">
                <tr className="border-b border-slate-800">
                  <th className="px-1 py-1.5 font-medium">对比</th>
                  <th className="px-1 py-1.5 font-medium">排名</th>
                  <th className="px-1 py-1.5 font-medium">变化</th>
                  <th className="px-1 py-1.5 font-medium">SKU</th>
                  <th className="px-1 py-1.5 font-medium">商业机会分</th>
                  <th className="px-1 py-1.5 font-medium">证据置信度</th>
                  <th className="px-1 py-1.5 font-medium">完整度</th>
                  <th className="px-1 py-1.5 font-medium">状态</th>
                  <th className="px-1 py-1.5 font-medium">利润率</th>
                  <th className="px-1 py-1.5 font-medium">100件最坏亏损</th>
                  <th className="px-1 py-1.5 font-medium">最大优点</th>
                  <th className="px-1 py-1.5 font-medium">最大风险</th>
                  <th className="px-1 py-1.5 font-medium">下一步</th>
                </tr>
              </thead>
              <tbody>
                {top10.map((sku) => {
                  const s = resolveSkuScores(sku);
                  return (
                    <tr key={sku.id} className="border-b border-slate-800/80 hover:bg-slate-900/50">
                      <td className="px-1 py-1.5">
                        <input
                          type="checkbox"
                          checked={compareIds.includes(sku.id)}
                          onChange={() => toggleCompare(sku.id)}
                          aria-label={`选择对比 ${sku.name}`}
                        />
                      </td>
                      <td className="score-num px-1 py-1.5 text-slate-300">{sku.rank ?? "—"}</td>
                      <td className="px-1 py-1.5">
                        <RankDelta n={sku.rankChange} />
                      </td>
                      <td className="px-1 py-1.5">
                        <Link to={`/sku/${sku.id}`} className="text-amber-200 hover:underline">
                          {sku.name}
                        </Link>
                      </td>
                      <td className="score-num px-1 py-1.5">{formatScore(s.opportunity)}</td>
                      <td className="score-num px-1 py-1.5">{formatScore(s.evidence)}</td>
                      <td className="score-num px-1 py-1.5">{s.completeness}</td>
                      <td className="px-1 py-1.5">
                        <StatusBadge status={sku.status} />
                      </td>
                      <td className="score-num px-1 py-1.5">{formatPct(sku.contributionMarginPct)}</td>
                      <td className="score-num px-1 py-1.5 text-rose-200">
                        {formatMoney(sku.worstLoss100Aed, "AED", 0)}
                      </td>
                      <td className="max-w-[120px] truncate px-1 py-1.5 text-slate-300">
                        {getTopAdvantage(sku)?.name ?? "待验证"}
                      </td>
                      <td className="max-w-[120px] truncate px-1 py-1.5 text-slate-300">
                        {getMaxRisk(sku)?.name ?? "待验证"}
                      </td>
                      <td className="max-w-[160px] truncate px-1 py-1.5 text-slate-400">
                        {sku.nextAction ?? "待验证"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {compareIds.length > 0 ? (
            <div className="mt-2 text-[12px] text-slate-400">
              已选 {compareIds.length}/4，前往{" "}
              <Link to="/compare" className="text-amber-300 hover:underline">
                SKU对比
              </Link>
            </div>
          ) : null}
        </SectionCard>

        <SectionCard
          title="首位排名轨迹"
          extra={
            <span className="text-[11px] text-slate-500">{top3[0]?.name ?? "—"}</span>
          }
        >
          {rankSeries && rankSeries.length > 0 ? (
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={rankSeries}>
                  <XAxis dataKey="date" tick={{ fill: "#64748b", fontSize: 11 }} />
                  <YAxis
                    reversed
                    allowDecimals={false}
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    width={28}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#0e1520",
                      border: "1px solid #1e293b",
                      fontSize: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="排名"
                    stroke="#f5c14a"
                    fill="#f5c14a22"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="py-8 text-center text-sm text-slate-500">暂无排名历史</div>
          )}
          <div className="mt-2 text-[11px] text-slate-500">
            旧版临时分仅作对照，不拆成 V2 子项。变化文案：{top3[0] ? rankChangeText(top3[0].rankChange) : "—"}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}


