import { Link } from "react-router-dom";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { useData } from "../context/DataContext";
import { PENDING, formatScore } from "../lib/data";
import { resolveSkuScores } from "../lib/scoring";
import { SampleGate } from "../components/common/SampleGate";
import { ScoreBar, ScoreBlock } from "../components/common/ScoreBlock";
import { EmptyState, SectionCard } from "../components/common/SectionCard";
import { StatusBadge } from "../components/common/StatusBadge";
import { PageTitle } from "../components/layout/AppShell";

export default function HanlinPage() {
  const { data, getSku } = useData();
  const h = data.hanlinMask;
  const sku = getSku("hanlin-mask");
  const scores = sku ? resolveSkuScores(sku) : null;
  const radar = [
    { name: "SKU匹配度", value: h.skuMatchScore ?? 0 },
    { name: "合规准备度", value: h.complianceReadiness ?? 0 },
    { name: "渠道准备度", value: h.channelReadiness ?? 0 },
    { name: "利润准备度", value: h.profitReadiness ?? 0 },
    { name: "证据置信度", value: h.evidenceConfidence ?? 0 },
  ];

  return (
    <div className="space-y-3">
      <PageTitle
        title="翰林生物面膜 · 战略资产"
        desc="不是普通随机 SKU。销售权只是你的独特优势中的一个评分因素，不自动高分，不自动启动。"
      />

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3 md:col-span-2">
          <div className="text-[11px] text-slate-500">销售权状态</div>
          <p className="mt-1 text-sm text-slate-200">{h.salesRightsStatus}</p>
        </div>
        <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
          <div className="text-[11px] text-slate-500">正式启动条件</div>
          <div className={`mt-1 text-lg font-semibold ${h.launchReady ? "text-emerald-300" : "text-amber-300"}`}>
            {h.launchReady ? "已达到正式启动条件" : "未达到正式启动条件"}
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
          <div className="text-[11px] text-slate-500">对应 SKU 状态</div>
          <div className="mt-2">{sku ? <StatusBadge status={sku.status} /> : "待验证"}</div>
          {sku?.legacyScore !== null ? (
            <div className="mt-2 text-[11px] text-slate-500">旧版临时分 {sku?.legacyScore}</div>
          ) : null}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-5">
        <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
          <ScoreBlock label="翰林 SKU 匹配度" value={h.skuMatchScore} size="sm" />
          <div className="mt-2"><ScoreBar value={h.skuMatchScore} /></div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
          <ScoreBlock label="合规准备度" value={h.complianceReadiness} size="sm" />
          <div className="mt-2"><ScoreBar value={h.complianceReadiness} tone="rose" /></div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
          <ScoreBlock label="渠道准备度" value={h.channelReadiness} size="sm" />
          <div className="mt-2"><ScoreBar value={h.channelReadiness} tone="cyan" /></div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
          <ScoreBlock label="利润准备度" value={h.profitReadiness} size="sm" />
          <div className="mt-2"><ScoreBar value={h.profitReadiness} tone="amber" /></div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
          <ScoreBlock label="证据置信度" value={h.evidenceConfidence} size="sm" />
          <div className="mt-2"><ScoreBar value={h.evidenceConfidence} tone="cyan" /></div>
        </div>
      </div>

      {sku && scores ? (
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
            <ScoreBlock label="商业机会分（V2）" value={scores.opportunity} size="sm" sub="含 K2 销售权 2 分，未因此抬总分" />
          </div>
          <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
            <ScoreBlock label="证据置信度（SKU）" value={scores.evidence} size="sm" />
          </div>
          <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
            <ScoreBlock label="数据完整度" value={scores.completeness} size="sm" />
          </div>
        </div>
      ) : null}

      <div className="grid gap-3 lg:grid-cols-2">
        <SectionCard title="准备度雷达">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radar}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#64748b", fontSize: 10 }} />
                <Radar dataKey="value" stroke="#f5c14a" fill="#f5c14a" fillOpacity={0.25} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
        <SectionCard title="启动阻塞">
          {h.launchBlockers.length === 0 ? (
            <EmptyState text="无阻塞" />
          ) : (
            <ul className="list-disc space-y-1 pl-4 text-[13px] text-amber-100">
              {h.launchBlockers.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
          <p className="mt-3 text-[12px] text-slate-400">下一步：{h.nextAction || PENDING}</p>
        </SectionCard>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        <SectionCard title="GCC 面膜需求">
          <p className="text-[13px] leading-6 text-slate-300">{h.gccDemand}</p>
        </SectionCard>
        <SectionCard title="UAE 市场">
          <p className="text-[13px] leading-6 text-slate-300">{h.uaeMarket}</p>
        </SectionCard>
        <SectionCard title="Saudi 市场">
          <p className="text-[13px] leading-6 text-slate-300">{h.saudiMarket}</p>
        </SectionCard>
      </div>

      <SectionCard title="对标热卖 SKU">
        {h.benchmarkSkus.length === 0 ? (
          <EmptyState text="待验证" />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[640px] w-full text-left text-[12px]">
              <thead className="text-[11px] text-slate-500">
                <tr className="border-b border-slate-800">
                  <th className="py-1 font-medium">对标</th>
                  <th className="py-1 font-medium">平台</th>
                  <th className="py-1 font-medium">价格</th>
                  <th className="py-1 font-medium">备注</th>
                </tr>
              </thead>
              <tbody>
                {h.benchmarkSkus.map((b) => (
                  <tr key={b.name} className="border-b border-slate-800/70">
                    <td className="py-1.5 pr-2">{b.name}</td>
                    <td className="py-1.5">{b.platform}</td>
                    <td className="score-num py-1.5">{b.price}</td>
                    <td className="py-1.5 text-slate-400">{b.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </SectionCard>

      <SectionCard title="决策说明">
        <p className="text-[13px] leading-6 text-slate-300">{h.notes}</p>
        {sku ? (
          <div className="mt-3 space-y-2">
            <SampleGate sku={sku} />
            <Link to={`/sku/${sku.id}`} className="inline-block text-[12px] text-amber-300 hover:underline">
              查看翰林面膜完整 SKU 详情（商业机会分 {formatScore(scores?.opportunity ?? null)}）
            </Link>
          </div>
        ) : null}
      </SectionCard>
    </div>
  );
}
