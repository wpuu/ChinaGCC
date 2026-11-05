# ChinaGCC｜2026-11-05 C09｜C08真实Seller Lab状态与日报收口独立核验

**Audit ID** `2026-11-05/C09-ACCOUNT-C08-DAILY-RECONCILIATION`。模型偏好GPT-6 Extra High；无法验证本次实际思考等级，不虚称切换。证据等级：A官方政策；B1授权真实Seller Lab截图/原文报告；B2平台公开商品页和售出标签；U未获得账号级、供应商或实付证据。

## 1. 今日新增可执行结论

2026-11-05约18:20–18:26（北京时间）[C08一手记录](https://github.com/wpuu/ChinaGCC/blob/main/research/2026-11-05/CHINAGCC_C08_WORK049_NOON_SELLER_LAB_READ_ONLY_EVIDENCE.md)通过原Work049/Ego空间5只读观察：
- UAE `GCC Picks`出现在Store Dashboard/My Stores；**不需要重建店铺**。当前菜单只列该店，未遍历其他Org，KSA店仍UNKNOWN。
- `Submit your legal entity`仍`Required`；Legal Entities页逐字出现`No Valid Legal Entities Found`及`You need to provide your commercial registration/trade license tax information.`；这表明可见页面无有效LE，并不能证明某项中国登记提交后被驳回。
- `Add your bank account`入口可见，但尝试点击Get started返回`element is disabled`；**不能由此推断Payout已批准或已拒绝**。Receiving Payments/Origin及Invoicing Profile状态U。
- `xborder.noon.partners/en-ae/programs`仍显示`Programs are coming soon!`及`Your store doesn’t qualify for any cross-border programs at the moment.`，没有中国NGS专项名称/拒绝标识或原因。准确分类：`GENERIC_XBORDER_LIST_INELIGIBLE`，`CHINA_NGS_SPECIFIC_STATUS_UNVERIFIED`；绝不能将其改写为“China NGS专项审核正式拒绝”。
- 2026-11-02既存Noon邮件`Create your Legal Entity`也证实GCC Picks已创建且须继续法定实体注册，但该提醒不是已提交LE获批凭证。
- 本C09只读整理与GitHub报告同步；没有进入账号、提交文件/条款、创建主体、收款工具、SKU或仓库，不做外联、采购、上架、广告。

## 2. 现实流程复盘

1. **人群**：Saudi女性18–45 P1、UAE女性18–39 P2；female Gen Z/学生是潮流发现优先，不等于购买力或转化率已证实。25–39女性和年轻家庭是购买场景观察，50+ WATCH。无新个人群层级的实付证据，不重排。
2. **发现渠道**：Saudi Snapchat、TikTok、Instagram；UAE TikTok、Instagram、Snapchat。广告覆盖或评论不等于成交。Noon Finds对本店归因尚U。
3. **现实成交**：Noon **中国NGS第一**（政策路径有效但本账户无批准LE），Amazon UAE/Saudi第二（中国全球开店站点可用但本项目未获Seller Central审批）。发现平台不得冒充成交入口。
4. **购买触发**：收纳/旅行、快捷发饰、节日与婚礼甲片、个性礼赠/原创收藏；触发→付款归因仍U。
5. **SKU→中国供应链**：Top10保持，C05–C07已经复核平台甲片标签与单品BOM，不新增真实同BOM付款订单/RFQ/补货，故不触发供应商深搜。KHAJUL 24片“胶贴”标题但详情含`one small glue stick`，形态U，禁止当作纯胶贴无液体胶同BOM完成；原SKU文件C07已记录，无需重复改写。
6. **单位经济性**：硅胶沐浴刷风险调整后结构相对稳定，仍非实测15%利润。基础穿戴甲、低价粘毛滚及海绵需求线索强/客单薄，低价制约盈利。Saudi SAR35–49穿戴甲同BOM近期真实实付仍`NOT_PROVEN`，标价与销量标签不能作独立交易。
7. **四件化妆包**：目标3/4件套最终零售包毛重/尺寸、同BOM3家报价、深圳逐单费用、NGS消费者结账价及ETA全部U，15%贡献利润`NOT_PROVEN`。PVC竞品商品尺寸不等于棉质/绗缝目标套装整包。
8. **原创IP与翰林**：中国与GCC同系列首笔付款日期未成对，趋势时间差U；未经书面授权IP Hard Stop，现存分销不构成可售授权。翰林面膜继续FROZEN，没有解冻条件。

## 3. Top10：O/Ev/DC、A–K十一维、五项风险、硬停、100件亏损及渠道闸门

A–K依次：需求、经济性、通用性、供应链、物流、竞争、复购、售后、合规、运营、Owner优势。分数是历史V2工作值，风险是历史模型值（满分25），**非本日重算**。

| 排名/变化 | SKU | O/Ev/DC | A–K | Top5风险及风险值 | Hard Stop | 100件认证最坏亏损 | Channel Gate |
|---|---|---|---|---|---|---|---|
| 1 → | 轻量3/4件化妆/旅行收纳包 | 78/90/73 | 14/11/10/10/7/8/2/6/5/4/1 | 整包重量/体积:20；NGS最终零售价:20；中国到深圳成本:16；拉链缝线异味:12；SKU膨胀:12 | false | UNKNOWN | NO-GO |
| 2 → | 硅胶沐浴刷 | 78/82/84 | 13/12/10/10/10/8/1/4/4/5/1 | 价格战:15；肤感/软硬度主观评价:12；低复购导致LTV低:10；低质硅胶异味:9；平台类目/费用误判:8 | false | UNKNOWN | NO-GO |
| 3 → | 10件便携化妆刷+收纳袋 | 76/91/82 | 13/10/11/10/10/6/1/4/4/5/2 | Noon最终价与送仓费用:20；掉毛/扎脸:16；价格战/本地快送:16；胶水气味/卫生:12；换款SKU膨胀:9 | false | UNKNOWN | NO-GO |
| 4 → | 旅行分装瓶套装 | 75/76/84 | 11/14/11/11/7/8/1/3/4/3/2 | 漏液:20；公开报价BOM仍需实际确认:12；喷头/泵头耐久:9；Amazon类目费率未确认:9；TSA等宣称误用:8 | false | UNKNOWN | NO-GO |
| 5 → | 粘毛滚+refill | 74/83/80 | 14/5/10/9/7/6/6/6/5/5/1 | 市场可接受价低于跨境盈利需要价:20；多refill包装偏厚:12；价格竞争:12；小批量MOQ偏高:9；粘性/撕线/refill兼容:6 | false | UNKNOWN | NO-GO |
| 6 → | 8件套强抓力抓夹 | 70/92/78 | 13/8/10/11/7/6/1/3/5/4/2 | SAR25低客单限制TP:20；NGS最终消费者售价未知:20；弹簧/塑料齿断裂:12；颜色组合造成库存分散:12；供应套装与Saudi畅销结构不完全同款:12 | false | UNKNOWN | NO-GO |
| 7 → | 穿戴甲（胶贴优先） | 67/92/80 | 14/7/9/10/10/4/2/3/4/3/1 | 低价带锁死:20；NGS最终零售价:20；款式生命周期:15；尺寸/弧度:12；胶贴牢固度:12 | false | UNKNOWN | NO-GO |
| 8 → | 无IP串珠手机/包挂 | 68/84/76 | 8/11/10/10/10/7/1/2/5/4/0 | 真实成交强度不足:20；趋势半衰期短:15；未经授权IP:20；绳结/串珠断裂:12；UAE成交未验证:12 | 未授权IP Hard Stop | UNKNOWN | NO-GO |
| 9 → | 线材整理/编织套管 | 69/63/58 | 10/6/11/10/10/5/1/6/5/4/1 | AED25-30低价带压缩Amazon利润:16；同质化价格战:12；粘胶或套管质量不稳:8；跨市场证据不足:9；复购弱:8 | false | UNKNOWN | NO-GO |
| 10 → | 化妆海绵/粉扑套装 | 67/78/68 | 12/7/10/10/10/6/2/2/4/3/1 | 低售价导致Amazon经济性差:15；肤感/回弹主观性:16；皮肤接触品质风险:12；品牌心智:9；颜色/形状SKU膨胀:6 | false | UNKNOWN | NO-GO |

另外四个观察SKU（未评分不得编造分数）：

| 排名/变化 | SKU | O/Ev/DC | A–K | 风险 | Hard Stop | 100件认证最坏亏损 | Channel Gate |
|---|---|---|---|---|---|---|---|
| 观察 NEW | 合法原创毛绒包挂/盲盒挂件 | 69/67/58 | 10/9/10/10/9/6/2/5/5/2/1 | IP授权/正品链路不成立:25；成熟IP需求不能外推Generic原创:20；趋势半衰期短:16；仿品/信誉风险:16；NGS玩具/材料合规需单独确认:12 | 未授权IP Hard Stop | UNKNOWN | NO-GO |
| 观察 -3 | 汽车前挡遮阳 | 64/82/72 | 14/7/8/10/4/7/0/4/5/4/1 | 尺寸不适配:16；体积物流成本:16；价格战:12；无复购:10；伞骨/面料耐久:9 | false | UNKNOWN | NO-GO |
| 观察 → | 翰林生物面膜 | U/U/U | U | U（未评分） | U | UNKNOWN | NO-GO |
| 观察 → | 微纤维清洁布 | U/U/U | U | U（未评分） | U | UNKNOWN | NO-GO |

全部14个SKU `certifiedWorstLoss100 = null`；历史USD预算仅属情景，不是最大亏损上界。旅行瓶主表75与独立子项74、串珠挂件主表68与独立子项69的冲突不擅自消除。实际贡献利润只允许在同BOM成本、最终包装、深圳交仓费、TP、真实最终结账价、退货和PSP费齐备后认证。10%丢失TP假设下15%毛利成本红线`0.765×TP`是压力演算，**不是实际达到15%**。

## 4. Noon中国NGS First Sale Readiness：1/12（8.33%）

| 项 | Status | 证据或具体阻塞 |
|---|---|---|
| 1. Organization ID | UNKNOWN_NOT_INDEPENDENTLY_VERIFIED | 未归档可核验Organization ID凭证；不能仅由UAE店存在推定验收 |
| 2. UAE Store | DONE | GCC Picks于2026-11-01通过Work049/055后台验收；本轮未重新登录 |
| 3. KSA Store | NOT_VERIFIED | 无KSA Store创建及后台验收证据 |
| 4. China Legal Entity approval | NOT_DONE | China LE未提交/未批准；上次NGS Not Eligible原因未知 |
| 5. NGS warehouse | NOT_DONE | 未验收中国库存管理仓及NGS delivery model；库存仓不等于深圳集货仓 |
| 6. Payout approved | NOT_DONE | 无银行/Payoneer/LianLian/WorldFirst/PingPong获批凭证 |
| 7. First SKU QC | NOT_DONE | 无首SKU类目、内容、品牌/Generic路径和QC批准 |
| 8. Transfer Price live | NOT_DONE | 无Seller Lab批准TP、库存和live offer证据 |
| 9. First order | NOT_DONE | 无本店真实买家付款订单 |
| 10. Shenzhen handoff | NOT_DONE | 无订单对应深圳集货仓交接记录 |
| 11. Delivered | NOT_DONE | 无平台妥投记录 |
| 12. First payout | NOT_DONE | 无对账单、付款交易ID及实际到账记录 |

最新纠偏：`China Legal Entity approval`不是“资料提交待审批”，而是C08可见页面明确无有效LE；`NGS Not Eligible`只属于未标专项的通用Programs列表。Organization存在是历史局部证据，唯一Organization ID仍缺可归档验收值。

## 5. Amazon UAE/Saudi FBA First Sale Readiness：0/15（0%）

| 项 | Status | 具体阻塞 |
|---|---|---|
| 1. China seller account | NOT_VERIFIED | 无全球开店账户审批/卖家后台证据；需真实中国主体、身份证明及国际信用卡 |
| 2. UAE account | NOT_DONE | 未提交/未验收UAE站卖家账户 |
| 3. Saudi account | NOT_DONE | Amazon中国全球开店已公开列出Saudi站点；Amazon.sa本地CR要求针对位于KSA的企业。中国主体的实际Seller Central KYC/国家资格仍未申请或验收。 |
| 4. VAT | NOT_DONE | 未取得UAE/Saudi FBA对应VAT注册；非居民FBA无销售额门槛，需依法在首笔当地FBA销售触发时注册 |
| 5. IOR/import | NOT_DONE | 无具名进口商、报关行/货代IOR委托、DDP报价及进口单证责任分配；Amazon不作为FBA进口商 |
| 6. SKU locked | NOT_DONE | 未通过渠道准入、同BOM成本、合规与15%利润门槛锁定首SKU |
| 7. 3 supplier quotes | NOT_DONE | 无3份同BOM、含MOQ/交期/包装的可执行正式报价 |
| 8. final packed weight | NOT_DONE | 无最终零售包装毛重、长宽高和计费重实测 |
| 9. sample QC | NOT_DONE | 无样品和验收记录 |
| 10. listing ready | NOT_DONE | 无合规英阿Listing、图片权利、品牌/类目/GTIN批准 |
| 11. FBA shipment created | NOT_DONE | 未建立Seller Central FBA货件及箱标 |
| 12. inventory received | NOT_DONE | 无Amazon仓库收货和可售库存证据 |
| 13. ads live | NOT_DONE | 未创建或启动Sponsored Products |
| 14. first order | NOT_DONE | 无真实买家付款订单 |
| 15. first payout | NOT_DONE | 无结算单和银行/收款工具到账证据 |

Amazon中国全球开店官方UAE/Saudi路径存在；本地FBA的目的国VAT、具名进口商IOR及DDP责任仍须独立核实。Noon NGS豁免目的国VAT的专项规则不能移用Amazon。

## 6. 官方规则/会计边界

[Noon中国NGS](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)：有效中国Commercial Registration、深圳集货后Noon负责国际物流清关税费、卖家上传USD Transfer Price、成功妥投按TP付款。真实账户申请和受益所有人审查未完成。
[Payout/Origin](https://helpcenter.noon.partners/en/category/onboarding-and-registration/how-to-add-the-bank-details-in-the-legal-entity)：**获批收款方式仍须映射到Selling Origin**，否则不能转款。
[Invoicing Profile](https://helpcenter.noon.partners/en/category/global-selling/how-to-setup-the-invoicing-profile-for-global-selling)：按Origin关联LE、合同和付款方式；账户当前此项U。
[Amazon中国全球开店](https://gs.amazon.cn/middle-east)：官方提供UAE/Saudi注册路径及FBA VAT说明，实际KYC/IOR U。
NGS原首单的TP平台费用安排，不能套到可售退货后改用当地FBN再出售；不可售退货可能无回款，NGS已支付TP未来冲回方式U。通用Generic退货保护NG=0的规则是否用于中国NGS亦U。

## 7. 三个阻塞与次日3项最高价值验证

**最大阻塞**：①China LE无有效实体及NGS专项资格U；②Payout Approved、Origin mapping、Invoice Profile均U；③目标SKU真实同BOM成本/包装/QC/TP买家价/退损缺失，100件最坏损失无法上界认证。

**11月6日只安排3项**：①仅在已授权真实浏览器会话可见时读取`Store Management→Legal`的LE与Payout/Origin/Invoicing以及**中国NGS专项名与资格原文**（不可用即止，不重复通用空页）；②针对24片纯胶贴甲核实配件全BOM及SAR35–49的真实同BOM付款证据，没有即保持P2；③仅在合法账户和需求闸门有效时，向目标3/4件化妆包同BOM真实包装/深圳单票费用/TP/最终价闭环推进，未解锁则暂不采购不注册不广告。

**商业最终裁决：HOLD / CONDITIONAL_RESTART。** 本日新增真实独立付款0、同BOM可执行RFQ0、补货0、销售/妥投/到账0。评分及Top10位置不变。C09只提交证据文件，不算商业经营成功。
