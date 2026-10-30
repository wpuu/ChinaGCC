# ChinaGCC-033｜Noon 031实测回执合并、鸿良原SKU深圳运费证据、AED19转移价硬阈值

核验日期：**2026-10-31（北京时间）**。只读研究；**没有账号写入、结算/注册、购买、支付、下单、供应商联系、广告或上架**。  
最新已见main基线：`a6a01e2b50cef4ec34895a6c4a58e7a6f66352ca`（ChinaGCC-031 Work Ego Lite验收），先于本033。  
总判断：**NO_GO：注册主体/创建店铺/拿样采购/正式上架/广告；GO：只读补一个可复核的深圳单套报价及业务资格规则。** 禁止以历史假设代替利润证据。

## B线｜Work-031已完成，旧Ego连接故障不再是当前问题

真实可回读提交：[031 Work验收](https://github.com/wpuu/ChinaGCC/commit/a6a01e2b50cef4ec34895a6c4a58e7a6f66352ca)；[完整文件](CHINAGCC_031_NOON_ORIGINAL_ACCOUNT_EGO_READONLY_ACCEPTANCE.md)；[Issue #24当前置顶](https://github.com/wpuu/ChinaGCC/issues/24)。Work主代理＋Terra Medium子代理在2026-10-31 00:45—00:51北京时间**确实以正式Ego Lite读取原已登录账户**，不能再复用旧`Failed to connect to ego_cli bootstrap`当当前拦阻。

| 类目 | Work031原页面实际证据 | 本033决策 |
|---|---|---|
| Organization/Project | 组织Owner和原项目存在；脱敏记录在031 | 存在性PASS，不等于具备营业资格 |
| UAE/KSA Store | 当前项目Stores空列表 | **当前条件不满足**；没有被平台拒审的证据 |
| Legal Entity | 原样显示`No Valid Legal Entities Found` | **当前无有效LE**；未显示个体工商户是否可用 |
| Payment/Payout | 未取得实际审批状态 | UNKNOWN，**不得改写为不存在** |
| Origin/Invoicing Profile | 未见LE/收款关联 | UNKNOWN |
| NGS | 跨境页提示当前暂不符合任何项目，未给具体原因 | 当前不可开卖；不得推定NGS永久拒绝 |
| Generic刷具目录 | 可访问目录、自有0条；旧竞品URL反查`No noon SKUs found` | 不等于竞品不存在/Generic禁售 |
| 无货品消费者价格预览 | 未找到可用China NGS价/ETA入口 | UNKNOWN，不得用FBP/FBN计算器冒充 |

**推进纠偏：** 不需要再让Work核查同一个账号页面，不需要重注册，也不因为组织存在就启动店铺创建和LE资料提交。用户此前选择暂缓办执照，沿用该边界；真实主体类型能否接受（中国个体工商户 vs 有限公司）没有官方批准的账户级证据。下一次账户动作只有确实出现新证据和明确授权才执行。

## A线｜原义乌购鸿良商品及可验证程度

**主原始SKU（不可随意替代）**：[义乌鸿良 986877044 英文页面](https://en.yiwugo.com/product/detail/986877044.html)，更新时间2026-09-17：
- 商品：10支迷你化妆刷水晶/亚克力柄＋刷包；尼龙刷毛；颜色彩/黑/粉；无品牌；item no 9336541278；产地金华。
- 公开`EXW Price` **CN¥7.80／套，MOQ1**；¥6.80只适用≥500、¥6.50只适用≥1200。
- 页面自报95g/13×7×2cm；**不是物流公司最终计费毛重、外箱尺寸或实际检验**。
- 英文页面提供`Send Inquiry`、`Chat with supplier`，本轮未发任何内容。**没有在可读取公开页面取得锁定深圳宝安后“单套＋运费＋总价”的结算明细**。
- 本轮尝试读取中文`https://www.yiwugo.com/product/detail/986877044.html`及`https://wap.yiwugo.com/products/986877044`，当前公开网页读取工具分别不可访问；不据此断言商品下架或页面无报价功能。**没有真正打开已登录购物车/发起未支付报价**。
- 义乌购官方[运费模板说明](https://www.yiwugo.com/service/detail/6271.html)：店铺可以卖家包邮、买家到付或模板区分省份重量；**浙江默认运费和其他SKU的“免邮”均不可迁移到目标SKU深圳收货地址**。
- 预设验证唯一目的地：Noon中国NGS官方深圳宝安福海街道聚源工业区A区A栋1楼安邦0014；**地址仅用于计算运费，禁止下单发货、代签收、发送快递或联络该收货方**。
- 字段状态：`1_unit_exw_quote=7.80_cny_source_page`、`actual_shenzhen_freight=null`、`cart_total=null`、`actual_packed_gross_weight=null`、`sku_label_supplier_agreement=null`、`shenzhen_hub_handoff_sla=null`。
- 发货时间、转运拒收损失、错漏发/破损重发费用目前不能由MOQ1/平台“48小时发货”推断。

## 官方履约要求及严谨适用范围

[Noon中国NGS](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)明确：Seller确认订单、备货打包，**在已设置的Processing Time内送达/寄至深圳Noon集货仓**；深圳段以后才由Noon承担国际运输等。Noon品牌包装非必需，但**不能误称无商品标识/扫码要求**。官方NGS文章的打包说明指向[FBP Directship处理文档](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/how-to-process-directship-order-using-the-seller-lab)（涉及AWB二维码、创建Shipment及交接证据）；[Barcode Requirements](https://helpcenter.noon.partners/en/category/product-listing/barcode-requirements)适用于一般FBN/FBP的每个单位识别码。**NGS具体SKU订单码及供应商第三方代贴权限仍须真实NGS账户流程或官方明确规则确认；不把所有FBP/FBN特殊包装直接照搬。**

关键经营风险：若供应商只肯把普通快递寄到Noon中文地址，但不配合订单对应标签、按时交集货、签收/异常责任，则`MOQ1`仍不构成可执行的“一件代发”。不能用虚假的可售库存换测试订单。上架需要真实LE与店铺、商品QC、TP和库存等；当前都尚未具备。

## UAE AED19竞争基准｜只作历史压力测试，不作当天成交价

[Noon UAE Generic十支＋袋](https://www.noon.com/uae-en/10-pcs-makeup-brushes-set-with-pouch-eyeshadow-foundation-blush-concealer-brush-set-gray-blue/Z07CD335BBA6F4E884052Z/p/)公开网页抓取历史价**AED19**，曾标Noon Express次日达，商家Jihong Hub；网页索引约4—6个月前，**不属于2026-10-31实时AED19买家结账价和ETA**。其玉米纤维刷毛、木柄、尼龙袋与原鸿良尼龙毛/亚克力柄不严格同BOM；只作为低价竞品压力线。

根据[UAE政府固定汇率](https://u.ae/en/about-the-uae/fact-sheet)，1USD=3.6725AED；中国NGS[官方TP口径](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)为卖家自报USD Transfer Price，Noon另向买家收国际运费、税及加价，内部markup公式未公布。设`M`为所有跨境加价在AED19买家价中的AED额度（假设非负），必须满足：
`TP<= (19−M)/3.6725`。仅为**必要条件，不是平台披露的真实加价率**。
- 若M=0 AED → TP最高$5.174；
- M=4 AED → TP最高$4.084；
- M=5 AED → TP最高$3.812；
- M=8 AED → TP最高$2.995；
- M=10 AED → TP最高$2.451。

### 用032一致的模拟参数反推「深圳运费上限」

**全部是规划假设而非实价**：
- 采购¥7.80为鸿良公开挂牌价；包材/订单贴码履约`P=¥2.50`仅假设；实际深圳单票运费`S=UNKNOWN`；人民币净兑换`FX=6.50 CNY/USD`仅假设；净无收入率`q=10%`仅假设；目标**广告、税务、固定运营成本之前**保留20%贡献率。
- 模型：`预期收款/笔尝试订单=(1−q)×TP×FX`；`平均投入成本=7.80+P+S`；
  `20%毛贡献要求: TP >=(7.80+2.50+S)/(0.8×0.9×6.50)`。
  `M_max(S)=19−3.6725×TP_min(S)`；负值表示在该约束下就算Noon完全不加价也不满足利润率。

| 深圳实际运费S（**待取值，下面是场景**） | 20%贡献要求TP≥USD | 为匹配AED19可容许Noon加价M≤AED |
|---:|---:|---:|
| ¥0 | $2.201 | 10.92 |
| ¥5 | $3.269 | 6.99 |
| ¥8 | $3.910 | 4.64 |
| ¥10 | $4.338 | 3.07 |
| ¥12 | $4.765 | 1.50 |
| ¥15 | $5.406 | -0.85（不满足） |

**对用户最有用的决策闸门：**假设按原报告¥8深圳段＋¥2.50包材＋10%无收入率，在AED19压力价下，若Noon实际买方加价高于AED4.64，原无品牌刷具连**广告/税费前的20%**贡献目标也达不到；若加价更高或物流更贵则更差。不存在任何真实Noon markup测量，本轮没有因此宣布商品必亏/必赚。

普通Noon的FBN/FBP费率计算器**不能替代**China NGS消费者最终到手价，也不能套用普通UAE跨境卖家的“VAT recovery”扣费来否定NGS专项TP结算。

## ChinaGCC-033 决策矩阵

- `PASS_EGO_ACCESS_AND_ORG_EXISTS`：31轮有新的实证，旧bootstrap已恢复；本轮不重复无意义登录工作。
- `FAIL_CURRENT_STORES_AND_LE`：当前项目无UAE/KSA店铺，LE缺失，实质性渠道闸门未通过；无需办公司/创建店铺来证明低成本SKU经济性。
- `UNKNOWN_SOURCE_CART_SHENZHEN_FREIGHT`：英文EXW挂牌无法提供特定地址的真实运费；中文/移动网页读取失败；不填造价。
- `UNKNOWN_PACKED_WEIGHT_SLA_LABELS`：供方一件采购不等于一件代发；无实物测量/供方承诺或有效订单级测试，不能通过。
- `UNKNOWN_NGS_MARKUP_BUYER_TOTAL`：未取得可用的非上架真实价工具；AED19为历史低价压力线，不能直接反推TP。
- `NO_GO_PURCHASE_LIST_ADS`：未经审批不注册主体，不建店、不填假库存、不上架、不购买、不广告、不发询价邮件/工单、不联系翰林。

## ChinaGCC-034最短下一动作（双线、不开无尽研究）

A：在已有授权Ego Lite/Work中仅对**原始义乌购 986877044**尝试**付款前只读运费报价**：1套、指定色、深圳宝安官方集货仓的配送省市区；如无需登记可读取报价则输出商品费/快递费/应付合计、是否含税、重量和来源截图。若跳转登录/要求收件隐私/必须提交订单，停止并标UNKNOWN；不新注册、不下单、不联系商家、不保存个人信息。随后独立判断供方是否确有逐单贴码/扫码交仓流程证据，没有则写UNKNOWN。
B：Noon 031既已取得，**暂停再次进入后台**。先补中国个体工商户主体准入一手明确文字/已批准样本；无答案则暂不办照。真正的中国NGS买家markup需要合法店铺及商品审批后才可能实际试价；不凭普通Noon商品与FBN计算器声称算出来。
- 一个有用的停止条件：若一次受权的付款前运费尝试仍得不到真实深圳单票运费，而账号无有效LE且未授权询价，就把此SKU暂停在`UNPRICEABLE_WITH_CURRENT_AUTHORIZATION`，**不重复生成报告/随机猜运费**；将时间优先给其他当前具备验证入口的自营SKU或后续商业决策。
- 首单阶段成功标准不变：合规主体+已批准渠道→真实同BOM逐单成本和时效→真实买方总价/ETA→正式用户授权试验→真实付款、交仓、妥投、实际到账和全成本利润。
