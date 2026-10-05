import type {
  Category,
  Channel,
  CompletenessFieldKey,
  DataSourceType,
  Market,
  MitigationCost,
  Persistence,
  SkuStatus,
  SupplierRegion,
  VerificationStatus,
} from "../types";

export const COMPLETENESS_FIELDS: { key: CompletenessFieldKey; label: string }[] =
  [
    { key: "gccSalesEvidence", label: "GCC真实成交" },
    { key: "gccPrice", label: "GCC售价" },
    { key: "competition", label: "竞争情况" },
    { key: "chinaCost", label: "中国采购价" },
    { key: "moq", label: "MOQ" },
    { key: "weight", label: "重量" },
    { key: "dimensions", label: "尺寸" },
    { key: "amazonCategory", label: "Amazon类目" },
    { key: "platformCommission", label: "平台佣金" },
    { key: "fbaFee", label: "FBA/履约费" },
    { key: "inboundCost", label: "国际头程" },
    { key: "adSpend", label: "广告假设" },
    { key: "returnRate", label: "退货假设" },
    { key: "contributionProfit", label: "贡献利润" },
    { key: "worstLoss100", label: "100件最坏亏损" },
    { key: "compliance", label: "合规" },
    { key: "supplierCount", label: "供应商数量" },
    { key: "realNegativeReviews", label: "真实差评" },
    { key: "nextAction", label: "下一验证动作" },
  ];

export const DIMENSION_META = [
  {
    key: "A",
    name: "真实需求质量",
    max: 14,
    items: [
      { key: "A1", name: "真实成交证据", max: 4 },
      { key: "A2", name: "跨平台/跨市场验证", max: 3 },
      { key: "A3", name: "需求持续性", max: 3 },
      { key: "A4", name: "用户覆盖面", max: 2 },
      { key: "A5", name: "购买动机清晰度", max: 2 },
    ],
  },
  {
    key: "B",
    name: "保守单位经济性",
    max: 16,
    items: [
      { key: "B1", name: "保守贡献利润率", max: 5 },
      { key: "B2", name: "售价安全垫", max: 3 },
      { key: "B3", name: "广告敏感度", max: 3 },
      { key: "B4", name: "成本波动承受力", max: 2 },
      { key: "B5", name: "100件失败成本", max: 3 },
    ],
  },
  {
    key: "C",
    name: "通用性与当地可用性",
    max: 12,
    items: [
      { key: "C1", name: "通用性", max: 4 },
      { key: "C2", name: "买错/不适配风险", max: 3 },
      { key: "C3", name: "使用/安装复杂度", max: 2 },
      { key: "C4", name: "GCC场景适配", max: 3 },
    ],
  },
  {
    key: "D",
    name: "中国供应链",
    max: 12,
    items: [
      { key: "D1", name: "可替代供应商深度", max: 4 },
      { key: "D2", name: "MOQ友好度", max: 3 },
      { key: "D3", name: "质量可控性", max: 3 },
      { key: "D4", name: "天津/河北/华北优势", max: 2 },
    ],
  },
  {
    key: "E",
    name: "物流经济性",
    max: 10,
    items: [
      { key: "E1", name: "重量", max: 3 },
      { key: "E2", name: "体积/FBA档位", max: 3 },
      { key: "E3", name: "损坏/漏液/变形风险", max: 2 },
      { key: "E4", name: "危险品/特殊运输", max: 2 },
    ],
  },
  {
    key: "F",
    name: "竞争与进入壁垒",
    max: 10,
    items: [
      { key: "F1", name: "价格竞争", max: 3 },
      { key: "F2", name: "品牌壁垒", max: 3 },
      { key: "F3", name: "商品链接/评价壁垒", max: 2 },
      { key: "F4", name: "差异化空间", max: 2 },
    ],
  },
  {
    key: "G",
    name: "复购与生命周期价值",
    max: 6,
    items: [
      { key: "G1", name: "复购频率", max: 3 },
      { key: "G2", name: "补充装生态", max: 2 },
      { key: "G3", name: "B2B重复采购", max: 1 },
    ],
  },
  {
    key: "H",
    name: "退货与售后",
    max: 6,
    items: [
      { key: "H1", name: "典型退货原因", max: 2 },
      { key: "H2", name: "主观体验敏感度", max: 2 },
      { key: "H3", name: "故障/质量争议", max: 2 },
    ],
  },
  {
    key: "I",
    name: "合规与责任",
    max: 5,
    items: [
      { key: "I1", name: "产品监管等级", max: 2 },
      { key: "I2", name: "标签/材料/进口要求", max: 2 },
      { key: "I3", name: "功效/责任风险", max: 1 },
    ],
  },
  {
    key: "J",
    name: "运营复杂度",
    max: 5,
    items: [
      { key: "J1", name: "SKU/颜色/尺寸膨胀", max: 2 },
      { key: "J2", name: "QC难度", max: 1 },
      { key: "J3", name: "本地服务依赖", max: 1 },
      { key: "J4", name: "数据/运营维护量", max: 1 },
    ],
  },
  {
    key: "K",
    name: "你的独特优势",
    max: 4,
    items: [
      { key: "K1", name: "中国供应链/地理优势", max: 2 },
      { key: "K2", name: "独家权/稳定销售权/特殊关系", max: 2 },
    ],
  },
] as const;

