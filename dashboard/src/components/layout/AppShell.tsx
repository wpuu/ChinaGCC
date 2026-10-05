import { useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Activity,
  Boxes,
  ClipboardList,
  Columns3,
  Database,
  LayoutGrid,
  Menu,
  Radar,
  Sparkles,
  X,
} from "lucide-react";
import { useData } from "../../context/DataContext";
import { SOURCE_LABEL, formatDateTime, formatNumber } from "../../lib/data";
import { cn } from "../../utils/cn";

const NAV = [
  { to: "/", label: "总览", icon: LayoutGrid, end: true },
  { to: "/radar", label: "机会雷达", icon: Radar },
  { to: "/compare", label: "SKU对比", icon: Columns3 },
  { to: "/daily", label: "每日雷达", icon: Activity },
  { to: "/hanlin", label: "翰林面膜", icon: Sparkles },
  { to: "/supply", label: "中国供应链", icon: Boxes },
  { to: "/log", label: "决策记录", icon: ClipboardList },
  { to: "/data", label: "数据管理", icon: Database },
];

function NavItems({ onClick }: { onClick?: () => void }) {
  return (
    <nav className="flex flex-col gap-0.5 px-2">
      {NAV.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onClick}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 rounded px-2 py-1.5 text-[13px]",
                isActive
                  ? "bg-amber-400/10 text-amber-200"
                  : "text-slate-400 hover:bg-slate-800/70 hover:text-slate-200",
              )
            }
          >
            <Icon className="h-3.5 w-3.5 shrink-0" />
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const {
    source,
    lastUpdated,
    lastSynced,
    stale,
    loading,
    refreshGithub,
    message,
    compareIds,
    clearCompare,
    skus,
  } = useData();
  const compareNames = compareIds
    .map((id) => skus.find((s) => s.id === id)?.name ?? id)
    .join("、");
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[220px] border-r border-slate-800 bg-[#0b111a] md:flex md:flex-col">
        <div className="border-b border-slate-800 px-4 py-3">
          <div className="text-[11px] tracking-[0.22em] text-amber-400/90">CHINAGCC</div>
          <div className="mt-0.5 text-sm font-semibold text-slate-100">商业机会决策台</div>
        </div>
        <div className="flex-1 overflow-y-auto py-3">
          <NavItems />
        </div>
        <div className="border-t border-slate-800 px-3 py-3 text-[11px] leading-5 text-slate-500">
          内部研究终端 · 非商城
        </div>
      </aside>

      {open ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-[220px] border-r border-slate-800 bg-[#0b111a]">
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-3">
              <span className="text-sm font-semibold">ChinaGCC</span>
              <button type="button" onClick={() => setOpen(false)} className="text-slate-400">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="py-3">
              <NavItems onClick={() => setOpen(false)} />
            </div>
          </aside>
        </div>
      ) : null}

      <div className="md:pl-[220px]">
        <header className="sticky top-0 z-20 border-b border-slate-800 bg-[#070b12]/95 backdrop-blur">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-3 py-2 md:px-4">
            <button
              type="button"
              className="rounded border border-slate-700 p-1 text-slate-300 md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </button>
            <div className="text-xs text-slate-400">
              当前数据来源{" "}
              <span className="text-amber-300">{SOURCE_LABEL[source]}</span>
            </div>
            <div className="text-xs text-slate-500">
              最后更新 <span className="score-num text-slate-300">{formatDateTime(lastUpdated)}</span>
            </div>
            <div className="text-xs text-slate-500">
              最近同步{" "}
              <span className="score-num text-slate-300">
                {lastSynced ? formatDateTime(lastSynced) : "未同步"}
              </span>
            </div>
            <div
              className={cn(
                "rounded border px-1.5 py-0.5 text-[11px]",
                stale
                  ? "border-amber-500/40 bg-amber-500/10 text-amber-200"
                  : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
              )}
            >
              {stale ? "数据过期" : "数据新鲜"}
            </div>
            <button
              type="button"
              onClick={() => void refreshGithub()}
              disabled={loading}
              className="ml-auto rounded border border-slate-700 bg-slate-900 px-2 py-1 text-[12px] text-slate-200 hover:border-amber-500/40 hover:text-amber-200 disabled:opacity-50"
            >
              {loading ? "同步中…" : "手动刷新"}
            </button>
          </div>
          {message ? (
            <div className="border-t border-slate-800 px-3 py-1 text-[11px] text-slate-500 md:px-4">
              {message}
            </div>
          ) : null}
        </header>
        <main className="px-3 py-3 md:px-4 md:py-4" key={location.pathname}>
          {children}
        </main>
        {compareIds.length > 0 ? (
          <div className="sticky bottom-3 z-20 mx-3 flex flex-wrap items-center gap-2 rounded border border-amber-500/30 bg-[#0e1520]/95 px-3 py-2 text-[12px] shadow-lg md:mx-4">
            <span className="text-slate-400">SKU对比 {compareIds.length}/4</span>
            <span className="truncate text-slate-200">{compareNames}</span>
            <Link to="/compare" className="ml-auto text-amber-300 hover:underline">
              打开对比
            </Link>
            <button type="button" onClick={clearCompare} className="text-slate-500 hover:text-slate-300">
              清空
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function PageTitle({
  title,
  desc,
}: {
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-3">
      <h1 className="text-base font-semibold tracking-wide text-slate-100">{title}</h1>
      {desc ? <p className="mt-0.5 text-xs text-slate-500">{desc}</p> : null}
    </div>
  );
}

export function CountChip({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded border border-slate-800 bg-[#0e1520] px-3 py-2">
      <div className="text-[11px] text-slate-500">{label}</div>
      <div className="score-num text-xl font-semibold text-slate-100">
        {formatNumber(value, 0)}
      </div>
    </div>
  );
}
