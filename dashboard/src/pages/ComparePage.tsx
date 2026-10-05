import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import {
  DIMENSION_META,
  PENDING,
  WAITING_V2,
  formatMoney,
  formatNumber,
  formatPct,
  formatScore,
} from "../lib/data";
import { getHardStops, getTopRisks } from "../lib/risk";
import {
  dimensionTotal,
  getSampleGate,
  pairwiseInsights,
  resolveSkuScores,
  type SubKey,
} from "../lib/scoring";
import { EmptyState, SectionCard } from "../components/common/SectionCard";
import { StatusBadge } from "../components/common/StatusBadge";
import { PageTitle } from "../components/layout/AppShell";
import type { Sku } from "../types";

function cell(v: string) {
  return <td className="border-b border-slate-800 px-2 py-1.5 text-[12px]">{v}</td>;
}

export default function ComparePage() {
  const { skus, compareIds, toggleCompare, clearCompare } = useData();
  const selected = compareIds
    .map((id) => skus.find((s) => s.id === id))
    .filter((s): s is Sku => Boolean(s));

  const pairs =
    selected.length >= 2
      ? selected.slice(1).map((right) => pairwiseInsights(selected[0], right))
      : [];

  return (
    <div className="space-y-3">
      <PageTitle title="SKU对比" desc="最多选择 4 个 SKU。缺失字段显示待验证，不猜测。" />

      <SectionCard title="选择 SKU">
        <div className="flex flex-wrap gap-2">
          {skus.map((s) => {
            const on = compareIds.includes(s.id);
            const disabled = !on && compareIds.length >= 4;
            return (
              <button
                key={s.id}
                type="button"
                disabled={disabled}
                onClick={() => toggleCompare(s.id)}
                className={`rounded border px-2 py-1 text-[12px] ${
                  on
                    ? "border-amber-400/50 bg-amber-400/10 text-amber-200"
                    : "border-slate-700 text-slate-400 disabled:opacity-40"
                }`}
              >
                {s.name}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={clearCompare}
          className="mt-2 text-[12px] text-slate-500 hover:text-slate-300"
        >
          清空选择
        </button>
      </SectionCard>

      {selected.length === 0 ? (
        <EmptyState text="尚未选择 SKU。可从总览表勾选，或在上方点选，最多 4 个。" />
      ) : (
        <>
          <SectionCard title="核心对比">
            <div className="overflow-x-auto">
              <table className="min-w-[720px] w-full text-left">
                <thead>
                  <tr className="text-[11px] text-slate-500">
                    <th className="px-2 py-1.5">指标</th>
                    {selected.map((s) => (
                      <th key={s.id} className="px-2 py-1.5">
                        <Link to={`/sku/${s.id}`} className="text-amber-200 hover:underline">
                          {s.name}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  <tr>
                    {cell("状态")}
                    {selected.map((s) => (
                      <td key={s.id} className="border-b border-slate-800 px-2 py-1.5">
                        <StatusBadge status={s.status} />
                      </td>
                    ))}
                  </tr>
                  {[
                    ["商业机会分", (s: Sku) => formatScore(resolveSkuScores(s).opportunity)],
                    ["证据置信度", (s: Sku) => formatScore(resolveSkuScores(s).evidence)],
                    ["数据完整度", (s: Sku) => String(resolveSkuScores(s).completeness)],
                    ["旧版临时分", (s: Sku) => (s.legacyScore === null ? PENDING : String(s.legacyScore))],
                    ["MOQ", (s: Sku) => (s.moq === null ? PENDING : String(s.moq))],
                    ["重量 g", (s: Sku) => (s.weightG === null ? PENDING : String(s.weightG))],
                    ["FBA", (s: Sku) => formatMoney(s.fbaFeeAed)],
                    ["采购成本", (s: Sku) => (s.chinaCostCny === null ? PENDING : `CNY ${formatNumber(s.chinaCostCny, 2)}`)],
                    ["售价 AED", (s: Sku) => formatMoney(s.currentPriceAed)],
                    ["利润率", (s: Sku) => formatPct(s.contributionMarginPct)],
                    ["100件亏损", (s: Sku) => formatMoney(s.worstLoss100Aed, "AED", 0)],
                    ["复购", (s: Sku) => (s.hasRepurchase ? "有" : "弱/无")],
                    ["硬性阻断", (s: Sku) => {
                      const hs = getHardStops(s);
                      return hs.length === 0 ? "无" : hs.map((r) => r.name).join("；");
                    }],
                    ["样品准入", (s: Sku) => (getSampleGate(s).allowed ? "可以进入样品验证" : "暂不允许")],
                    ["最大风险", (s: Sku) => getTopRisks(s, 1)[0]?.name ?? PENDING],
                  ].map(([label, fn]) => (
                    <tr key={String(label)}>
                      {cell(String(label))}
                      {selected.map((s) => (
                        <td key={s.id} className="score-num border-b border-slate-800 px-2 py-1.5 text-[12px]">
                          {(fn as (s: Sku) => string)(s)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          <SectionCard title="11 大维度">
            <div className="overflow-x-auto">
              <table className="min-w-[720px] w-full text-left text-[12px]">
                <thead className="text-[11px] text-slate-500">
                  <tr>
                    <th className="px-2 py-1.5">维度</th>
                    {selected.map((s) => (
                      <th key={s.id} className="px-2 py-1.5">{s.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DIMENSION_META.map((d) => (
                    <tr key={d.key}>
                      <td className="border-b border-slate-800 px-2 py-1.5 text-slate-300">
                        {d.key} {d.name}
                      </td>
                      {selected.map((s) => {
                        const v = dimensionTotal(s.opportunityBreakdown, d.key);
                        return (
                          <td key={s.id} className="score-num border-b border-slate-800 px-2 py-1.5">
                            {v === null ? WAITING_V2 : `${v}/${d.max}`}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>

          <SectionCard title="30+ 子项">
            <div className="overflow-x-auto">
              <table className="min-w-[800px] w-full text-left text-[12px]">
                <thead className="text-[11px] text-slate-500">
                  <tr>
                    <th className="px-2 py-1.5">子项</th>
                    {selected.map((s) => (
                      <th key={s.id} className="px-2 py-1.5">{s.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DIMENSION_META.flatMap((d) =>
                    d.items.map((item) => (
                      <tr key={item.key}>
                        <td className="border-b border-slate-800 px-2 py-1.5 text-slate-400">
                          {item.key} {item.name}
                        </td>
                        {selected.map((s) => {
                          const v = s.opportunityBreakdown?.[item.key as SubKey] ?? null;
                          return (
                            <td key={s.id} className="score-num border-b border-slate-800 px-2 py-1.5">
                              {s.opportunityBreakdown ? (v === null ? PENDING : `${v}/${item.max}`) : WAITING_V2}
                            </td>
                          );
                        })}
                      </tr>
                    )),
                  )}
                </tbody>
              </table>
            </div>
          </SectionCard>

          <SectionCard title="相对优劣（以第一个选中 SKU 为 A）">
            {pairs.length === 0 ? (
              <EmptyState text="至少选择 2 个已完成 V2 重评的 SKU，才能计算相对优劣。" />
            ) : (
              <div className="space-y-3">
                {pairs.map((p) => (
                  <div key={p.rightId} className="rounded border border-slate-800 p-2">
                    <div className="text-sm text-slate-200">
                      {p.leftName} 相对 {p.rightName}
                    </div>
                    <div className="mt-2 grid gap-2 md:grid-cols-2">
                      <div>
                        <div className="text-[11px] text-emerald-300">A 相对 B 最大的 3 项优势</div>
                        {p.advantages.length === 0 ? (
                          <div className="text-[12px] text-slate-500">无（可能一方等待V2重评）</div>
                        ) : (
                          <ul className="mt-1 space-y-1 text-[12px] text-slate-300">
                            {p.advantages.map((a) => (
                              <li key={a.item}>
                                {a.item}：{a.left} vs {a.right}（+{a.diff}）
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div>
                        <div className="text-[11px] text-rose-300">A 相对 B 最大的 3 项劣势</div>
                        {p.disadvantages.length === 0 ? (
                          <div className="text-[12px] text-slate-500">无（可能一方等待V2重评）</div>
                        ) : (
                          <ul className="mt-1 space-y-1 text-[12px] text-slate-300">
                            {p.disadvantages.map((a) => (
                              <li key={a.item}>
                                {a.item}：{a.left} vs {a.right}（{a.diff}）
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </SectionCard>
        </>
      )}
    </div>
  );
}
