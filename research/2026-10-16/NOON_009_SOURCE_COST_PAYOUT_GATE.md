# ChinaGCC-009｜Noon中国NGS从选品转向真实交易：账户、整套采购价、到账门槛

- 基准时间：2026-10-16，北京时间。
- 本轮执行模型：GPT-6；公开资料研究 + 仓库主线核对，不假称切换了其他模型档。
- 项目：wpuu/ChinaGCC。**翰林全部产品持续冻结**，未经用户新命令绝不联系或重启。
- 本轮所有外部动作：**只读**。没有开设Noon组织账号、没有提供用户身份资料、没有发送邮件/供应商私信、没有采购或费用，没有真实订单。
- 结论：真正阻塞不是“找不到中国四件套”，而是**(1)中国法人/个体户能否获NGS审核，(2)四件套价格到底按单件还是完整一套，(3)Noon买家总价/配送时效，(4)中国NGS实际打款起付条件**。不再把只读资料当成交进度。

## 1. 先同步项目其他最新主线，避免并行污染

2026-10-16主仓已另有最新`data/daily/2026-10-16.json`，提交`d6a7d906ef542f4b2dc281acb0cc295934735177`。其中早间雷达明确：
- 决策`RESEARCH_ONLY__NO_SAMPLE__NO_STOCK__NO_AD_SPEND__NO_EXTERNAL_OUTREACH`，`sampleReady=0`，`approvedPurchase=0`，`firstSaleVerified=false`；
- P1仍仅为**轻量3/4件棉质夹层化妆/旅行收纳包**的条件机会，不是“已适合下样”。商品端竞争样本是**沙特TRENZ Z40四件包**，非其他四包/单包同一规格；
- 原V2历史机会评分78、证据90、完整度73中部分细项未全，不能当成审完41子项的新精确分；遵守[Issue #12](https://github.com/wpuu/ChinaGCC/issues/12)的样品门槛，当前未通过；
- 新增加`new20261016PayoutRisk`：Noon普通付款政策国际币种最低打款额1000 AED/SAR可能影响中国NGS首单验证，**实际美元转移价的对应方法未知**；
- 提供本轮新的供应链与打款证据供每日主线以后引用，但**不改动其他自动研究进程正在使用的日报JSON**。

## 2. 可行的Noon无营业执照前置阶段，以及真正卡住的地方

### 2.1 官方支持的、目前可以推定为低成本的第一步

Noon China NGS专项官方： https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program

- 第一步用邮箱OTP/手机号OTP及项目名取得Organization ID。不要求在这一步先上传商业登记材料；但中国合法主体批准是开售必须的，**组织账号不能绕过许可证**。
- 第二步创建UAE/KSA店铺；第三步Legal Entity需要营业执照编号、登记名称地址、签约代表等信息并上传商业登记文件。专项流程填`Non VAT Registered`是**目的地国家VAT**状态，不是中国税务豁免。
- 一件SKU可以创建并申请QC；妥投后按设置的USD Transfer Price结算，但中国境内采购、物流、包装、广告及损耗仍由卖家计算。
- 官网提供注册入口 https://login.noon.partners/en 和咨询邮箱 seller@noon.com。
- 普通Seller Onboarding FAQ明确商家注册和上架商品免费：https://help.noon.com/portal/en/kb/articles/seller-onboarding-faq
- 初始Org ID不等于可查看目标NGS卖家价/消费者端价，也不代表能提前测试Noon标价；**尚未得到官方界面或答复证明未审核主体能看到最终价格**。
- 一般卖家政策“Individual Seller只有埃及”与中国境内依法注册`个体工商户`是否算中国商业登记属于不同问题，目前仍**UNKNOWN**。第三方中文教程有相互矛盾的“接受/不接受”断言，不可代替Noon书面答复。
- NGS官网在订单后允许卖家自行邮寄至深圳集货仓；无法从此推断供应商可不经卖家审核直接以卖家名义发单。

### 2.2 官方付款政策新硬门槛

来源：https://helpcenter.noon.partners/en/category/finance-and-payments/payments-processing-policy
- Noon普通付款政策显示：KSA/UAE本地同币种账户的累计最低打款为100 SAR / 100 AED；不同币种国际账户为1000 SAR / 1000 AED。每周三产生statement，达到门槛并符合条件才按后续支付日处理。达不到门槛滚存。
- **未确认中国NGS“美元转移价”、每个起运国卖家主体、连连/万里汇/Payoneer等账户究竟按哪种币种/市场换算，是否有特殊最低额或豁免**。因此不能说中国NGS实际一定需要1000 SAR，也不能承诺一笔几美元订单就能收到银行转账。
- Noon's payout method：银行、Payoneer、LianLian、WorldFirst、PingPong，需要**approved + linked to seller origin**；仅添加未分配也不能算收款就绪。
  来源：https://helpcenter.noon.partners/en/category/onboarding-and-registration/how-to-add-the-bank-details-in-the-legal-entity
- **成功标准分开**：1)平台实际买家订单；2)真实妥投；3)卖家账单确认收入；4)实际转入可支配收款账户；5)扣除所有成本后正利润。四项都不能靠模拟填表冒充。

