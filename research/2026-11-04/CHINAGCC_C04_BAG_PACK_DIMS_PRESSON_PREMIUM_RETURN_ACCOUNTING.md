# ChinaGCC｜2026-11-04 C04 增量复盘
## 4件化妆包包装尺寸、SAR35–49穿戴甲成交、Noon退货结算与Amazon FBA责任

**审计ID：** 2026-11-04/C04-BAG-PACK-DIMS-PRESSON-PREMIUM-RETURN-ACCOUNTING  
**观察日期：** 2026-11-04 (Asia/Shanghai; exact wall-clock time not recorded)  
**模型偏好：** GPT-6 Extra High；当前自动化运行环境不能独立强制或验证实际effort，不声称已切换。  
**执行状态：** HOLD / CONDITIONAL_RESTART；Noon China NGS第一，Amazon UAE/Saudi第二。  
**范围：** 只读公开零售/官方平台政策和GitHub结构化数据；未进入Seller Lab、未提交资料、未签约、未外联、未采购、未上架、未投广告。

## 0. 结论

1. **Top10不换位，Issue #12 V2不重算。** 本轮新增的是同类零售尺寸、价格和退货结算规则，不是目标SKU同BOM独立付款/RFQ/补货。
2. **四件化妆包仍不能证明15%安全贡献利润。** Saudi公开4件PVC套装零售价约SAR49–50，能看到商品/套装尺寸，但没有可用的最终包装毛重；与目标BOM也不一致。
3. **穿戴甲SAR35–49高客单仍无真实成交证明。** SAR49页面主要是低库存标签，无可靠sold recently；更强评价/榜单信号仍集中在SAR19.99–29.90。
4. **Noon退货结算风险需要再收紧。** Noon周结算单明确包含本期收到、此前已付款订单的客户退货；因此不能把原NGS Transfer Price视为不可调整，但NGS具体冲回金额/机制仍未公开。
5. **FBN退货成本也不能按“退货后只扣佣金”处理。** FBN outbound在Delivered或NDR状态触发，订单后来退货也不退该outbound fee；计费重还要加包装材料重量并按50g取整。
6. **NGS与Amazon准入顺序不变。** Noon NGS 1/12=8.33%，Amazon FBA 0/15=0%；账户级NGS仍NO-GO。
7. 新增独立同BOM付款订单0、RFQ 0、补货0；Sample Ready 0、采购批准0；14个SKU认证100件最坏亏损仍全部UNKNOWN/null。

## 1. 人群→发现→成交→购买触发

- 核心人群维持：Saudi女性18–45；UAE女性18–39；female Gen Z/学生为趋势发现优先；年轻家庭次级；50+ WATCH。
- 发现：TikTok、Snapchat、Instagram、Noon Finds；社媒曝光到本项目付款的归因仍未验证。
- 现实成交：Noon China NGS第一、Amazon UAE/Saudi第二。UAE药房/本地零售页面仅是市场参照，不是本项目可用结账渠道。
- 购买触发假设：旅行收纳、快速日常发型、聚会/婚礼美甲、收藏/礼赠；本项目SKU转化仍无归因证据。

## 2. 本轮新增商品证据

### 2.1 4件套化妆/旅行收纳包

| 零售商/市场 | 页面价格 | 套装与尺寸 | 材质 | 重量/最终包装 |
|---|---:|---|---|---|
| Homecentre KSA | SAR49 | 4件；列出小18×4×11、中20×8×11、大23.5×11×17cm三组尺寸 | PVC + polyester | 未公布；页面虽称4件但只列3组尺寸 |
| Centrepoint KSA | SAR50促销价 | 4件；整体尺寸17×22×17cm | PVC | 未公布；页面有Weight & Dimensions标题但没有数字重量 |

这些是本地PVC/polyester竞品，不是目标棉/绗缝或指定BOM。页面尺寸不是经过称重的最终零售运输包装尺寸。**当前目标SKU最终包装毛重、长宽高、计费重仍UNKNOWN。**

**15%安全利润判定：NOT PROVEN。** 缺真实同BOM采购、最终包装重量/尺寸、深圳逐单交仓成本、Seller Lab批准TP、消费者最终结账价、退货后TP调整和FBN转换费用。不能用“4件套”数量推断轻小。

