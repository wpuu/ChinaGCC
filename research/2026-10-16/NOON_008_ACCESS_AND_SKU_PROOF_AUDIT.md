# ChinaGCC-008｜Noon首单可行性：主线去污染、官方准入核查、四件套需求复验

- 核验基准日：**2026-10-16（北京时间）**；网页来源存在不同时间快照，不能视作同一时刻实时成交数据。
- 执行：ChatGPT **GPT-6**（未假称切换至GPT-6.1 Sol或指定思考等级）。
- 范围：非翰林中国现货商品 → GCC；当前以**沙特Noon China NGS**为拟验证渠道。
- 状态：**RESEARCH_ONLY / 未注册主体、未创建Seller Lab正式店铺、未联系工厂、未询价、未采购、未发送官方问询邮件、未产生订单**。
- 决策：**撤回007中“硅胶化妆刷清洗垫是第一优先”的推断**，它是孤立样本；以仓库`data/daily/2026-10-15.json`及[Issue #12](https://github.com/wpuu/ChinaGCC/issues/12)现有主线为基准，核查真实需求更强的**棉质绗缝化妆包四件套**，且仍不批准样品采购。
- 用户的硬约束：翰林继续冻结，直到非翰林真实销售妥投、到账且全成本复核，并获用户明确批准，才谈恢复。
- 不将网站的“sold recently”、商品评论、销量排名、阿里巴巴挂牌或模拟报价当作自己的订单、已确认转化率或真实利润。

## 一、纠偏：新研究和已有每日雷达必须用同一个事实基线

主仓`data/daily/2026-10-15.json`，提交`2ce9acd638c1a8520ec3a8d9bde2229e89c7d9f4`，写明：
- 首位：**轻量3/4件化妆旅行收纳包**；仓库原历史Opportunity Score为78、Evidence Confidence为90、Completeness为73，但**V2评分不完整（缺41子项）**，不是2026-10-15重新核算后的实证分数。
- 下位：硅胶沐浴刷、黏毛滚/替换卷、旅行分装瓶、发饰等。所有SKU的实时妥投/实际利润均未验证。
- 合同/交易层面：`ownerLegalEntity = UNVERIFIED`、`sellerLabChinaNgs = UNVERIFIED`、`paymentApproved = UNVERIFIED`、`tpToBuyerCheckoutAndETA = UNVERIFIED`、`firstOrder = NONE_VERIFIED`。
- `Issue #12`要求Opportunity Score≥80、置信度≥70、完整度≥75、无未处理16–25分严重风险，才能进入P1样品状态。历史78/90/73只够**P1-CONDITIONAL**，绝不能凭“排名第一”申请采购。
- 本轮以此纠正005–007新开研究子线未回读`data/daily`而偏离主线的问题。过去硅胶清洗垫、理线夹研究保留作为竞争参考，不继续当作工作重点。

## 二、真正看到的“460+近期卖出”到底是什么？

**商品唯一标识**：Noon Saudi `Z8B561DE15CDB81AA9BF9Z`；
**品牌及型号**：TRENZ `Z40`（商品页内部Model 1108）；四个不同大小的绗缝棉质轻垫化妆包，带蝴蝶结与拉链，**不是所有四件化妆包，也不是透明PVC四件套**。

**核到的公开页面快照**（价格变化不证明销量按时间连续增长）：
- 早期Noon普通列表页示例：SAR59.90、420+最近售出、82条左右评价；
  https://www.noon.com/saudi-en/beauty/makeup-16142/makeup-brushes-and-tools/cosmetic-bags/
- 另一个Noon/Noon Supermall商品页快照：SAR66.58、460+最近售出、99条评价；
  https://supermall.noon.com/saudi-en/set-of-four-multi-sized-makeup-bags-z40/Z8B561DE15CDB81AA9BF9Z/p/
- 普通商品详情快照：SAR59.90、360+最近售出、79条评价；属于另一抓取日期/本地界面：
  https://www.noon.com/saudi-en/set-of-four-multi-sized-makeup-bags-z40/Z8B561DE15CDB81AA9BF9Z/p/
- 沙特当地TRENZ Z40对标品展示**约1小时到货**（Supermall快送）；这是当地库存/仓配优势，**中国NGS商品没有被证实能同样快**。不能把本地卖家的460+标签直接作为中国NGS新店预计销量。
- 同子类还有KHAJUL 3件棉质绗缝蝴蝶结包（在售约SAR48.5、214条评价），**三件且材质/尺寸不一样，不能混用四件套的销量**：
  https://supermall.noon.com/saudi-en/beauty/makeup-16142/makeup-brushes-and-tools/cosmetic-bags/?isCarouselView=false&limit=50&sort%5Bby%5D=popularity&sort%5Bdir%5D=desc

结论：**市场存在真实的同类交易信号**；但新店缺品牌、评价和当地快送，且Noon NGS买家端终端价未知。不要拿历史“460+”硬推销量预测。不得复制TRENZ商标、专有图片及品牌包装。

## 三、官方最重要的一项规则纠偏：两种“跨境”不是一回事

**NGS中国卖家专项（官方）**：
- https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program
- 中国依法注册且有有效商业登记的卖家可向UAE、KSA等销售。Noon要求Seller Lab创建合法主体，上传中国登记文件，目的国税务步骤选`Non VAT Registered`。按NGS不必为了此业务注册UAE/KSA公司或目的国VAT；Noon承担消费者侧目的国VAT缴纳。
- 商家设置USD Transfer Price（转移价），成功妥投后Noon按照该金额结算，不从中另扣通常NGS跨境费，但卖家仍承担**中国端进货、包装、送深圳集货、汇兑、坏单、退货、广告、税务和固定经营成本**。
- 可仅创建一个商品SKU，然而专项文档的流程建议创建UAE和KSA各一个Store、关联合法主体，不能假设无中国营业登记即可完整开售。
- 商家可以**自行邮寄或送达**包裹到深圳集货仓；该声明不等于**已明确允许供应商以卖家名义直接代贴签交仓**。后者必须拿到平台规则/书面确认。
- 官网还要求**新中国卖家正式上架前有审核通过的收款方式**：银行账户、Payoneer、连连、万里汇、PingPong等；已有PayPal不能替代。
- 官网没有明确写“中国个体工商户（营业执照形式）必定接受”，不应据第三方教程去注册个体或有限责任公司。

**Noon一般跨境销售文件（另一套场景）**：
- https://helpcenter.noon.partners/en/category/global-selling/how-can-you-register-for-cross-border-business
- 该文要求目标市场VAT证书，是用于另一种已有卖家跨市场迁移/跨境场景；**不能无条件覆盖NGS中国卖家的专项Non VAT模式**。
- 官网全球销售总览也列出UAE商家跨GCC/印度至UAE/KSA等不同程序：
  https://helpcenter.noon.partners/en/category/global-selling/global-selling-overview
- 因而中东一般卖家“必须VAT”条款不能用来否决中国NGS，但需以Noon对具体主体的书面答复最终确认。

## 四、沙特商品准入不能因为不是化妆品就跳过

- 四件棉质绗缝化妆包是**纺织材料旅行化妆收纳品**，不是美容涂抹用品。然而对应商品归类、HS编码、沙特SASO/SABER与标签材料由谁负责，尚无SKU级核准。
- 沙特SASO官网显示纺织品技术法规Issue 2强制日期2024-07-12，具体适用必须按产品归类看：
  https://www.saso.gov.sa/en/laws-and-regulations/technical_regulations/pages/default.aspx?TechnicalCat=2
- 旧版本纺织品规定文本的部分“化妆盒”标签豁免例子**不能直接套用新Issue2和目标袋子HS**，不能从旧表推出整类不用检测。
- Noon沙特禁限售列表包括“Rainbow-colored products”等，不应把任何多色花卉或粉色蝴蝶结一概视为违禁；具体商品图样、宗教图案/敏感内容仍需检查：
  https://helpcenter.noon.partners/en/category/product-listing/prohibited-products

## 五、供应商核查：有低起订量单包，不等于有可直接卖的完整四件套

公开页面可用作**供货线索（未联系、未合同确认）**：

| 标识 | 中国供应商（公开平台自报） | 产品证据 | 价格/MOQ | 与TRENZ Z40的差距 |
|---|---|---|---|---|
| S1 | Guangzhou Blings Bag Co., Ltd. | 绗缝棉布蝴蝶结拉链包，单件，广东 | US$1.34/件（2–499件），MOQ 2；公开打包15×12×2cm、0.10kg为**该页面单件** | 不是四件不同尺寸套装，也非TRENZ同款，不得将15×12×2cm/100g作为四件套毛重 |
| S2 | Yiwu Dongjin Luggage Co., Ltd. | “Custom Wholesale Bow Quilted Makeup Bag Set”类目线索 | US$1.50–7.50、MOQ10**pieces**；区间跨不同尺寸/定制，单位可能非套 | 无正式四件套BOM、材质/4件总重量 |
| S3 | Hefei Mystica Trading Co., Ltd. | 四件套Flannel Embroidery袋 | 约£1.28/件（200–499件） | **材质是法兰绒且MOQ200，不是棉质绗缝小批量** |
| S4 | Yiwu Runqing Import And Export Co., Ltd. | 花卉绗缝棉布“set”类目 | US$0.88–1.87、MOQ10**pieces** | set内部件数/尺寸/报价单位未知，无法用来算4件毛利 |

公开页面：
- https://www.alibaba.com/product-detail/Wholesale-Candy-Pattern-Large-Quilted-Cotton_1601494843884.html
- https://www.alibaba.com/countrysearch/CN/cosmetic-bags-wholesale.html
- https://www.alibaba.com/product-detail/2026-Hot-Selling-4-Pcs-Flannel_1600838608630.html
- https://www.alibaba.com/wholesale/cosmetic-bag-sets-travel.html

**没有任何一家通过“同规格4件套 + 1套的真实进货价 + 独立整套包装毛重 + 2/10/30套小量实供 + 深圳每单履约”完整验证。**

## 六、实质经济性压力测试（不编造NGS加价或利润）

仓库旧研究设`Transfer Price = $4.5 / $5.5 / $6.5`作为测试格，并希望单笔贡献率至少20%。按最简单定义：
`最大允许的单位全成本 = USD Transfer Price × 80%`。
- $4.5时，全成本必须≤$3.60；
- $5.5时，全成本必须≤$4.40；
- $6.5时，全成本必须≤$5.20。
这里的全成本**必须含完整四件套采购+包材+中国寄深圳+收款/汇兑/广告分摊+预期退货损失等**；并不是只要求货价低于5.2。

风险示范：S1单件报价$1.34，如果错误地拿四只**S1单包**简单乘4，光原料就$5.36，大于$6.5转移价方案下20%贡献目标的全成本上限$5.20，更不含国内配送。**这只是用不同SKU数据做的反例，不是TRENZ Z40真实生产成本或进口报价。** 但说明选品不能只比较零售SAR59.9与中国每只$1.34就认定有利可图。

在未取得Noon卖家账号对目标SKU的买家端`price + VAT + delivery + ETA`、实际转移价、目的国合规和完整四件套真实成本前，**不存在可确认的毛利、净利润或100件最坏损失数字**。

还必须测速度差：本地竞品Supermall常见约1小时送达，而NGS从深圳集货后跨境，具体承诺时效未知。消费者会同时比较**成交价格、交货速度、评论与售后**，不能用中国低价忽略速度壁垒。

## 七、把循环研究变为可终止行动：008→009的严格闸门

**A. 必须有人/平台能提供的外部信息（靠继续联网不能替代）**
1. 官方明确认可/拒绝中国大陆个体工商户进入**China NGS**；如果不能则需有限责任公司，以及需要什么中国主体文件。此回复目前**尚未获取**。
2. 针对“cotton quilted cosmetic bag four-piece set (no cosmetics/liquids)”的沙特具体商品子类目、归类、文件和NGS清关合规责任。当前**无书面答复**。
3. 上架前能否得到NGS对某USD转移价的沙特买家实际总价和ETA；如果不能，最早必须完成哪一审核步骤才能看到。
4. 是否允许受卖家委托的广东供应商/第三方履约仓直接按Noon订单贴码送深圳集货仓；相关证据与责任。
5. 完整**同规格四件套**的2/10/30套真价、包材/毛重/原产地、标签与第三方履约价；供应商公开类目价不算。
6. 使用合规的收款方式开通中国NGS并实测消费者价；商家资料必须属实，不能借他人执照或账户冒名交易。

**B. 本轮已做、不需要重复的工作**
- 官方Noon规则及入驻流程已核、差异化跨境VAT条款已划清；
- 精确定位沙特真正的销售对照：**TRENZ Z40 四件棉质绗缝包**；
- 当地快速配送壁垒与报价误匹配被标识；
- Alibaba公开供应商线索已收集，但未强行用单包当套装；
- 反向价格/全成本压力测试可以直接参考本报告和007 Excel模板；
- 历史005—007保留作否决证据，**其清洗垫“主选”结论已失效**。

**C. 停止/转向规则**
- 7个日历日内若依然无法取得官方主体/品类可行性答复，停止生产同类研究周报，保留一个待平台答复任务；另行比较有明确入驻条件的B2B供货或其他合规销售渠道，但不得假冒商家。
- 如果同规格4件套全成本不足以支持目标贡献率，或NGS消费者最终价/ETA显著劣于当地同类商品而无可验证优势，**立即否决四件套试单，保留证据，不继续“换相似四件套”消耗时间**。
- 只在至少一个非翰林SKU真实消费者付款、成功妥投、结算到账且全成本核查后，再讨论翰林恢复；必须用户明确批准。

## 八、已准备的Noon官方书面问题（**未发送**）

To: seller@noon.com
Subject: China NGS pre-onboarding eligibility, textile cosmetic bag compliance and price preview

Hello noon Seller Support,

We are assessing the China-origin noon Global Shipping program for one Saudi Arabia SKU: a four-piece quilted cotton cosmetic/travel pouch set (bags only; no liquids or beauty products).

Before registering a business or buying inventory, please clarify:

1. Is a PRC-registered Individual Industrial and Commercial Household (个体工商户), holding a valid Chinese business licence for retail/trading, eligible as the China legal entity under NGS? If not, must it be a limited company? Please identify accepted registration documents.
2. For a four-piece quilted cotton cosmetic/travel pouch set, which NGS Saudi product category and documentary requirements apply? Who is responsible for relevant product/HS classification, textile compliance documents, SABER/SASO requirements and import declarations?
3. Can an authorized third-party supplier or China fulfillment warehouse pack, label and courier individual orders directly to noon's Shenzhen consolidation hub on behalf of the registered China seller? What are the traceability requirements?
4. Can a prospective seller obtain the buyer's all-in displayed price and delivery ETA for several trial Transfer Prices before the legal entity is approved? If not, at which exact stage in Seller Lab is that visible?
5. Are there any China NGS registration/listing or minimum-SKU monthly fees? Is a single KSA SKU supported in practice? For a new China seller, which payment methods and approvals are mandatory before publication?

We are asking about the **China NGS program specifically**, not the standard UAE-to-KSA cross-border selling pathway. Any links to the relevant official documentation would be appreciated.

Best regards,
[Your name]

**Delivery status: NOT SENT.** No user-approved outreach; Gmail connection was not accessible during this turn (FORBIDDEN), so no draft was created in Gmail. This copy is saved here for eventual manual send/review.

## 九、状态快照

| 项 | 状态 |
|---|---|
| 市场优先 | Saudi 25–39女性日常/旅行收纳；具体4件套仅是**条件候选** |
| 销量证据 | 公共页面TRENZ Z40历史460+标签；非自己订单 |
| 可比中国货源 | 有单包/近似套装线索；完整同BOM四件套未落实 |
| 中国NGS个体户资格 | UNKNOWN |
| Textile SKU准入/标签/清关 | UNKNOWN |
| 商家账号/收款审核 | UNVERIFIED |
| 买家最终价和NGS ETA | UNKNOWN |
| 完整4件真实成本和风险上限 | UNKNOWN |
| 采购/样品/广告 | NO |
| 外联Noon和供应商 | NO |
| 非翰林订单/妥投/到账 | NO |
| 翰林 | FROZEN / 研究包保留 |

**结论：008完成的是方向去污染和真实商业闸门复核，并未达成实际首单。**