### 2.3 沙特监管分类比“布料=纺织品法规”复杂

沙特税务/海关ZATCA官方已开通4202类箱包的海关税则查询：
https://eservices.zatca.gov.sa/sites/sc/en/SCTariffs/Pages/Pages/SearchTariffsPage%20.aspx?SearchFor=42
ZATCA GCC一体化税则于2025-01-01起实施**12位编码**，须按具体商品材质、外观、用途、套装结构完成正式归类；网址：https://www.zatca.gov.sa/en/RulesRegulations/Taxes/Pages/Integrated-Tarrifs.aspx
- 化妆旅行收纳包可能归HS 4202类箱包，但**没有得到对指定棉质/聚酯四包套装的12位最终官方归类**。
- 不能单凭“棉布”把它直接归为SASO纺织技术法规覆盖、也不能反向断言完全免合规；要Noon明确NGS该SKU的HS、SABER/SASO、原产地/标签材料要求与进口合规责任。
- 目的国关税由Noon处理不代表所有商品合规材料无需卖家准备。

## 3. 实质性供应端核查：标题写“四件套”≠低价是完整四件套

### 3.1 阿里巴巴 Yiwu Changyi / HANFEIZI（有整套标题，但报价单位含糊）

在阿里巴巴2026-10-16本轮公开搜索索引看到：
- `HANFEIZI 4pcs Sets Quilted Makeup Bag Coquette Aesthetic Floral Cosmetic Organizer Bag`
- 商家：Yiwu Changyi Daily Necessities Co., Ltd.
- 页面报价`$1–2.70`，MOQ`50 pieces`，商品`85 sold`（**属于供应端平台历史标签，不是沙特销量**）；
- 索引：https://www.alibaba.com/countrysearch/CN/floral-cosmetic-bag.html
- **一手单位欠证**：不知道是每只包、每款可选单只、一个四件组合还是采购计价单位如何映射，MOQ50件也不等于50套，不存在正式订单报价、包装后毛重、四色/四规格相同BOM证据。
- 通过另一页面实时抓取，阿里巴巴商品流会变动、未稳定显示这款索引商品；**当前无法确认该款库存、单品直链或可实时下单**。不能将“有搜索结果”直接标为供货落实。
- 从规格来看可能值得对方愿意回报完整四件套价格时再比较；暂不接触供应商。

### 3.2 Everful“four-piece set”实际是四种单独变体，且材质不匹配

实时读取网页：https://www.everfulwholesale.com/products/floral-quilted-polyester-makeup-bag-4-piece-set-travel-organizer-evfpz26q4v

虽然网页标题带`4-Piece Set`、宣称No MOQ，但结算界面的`Item Style`逐项展示：
- 抽绳包（SKU`EVFVRYJJ7JY`）：US$1.84
- 大号手提化妆包（SKU`EVFV7PZZEZQ`）：US$3.26
- 中号拉链包（SKU`EVFVNEKK2K2`）：US$2.13
- 圆筒笔袋（SKU`EVFV8233WWQ`）：US$1.64
- **四种各买一只合计US$8.87**；页面可能随时有动态折扣，另一个缓存版本四件合计约US$9.01。两者都不能被说成US$1.64或US$1.67买到四件。
- 网页材质`Polyester`、重`51–267g`（变体重量范围），非Noon TRENZ Z40宣称的`soft quilted cotton`，不能当同材质套装。
- 这个供应端**在仓库旧USD TP测试网格$4.5/$5.5/$6.5下直接失败**：商品成本本身$8.87已超过转移价；这并不证明所有可能更高TP设置都亏损，因Noon消费者端加价未知、不同规格市场可接受价未知。
- 中国完整同BOM采购价、单票中国集货仓履约、最终沙特买家到手价、合法销售权、退货损失均无验收，**不得采购**。

### 3.3 竞争商品仍不能等同本店业绩

沙特Noon TRENZ Z40四件棉质夹层蝴蝶结化妆包：
- 页面：https://supermall.noon.com/saudi-en/set-of-four-multi-sized-makeup-bags-z40/Z8B561DE15CDB81AA9BF9Z/p/
- 近期搜索缓存参考 SAR59.90/SAR66.58、360+/420+/460+ sold recently。缓存时点不同，“sold recently”统计窗口不明，不能认为日销量已经证实。
- 当地库存快送约1小时；从深圳发货的NGS商品没有相同配送优势的证据。
- 自己不能冒用TRENZ品牌/照片/特色设计；后续只研究具有权利与合规材料的通用独立商品。