export const EVIDENCE_META = [
  { key: "officialSourceRatio", name: "官方/一手来源比例", max: 25 },
  { key: "transactionEvidenceQuality", name: "真实交易证据质量", max: 25 },
  { key: "sourceDiversity", name: "来源多样性", max: 15 },
  { key: "dataFreshness", name: "数据新鲜度", max: 15 },
  { key: "chinaSupplyVerification", name: "中国供应端验证度", max: 10 },
  { key: "unknownResolvedRate", name: "关键未知解决率", max: 10 },
] as const;

export const STATUS_LABEL: Record<SkuStatus, string> = {
  NEW: "新发现",
  P1: "P1",
  P1_CONDITIONAL: "P1条件型",
  P2: "P2",
  WATCH: "观察",
  DROP: "淘汰",
};

export const STATUS_ORDER: SkuStatus[] = [
  "NEW",
  "P1",
  "P1_CONDITIONAL",
  "P2",
  "WATCH",
  "DROP",
];

export const CATEGORY_LABEL: Record<Category, string> = {
  beauty: "美容",
  auto: "汽车",
  travel: "旅行",
  cleaning: "清洁",
  hotel: "酒店",
  other: "其他",
};

export const CHANNEL_LABEL: Record<Channel, string> = {
  B2C: "B2C",
  B2B: "B2B",
};

export const MARKET_LABEL: Record<Market, string> = {
  UAE: "UAE",
  Saudi: "Saudi",
  GCC: "GCC",
};

export const REGION_LABEL: Record<SupplierRegion, string> = {
  tianjin: "天津",
  hebei: "河北",
  "north-china": "华北",
  national: "全国",
};

export const PERSISTENCE_LABEL: Record<Persistence, string> = {
  short: "短期",
  medium: "中期",
  long: "长期",
};

export const VERIFY_LABEL: Record<VerificationStatus, string> = {
  verified: "已验证",
  partial: "部分验证",
  unverified: "未验证",
};

export const COST_LABEL: Record<MitigationCost, string> = {
  low: "低",
  medium: "中",
  high: "高",
};

export const SOURCE_LABEL: Record<DataSourceType, string> = {
  github: "GitHub实时数据",
  local: "本地导入数据",
  default: "默认快照",
};

export const PENDING = "待验证";
export const WAITING_V2 = "等待V2重评";

export function formatNumber(
  value: number | null | undefined,
  digits = 0,
): string {
  if (value === null || value === undefined || Number.isNaN(value)) return PENDING;
  return value.toLocaleString("zh-CN", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function formatMoney(
  value: number | null | undefined,
  currency = "AED",
  digits = 2,
): string {
  if (value === null || value === undefined || Number.isNaN(value)) return PENDING;
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";
  return `${sign}${currency} ${abs.toLocaleString("zh-CN", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })}`;
}

export function formatPct(
  value: number | null | undefined,
  digits = 1,
): string {
  if (value === null || value === undefined || Number.isNaN(value)) return PENDING;
  return `${value.toFixed(digits)}%`;
}

export function formatScore(value: number | null | undefined): string {
  if (value === null || value === undefined || Number.isNaN(value)) return WAITING_V2;
  return String(Math.round(value));
}

export function formatDateTime(iso: string | null | undefined): string {
  if (!iso) return PENDING;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return PENDING;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${day} ${hh}:${mm}`;
}

export function isStale(iso: string | null | undefined, hours = 24): boolean {
  if (!iso) return true;
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return true;
  return Date.now() - t > hours * 3600 * 1000;
}

export function rankChangeText(change: number | null | undefined): string {
  if (change === null || change === undefined || change === 0) return "持平";
  if (change > 0) return `↑${change}`;
  return `↓${Math.abs(change)}`;
}

export function boolText(v: boolean | null | undefined): string {
  if (v === null || v === undefined) return PENDING;
  return v ? "是" : "否";
}

export function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