### 2.2 穿戴甲SAR35–49高客单

| 市场/产品 | 价格 | 页面信号 | 能证明什么 |
|---|---:|---|---|
| Saudi Nailosophy手工French Tip，10片 | SAR49 | 仅余3件；评价不足 | 在售高价款，不是已验证成交 |
| Saudi Generic 24片3D款 | SAR49 | 仅余1件；含液体胶+胶贴 | 低库存，不是销售流水；BOM也不符合纯胶贴优先 |
| Saudi KHAJUL 48片手足套装 | SAR29.90 | 131 ratings、仅余2件 | 有累计评价/库存线索，但低于目标价带 |
| Saudi Al Kanzi 24片 | SAR19.99 | 98 ratings、类目第35 | 低价带的评价/排名线索 |
| UAE Goolsky premium teardrop | AED35 | 仅余5件，索引约3个月 | 非Saudi成交证据，无可靠销量标签 |

结论：**没有找到SAR35–49成品/组合具有可靠同周期sold count或独立付款流水的证据。** 低库存、rating、排名不等于近期付款。基础款需求仍强，但经济性受低价带和NGS最终markup/TP未知制约；穿戴甲保持P2，不作为首SKU。

### 2.3 发饰旁证的快照冲突

Roro 11cm单只抓夹AED21页面在不同快照中出现“2 sold in last 8 hours / 178 ratings”和“12 sold in last 25 hours / 164 ratings”。后一结果索引约3周，且评价数与C01现场读取不一致。该商品是UAE药房DTC单只抓夹，不是Noon、也不是目标8件套。**不把这两组页面标签相加或当作新增订单；不启动供应商深搜。**

## 3. Noon NGS退货与FBN费用：本轮关键补正

### 3.1 以前已付款订单的后续退货会进入新周结算单

Noon Payment Processing Policy说明：
- 每周三生成statement；
- statement包括本期交付订单；
- 也包括**本期收到、此前已在早期statement付款的客户退货**；
- 正向周结算以扣除退货后的销售收入减去应付费用为条件。

因此原NGS Transfer Price到账不能建模为“退货后绝不调整”。但公开页面没有说明NGS妥投后TP究竟全额冲回、部分冲回还是通过其它项目调整。**具体金额与机制仍为UNKNOWN，必须等本账号真实statement/官方解释。**

### 3.2 可售/不可售退货分支

- 可售：转为当地FBN库存；最多60天仓储费豁免；后续本地FBN销售适用当地Referral/Outbound及后续仓储等费用。
- 不可售：Noon在UAE/KSA清货，卖家没有销售回款；NGS政策称免库存移除/销毁费；RTV费用和时效未公开。
- 若可售退货转FBN后再次销售，不能沿用NGS的“按TP结算且无跨境扣费”直接当作本地FBN净回款。

### 3.3 FBN outbound非退货可退费用

Noon KSA官方计算规则：
- outbound fee在FBN订单首次达到Delivered或NDR时触发；
- **订单后来退货，该outbound fee不退**；
- 包装分类按最长/中间/最短边判断；
- shipping weight = 商品物理重量 + 对应包装材料重量，并按最接近50g取整；
- Standard envelope的尺寸限制为最长边≤33cm、中间边≤23cm、最短边≤2.5cm；Standard parcel的几何上限明显更大。

条件费率示例（KSA，自2026-09-10费率表）：All other bags Referral 25%；Travel Luggage 20%；Toys 14%；Hair & Personal Care按Generic/品牌与ASP区分；Colour Cosmetics按Generic/品牌区分。Standard parcel 0.25–0.50kg outbound为SAR7.5（ASP≤25）/SAR9.5（ASP>25）。

这些只是条件费率，目标SKU的Seller Lab叶类、Brand/Generic、尺寸和重量均未验收。不能提前套用某一费率。

## 4. Amazon中东站责任复核

