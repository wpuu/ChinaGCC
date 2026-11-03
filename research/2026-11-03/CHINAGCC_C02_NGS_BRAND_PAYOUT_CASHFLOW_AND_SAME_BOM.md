# ChinaGCC 2026-11-03 C02｜NGS品牌审核与首单回款门槛、同BOM需求及V2核算
执行时间基准：2026-11-03北京时间下午；仅公开网页与既有GitHub记录。未登录/提交Noon账号，未上传证件、采购、上架、投放广告或联系供应商。模型优先 GPT-6 Extra High，实际思考等级没有可验证的运行凭证。

## 1. 执行顺序与人群边界
**人群**：Saudi女性18–45、UAE女性18–39、female Gen Z/学生优先；年轻家庭次级；50+仅WATCH。**发现/种草**：TikTok、Snapchat、Instagram、Noon Finds；尚无本项目社媒→成交归因，不能把播放量当订单。**结账**：Noon中国NGS第一、Amazon UAE/SA第二。**购买触发**：日常形象更新、快速修甲、旅行收纳和个人化礼赠（均是产品假设，非已证实转化）。**产品族→SKU**：小包、8件发抓、24片纯胶贴甲、原创无IP挂件；正版原创盲盒作为趋势观察，缺销售权不作为采购品。**需求证据先于供应链**：本轮没有取得独立付款记录、同BOM RFQ、补货台账；没有启动中国供应商深查。**单位经济性/风险**详见后文。

