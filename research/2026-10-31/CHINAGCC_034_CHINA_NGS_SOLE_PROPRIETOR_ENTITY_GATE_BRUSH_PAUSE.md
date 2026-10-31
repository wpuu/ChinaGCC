# ChinaGCC-034｜China NGS中国个体工商户主体资格、034A运费证据与刷具暂停判定

**核验日期：2026-10-31（北京时间，上午）**  
**证据层级：** 原Noon后台Work-031实际只读记录 > Noon当前官方专项/通用政策、中华人民共和国市场监管法规 > 源头商品网页 > 第三方入驻文章 > 033经济性假设。  
**仓库核验基线：** 本轮起始main最新提交 `4008d588520e1b2b2148f74b3463c0875fab78dd`（2026-10-31 08:07:32北京时间）。  
**权限边界：** 仅研究、GitHub报告与Issue记录；**无营业执照注册、店铺/账号写入、采购、付款、发工单、联系平台/供应商、真实上架、虚拟库存或广告**。无真实新订单、妥投或到账。

## 一、仓库与Work-034A实际证据

- 已读取[033报告](CHINAGCC_033_NOON_031_ACCEPTANCE_SHENZHEN_FREIGHT_TP_MARKUP_GATE.md)、[Issue #24](https://github.com/wpuu/ChinaGCC/issues/24)、main最新提交及[2026-10-31日报](../../data/daily/2026-10-31.json)。
- Work-031 No​on 原账号只读验收[报告](CHINAGCC_031_NOON_ORIGINAL_ACCOUNT_EGO_READONLY_ACCEPTANCE.md)已经完成。该项目Org/Project存在；UAE/KSA Stores空；Finance界面为 `No Valid Legal Entities Found`；Payout/Origin不可确认；NGS项目未满足当前资格。**旧Ego bootstrap连接错误已经恢复，不得再称当前拦阻**。
- **未找到独立Work-034A最终运费验收回执**：最新commits、Issue/文件检索没有有据可依的“原SKU送深圳购物车总价”证明。不得反推Work实际上一定没有运行；当前是 `NOT_DELIVERED_IN_REPO`。
- 新增main提交[4008d58](https://github.com/wpuu/ChinaGCC/commit/4008d588520e1b2b2148f74b3463c0875fab78dd)把义乌购中文商品页成功只读回读保存到10-31日报 `postRadarSupplyReadOnlyCheck`。**中文页可读**，但仍停在浙江默认配送地，“¥0起/免费运费”不是送深圳Noon仓的运费；页面未改到深圳宝安；`actualShenzhenBaoanSingleShipmentFreightCny=null`，`realCheckoutCartTotalCny=null`，`finalPackedGrossWeightG=null`，`oneOrderBarcodeSLAVerified=false`。
- 原SKU [鸿良986877044英文页](https://en.yiwugo.com/product/detail/986877044.html)只证实`EXW¥7.80/MOQ1`、标称95g、10支尼龙毛/亚克力柄/附刷包，彩色、黑色、粉色三种选项。页面最后标注更新2026-09-17；重量不是包裹计费毛重，MOQ1不等于逐单贴码和仓签收承诺。用户没授权向商家沟通，本轮不发送询价。

## 二、中国个体工商户：法定商业登记 ≠ Noon平台接受

### A. 中国政府一手规范——有商业登记资格，但不足以直接推出Noon可用

中华人民共和国[《市场主体登记管理条例》](https://www.samr.gov.cn/djzcj/zyfb/zjfb/art/2023/art_2a71fe3f890947e4860918946cb60386.html)第二条明确将**个体工商户**与公司、个人独资企业等分别列为中国市场主体；第三条为市场主体登记；第二十一条为经依法登记签发营业执照。故“中国个体工商户=未登记自然人”是错误推断。

### B. Noon中国NGS专项——只说明需要中国商业登记，未明确中国个体工商户

[noon Global Shipping (NGS)专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)称资格为 `registered in China with a valid Chinese Commercial Registration`，并要求Legal Entity填写Registered Name、License Number、Address、issue/expiry等、上传 `Company Registration document`、签订条款并审核。专项**没有明确使用“Mainland China Individual Industrial and Commercial Household/个体工商户 accepted/not accepted”的Yes/No文字**。

### C. Noon通用国际卖家规则——限制风险明显，但仍非China NGS专项裁决

- [Who can sell on noon](https://helpcenter.noon.partners/en/category/onboarding-and-registration/who-can-sell-on-noon)：国际卖家须持经营所在地Trade License或Commercial Certificate，Individual Seller（个人数据证书）仅埃及。不能将“埃及以外不允许无执照自然人”误读成“中国依法登记个体户肯定不符”；也不能只凭中国商事登记证明就认定审核会通过。
- [Documents required to sell on noon](https://helpcenter.noon.partners/en/category/onboarding-and-registration/documents-required-to-sell-on-noon)：International sellers表使用 `Company registered anywhere ...` 语言，材料还要求贸易/电商业务，身份及收款资料一致；通用[Who can sell](https://helpcenter.noon.partners/en/category/onboarding-and-registration/who-can-sell-on-noon)要求受益人名称与注册主体名称匹配。**中国个体户开户名称/经营者姓名在Noon中国NGS的匹配规则没有官方针对性证据**。不能推定可用个人银行或必需某种账户。
- [Seller registration process](https://helpcenter.noon.partners/en/category/onboarding-and-registration/seller-registration-process)明确LE审批单独进行、可能拒绝并显示实际驳回原因；原账号当前无LE并**不是**“提交个体户后被驳回”。

### D. 第三方的“不接受个体户”证据如何使用

[雨果跨境](https://m.cifnews.com/help/opege)、[大数跨境](https://www.10100.com/article/149365298)、[连连全球文章](https://global.lianlianpay.com/article/MTUzMzg4LDAzMw.html)均有不接受中国个体工商户的描述。然而其中连连转载的一般Noon说法还声称UAE/KSA须当地VAT、较大团队/履约自担；这与**中国NGS专项免当地VAT、Noon负责深圳以后的跨境运输**直接冲突。可作为“不接受风险显著”的市场旁证，不能把非NGS陈述当2026中国NGS官方正式否定。

**P0-1验收结果：`UNKNOWN__NO_OFFICIAL_YES_OR_NO_FOR_CHINA_NGS_SOLE_PROPRIETOR`**。更可能被平台要求企业资料，但拒绝概率不能量化；不为拿到答案先办理中国个体工商户或有限公司，不用他人公司证照/账户混报。若未来需解锁：仅Noon中国NGS针对中国个体工商户的明确书面官方口径或真正以该主体类型审批通过的有效一手样例可变更本结论。当前用户禁止外联，不发询问信/工单。

## 三、原商品额外的沙特配色风险——仅作为条件硬门槛

[Noon官方Prohibited Products](https://helpcenter.noon.partners/en/category/product-listing/prohibited-products)对沙特列示`Rainbow-colored products`禁售。原鸿良SKU存在`彩色10支带刷包`选项，但**“彩色”≠已核定彩虹配色，不能据文案判任何特定色号违规**。沙特只能在对应颜色实物图片、商品合规审查、平台可售决定后推进；黑色/粉色也不能被口头保证其余全部合规。当前经济性测试聚焦UAE，沙特候选暂时降级观察，不声称Noon或沙特已经禁售本商品。

## 四、033已知经济性继续有效；本轮无新真实订单数据

- 原UAE [Generic十支＋袋历史价AED19](https://www.noon.com/uae-en/10-pcs-makeup-brushes-set-with-pouch-eyeshadow-foundation-blush-concealer-brush-set-gray-blue/Z07CD335BBA6F4E884052Z/p/)不是10月31日实时价格，也不是同BOM，且配送时效可能比NGS好；仅做压力基线。
- [Noon中国NGS](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)确定中国卖家以USD Transfer Price设价、Noon内部决定买家端物流清关VAT加价并处理深圳以后段，正常妥投按TP结算。没有公开固定markup。不可从公开竞品最终价反推实际TP。
- 沿用033的**明确假设**：商品¥7.80（公开价），包材贴码¥2.50（假设），净FX6.50人民币/$（假设），净无收入订单10%（假设），广告/税等额外固定成本前目标20%贡献；若深圳运费假设¥8则必要TP≥$3.91、假设目标买家价AED19对应Noon加价需≤AED4.64；运费假设¥12则加价需≤AED1.50。两者都是**双重必要条件，不是当前利润**。真实深圳运费、最终消费者价/ETA、NGS类目与退款损失均为UNKNOWN。
- 因无有效LE/店铺，价格和成本均缺，**不存在现在可以授权采购或创建可售库存的经济性理由**。

## 五、经营决策：暂停化妆刷商业推进，但保留研究资产

**结论：`PAUSE_BRUSH_ACTIVE_COMMERCIAL_VALIDATION`，`WATCH_NOT_DISCARD`；`NO_GO_ENTITY_REGISTRATION_STORES_PURCHASE_LISTING_ADS_OUTREACH`。**

暂停理由（非永久否定SKU）：
1. 当前原Noon项目无店铺、有效LE，收款与NGS未通过；本项目在用户暂缓办照前无法开卖。
2. 正式官方材料无法确认中国个体工商户可接受，且第三方报告存在拒绝风险；不能赌注册后必过。
3. ¥7.80与95g只能证明部分采购字段，无法证明逐单送深圳、贴码、签收SLA。
4. 033说明低价Generic商品的NGS加价和国内运费共同压缩利润；无真实买家总价/仓费用，不能给出可盈利判定；沙特彩色选项另有禁售条件风险。

**一次性可解锁尝试，不无限重复**：若Work-034A通过已有授权获得`原SKU×1套×指定深圳宝安地址`**付款前**的实际运费、总价及有效配送承诺，回读证据后可更新`S`而不触碰Noon账号；若仍无法获取，结束该SKU公开报价研究为`UNPRICEABLE_WITH_CURRENT_AUTHORIZATION`。即使成功，**仍不因单个运费值就恢复注册或采购**，要先有Noon主体/店铺许可和消费者实际NGS价格、交仓能力等门槛。

### ChinaGCC-035接续方向（避免重复同义搜索）

1. **先读取本034与最新main/Issue #24**；如果034A后来交付，回收真实单票运费，否则不重复搜价格或自动给运费。
2. **转到更高价值的商业闸门**：研究中国经营主体在天津合法设立及年度税务/申报/银行/收款维护的真实最低要求和成本区间，以2026年10月最新官方政策验证；不注册、不索要证件。把033按假设每尝试订单贡献¥5.10与年度固定成本作销量盈亏平衡敏感性矩阵，**区分假设与真实**。这样判断“就算以后获批Noon，卖薄利低价刷具是否值得维持主体”。
3. 若数据证明刷具薄利甚至无法覆盖合规固定成本，才提出**一项**差异更大且高单件利润空间的非翰林商品族，须有UAE/沙特真实消费价格对标和中国同规格供货链接；不得不经同BOM就批量比较、上架、采购或做A/B无穷研究。
4. 重新启动Noon必须满足：经确认适用的中国商业主体 → 合法店铺及付款受益人 → NGS批准 → 同BOM真实履约成本和供应商SLA → 买家实际总价/ETA → 用户针对具体售卖动作单独许可 → 真实订单、妥投、到账、复核净利。
5. **不再让Work用Ego Lite重复检查031已核实的同一Noon页面。** 若需要Noon中国NGS针对个体户的官方一手回复，必须先获得“外联”新授权；不得发送未批准支持工单。

来源：Noon上面列出的专项及通用一手政策；中国国家市场监管总局《市场主体登记管理条例》；义乌购原SKU；Issue #24、033报告、10-31日报。

**审计产出仅是“停止亏损风险更高的无证据推进”；不计为成交、收款、客户验证或账号授权。**