## 4. 一个真实的NO-GO规则，避免再做循环报价列表

以此前`USD TP = $6.50`、至少20%**单笔贡献率**的保守测试为例，`可承受的全部成本≤$5.20`，而这必须已经包括：
完整4件套实际采购价 + 独立包装/贴码 + 实际送深圳Noon集货成本 + 收款/汇兑 + 广告 + 预期售后退货损失。
- Everful直接超过，**淘汰该供应源/该价格场景**。
- HANFEIZI $1–2.70无法判断是每只还是整套；**保留只读采购单位未知**，不进行单价利润计算。
- $6.50是我们自设的测试网格，不是Noon官方转移价上限。若未来想试$8/$10/$12等更高转移价，必须先看到平台真正的沙特买家最终价+交付ETA，并与本地竞品进行公平比较；不能凭终端售价SAR59.9自动推利润。

**弃单闸门**：
1. 商家主体资格或沙特商品准入无法确认 → 不注册主体/不进货；
2. 具体相同BOM套装价格/毛重/中国订单履约报价缺一 → 不进货；
3. NGS最终消费者总价和配送时效显著劣于本地竞品，且无客观差异化 → 不投广告、不囤货；
4. 卖家实际结算和国际打款门槛可能锁住小额首单现金 → 先要求官方书面明确，必要时调整验证方法或暂缓Noon；
5. 翰林保持冻结，至少非翰林真实付款、妥投、到账、成本核验且用户批准后讨论重启。

## 5. 可直接问Noon的最短问题（未发送）

官网公布联系方式 seller@noon.com。只问可以决定是否需要注册经营主体的3个点，**并明确只讨论 China NGS 模式**：

Subject: China NGS pre-onboarding: legal entity, quilted travel pouch and payout threshold

Hello noon Seller Support,

I am assessing China-origin noon Global Shipping (NGS) for a single Saudi SKU: a non-branded four-piece quilted cosmetic/travel pouch set (bags only, no liquids).

Before setting up a business entity or investing in inventory, could you please clarify:

1. Does China NGS accept a Mainland China Individual Industrial and Commercial Household (个体工商户) with a valid Chinese business licence, or only a Chinese limited company? Does creating an Organization ID permit a pre-onboarding eligibility inquiry without submitting a Legal Entity?
2. For a non-branded 4-piece quilted cotton travel/cosmetic pouch set, what Saudi product category/HS classification and SASO/SABER or labeling documents must the China seller provide? Can an approved Chinese third-party warehouse pack, label and send each order directly to the Shenzhen NGS hub?
3. Your general payment policy mentions 1,000 SAR/AED minimum payouts for foreign-currency bank accounts. Does this apply to China NGS sellers paid in USD Transfer Price via Payoneer, LianLian, WorldFirst or PingPong? If different, what is the minimum payout threshold and can a trial seller access the buyer's final KSA price and ETA before approving the legal entity?

Thank you. Please share current official instructions or the China NGS team contact.

Best regards,
[Your name]

- **发送状态：NO（未联系Noon）**。当前项目并没有获得官方书面答复，且账号不存在的证据不能冒用。
- **时间预算建议**：保持Noon问题在待办，不再用搜索同义关键词反复循环。除非官方/真实供货商带来新证据，否则直接评估合法可开展交易的替代渠道。

## 6. 真实阶段结果和接续任务

| 核验项 | 本轮结果 |
|---|---|
| 官方中国NGS存在且可创建Org ID | CONFIRMED（账号尚未创建） |
| 注册及发布商品通常免费 | CONFIRMED（官网一般卖家FAQ） |
| 中国个体户可获正式主体审核 | UNKNOWN（必须Noon确认） |
| P1候选有Noon历史真实商业信号 | YES（TRENZ Z40是他人的本地成交标签） |
| 产品同规格4件套可供小量且全成本合理 | **NO PROOF** |
| Everful整套看似低价而实际四只单买 | **DISCONFIRMED cheap-set assumption** |
| 中东终端价/NGS跨境加价/ETA | UNKNOWN |
| 国际收款门槛能否一单到账 | NEW P0：GENERAL POLICY 1000 AED/SAR，CHINA NGS APPLICABILITY UNKNOWN |
| 指定商品海关归类及进口SABER证书 | UNVERIFIED；官方4202关税类目只是分类起点 |
| 已外联/已发票/已进货/真实订单 | NO |
| 翰林是否恢复 | NO，继续归档冻结 |

**下一步执行**：向Noon明确确认的机会价值高于搜索第10家四件包供应商；用户没有提供可用于卖家注册的法定中国主体材料、Noon Seller Lab资格/收款信息，当前最多做到官方规则和公开采购情报。得到Noon书面答复前，不宜建电商工具后台或注册营业执照。

