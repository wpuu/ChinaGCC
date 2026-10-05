# ChinaGCC 商业机会决策台

中东真实需求 → 中国供应链解决 → SKU 商业机会筛选。

这是项目 Owner 每天查看 SKU 机会、评分、风险、供应链、利润、证据和排名变化的内部决策终端，不是商城、营销官网或消费者网站。

## 本地运行

```bash
npm install
npm run dev
```

构建：

```bash
npm run typecheck
npm run build
```

未配置 `GITHUB_TOKEN` 时，前台会自动使用 `src/data/default-data.json` 离线快照，功能完整可用。

## 数据读取优先级

1. GitHub 实时数据（仓库 `wpuu/ChinaGCC`，路径 `data/current.json`）
2. 用户本地导入 JSON（浏览器本地保存）
3. `default-data.json` 默认快照

浏览器端**禁止**保存 GitHub Token。`GITHUB_TOKEN` 只能由服务端环境变量读取。

## GitHub 同步

部署到 Vercel 后，设置环境变量：

```
GITHUB_TOKEN=github_pat_xxx
```

前台通过 `/api/github-snapshot` 拉取私有仓库快照。接口实现见 `api/github-snapshot.ts`。

未来仓库结构：

```
data/current.json
data/sku/xxx.json
data/daily/YYYY-MM-DD.json
```

V1 前台只读已经保存到 GitHub 的数据，不直接调用 Agnes，不实时抓取商城。

## 三个核心分数

每个 SKU 同时显示：

- **商业机会分 0–100**：值不值得做
- **证据置信度（Evidence Confidence）0–100**：判断有多大把握
- **数据完整度 0–100**：还有多少关键数据没确认

旧版分数只显示为「旧版临时分」，禁止自动拆成 30+ 子项。V2 子项不存在时显示「等待V2重评」，不编造。

## 样品准入

同时满足以下条件才显示「可以进入样品验证」：

- 商业机会分 ≥ 80
- 证据置信度 ≥ 70
- 数据完整度 ≥ 75
- 没有 硬性阻断
- 没有尚未解决的 16–25 严重风险

否则显示「暂不允许进入样品验证」并列出阻塞原因。

## 页面

| 路径 | 页面 |
| --- | --- |
| `#/` | 总览 |
| `#/sku/:id` | SKU 详情 |
| `#/compare` | SKU对比 |
| `#/daily` | 每日雷达 |
| `#/radar` | 机会雷达 |
| `#/hanlin` | 翰林生物面膜战略资产 |
| `#/supply` | 中国供应链 |
| `#/log` | 决策记录 |
| `#/data` | 数据管理（导入/导出/本地保存/恢复默认/手动刷新） |

## 工程结构

```
src/types/            类型
src/lib/scoring.ts    商业机会分 / 置信度 / 完整度 / 样品准入
src/lib/risk.ts       风险值与等级
src/lib/data.ts       文案、字段字典、格式化
src/services/         GitHub 与本地数据源
src/data/default-data.json
src/pages/            全部页面
src/components/       布局与通用组件
api/github-snapshot.ts
```

数据与 UI 分离。SKU 数据不硬编码进 React 组件。

## JSON 约定

根对象需包含 `skus` 数组。推荐字段见 `src/types/index.ts`。缺失字段一律按「待验证」展示，导入时由 `src/services/dataSource.ts` 做归一化，缺数据不会崩溃。


## 安全说明

私有GitHub实时数据不得直接暴露到公开站点。生产环境默认关闭GitHub同步；只有已经启用Vercel部署保护或等价站点级访问保护后，才设置：

```
CHINAGCC_PRIVATE_DEPLOYMENT_CONFIRMED=true
GITHUB_TOKEN=...
```

数据过期状态以 `meta.lastUpdated` 为准；最近同步时间只表示读取时间，不代表数据本身新鲜。
