import { Link, useParams } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useData } from "../context/DataContext";
import {
  COMPLETENESS_FIELDS,
  COST_LABEL,
  DIMENSION_META,
  EVIDENCE_META,
  PENDING,
  PERSISTENCE_LABEL,
  VERIFY_LABEL,
  WAITING_V2,
  formatMoney,
  formatNumber,
  formatPct,
} from "../lib/data";
import { getHardStops, getTopRisks } from "../lib/risk";
import {
  completenessCounts,
  dimensionTotal,
  resolveSkuScores,
  type SubKey,
} from "../lib/scoring";
import { FieldValue } from "../components/common/FieldValue";
import { HardStopTag, RiskBadge } from "../components/common/RiskBadge";
import { SampleGate } from "../components/common/SampleGate";
import { ScoreBar, ScoreBlock } from "../components/common/ScoreBlock";
import { EmptyState, SectionCard } from "../components/common/SectionCard";
import { StatusBadge } from "../components/common/StatusBadge";
import { PageTitle } from "../components/layout/AppShell";

export default function SkuDetailPage() {
  const { id } = useParams();
  const { getSku, toggleCompare, compareIds } = useData();
  const sku = id ? getSku(id) : undefined;

  if (!sku) {
    return (
      <div>
        <PageTitle title="SKU 详情" />
        <EmptyState text="未找到该 SKU，可能数据尚未导入或 ID 无效。" />
        <Link to="/" className="text-sm text-amber-300 hover:underline">
          返回总览
        </Link>
      </div>
    );
  }

  const scores = resolveSkuScores(sku);
  const counts = completenessCounts(sku.confirmedFields);
  const hardStops = getHardStops(sku);
  const topRisks = getTopRisks(sku, 5);
  const dimChart = sku.opportunityBreakdown
    ? DIMENSION_META.map((d) => ({
        name: d.name,
        得分: dimensionTotal(sku.opportunityBreakdown, d.key) ?? 0,
        满分: d.max,
      }))
    : [];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <PageTitle
            title={sku.name}
            desc={`${sku.englishName || ""} · 当前排名 ${sku.rank ?? PENDING}`}
          />
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={sku.status} />
            {sku.isStrategicAsset ? (
              <span className="rounded border border-amber-500/40 px-1.5 py-0.5 text-[11px] text-amber-200">
                战略资产
              </span>
            ) : null}
            {sku.legacyScore !== null ? (
              <span className="text-[11px] text-slate-500">
                旧版临时分 {sku.legacyScore}
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => toggleCompare(sku.id)}
              className="rounded border border-slate-700 px-2 py-0.5 text-[11px] text-slate-300"
            >
              {compareIds.includes(sku.id) ? "已加入对比" : "加入对比"}
            </button>
          </div>
        </div>
        <Link to="/radar" className="text-[12px] text-slate-400 hover:text-amber-200">
          返回机会雷达
        </Link>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
          <ScoreBlock label="商业机会分" value={scores.opportunity} size="lg" sub="值不值得做 / 100" />
          <div className="mt-3">
            <ScoreBar value={scores.opportunity} tone="amber" />
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
          <ScoreBlock
            label="证据置信度（Evidence Confidence）"
            value={scores.evidence}
            size="lg"
            sub="判断有多大把握 / 100"
          />
          <div className="mt-3">
            <ScoreBar value={scores.evidence} tone="cyan" />
          </div>
        </div>
        <div className="rounded-lg border border-slate-800 bg-[#0e1520] p-3">
          <ScoreBlock
            label="数据完整度"
            value={scores.completeness}
            size="lg"
            sub={`已确认 ${counts.confirmed} · 待验证 ${counts.pending} / ${counts.total}`}
          />
          <div className="mt-3">
            <ScoreBar value={scores.completeness} tone="emerald" />
          </div>
        </div>
      </div>

      <SampleGate sku={sku} />

      <div className="grid gap-3 lg:grid-cols-3">
        <SectionCard title="历史排名变化" className="lg:col-span-1">
          {sku.rankingHistory.length === 0 ? (
            <EmptyState text="暂无排名历史" />
          ) : (
            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sku.rankingHistory.map((p) => ({ ...p, date: p.date.slice(5) }))}>
                  <XAxis dataKey="date" tick={{ fill: "#64748b", fontSize: 11 }} />
                  <YAxis reversed allowDecimals={false} tick={{ fill: "#64748b", fontSize: 11 }} width={28} />
                  <Tooltip
                    contentStyle={{ background: "#0e1520", border: "1px solid #1e293b", fontSize: 12 }}
                  />
                  <Line type="monotone" dataKey="rank" name="排名" stroke="#4fd1c5" dot />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </SectionCard>
        <SectionCard title="11 大维度" className="lg:col-span-2">
          {!sku.opportunityBreakdown ? (
            <EmptyState text={`V2 维度尚未重评 · ${WAITING_V2}。旧版临时分 ${sku.legacyScore ?? PENDING} 不得拆成子项。`} />
          ) : (
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dimChart} layout="vertical" margin={{ left: 88, right: 8 }}>
                  <CartesianGrid stroke="#1e293b" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "#64748b", fontSize: 11 }} />
                  <YAxis type="category" dataKey="name" tick={{ fill: "#94a3b8", fontSize: 11 }} width={88} />
                  <Tooltip
                    contentStyle={{ background: "#0e1520", border: "1px solid #1e293b", fontSize: 12 }}
                  />
                  <Bar dataKey="得分" fill="#f5c14a" barSize={10} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </SectionCard>
      </div>

      <SectionCard title="30+ 详细子项">
        {!sku.opportunityBreakdown ? (
          <EmptyState text={`等待V2重评。禁止用旧版临时分 ${sku.legacyScore ?? "—"} 反推子项。`} />
        ) : (
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {DIMENSION_META.map((dim) => {
              const total = dimensionTotal(sku.opportunityBreakdown, dim.key);
              return (
                <div key={dim.key} className="rounded border border-slate-800 p-2">
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <div className="text-[12px] font-medium text-slate-200">
                      {dim.key} {dim.name}
                    </div>
                    <div className="score-num text-[12px] text-amber-300">
                      {total === null ? WAITING_V2 : `${total}/${dim.max}`}
                    </div>
                  </div>
                  <div className="space-y-1">
                    {dim.items.map((item) => {
                      const v = sku.opportunityBreakdown![item.key as SubKey];
                      return (
                        <div key={item.key} className="flex items-center gap-2 text-[11px]">
                          <span className="w-7 shrink-0 text-slate-500">{item.key}</span>
                          <span className="min-w-0 flex-1 truncate text-slate-300">{item.name}</span>
                          <span className="score-num w-10 text-right text-slate-100">
                            {v === null ? "—" : v}
                          </span>
                          <span className="w-6 text-right text-slate-600">/{item.max}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </SectionCard>

      <div className="grid gap-3 lg:grid-cols-2">
        <SectionCard title="详细优点">
          {sku.advantages.length === 0 ? (
            <EmptyState text="暂无优点记录" />
          ) : (
            <div className="space-y-2">
              {sku.advantages.map((a) => (
                <div key={a.name} className="rounded border border-slate-800 p-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-sm font-medium text-slate-100">{a.name}</div>
                    <span className="text-[11px] text-amber-300">影响 {a.impactLevel}/5</span>
                    <span className="text-[11px] text-slate-400">{PERSISTENCE_LABEL[a.persistence]}</span>
                    <span className="text-[11px] text-slate-400">{VERIFY_LABEL[a.verificationStatus]}</span>
                    {a.isOwnerAdvantage ? (
                      <span className="rounded border border-cyan-500/40 px-1 text-[11px] text-cyan-300">
                        你的特殊优势
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-600">非你的独有优势</span>
                    )}
                  </div>
                  <div className="mt-1 text-[12px] text-slate-400">
                    <span className="text-slate-500">证据：</span>
                    {a.evidence || PENDING}
                  </div>
                  <div className="mt-1 text-[12px] text-slate-400">
                    <span className="text-slate-500">商业影响：</span>
                    {a.businessImpact || PENDING}
                  </div>
                  {a.evidenceLinks.length > 0 ? (
                    <div className="mt-1 flex flex-wrap gap-2">
                      {a.evidenceLinks.map((u) => (
                        <a
                          key={u}
                          href={u}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] text-cyan-300 hover:underline"
                        >
                          证据链接
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-1 text-[11px] text-slate-600">证据链接：待验证</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </SectionCard>

        <SectionCard title="Top5 风险矩阵">
          {topRisks.length === 0 ? (
            <EmptyState text="暂无风险记录" />
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-[640px] w-full text-left text-[12px]">
                <thead className="text-[11px] text-slate-500">
                  <tr className="border-b border-slate-800">
                    <th className="py-1 font-medium">风险</th>
                    <th className="py-1 font-medium">概率</th>
                    <th className="py-1 font-medium">影响</th>
                    <th className="py-1 font-medium">风险值</th>
                    <th className="py-1 font-medium">缓解</th>
                  </tr>
                </thead>
                <tbody>
                  {topRisks.map((r) => (
                    <tr key={r.name} className="border-b border-slate-800/70 align-top">
                      <td className="py-1.5 pr-2">
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="text-slate-100">{r.name}</span>
                          {r.isHardStop ? <HardStopTag /> : null}
                        </div>
                        <div className="mt-0.5 text-[11px] text-slate-500">{r.evidence || PENDING}</div>
                        <div className="text-[11px] text-slate-600">来源：{r.source || PENDING}</div>
                      </td>
                      <td className="score-num py-1.5">{r.probability}</td>
                      <td className="score-num py-1.5">{r.impact}</td>
                      <td className="py-1.5">
                        <RiskBadge risk={r} />
                      </td>
                      <td className="py-1.5 text-slate-400">
                        {r.canMitigate === "yes" ? (r.mitigation || "待填写缓解方案") : r.canMitigate === "no" ? "不可缓解" : "是否可缓解：待验证"}
                        <div className="text-[11px] text-slate-600">
                          成本 {COST_LABEL[r.mitigationCost]} · 缓解验证 {r.mitigationVerified ? "已验证" : "未验证"} · 剩余 {r.residualRisk ?? "待验证"}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </SectionCard>
      </div>

      {hardStops.length > 0 ? (
        <SectionCard title="硬性阻断">
          <ul className="space-y-1 text-sm text-red-200">
            {hardStops.map((r) => (
              <li key={r.name}>
                {r.name} — {r.evidence || PENDING}
              </li>
            ))}
          </ul>
        </SectionCard>
      ) : null}

      <div className="grid gap-3 lg:grid-cols-2">
        <SectionCard title="已知事实">
          {sku.knownFacts.length === 0 ? (
            <EmptyState text="暂无已知事实" />
          ) : (
            <ul className="list-disc space-y-1 pl-4 text-[13px] text-slate-300">
              {sku.knownFacts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}
        </SectionCard>
        <SectionCard title="待验证事项">
          {sku.pendingVerifications.length === 0 ? (
            <EmptyState text="暂无待验证事项" />
          ) : (
            <ul className="list-disc space-y-1 pl-4 text-[13px] text-amber-100/90">
              {sku.pendingVerifications.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}
        </SectionCard>
      </div>

      <SectionCard title="市场与单位经济">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <FieldValue label="UAE 需求" value={sku.uaeDemand} className="xl:col-span-2" />
          <FieldValue label="Saudi 需求" value={sku.saudiDemand} className="xl:col-span-2" />
          <FieldValue label="当前售价 AED" value={sku.currentPriceAed === null ? null : formatNumber(sku.currentPriceAed, 2)} mono />
          <FieldValue label="当前售价 SAR" value={sku.currentPriceSar === null ? null : formatNumber(sku.currentPriceSar, 2)} mono />
          <FieldValue label="中国采购价 CNY" value={sku.chinaCostCny === null ? null : formatNumber(sku.chinaCostCny, 2)} mono />
          <FieldValue label="MOQ" value={sku.moq} mono />
          <FieldValue label="重量 g" value={sku.weightG} mono />
          <FieldValue label="尺寸" value={sku.dimensions} />
          <FieldValue label="Amazon 类目" value={sku.amazonCategory} />
          <FieldValue label="Amazon 佣金" value={formatPct(sku.amazonCommissionPct)} mono />
          <FieldValue label="FBA" value={formatMoney(sku.fbaFeeAed)} mono />
          <FieldValue label="国际头程" value={formatMoney(sku.inboundCostAed)} mono />
          <FieldValue label="广告假设" value={formatPct(sku.adSpendAssumptionPct)} mono />
          <FieldValue label="退货假设" value={formatPct(sku.returnAssumptionPct)} mono />
          <FieldValue label="贡献利润" value={formatMoney(sku.contributionProfitAed)} mono />
          <FieldValue label="贡献利润率" value={formatPct(sku.contributionMarginPct)} mono />
          <FieldValue label="100件最坏亏损" value={formatMoney(sku.worstLoss100Aed)} mono />
          <FieldValue label="合规" value={sku.complianceNote} />
        </div>
      </SectionCard>

      <SectionCard title="中国供应商与天津/河北优势">
        <p className="mb-2 text-[13px] text-slate-400">{sku.tianjinHebeiAdvantage ?? PENDING}</p>
        {sku.suppliers.length === 0 ? (
          <EmptyState text="供应商待验证" />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full text-left text-[12px]">
              <thead className="text-[11px] text-slate-500">
                <tr className="border-b border-slate-800">
                  <th className="py-1 font-medium">供应商</th>
                  <th className="py-1 font-medium">地区</th>
                  <th className="py-1 font-medium">MOQ</th>
                  <th className="py-1 font-medium">价格</th>
                  <th className="py-1 font-medium">交期</th>
                  <th className="py-1 font-medium">验证</th>
                  <th className="py-1 font-medium">QC 重点</th>
                </tr>
              </thead>
              <tbody>
                {sku.suppliers.map((s) => (
                  <tr key={s.id} className="border-b border-slate-800/70">
                    <td className="py-1.5">{s.name}</td>
                    <td className="py-1.5">{s.location}</td>
                    <td className="score-num py-1.5">{s.moq ?? PENDING}</td>
                    <td className="score-num py-1.5">
                      {s.priceCny === null ? PENDING : `CNY ${s.priceCny}`}
                    </td>
                    <td className="score-num py-1.5">
                      {s.leadTimeDays === null ? PENDING : `${s.leadTimeDays}天`}
                    </td>
                    <td className="py-1.5">{VERIFY_LABEL[s.verificationStatus]}</td>
                    <td className="py-1.5 text-slate-400">{s.qcFocus || PENDING}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </SectionCard>

      <div className="grid gap-3 lg:grid-cols-3">
        <SectionCard title="下一验证动作">
          <p className="text-[13px] text-slate-200">{sku.nextAction ?? PENDING}</p>
        </SectionCard>
        <SectionCard title="GitHub Issue">
          {sku.githubIssue ? (
            <a href={sku.githubIssue} target="_blank" rel="noreferrer" className="text-[13px] text-cyan-300 hover:underline">
              {sku.githubIssue}
            </a>
          ) : (
            <p className="text-[13px] text-slate-600">{PENDING}</p>
          )}
        </SectionCard>
        <SectionCard title="证据链接">
          {sku.evidenceLinks.length === 0 ? (
            <p className="text-[13px] text-slate-600">{PENDING}</p>
          ) : (
            <ul className="space-y-1 text-[13px]">
              {sku.evidenceLinks.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </SectionCard>
      </div>

      <SectionCard title="数据完整度字段">
        <div className="grid grid-cols-2 gap-1.5 md:grid-cols-3 lg:grid-cols-4">
          {COMPLETENESS_FIELDS.map((f) => {
            const ok = sku.confirmedFields.includes(f.key);
            return (
              <div
                key={f.key}
                className="flex items-center justify-between rounded border border-slate-800 px-2 py-1 text-[12px]"
              >
                <span className="text-slate-300">{f.label}</span>
                <span className={ok ? "text-emerald-300" : "text-slate-600"}>
                  {ok ? "已确认" : "待验证"}
                </span>
              </div>
            );
          })}
        </div>
      </SectionCard>

      <SectionCard title="证据置信度拆解">
        {!sku.evidenceBreakdown ? (
          <EmptyState text={WAITING_V2} />
        ) : (
          <div className="grid gap-2 md:grid-cols-3">
            {EVIDENCE_META.map((m) => {
              const v = sku.evidenceBreakdown![m.key];
              return (
                <div key={m.key} className="rounded border border-slate-800 px-2 py-1.5">
                  <div className="text-[11px] text-slate-500">
                    {m.name} / {m.max}
                  </div>
                  <div className="score-num text-lg text-cyan-300">
                    {v === null ? WAITING_V2 : v}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </SectionCard>

      <SectionCard title="是否允许拿样">
        <SampleGate sku={sku} />
      </SectionCard>
    </div>
  );
}
