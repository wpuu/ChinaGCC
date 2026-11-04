# ChinaGCC｜2026-11-04 C02
## Noon NGS客户退货转本地FBN：费用与100件风险模型补正

- 观察时间：2026-11-04 14:07:07 Asia/Shanghai
- 审计ID：2026-11-04/C02-NGS-RETURN-FBN-FEE-RECON
- 范围：只读Noon官方NGS及UAE/Saudi FBN费率；未登录Seller Lab、未修改账号、未提交资料。
- 模型偏好：GPT-6 Extra High；自动化运行环境无法独立强制或验证实际思考等级。

## 1. 本轮关键修正

此前NGS经济模型主要把退货简化为“不可售退货无销售收入、Noon免除移除/销毁费”。这只覆盖了退货的一条分支，必须补上**可售退货转本地FBN库存**：

1. NGS商品成功妥投后，按卖家设置的USD Transfer Price支付；NGS说明该笔TP不扣国际物流、关税、目的国税费等跨境成本。
2. 若客户退货后商品仍可售，Noon会把它转为当地FBN库存。卖家可在Seller Lab设置当地FBN售价；未设置时Noon会用一个目标为“接近原TP回款”的默认价格。
3. 转为FBN后，后续本地销售适用当地FBN费率；NGS政策免除最多60天FBN仓储费，超过后按当地仓储费率计费。
4. 若退货不可售，Noon在UAE/KSA支持清货；卖家没有该商品销售回款，NGS政策称不收库存移除或销毁费；也可选择RTV返回本地仓库，但公开NGS说明没有给出RTV费用/时效。
5. **尚未公开说明的关键项：** 原NGS妥投后已发出的TP，在后续客户退货时是否冲回、部分调整或保留。必须标记UNKNOWN，不得按“永不冲回”建模。

官方依据：[NGS项目与退货规则](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)。

## 2. 可售退货转FBN后的费率

Noon官方AE与SA FBN费率表均标明以下费用不含VAT；Referral Fee费率自2026-09-10起，FBN outbound按产品尺寸、计费重及ASP决定。

### Referral Fee条件敏感性

| 可能分类 | UAE | Saudi | 适用限制 |
|---|---:|---:|---|
| Bags & Luggage / All other bags | 25% | 25% | 四件化妆包若被分入该叶类 |
| Travel Luggage | 20% | 20% | 不能仅因“旅行收纳”文案就认定 |
| Hair & Personal Care | ≤50 AED：8%；以上15% | Generic 15%；其它品牌≤50 SAR：9%，以上12.5% | 发饰具体叶类、Brand/Generic均未核验 |
| Colour Cosmetics | ≤50 AED：8%；以上15% | Generic 15%；其它品牌10% | 穿戴甲可能涉及该类，但不可擅自定类 |
| Toys | 14% | 14% | 原创毛绒挂件/盲盒若被批准归入玩具 |