- Amazon中国全球开店官方页面列出UAE/Saudi站点；中国主体实际KYC仍未验证。
- 对非UAE/非Saudi居民，若使用当地FBA向当地买家供货，Amazon中国官方VAT说明要求从第一笔当地FBA销售起承担当地VAT注册义务；页面描述30天申请窗口，实际税务时点仍应由专业税务顾问确认。
- Amazon服务条款说明，除非另有约定，卖家承担EOR/IOR责任，Amazon及关联方不作为EOR/IOR。不能把Amazon仓库或SEND承运服务理解成Amazon自动成为进口商。
- Amazon中国页面区分FBA与MFN；本项目15项清单当前明确按FBA闭环维护，不把MFN当作免税/免进口责任捷径。

## 5. V2 Top10及14个SKU完整审计

排名较前一轮全部不变（→）。A–K顺序为：A真实需求14、B单位经济16、C通用性12、D中国供应链12、E物流10、F竞争10、G复购6、H售后6、I合规5、J运营5、K Owner优势4。每项风险值为概率×影响（满分25）。

| 排名 | SKU | O/Ev/DC | A-K | Top5风险（名称/分） | Hard Stop | 100件最坏亏损 | Channel Gate |
|---:|---|---|---|---|---|---|---|
| 1 | 轻量3/4件化妆/旅行收纳包 | 78/90/73 | 14/11/10/10/7/8/2/6/5/4/1 | 整包重量/体积 (20/25)；NGS最终零售价 (20/25)；中国到深圳成本 (16/25)；拉链缝线异味 (12/25)；SKU膨胀 (12/25) | 无已证产品固有Hard Stop；渠道闸门仍NO-GO | UNKNOWN / null | NO-GO |
| 2 | 硅胶沐浴刷 | 78/82/84 | 13/12/10/10/10/8/1/4/4/5/1 | 价格战 (15/25)；肤感/软硬度主观评价 (12/25)；低复购导致LTV低 (10/25)；低质硅胶异味 (9/25)；平台类目/费用误判 (8/25) | 无已证产品固有Hard Stop；渠道闸门仍NO-GO | UNKNOWN / null | NO-GO |
| 3 | 10件便携化妆刷+收纳袋 | 76/91/82 | 13/10/11/10/10/6/1/4/4/5/2 | Noon最终价与送仓费用 (20/25)；掉毛/扎脸 (16/25)；价格战/本地快送 (16/25)；胶水气味/卫生 (12/25)；换款SKU膨胀 (9/25) | 无已证产品固有Hard Stop；渠道闸门仍NO-GO | UNKNOWN / null | NO-GO |
| 4 | 旅行分装瓶套装 | 75/76/84 | 11/14/11/11/7/8/1/3/4/3/2 | 漏液 (20/25)；公开报价BOM仍需实际确认 (12/25)；喷头/泵头耐久 (9/25)；Amazon类目费率未确认 (9/25)；TSA等宣称误用 (8/25) | 无已证产品固有Hard Stop；渠道闸门仍NO-GO | UNKNOWN / null | NO-GO |
| 5 | 粘毛滚+refill | 74/83/80 | 14/5/10/9/7/6/6/6/5/5/1 | 市场可接受价低于跨境盈利需要价 (20/25)；多refill包装偏厚 (12/25)；价格竞争 (12/25)；小批量MOQ偏高 (9/25)；粘性/撕线/refill兼容 (6/25) | 无已证产品固有Hard Stop；渠道闸门仍NO-GO | UNKNOWN / null | NO-GO |
| 6 | 8件套强抓力抓夹 | 70/92/78 | 13/8/10/11/7/6/1/3/5/4/2 | SAR25低客单限制TP (20/25)；NGS最终消费者售价未知 (20/25)；弹簧/塑料齿断裂 (12/25)；颜色组合造成库存分散 (12/25)；供应套装与Saudi畅销结构不完全同款 (12/25) | 无已证产品固有Hard Stop；渠道闸门仍NO-GO | UNKNOWN / null | NO-GO |
| 7 | 穿戴甲（胶贴优先） | 67/92/80 | 14/7/9/10/10/4/2/3/4/3/1 | 低价带锁死 (20/25)；NGS最终零售价 (20/25)；款式生命周期 (15/25)；尺寸/弧度 (12/25)；胶贴牢固度 (12/25) | 无已证产品固有Hard Stop；渠道闸门仍NO-GO | UNKNOWN / null | NO-GO |
| 8 | 无IP串珠手机/包挂 | 68/84/76 | 8/11/10/10/10/7/1/2/5/4/0 | 真实成交强度不足 (20/25)；趋势半衰期短 (15/25)；未经授权IP (20/25)；绳结/串珠断裂 (12/25)；UAE成交未验证 (12/25) | 未授权IP设计 Hard Stop | UNKNOWN / null | NO-GO |
| 9 | 线材整理/编织套管 | 69/63/58 | 10/6/11/10/10/5/1/6/5/4/1 | AED25-30低价带压缩Amazon利润 (16/25)；同质化价格战 (12/25)；粘胶或套管质量不稳 (8/25)；跨市场证据不足 (9/25)；复购弱 (8/25) | 无已证产品固有Hard Stop；渠道闸门仍NO-GO | UNKNOWN / null | NO-GO |
| 10 | 化妆海绵/粉扑套装 | 67/78/68 | 12/7/10/10/10/6/2/2/4/3/1 | 低售价导致Amazon经济性差 (15/25)；肤感/回弹主观性 (16/25)；皮肤接触品质风险 (12/25)；品牌心智 (9/25)；颜色/形状SKU膨胀 (6/25) | 无已证产品固有Hard Stop；渠道闸门仍NO-GO | UNKNOWN / null | NO-GO |
| WATCH | 合法原创毛绒包挂/盲盒挂件 | 69/67/58 | 10/9/10/10/9/6/2/5/5/2/1 | IP授权/正品链路不成立 (25/25)；成熟IP需求不能外推Generic原创 (20/25)；趋势半衰期短 (16/25)；仿品/信誉风险 (16/25)；NGS玩具/材料合规需单独确认 (12/25) | Hard Stop | UNKNOWN / null | NO-GO |
| WATCH | 汽车前挡遮阳 | 64/82/72 | 14/7/8/10/4/7/0/4/5/4/1 | 尺寸不适配 (16/25)；体积物流成本 (16/25)；价格战 (12/25)；无复购 (10/25)；伞骨/面料耐久 (9/25) | 无已证产品固有Hard Stop；渠道闸门仍NO-GO | UNKNOWN / null | NO-GO |
| WATCH | 翰林生物面膜 | UNSCORED | N/A | 未评分/未建立 | FROZEN：无翰林启动信号 | UNKNOWN / null | NO-GO |
| WATCH | 微纤维清洁布 | UNSCORED | N/A | 未评分/未建立 | WATCH：未评分 | UNKNOWN / null | NO-GO |

