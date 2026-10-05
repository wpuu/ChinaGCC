import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ChinaGCCData, DataSourceType, Sku } from "../types";
import { isStale } from "../lib/data";
import { resolveSkuScores } from "../lib/scoring";
import {
  clearLocalData,
  loadDefaultData,
  loadLocalData,
  parseImportedJson,
  saveLocalData,
} from "../services/dataSource";
import { fetchGithubSnapshot } from "../services/githubData";

interface DataContextValue {
  data: ChinaGCCData;
  skus: Sku[];
  source: DataSourceType;
  lastUpdated: string;
  lastSynced: string | null;
  stale: boolean;
  loading: boolean;
  message: string | null;
  compareIds: string[];
  toggleCompare: (id: string) => void;
  clearCompare: () => void;
  refreshGithub: () => Promise<void>;
  importJsonText: (text: string) => void;
  exportJson: () => ChinaGCCData;
  saveLocal: () => void;
  restoreDefault: () => void;
  getSku: (id: string) => Sku | undefined;
}

const DataContext = createContext<DataContextValue | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ChinaGCCData>(() => loadDefaultData());
  const [source, setSource] = useState<DataSourceType>("default");
  const [lastSynced, setLastSynced] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [compareIds, setCompareIds] = useState<string[]>([]);

  const applyData = useCallback(
    (next: ChinaGCCData, nextSource: DataSourceType, synced: string | null) => {
      const ranked = [...next.skus].sort((a, b) => {
        const ar = a.rank ?? 999;
        const br = b.rank ?? 999;
        if (ar !== br) return ar - br;
        const as = resolveSkuScores(a).opportunity ?? a.legacyScore ?? -1;
        const bs = resolveSkuScores(b).opportunity ?? b.legacyScore ?? -1;
        return bs - as;
      });
      setData({ ...next, skus: ranked });
      setSource(nextSource);
      setLastSynced(synced);
    },
    [],
  );

  const refreshGithub = useCallback(async () => {
    setLoading(true);
    setMessage(null);
    const result = await fetchGithubSnapshot();
    if (result.ok && result.data) {
      applyData(
        {
          ...result.data,
          meta: {
            ...result.data.meta,
            lastSynced: result.lastSynced ?? new Date().toISOString(),
          },
        },
        "github",
        result.lastSynced ?? new Date().toISOString(),
      );
      setMessage("已从 GitHub 同步最新快照。");
      setLoading(false);
      return;
    }

    const local = loadLocalData();
    if (local) {
      applyData(local, "local", null);
      setMessage(result.reason ?? "GitHub 不可用，已使用本地导入数据。");
      setLoading(false);
      return;
    }

    applyData(loadDefaultData(), "default", null);
    setMessage(result.reason ?? "GitHub 不可用，已使用默认快照。");
    setLoading(false);
  }, [applyData]);

  useEffect(() => {
    void refreshGithub();
  }, [refreshGithub]);

  const importJsonText = useCallback(
    (text: string) => {
      const next = parseImportedJson(text);
      applyData(next, "local", null);
      saveLocalData(next);
      setMessage("已导入本地 JSON，并写入浏览器本地保存。");
    },
    [applyData],
  );

  const saveLocal = useCallback(() => {
    saveLocalData(data);
    setSource("local");
    setMessage("当前数据已保存到浏览器本地。");
  }, [data]);

  const restoreDefault = useCallback(() => {
    clearLocalData();
    applyData(loadDefaultData(), "default", null);
    setMessage("已恢复默认快照。");
  }, [applyData]);

  const toggleCompare = useCallback((id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 4) return prev;
      return [...prev, id];
    });
  }, []);

  const clearCompare = useCallback(() => setCompareIds([]), []);

  const getSku = useCallback(
    (id: string) => data.skus.find((s) => s.id === id),
    [data.skus],
  );

  const lastUpdated = data.meta.lastUpdated;
  const stale = isStale(lastUpdated);

  const value = useMemo<DataContextValue>(
    () => ({
      data,
      skus: data.skus,
      source,
      lastUpdated,
      lastSynced,
      stale,
      loading,
      message,
      compareIds,
      toggleCompare,
      clearCompare,
      refreshGithub,
      importJsonText,
      exportJson: () => data,
      saveLocal,
      restoreDefault,
      getSku,
    }),
    [
      data,
      source,
      lastUpdated,
      lastSynced,
      stale,
      loading,
      message,
      compareIds,
      toggleCompare,
      clearCompare,
      refreshGithub,
      importJsonText,
      saveLocal,
      restoreDefault,
      getSku,
    ],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData 必须在 DataProvider 内使用");
  return ctx;
}
