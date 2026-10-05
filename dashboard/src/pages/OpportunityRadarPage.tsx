import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataContext";
import {
  CATEGORY_LABEL,
  STATUS_LABEL,
  STATUS_ORDER,
  formatMoney,
  formatPct,
  formatScore,
} from "../lib/data";
import { getMaxRisk, getTopAdvantage, resolveSkuScores } from "../lib/scoring";
import { SampleGateChip } from "../components/common/SampleGate";
import { EmptyState, SectionCard } from "../components/common/SectionCard";
import { StatusBadge } from "../components/common/StatusBadge";
import { PageTitle } from "../components/layout/AppShell";
import type { Category, Channel, Market, Sku, SkuStatus } from "../types";

const MARKET_OPTS: Market[] = ["UAE", "Saudi", "GCC"];
const CHANNEL_OPTS: Channel[] = ["B2C", "B2B"];
const CAT_OPTS: Category[] = ["beauty", "auto", "travel", "cleaning", "hotel", "other"];

export default function OpportunityRadarPage() {
  const { skus, toggleCompare, compareIds } = useData();
  const [markets, setMarkets] = useState<Market[]>([]);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [cats, setCats] = useState<Category[]>([]);
  const [repurchase, setRepurchase] = useState(false);
  const [minScore, setMinScore] = useState(0);
  const [minComplete, setMinComplete] = useState(0);
  const [maxLoss, setMaxLoss] = useState(10000);
  const [maxMoq, setMaxMoq] = useState(1000);

  const filtered = useMemo(() => {
    return skus.filter((s) => {
      const sc = resolveSkuScores(s);
      if (markets.length && !markets.some((m) => s.markets.includes(m))) return false;
      if (channels.length && !channels.some((c) => s.channels.includes(c))) return false;
      if (cats.length && !cats.includes(s.category)) return false;
      if (repurchase && !s.hasRepurchase) return false;
      if (sc.opportunity !== null && sc.opportunity < minScore) return false;
      if (sc.opportunity === null && minScore > 0) return false;
      if (sc.completeness < minComplete) return false;
      if (s.worstLoss100Aed !== null && s.worstLoss100Aed > maxLoss) return false;
      if (s.moq !== null && s.moq > maxMoq) return false;
      return true;
    });
  }, [skus, markets, channels, cats, repurchase, minScore, minComplete, maxLoss, maxMoq]);

  const grouped = STATUS_ORDER.map((st) => ({
    status: st,
    list: filtered.filter((s) => s.status === st),
  }));

  function toggle<T>(list: T[], set: (v: T[]) => void, v: T) {
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);
  }

  return (
    <div className="space-y-3">
      <PageTitle title="机会雷达" desc="按状态分栏，并用市场、品类、复购、分数等条件筛选。" />

      <SectionCard title="筛选">
        <div className="flex flex-wrap gap-1.5">
          {MARKET_OPTS.map((m) => (
            <Chip key={m} on={markets.includes(m)} onClick={() => toggle(markets, setMarkets, m)} label={m} />
          ))}
          {CHANNEL_OPTS.map((m) => (
            <Chip key={m} on={channels.includes(m)} onClick={() => toggle(channels, setChannels, m)} label={m} />
          ))}
          {CAT_OPTS.map((m) => (
            <Chip
              key={m}
              on={cats.includes(m)}
              onClick={() => toggle(cats, setCats, m)}
              label={CATEGORY_LABEL[m]}
            />
          ))}
          <Chip on={repurchase} onClick={() => setRepurchase((v) => !v)} label="复购" />
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-4">
          <NumFilter label="商业机会分 ≥" value={minScore} onChange={setMinScore} max={100} />
          <NumFilter label="数据完整度 ≥" value={minComplete} onChange={setMinComplete} max={100} />
          <NumFilter label="最坏亏损 ≤ AED" value={maxLoss} onChange={setMaxLoss} max={5000} />
          <NumFilter label="MOQ ≤" value={maxMoq} onChange={setMaxMoq} max={1000} />
        </div>
      </SectionCard>

      <div className="grid gap-3 xl:grid-cols-3">
        {grouped.map((g) => (
          <SectionCard
            key={g.status}
            title={`${STATUS_LABEL[g.status as SkuStatus]} · ${g.list.length}`}
          >
            {g.list.length === 0 ? (
              <EmptyState text="本栏无匹配 SKU" />
            ) : (
              <div className="space-y-2">
                {g.list.map((s) => (
                  <SkuRow
                    key={s.id}
                    sku={s}
                    compared={compareIds.includes(s.id)}
                    onCompare={() => toggleCompare(s.id)}
                  />
                ))}
              </div>
            )}
          </SectionCard>
        ))}
      </div>
    </div>
  );
}

function Chip({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded border px-2 py-0.5 text-[12px] ${
        on ? "border-amber-400/50 bg-amber-400/10 text-amber-200" : "border-slate-700 text-slate-400"
      }`}
    >
      {label}
    </button>
  );
}

function NumFilter({
  label,
  value,
  onChange,
  max,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  max: number;
}) {
  return (
    <label className="text-[11px] text-slate-500">
      {label} {value}
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full"
      />
    </label>
  );
}

function SkuRow({
  sku,
  compared,
  onCompare,
}: {
  sku: Sku;
  compared: boolean;
  onCompare: () => void;
}) {
  const sc = resolveSkuScores(sku);
  return (
    <div className="rounded border border-slate-800 p-2">
      <div className="flex items-start justify-between gap-2">
        <Link to={`/sku/${sku.id}`} className="text-[13px] font-medium text-amber-200 hover:underline">
          {sku.name}
        </Link>
        <StatusBadge status={sku.status} />
      </div>
      <div className="mt-1 grid grid-cols-3 gap-1 text-[11px] text-slate-400">
        <div>机会 {formatScore(sc.opportunity)}</div>
        <div>置信 {formatScore(sc.evidence)}</div>
        <div>完整 {sc.completeness}</div>
      </div>
      <div className="mt-1 text-[11px] text-slate-500">
        利润率 {formatPct(sku.contributionMarginPct)} · 亏损 {formatMoney(sku.worstLoss100Aed, "AED", 0)}
      </div>
      <div className="mt-1 truncate text-[11px] text-slate-400">
        优点 {getTopAdvantage(sku)?.name ?? "待验证"} · 风险 {getMaxRisk(sku)?.name ?? "待验证"}
      </div>
      <div className="mt-1.5 flex items-center justify-between">
        <SampleGateChip sku={sku} />
        <button type="button" onClick={onCompare} className="text-[11px] text-slate-500 hover:text-amber-200">
          {compared ? "取消对比" : "加入对比"}
        </button>
      </div>
    </div>
  );
}
