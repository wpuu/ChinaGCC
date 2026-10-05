import { useRef, useState } from "react";
import { useData } from "../context/DataContext";
import { SOURCE_LABEL, downloadJson, formatDateTime } from "../lib/data";
import { SectionCard } from "../components/common/SectionCard";
import { PageTitle } from "../components/layout/AppShell";

export default function DataManagePage() {
  const {
    data,
    source,
    lastUpdated,
    lastSynced,
    stale,
    importJsonText,
    saveLocal,
    restoreDefault,
    refreshGithub,
    loading,
  } = useData();
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  function onFile(file: File | undefined) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = String(reader.result ?? "");
        importJsonText(text);
        setError(null);
        setOk(`已导入 ${file.name}`);
      } catch (e) {
        setOk(null);
        setError(e instanceof Error ? e.message : "JSON 无法解析。");
      }
    };
    reader.readAsText(file, "utf-8");
  }

  return (
    <div className="space-y-3">
      <PageTitle
        title="数据管理"
        desc="GitHub 为唯一权威数据源。浏览器不保存 GitHub Token。无 Token 时自动使用默认快照。"
      />

      <div className="grid gap-3 md:grid-cols-4">
        <Info label="当前数据来源" value={SOURCE_LABEL[source]} />
        <Info label="最后更新时间" value={formatDateTime(lastUpdated)} />
        <Info label="最近一次同步" value={lastSynced ? formatDateTime(lastSynced) : "未同步"} />
        <Info label="是否数据过期" value={stale ? "是（超过24小时）" : "否"} />
      </div>

      <SectionCard title="操作">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => void refreshGithub()}
            disabled={loading}
            className="rounded border border-slate-700 bg-slate-900 px-3 py-1.5 text-[12px] text-slate-100 hover:border-amber-400/40"
          >
            {loading ? "同步中…" : "手动刷新 GitHub"}
          </button>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="rounded border border-slate-700 bg-slate-900 px-3 py-1.5 text-[12px] text-slate-100 hover:border-amber-400/40"
          >
            导入 JSON
          </button>
          <button
            type="button"
            onClick={() =>
              downloadJson(
                `chinagcc-${new Date().toISOString().slice(0, 10)}.json`,
                data,
              )
            }
            className="rounded border border-slate-700 bg-slate-900 px-3 py-1.5 text-[12px] text-slate-100 hover:border-amber-400/40"
          >
            导出 JSON
          </button>
          <button
            type="button"
            onClick={() => {
              saveLocal();
              setOk("已写入浏览器本地保存");
              setError(null);
            }}
            className="rounded border border-slate-700 bg-slate-900 px-3 py-1.5 text-[12px] text-slate-100 hover:border-amber-400/40"
          >
            本地保存
          </button>
          <button
            type="button"
            onClick={() => {
              restoreDefault();
              setOk("已恢复默认快照");
              setError(null);
            }}
            className="rounded border border-rose-500/40 bg-rose-950/40 px-3 py-1.5 text-[12px] text-rose-100"
          >
            恢复默认
          </button>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => onFile(e.target.files?.[0])}
        />
        {error ? <p className="mt-3 text-[12px] text-rose-300">{error}</p> : null}
        {ok ? <p className="mt-3 text-[12px] text-emerald-300">{ok}</p> : null}
        <p className="mt-3 text-[12px] leading-6 text-slate-500">
          读取优先级：1) GitHub 实时数据 → 2) 用户本地导入 JSON → 3) 默认快照。
          缺失字段显示「待验证」，V2 子项不存在时显示「等待V2重评」，不会自动把旧版临时分拆成 30+ 子项。
        </p>
      </SectionCard>

      <SectionCard title="当前快照摘要">
        <div className="grid gap-2 text-[12px] md:grid-cols-4">
          <div>版本 {data.version}</div>
          <div>SKU {data.skus.length}</div>
          <div>每日雷达 {data.dailyRadar.length} 天</div>
          <div>决策记录 {data.decisionLog.length} 条</div>
        </div>
      </SectionCard>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-slate-800 bg-[#0e1520] px-3 py-2">
      <div className="text-[11px] text-slate-500">{label}</div>
      <div className="mt-0.5 text-sm text-slate-100">{value}</div>
    </div>
  );
}
