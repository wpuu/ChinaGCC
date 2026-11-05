# ChinaGCC C05｜2026-11-05

## 结论

- Channel Access Gate：NO-GO。
- Noon China NGS：1/12=8.33%，China LE、Payout、Selling Origin、Invoicing Profile仍未账号级核验。
- Amazon UAE/Saudi：0/15。
- 新增独立同BOM实付订单/RFQ/补货：0。
- Issue #12 V2：不重算；Top10不变；14个SKU认证100件最坏亏损仍UNKNOWN/null。

## 新增证据：Saudi穿戴甲类目

Noon KSA Beauty页面的历史索引显示：

- #1 Press On False Nails：480+ sold recently，约SAR19。
- 24pc French-gradient款：430+ sold recently，约SAR18.95。
- KHAJUL 24pc French-tip款：310+ sold recently，约SAR19.50。

这些标签说明Saudi低价穿戴甲类目存在较强需求，但页面抓取约4个月前，不能视为2026-11-05的新订单；具体BOM也未证明为“24pc、仅胶贴、无液体胶”。因此只提升**类目需求置信度**，不提升首SKU Channel Access，也不触发供应商深搜。

来源：
- https://www.noon.com/saudi-en/beauty/noon-collect/

## NGS准入

官方NGS仍明确中国有效Commercial Registration卖家可申请；卖家设置USD Transfer Price，Noon负责深圳集货仓之后的跨境物流、清关及目的国VAT。收款方式必须获批，并映射到正确Selling Origin。官方没有提供中国卖家完整端到端审核SLA；本轮没有Seller Lab账号上下文，因此不声称完成账号核验。

来源：
- https://supportagent.noon.partners/portal/en/kb/articles/noon-global-shipping-program
- https://helpcenter.noon.partners/en/category/onboarding-and-registration/how-to-add-the-bank-details-in-the-legal-entity

## SKU状态

| SKU | 状态 |
|---|---|
| 4件化妆包 | 无新同BOM需求证据，V2 78/90/73保持 |
| 8件发饰 | 无新同BOM需求证据，V2 70/92/78保持 |
| 胶贴穿戴甲 | 类目需求证据增强，但胶贴-only BOM仍未证实，V2 67/92/80保持 |
| 无IP串珠挂件 | 无新同BOM需求证据，V2 68/84/76保持 |
| 原创IP毛绒挂件 | 无中国→GCC同系列首笔实付日期配对；无授权不做转售 |

## 单位经济性

当前所有NGS Transfer Price仍为情景测试，不是Noon批准TP。没有批准TP、买家最终价、同BOM中国采购价、深圳交仓成本、真实退货调整和回收残值，因此100件最坏亏损继续UNKNOWN。

## 下一施工

1. 只读核验已有Seller Lab中的NGS Not Eligible原因、China LE、Payout、Selling Origin、Invoicing Profile。
2. 优先寻找24pc adhesive-tab-only、无液体胶的Saudi穿戴甲新鲜同BOM成交/RFQ/补货。
3. 只有出现同BOM真实需求后才反查中国供应链并测算深圳交仓和100件最坏亏损。

模型偏好：GPT-6 Extra High；自动化运行环境不能独立强制或验证实际effort，因此不声称已切换。