**数据完整性：**
- 14/14 canonical SKU文件存在；12个历史评分、2个未评分。
- travel-bottles主表75 vs 41子项和74；phone-charm-beaded主表68 vs 独立41子项和69；冲突保留。
- 所有14个SKU的认证100件最坏亏损仍为UNKNOWN/null；没有真实上界输入。
- 目标利润15%不是实测结果，任何TP网格均为情景，不是平台批准报价。

## 6. 需求/利润判断

- **需求强但经济性不通过：** 基础穿戴甲（真实需求主要集中低价段）；高客单SAR35–49未证实；低价粘毛滚和化妆海绵也受跨境成本挤压。
- **相对风险结构最稳：** 硅胶沐浴刷（B=12/16、标准化、无漏液）；但没有真实同BOM成本、NGS消费者价、退货数据，不能称为已证实利润最稳。
- **化妆包：** 仍是Top1候选，但15%安全利润没有通过；4件套不天然轻小。
- **原创IP：** C03显示GCC设计师玩具渠道已有THE MIDI/MUSE等分销结构；HEYONE已有Saudi/UAE官方DTC直邮路径；YONNNA中国首发日期可查，但同系列GCC首笔实付日期未知，时间差不计算。任何第三方IP无书面授权Hard Stop。
- **翰林面膜：** 无新启动信号，继续FROZEN。

## 7. 双渠道First Sale Readiness

### Noon NGS：1/12 = 8.33%

唯一完成项：UAE GCC Picks店，依据2026-11-01 Work049/055历史验收；本轮没有重新登录。

