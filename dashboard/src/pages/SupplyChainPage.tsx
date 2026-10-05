import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import {
  PENDING,
  REGION_LABEL,
  VERIFY_LABEL,
  boolText,
  formatNumber,
} from "../lib/data";
import { EmptyState, SectionCard } from "../components/common/SectionCard";
import { PageTitle } from "../components/layout/AppShell";
import type { Supplier, SupplierRegion } from "../types";

const REGION_FILTER: Array<SupplierRegion | "all"> = [
  "all",
  "tianjin",
  "hebei",
  "north-china",
  "national",
];

export default function SupplyChainPage() {
  const { skus } = useData();
  const [skuId, setSkuId] = useState<string>("all");
  const [region, setRegion] = useState<SupplierRegion | "all">("all");

  const all: (Supplier & { skuName: string })[] = useMemo(() => {
    return skus.flatMap((s) => s.suppliers.map((p) => ({ ...p, skuName: s.name })));
  }, [skus]);

  const rows = all.filter((p) => {
    if (skuId !== "all" && p.skuId !== skuId) return false;
    if (region !== "all" && p.region !== region) return false;
    return true;
  });

  const grouped = REGION_FILTER.filter((r) => r !== "all").map((r) => ({
    region: r as SupplierRegion,
    count: rows.filter((x) => x.region === r).length,
  }));

  return (
    <div className="space-y-3">
      <PageTitle title="中国供应链" desc="按 SKU 查看天津、河北、华北、全国供应商。缺失字段显示待验证。" />

      <div className="flex flex-wrap gap-2">
        <select
          value={skuId}
          onChange={(e) => setSkuId(e.target.value)}
          className="rounded border border-slate-700 bg-slate-900 px-2 py-1 text-[12px] text-slate-200"
        >
          <option value="all">全部 SKU</option>
          {skus.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        {REGION_FILTER.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRegion(r)}
            className={`rounded border px-2 py-1 text-[12px] ${
              region === r
                ? "border-amber-400/50 bg-amber-400/10 text-amber-200"
                : "border-slate-700 text-slate-400"
            }`}
          >
            {r === "all" ? "全部地区" : REGION_LABEL[r]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {grouped.map((g) => (
          <div key={g.region} className="rounded border border-slate-800 bg-[#0e1520] px-3 py-2">
            <div className="text-[11px] text-slate-500">{REGION_LABEL[g.region]}</div>
            <div className="score-num text-xl text-slate-100">{g.count}</div>
          </div>
        ))}
      </div>

      <SectionCard title={`供应商 ${rows.length}`}>
        {rows.length === 0 ? (
          <EmptyState text="当前筛选下没有供应商。未确认的 SKU 不会编造工厂。" />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[1100px] w-full text-left text-[12px]">
              <thead className="text-[11px] text-slate-500">
                <tr className="border-b border-slate-800">
                  <th className="px-1 py-1.5 font-medium">SKU</th>
                  <th className="px-1 py-1.5 font-medium">供应商</th>
                  <th className="px-1 py-1.5 font-medium">地区</th>
                  <th className="px-1 py-1.5 font-medium">地点</th>
                  <th className="px-1 py-1.5 font-medium">MOQ</th>
                  <th className="px-1 py-1.5 font-medium">价格</th>
                  <th className="px-1 py-1.5 font-medium">重量</th>
                  <th className="px-1 py-1.5 font-medium">尺寸</th>
                  <th className="px-1 py-1.5 font-medium">材质</th>
                  <th className="px-1 py-1.5 font-medium">现货</th>
                  <th className="px-1 py-1.5 font-medium">定制</th>
                  <th className="px-1 py-1.5 font-medium">样品费</th>
                  <th className="px-1 py-1.5 font-medium">交期</th>
                  <th className="px-1 py-1.5 font-medium">QC 重点</th>
                  <th className="px-1 py-1.5 font-medium">验证状态</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => (
                  <tr key={p.id} className="border-b border-slate-800/70">
                    <td className="px-1 py-1.5">
                      <Link to={`/sku/${p.skuId}`} className="text-amber-200 hover:underline">
                        {p.skuName}
                      </Link>
                    </td>
                    <td className="px-1 py-1.5">{p.name}</td>
                    <td className="px-1 py-1.5">{REGION_LABEL[p.region]}</td>
                    <td className="px-1 py-1.5">{p.location || PENDING}</td>
                    <td className="score-num px-1 py-1.5">{p.moq ?? PENDING}</td>
                    <td className="score-num px-1 py-1.5">
                      {p.priceCny === null ? PENDING : `CNY ${formatNumber(p.priceCny, 2)}`}
                    </td>
                    <td className="score-num px-1 py-1.5">
                      {p.weightG === null ? PENDING : `${p.weightG} g`}
                    </td>
                    <td className="px-1 py-1.5">{p.dimensions ?? PENDING}</td>
                    <td className="px-1 py-1.5">{p.material ?? PENDING}</td>
                    <td className="px-1 py-1.5">{boolText(p.inStock)}</td>
                    <td className="px-1 py-1.5">{boolText(p.customizable)}</td>
                    <td className="score-num px-1 py-1.5">
                      {p.sampleFeeCny === null ? PENDING : `CNY ${p.sampleFeeCny}`}
                    </td>
                    <td className="score-num px-1 py-1.5">
                      {p.leadTimeDays === null ? PENDING : `${p.leadTimeDays} 天`}
                    </td>
                    <td className="max-w-[220px] px-1 py-1.5 text-slate-400">{p.qcFocus || PENDING}</td>
                    <td className="px-1 py-1.5">{VERIFY_LABEL[p.verificationStatus]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </SectionCard>
    </div>
  );
}