费率来源：[UAE FBN rate card](https://helpcenter.noon.partners/en/category/fulfilled-by-noon-fbn/fulfilled-by-noon-fbn-fees-in-uae)、[Saudi FBN rate card](https://helpcenter.noon.partners/en/category/fulfilled-by-noon-fbn/fulfilled-by-noon-fbn-fees-in-ksa)。以上为条件情景，不是当前SKU已批准的Seller Lab类目。

### FBN outbound fee示例

| 尺寸/重量档 | ASP≤25 | ASP>25 |
|---|---:|---:|
| Small envelope | 5.5 AED/SAR | 7.5 AED/SAR |
| Standard envelope ≤0.1kg | 6 | 8 |
| Standard envelope ≤0.25kg | 6.2 | 8.2 |
| Standard parcel ≤0.25kg | 7.2 | 9.2 |
| Standard parcel >0.25–0.50kg | 7.5 | 9.5 |

表中第二列为ASP≤25，第三列为ASP>25；UAE按AED计，Saudi按SAR计。AE与SA常用档位数值相同，但当地货币不同。实际应直接使用官方费率表对应的尺寸/ASP列；本表仅抽取常用档位，不能替代Seller Lab计算器。最终包装尺寸、重量和当地FBN ASP均未知，不能把某个档位直接套给SKU。

### 其它费项

- 可售退货转FBN：前60天仓储费豁免；之后UAE 1.75 AED/CBF/月、Saudi 2.75 SAR/CBF/月。
- 对“与描述不符、假货、破损、缺陷、已使用、缺配件”等卖家可控原因的退货，FBN费率表列退货管理费：不超过15当地货币单位或Referral Fee的20%，取较低者。
- NGS不可售清货：无销售回款，NGS政策称免库存移除/销毁费；RTV费用未公开核实。

## 3. 四类SKU的影响

| SKU | 条件费率/风险 | 当前结论 |
|---|---|---|
| 四件套化妆包 | 若All other bags，FBN后续销售Referral 25%；若包装进入Standard Parcel，Outbound高于小信封；具体重量未知 | 退货后本地FBN再售费用不可忽略，继续P1候选但不采购 |
| 八件套发饰 | 若Hair & Personal Care，AE 8%/15%；SA按Generic/品牌路径9%–15%；分类未核验 | 小件可能适用Envelope，但需实测整套包装；不重算V2 |
| 胶贴穿戴甲 | 若Colour Cosmetics，AE 8%/15%；SA Generic 15%、其它品牌10%；准确叶类未核验 | 胶贴优先不等于自动合规；封装、数量、胶贴BOM与退货可售性待验证 |
| 无IP串珠挂件 | 只有被归为Toys才适用14%；饰品类可能不同 | 类目待核；不以成熟IP成交外推Generic挂件 |
| 原创IP毛绒挂件 | 若归Toys，14%；但IP权利仍先于经济性 | 未自有/无书面授权继续Hard Stop，不得采购/上架 |

## 4. NGS Transfer Price与100件最坏亏损

- 初次妥投TP：仍按原有USD TP情景网格；本轮没有真实批准TP、买家最终价或markup公式。
- 可售退货100件：若转为FBN并最终售出，需计入当地Referral、Outbound、60天后的Storage及适用Return Admin；FBN售价/回款、原TP是否冲回均UNKNOWN。
- 不可售退货100件：零销售回款；NGS清货分支免除移除/销毁费。仍会损失100件同BOM采购、包装、送深圳及其他不可回收成本；若选RTV，费用与时效未知。
- 因同BOM采购价、包装、深圳入仓、退货率、原TP冲回规则及RTV条款均未闭环，**五个相关SKU的认证100件最坏亏损继续为null/UNKNOWN**。历史预算不是最大亏损上限。

## 5. V2、准入与执行决策

- Issue #12 V2历史Opportunity Score / Evidence Confidence / Data Completeness全部保持原值；本轮没有新同BOM实付、RFQ或补货，不重算41项。
- 新增独立同BOM实付/RFQ/补货：均0；供应商深查：0。
- Sample Ready：0；批准采购：0；NGS Channel Access Gate：NO-GO。
- 账号级China LE、NGS不符合资格原因、Payout/Origin和Invoicing Profile没有本轮新后台凭证。
- 下一步只在真实需求证据出现后，测量样品最终包装L/W/H/重量、取得Seller Lab准确类目和当地FBN价格，再将“可售转FBN”和“不可售清货/RTV”分支并入SKU经济模型。

**本轮边界：** 只读公开官方政策及仓库；没有账号操作、证件提交、采购、上架、广告、外联或IP使用。

## Sources
- [Noon NGS program and returns](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)
- [Noon UAE FBN fees](https://helpcenter.noon.partners/en/category/fulfilled-by-noon-fbn/fulfilled-by-noon-fbn-fees-in-uae)
- [Noon Saudi FBN fees](https://helpcenter.noon.partners/en/category/fulfilled-by-noon-fbn/fulfilled-by-noon-fbn-fees-in-ksa)