## 2. 新增一手官方闸门——Brand Approval（此前首单模型中易遗漏）
[Noon品牌注册政策](https://helpcenter.noon.partners/en/category/product-listing/brand-registration)：noon明确「only for products from verified brands」。可以在品牌申请Pending时预建Seller SKU，但**产品不能go live，直到品牌获准**。品牌申请界面位于 Seller Lab → Catalog → My Brands；新品牌要求英/阿文名称、Logo、网站链接或可供真实性验证的社媒页面。页面允许请求后创建SKU，但不等于可上架，更不表示任何未授权IP可以申请通过。对原创自有设计或普通白牌，本项目须先核验具体品牌/Generic适用路径，不能自动假设「无IP=无需品牌审批」。

**新增硬性放行判据**：每个准备首售SKU必须记录 `brandApprovalStatus` 和 `brandRightsVerified`；当前均 `UNKNOWN`（非Rejected，也非Approved）。原有China Legal Entity/NGS资格/QC与新品牌闸门是独立门槛。关于真实完整审核周期，品牌及Legal Entity没有官方承诺的总天数；不能把仓库订单Processing Time写成店铺审核期。

## 3. 新增回款现金流风险——Payment Processing Policy
[Noon官方付款处理政策](https://helpcenter.noon.partners/en/category/finance-and-payments/payments-processing-policy)：周三出对账单，UAE/KSA一般在下一周周四处理符合要求的付款；取决于结算货币，**同币种银行账户阈值100 AED/SAR，异币种银行账户阈值1000 AED/SAR**；不足时余额顺延到后续结算周期。这里是**通用官方付款政策，NGS是否完全使用同一银行币种/阈值路径需以账户实际结算证实**，不可把它改写成NGS专属收费，也不可保证实际到账日。NGS专项官方页面同时写明：新中国卖家开卖前要有有效付款方式，妥投后以USD Transfer Price为应付额、不另外扣除国际运费；[Selling Origin映射政策](https://helpcenter.noon.partners/en/category/onboarding-and-registration/how-to-add-the-bank-details-in-the-legal-entity)规定付款方式批准后还要与对应来源绑定。

现金流判定：只有 `Payout Approved` 不足以称可提现；还需 `Selling Origin linked`、结算币种/阈值/实付账单的截图或财务记录。目前上述事实均未在用户店铺本轮核实。

## 4. 平台同BOM线索，严格区分商品页与付款
- [UAE Noon：MiMi & BeiBei 24片胶贴甲](https://www.noon.com/uae-en/24pcs-press-on-nails-false-nails-fake-nails-set-for-women-girls-nail-art-accessories-press-on-nail-with-glue-stickers-for-easy-apply-stick-on-fingernails-set/Z81BA855B31B50C205F7CZ/p/)：历史页面约AED28，描述含24片甲、胶贴、甲锉、推皮棒，标示2条评价且仅剩1件；页面为约4个月前索引，**不足以证明2026-11-03真实缺货或新增订单**。相较含液体胶竞品更贴近「纯胶贴套装」，但甲型、甲片材质、胶贴张数与质量未知，不能冒充同一BOM。
- [Saudi Noon：四件套网眼收纳包](https://www.noon.com/saudi-en/housoutil-4pcs-mesh-cosmetic-travel-bag-set-nylon-toiletry-organizer-mini-makeup-holder/ZEDBC0AA1A9C145B64EDEZ/p/)：历史挂牌SAR97.70，4件网布而非目标四件绗缝轻量包；仅证明平台存在同数量、不同BOM类目，不能证明目标SKU需求或可承受的NGS消费者价格。
- WAKUKU/NOMMI等历史Noon页面不能证明品牌授权、真实性或首次GCC实付日期；2026-11-03本轮新增可比的中国/GCC首次支付日配对：0。原创IP趋势时间差 `UNKNOWN`，不反向推断无GCC铺货。

证据等级：上方品牌/财务/NGS为一手官方政策（政策适用性仍需账户实审）；Noon消费者商品页为平台挂牌与库存提示（历史弱信号，非订单流水）；历史仓库验证的UAE GCC Picks店为2026-11-01现场验收快照，不是今天的新登录。

## 5. 四SKU NGS数学复核与压力情景
[Noon NGS官方机制](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)：卖家申报USD Transfer Price，noon掌握消费者端markup；卖家负担中国采购、包装、深圳集货仓前国内运费。不可售退货没有TP收益；可售退货可能转当地FBN，适用另一套费率。**消费者商品页的AED/SAR展示价不是卖家USD Transfer Price，也不能推导markup**。

在完全假设的场景下：TP=t，无法取得TP收益的订单比例q，贡献利润目标m=15%，不计另行的固定成本与可售退货额外收费时，允许的**全部卖家单位成本**上限为 `(1-q)×t×(1-m)`。不含实际回款对账、退款争议或特定平台手续费。此处q不是实际退货率。
| SKU | ID | 历史V2机会/置信/完整 | 假设TP USD | q=0允许成本 | q=10%允许成本 | q=25%允许成本 |
|---|---|---|---|---|---|---|
| 四件绗缝化妆包 | cosmetic-bag-set | 78/90/73 | 4.5–6.5 | 3.825–5.525 | 3.442–4.973 | 2.869–4.144 |
| 8件发抓 | hair-accessories | 70/92/78 | 2.4–3.4 | 2.040–2.890 | 1.836–2.601 | 1.530–2.167 |
| 24片纯胶贴甲 | press-on-nails | 67/92/80 | 1.5–2.3 | 1.275–1.955 | 1.147–1.759 | 0.956–1.466 |
| 原创无IP串珠挂件 | phone-charm-beaded | 68/84/76 | 1.7–2.7 | 1.445–2.295 | 1.300–2.066 | 1.084–1.721 |
**价格可行区间仍不可认证**：这个表只说明各TP假设对成本容忍度，不能证明Noon能将该TP转化为消费者可接受最终价。下一个数据门槛是同BOM新鲜成交及经授权的Seller Lab实际消费者端价、重量、单票国内交仓价、坏单/FBN费用。

**100件最坏亏损金额：四SKU均 `UNKNOWN_NOT_CERTIFIED`。** 100件完全滞销情景 `L=100×(含采购/包装/交仓的投入成本)+不可退固定成本−经核实残值`；100件已发、但全部不可售退货情景还必须加额外退货费用和任何已被追索款项，且不能算入未实际收到的TP。上述各项无可核实上下界，之前的USD止损预算不构成认证的最坏损失上限。

## 6. Issue #12 V2逐项诚信审计
[评分标准](https://github.com/wpuu/ChinaGCC/issues/12)分为100分Opportunity、100分Evidence Confidence、100分Data Completeness，硬性阻断不得由高分覆盖。主表现存14 SKU，13个画像字段均有键（部分值仅占位，不能计为实证完整）；12个保留历史三分，2个尚未评分，6个具备41个机会子项。旅行分装瓶主表75、41项加总74；手机串珠挂件主表68、独立文件41项合计69，**差异不得擅自消去**。仅可以计算已有子项、记录不一致；**不新增虚构41项评分，也不伪称重新验证Evidence/Data两分**。

四个重点的有条件优点：化妆包无尺寸兼容问题（长期、通用，可核功能），但4件套实际交仓重量未知；发抓轻量直观造型演示（中期、竞争同质），但8件目标同BOM销量未知；纯胶贴甲快速更换款式（短-中期，需尺寸及胶贴QC），但肤感、附着力与质量敏感；原创无IP挂件礼赠和视觉表达容易（时效随潮流变化），但无可迁移的独立成交。以上商业影响多为推断，**不是验证后的现金利润**。

四SKU已有各自Top5风险矩阵（含概率×影响）在独立JSON原字段保留，本轮新增必须额外审核的硬性阻断：未获批Legal Entity、NGS不适格、无可证实brand/Generic批准、产品QC/禁限售未过、无IP销售授权（涉及品牌IP时）。安全闸门和实证缺口在风险评分之外独立决定NO-GO。

## 7. 当前行动与禁止事项
UAE GCC Picks店于2026-11-01已有真实验收，**非今天重新核验**。China LE尚无提交/批准证据、NGS前次显示Not Eligible且原因未知、KSA店未知、Payout/Origin/Invoice/Brand/QC未知；结论依然NO-GO、Sample Ready=0、批准采购=0。下一次授权的只读核验应先查：NGS资格页具体原因、Legal状态原文、Catalog→My Brands现有状态、财务的已批准支付方式/来源映射/币种阈值；不要重复创建店铺，不提交证件。商品侧优先取目标4件包和纯胶贴甲的同BOM可靠订单/RFQ/补货，再查中国可替代供应商及深圳交仓单票运费。本轮没有独立新成交与同BOM补货，故不开展新的供应商搜索。