其余11项阻塞：
- Organization ID：没有独立归档凭证。
- KSA Store：无创建/验收凭证。
- China Legal Entity approval：未提交/未批准；上次NGS Not Eligible具体原因未知。
- NGS warehouse：无中国库存管理仓和NGS配送模型验收；不等于深圳集货仓。
- Payout approved：无获批收款方式凭证。
- First SKU QC：无具体类目/品牌路径/QC批准。
- Transfer Price live：无批准TP、库存及live offer。
- First order：无本店真实付款订单。
- Shenzhen handoff：无订单对应交仓记录。
- Delivered：无妥投凭证。
- First payout：无statement、bank transaction ID及实际到账。

### Amazon FBA：0/15 = 0%

- China seller account：无账户审批/KYC。
- UAE account：未创建/验收。
- Saudi account：中国卖家路径已公开，但实际账户KYC未验收。
- VAT：UAE/Saudi FBA非居民注册义务未完成。
- IOR/import：无具名IOR、报关行/货代委托、DDP报价和单证责任分配。
- SKU locked：未通过渠道、成本、合规和15%门槛。
- 3 supplier quotes：无3份同BOM正式报价。
- final packed weight：无最终包装重量/尺寸。
- sample QC：无样品验收。
- listing ready：无合规英阿Listing、图片权利和类目/GTIN批准。
- FBA shipment created：无货件/箱标。
- inventory received：无入仓记录。
- ads live：未投放。
- first order：无真实订单。
- first payout：无结算与到账凭证。

**Browser限制：** 本轮只读尝试列出已连接浏览器标签时返回Browser access requires the originating browser context。因此没有Seller Lab实时状态，不把历史店铺验收冒充今日重新验证。

## 8. 次日只安排三个最高价值任务

1. Owner侧只读预检现有中国Commercial Registration（如存在）：经营范围、有效期、登记所有人/授权代表及收款受益人匹配；不上传、不提交、不新办主体。
2. 仅在有originating browser context的授权会话中，读取原Seller Lab的NGS Not Eligible原因、China LE、Payout、Selling Origin、Invoicing Profile；只读，不修改。
3. 不重新扩SKU/供应商。只有出现独立同BOM实付、合格RFQ或补货证据，才回查供应链并实测最终包装尺寸/重量，计算NGS及退货转FBN两条经济性。

## 9. 官方及商品来源

- [Noon NGS项目与退货](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)
- [Noon付款处理政策](https://helpcenter.noon.partners/en/category/finance-and-payments/payments-processing-policy)
- [Noon KSA FBN费率](https://helpcenter.noon.partners/en/category/fulfilled-by-noon-fbn/fulfilled-by-noon-fbn-fees-in-ksa)
- [Noon KSA FBN outbound计算规则](https://helpcenter.noon.partners/en/category/fulfilled-by-noon-fbn/how-to-calculate-the-fbn-outbound-fee-and-the-inventory-removal-fee-in-ksa)
- [Homecentre KSA四件化妆包](https://www.homecentre.com/sa/en/buy-travel-mate-cosmetic-bag-set-of-4/p/166098923)
- [Centrepoint KSA四件化妆包](https://www.centrepointstores.com/sa/en/buy-assorted-4-piece-cosmetic-pouch-set/p/167828429)
- [Saudi Nailosophy SAR49穿戴甲](https://www.noon.com/saudi-en/handmade-gel-press-on-nails-classic-nude-white-french-tip-square-shape/ZB7BFD6983F6EF70DFC99Z/p/)
- [Saudi Press-on Nails榜单](https://www.noon.com/saudi-en/best-sellers/press-on-false-nails/)
- [Amazon中国全球开店中东站](https://gs.amazon.cn/middle-east)
- [Amazon UAE/Saudi FBA VAT说明](https://gs.amazon.cn/middle-east/uae-vat)
- [Amazon IOR/EOR条款](https://sellercentral.amazon.ae/help/hub/reference/external/G27F6UHDSSHW6WXF)

**最终决策：HOLD / CONDITIONAL_RESTART。** Noon NGS第一、Amazon FBA第二；不采购、不上架、不投广告、不做未经授权IP销售。
