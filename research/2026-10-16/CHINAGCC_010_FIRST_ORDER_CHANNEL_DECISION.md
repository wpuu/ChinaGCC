# ChinaGCC-010｜首单通道决策：从Noon账号阻塞转为“合规销售 + 无库存需求验证”双轨

**核验日期：2026-10-16（北京时间）**  
**执行模型：GPT-6**  
**状态：只读事实核验与决策存档；未注册账号、未采购、未联系平台或供应商、未向外发布营销内容、未产生费用。**  
**外部约束：翰林冻结，必须先出现其他商品真实付费/妥投/入账且得到用户明确授权才能接触；推广佣金不能冒充自营产品销售成绩。**

## 1. 唯一事实基线（仓库动态校正）

- 本轮开始已核对`main`为`60ccea2dd8c34477986789f3b96432c1118792ab`，以及最新`data/daily/2026-10-16.json`（首单/样品/广告/外联均为NO），不复用旧硅胶清洗垫“优先”决策。
- 本项目原方向是中东GCC真实买方，最优先Saudi女性25–39，现有TRENZ Z40四件套是**别人商品**的历史交易迹象而非本项目订单。未取得同BOM可信真实报价、NGS买家端价及合规证明。
- 用户历史规则禁止外联、采购、注册主体、开店等未经单独许可的操作。**“继续推进”只用于研究与已有项目文件维护，不借此扩大对外交易授权。**
- 定量评分遵守[Issue #12 SKU评分V2](https://github.com/wpuu/ChinaGCC/issues/12)，区分机会、证据质量、数据完整度及硬门槛；所有未核数据不得自动补成分数。

## 2. 中国Noon NGS自营卖货：保留，不再让这条路单点卡死

Noon官方NGS：中国持有效Chinese Commercial Registration的卖家可以直接卖到UAE/KSA及部分GCC区域，提交Legal Entity、授权签约、支付方法、SKU QC与仓库交付，卖家设置USD Transfer Price（转移价），最终妥投按转移价支付。官方不同“普通全球跨境/从UAE卖到KSA”路径规则不同，不能混用VAT/佣金条款。

官方：
- https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program
- https://helpcenter.noon.partners/en/category/onboarding-and-registration/seller-registration-process
- https://helpcenter.noon.partners/en/category/finance-and-payments/payments-processing-policy

保留阻塞：
1. 正式接收中国大陆**个体工商户**还是仅公司：官方NGS没有具体到中国登记形式的书面答复；没有相关Seller Lab主体批准证据。**P0-资格**。
2. 沙特4件棉质绗缝化妆包具体合规/原产地标签/产品归类/HS与SASO/SABER责任：**P0-商品**。
3. 转移价转化成消费者端实际成交总价和ETA在通过哪个审核后可查：**P0-经济**。
4. 供应商代贴码代交深圳集货仓是否按规则允许、完整四件套实价/套型/毛重/中国端成本：**P0-履约**。
5. 普通付款政策的跨币种账户最低`1000 SAR/AED`，是否适用于中国NGS美元转移价及连连/万里汇/Payoneer等收款账户：**P0-现金回款**。官网明确NGS参照通常付款处理政策，但具体支付账户映射未知。

**下一次有信息增量的条件**：获得官方书面答复或卖家账号真实审核数据，不再重复站内检索“个体户是否接受”的第三方互相矛盾文章。没有账号不能以自己已经获得许可的语气作商业承诺。

## 3. 新增的中国自然人渠道：eBay Personal（仅做可行性备选，不等于已可收款）

eBay官方：
- `China`出现在可注册卖家地址国家/地区名单中：
  https://www.ebay.com/help/selling/selling/selling?id=4081
- 卖家账户区分`Personal`（没有注册经营主体的个人）和`Business`（注册企业/sole proprietor）；受国家/支付路径影响，一部分个人通过Payoneer收款；开户需实名信息和支付工具审核，不是仅有PayPal就能收货款：
  https://export.ebay.com/in/first-steps/how-to-create-seller-account/
  https://export.ebay.com/sea-en/first-steps/how-to-create-seller-account/payoneer-account/
- 大中华跨境运输必须遵守可跟踪发货/妥投追踪和相应物流要求：
  https://export.ebay.com/sea-en/policies/direct-shipping-policy/

**中国法律边界（不能忽略）**：
- 《电子商务法》第10条原则登记、例外豁免；《网络交易监督管理办法》第8条：个人年度网络交易额累计不超过人民币10万元的零星小额交易，在符合条件且不涉及依法许可项目时可免市场主体登记。多个店合并计算，并非“跨境发货无需报关/税务/商品监管”。
  https://www.samr.gov.cn/zfjcj/tzgg/art/2023/art_d337c3291e8b40459ca03dea54395856.html
  https://www.samr.gov.cn/wljys/gzzd/art/2023/art_09c394cce74f424a8d82dbc4811a11ec.html
- 这条豁免能否覆盖所考虑的**跨境出口经营形态**、海关登记主体及货运申报必须按真实业务和货运方式依法核验，不可推断可以随意出口商品。

**方向取舍**：eBay Personal对验证“在没有先注册有限公司的情况下个人能否合规进行小额外销”是有价值的候选；但eBay的中国发货→GCC定向消费与Noon本地买家完全不同，流量/单件物流/平台手续费/售后差异大，不能用于直接证明Noon GCC SKU盈利。没确认eBay实名+收款+合规国际物流和真实GCC用户需求以前，不得上架承诺时效。

## 4. 另一条更贴近GCC的路线：Noon Affiliate联盟推广（与自营成绩严格分列）

**官方存在、不需自有SKU库存的营销项目**：
- https://affiliates.noon.com/en/
- https://affiliates.noon.com/en/questions?category=commission
- https://affiliates.noon.com/en/terms

实时核验：
- 官网声称加入免费，使用邮箱/手机注册，获得专属推荐链接/优惠码，并提供素材、统计后台；佣金按品类最高10%，**不是保证每笔10%**。
- 官方条款明确可由自然人（非未成年人）或合法组织提交申请，可通过网站、社媒原创内容或软件推广；系统审核可能拒绝，必须提交身份、联系方式、银行/许可证（如适用）等材料；条款**未明确承诺中国大陆居民一定获批准**。
- 佣金是用户通过专属链接下单且付款、妥投、过退货期后的**合格购买**；退款/取消不计，不能制造虚假订单或刷自己订单。
- 官方条款称佣金每月付到核准的银行账户、并要求开票/税务合规；**中国个人银行账户可否接收、需要何种中国票据及最低提现额仍未验证**。不能把联盟项目当成免牌照、免税务、保证提现的渠道。
- 不应复制其他卖家图文/IP做出误导性内容，也不能默认使用平台素材之外的受版权保护内容。

**商业意义**：在不为中国库存、沙特合规和跨境运费预先买单的条件下，建立`内容→真正沙特/阿联酋买家点击→可归因购买→非退款实单→联盟到账`的证据链；可以比较化妆旅行收纳与其他生活便利商品的受众。**这只能证明获客能力，不能视为我们自己的商品销售业绩，也不能直接解冻翰林。**

单位经济性提醒：在SAR60商品上，即使假设获得理论最高10%，每件佣金也不超过SAR6，且退货后会消失；如果需要付费引流、请博主或造网站，前期很可能不经济。**只适合免费内容验证，不适合砸广告**。

批准继续此路径的条件：
A. 官网页面/账号证实：中国居民或中国经营主体可参加；具体认可证件；
B. 中国可用收款方式/银行国家/币种及申请开票与税负可操作；
C. 如账户真的被批准，研究明确归因规则与出单证据，再开始真实原创内容试验；没有正式追踪ID的浏览和转发**不能被报告为可获佣金的订单**。
D. 初期只做一种商品主题、一个GCC国家、原创视频/中文改写阿语且由人审核的描述；禁止盗用图片及无权商标。

## 5. Amazon.ae / Amazon.sa Associates为何不是第一选择

- 官方Amazon.ae Associates正式审核通常要求注册后前180天至少3个合格订单、原创内容不少于约10篇；社媒申请若只依赖页面，通常要求有实质性粉丝（多数情况下≥500）且公开。 
  https://affiliate-program.amazon.ae/help/node/topic/G8TW5AE9XL2VX9VM
- Amazon.sa也有正式联盟计划，公开资料要求原创内容，具体审核以及中国付款可行性尚未验证。
  https://affiliate-program.amazon.sa/
- 结论：若没有现成面向海湾用户的社媒账号与原创内容储备，Amazon Affiliates对**第一周**实际成交验证的门槛可能高于Noon Affiliate；暂列次选，不假称可零粉开户成功。

## 6. 主线两轨并行，但结果不能混淆

**轨道A：确权并拿到自有商品的首单（为未来翰林合作准备）**
- 先试Noon China NGS官方资格/收款/商品合规；
- 若Noon无明确路径，可研究eBay个人小额出口的真实合规/支付与中东需求；
- 只有自己是合法卖家、真实中国产品真实消费者已付款且妥投/结算与全成本可审，才算自营销售成绩。

**轨道B：不囤货，验证GCC购买与获客（不能解冻翰林）**
- 仅核Noon Affiliate“中国申请人+支付+发票”可行性；若成立再搭视频获客；
- 证据记录：合格GCC受众曝光量、有效点击数、已归因订单数、到期未退款订单、最终佣金到账；
- 保持`AffiliateRevenue`与`OwnedSKURevenue`分开统计，不能相加宣传“自有SKU销售额”。

**项目否决条件/下一步：**
1. 下轮没有Noon NGS中国主体可核证材料 → 这条路进入“待正式答复”，不能继续用第三方文章替代。
2. 如联盟计划证实不接受中国人/中国银行卡或开票门槛过高，直接关闭Noon Affiliate试验，不增加宣传材料。
3. 如果中国卖家eBay跨境物流单件成本和本地消费者可接受总价差距太大，直接淘汰eBay零售作为首单渠道。
4. 绝不先注册公司/购买100件库存/投放广告来补证据缺失；先计算验证信息是否足够得出经济结论。
5. 翰林项目仍完全冻结；以前冻结包和沟通草稿保持原样。

## 7. 当前所有动作状态

| 动作 | 状态 |
|---|---|
| 官网NGS主体规则 | 有公开说明，中国个体户书面认可仍未知 |
| eBay中国地址+个人卖家官方规则 | 有，真实账号审核/收款和GCC需求未知 |
| Noon Affiliate官方存在 | 有，最高10%佣金可查 |
| Noon Affiliate接受中国居民 | **UNKNOWN** |
| Noon Affiliate中国收款/发票 | **UNKNOWN** |
| Amazon Associates零基础社媒快速获批 | 无证据 |
| 当前已联系Noon、商家或第三方 | **NO（本轮）** |
| 开店、付款、样品、广告、内容发布 | **NO** |
| OwnSKU真实成交 | **NO** |
| Affiliate真实成交/收款 | **NO** |
| 是否接触翰林 | **NO：FROZEN** |

## 8. 唯一值得首次去询问的外部资质问题（备稿，未发送）

**Noon Affiliate官方** `affiliate.support@noon.com`：
> We are based in Mainland China and want to build original Arabic/English content referring UAE/KSA users to the noon affiliate program. Before applying, do you accept an individual resident and tax-registered in Mainland China (without a UAE or KSA entity)? If yes, which identity documents, bank payout country/currency and invoicing documents are mandatory? Can commissions be paid to an individual account in China or to a compliant international payout service? Is there a minimum cash-out threshold? Please share the latest official onboarding terms. We will not publish tracked promotional links until the account and payment eligibility are approved.

**Noon China NGS卖家**：沿用009存档询问信，首要确认中国个体工商户是否符合NGS；不混淆联盟和卖家渠道。**两份问题均尚未发送。**

---

**阶段结论：010完成“真实第一笔商品销售”和“GCC获客验证”的证据路径拆分。联盟是更低成本的市场验证候选，但不能宣称已符合中国主体收款资格；eBay是合规个人路径备选，但不是已确认的GCC畅销产品解决方案。**
