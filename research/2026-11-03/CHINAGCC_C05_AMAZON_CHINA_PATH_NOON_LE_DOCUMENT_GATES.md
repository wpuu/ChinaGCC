# ChinaGCC｜2026-11-03 C05｜Amazon中国卖家准入纠偏、Noon LE材料闸门与执行收口

**观察日期：** 2026-11-03（北京时间）  
**Audit ID：** `2026-11-03/C05-AMAZON-CHINA-SELLER-PATH-NOON-LE-PREFLIGHT`  
**模型偏好：** GPT-6 Extra High；本运行环境不能提供可独立核验的实际思考等级凭证，不声称已切换。  
**执行边界：** 只读官方公开政策及既有GitHub记录；未登录Seller Lab/Seller Central，未提交证件、签约、联系平台/供应商、创建账号、采购、上架、投广告或修改用户账户。

## 1. 本轮结论

1. **Amazon UAE/Saudi中国卖家路径比C04表述更明确。** Amazon中国全球开店页面明确把UAE与Saudi列为中国卖家可拓展站点，并列出公司营业执照名称、注册地址、身份证明和可扣美元国际信用卡等注册准备。Amazon.sa的本地Commercial Registration页面限定为“business located in KSA”的企业须持KSA本地登记；不能把该本地要求扩大解释为所有中国境外企业都必须先办沙特本地CR。实际中国主体是否通过Seller Central KYC仍须账户审批，故Amazon账户进度仍0/15。
2. **Amazon Saudi当前新卖家优惠可用于未来预算，不构成开店理由。** 官方页面显示截至2026-12-31的新卖家30% referral-fee折扣（前60天、最多SAR150,000销售额）及SAR370广告抵用额；要求在注册后20天内添加首批商品，广告抵用额另有启动时限。优惠不计入长期利润模型，不得为赶优惠而跳过VAT、IOR、SKU和15%利润闸门。
3. **Noon LE材料拒绝指南提供了更具体的预检字段。** 通用指南要求商业登记允许Trading/Selling/Manufacturing/E-commerce等经营活动；拒绝修复页写商业登记至少剩余30天、代表人身份证件至少剩余15天，并将Chinese Resident ID列为可接受证件之一。代表人须是登记列明的所有人，或提供授权委托书。对中国NGS的最终适用仍需实际审核，不能据此宣称中国个体户或任何特定主体已获批准。
4. **Noon回款阈值冲突仍未解决。** Help Center为同币种100 AED/SAR、异币种1,000 AED/SAR；Support Agent文章为1,000周付、50–1,000月付、50以下暂存。NGS引用一般付款政策，但实际USD收款机构、账户币种、NGS适用阈值和Selling Origin均未在本账号核验。保留UNKNOWN，不计算首笔到账天数。
5. **业务决策仍为HOLD / CONDITIONAL_RESTART。** NGS仍是首单优先渠道，但账户级NGS资格、China LE和Payout未通过；Amazon中国卖家路径已文档化，但没有真实Seller Account、VAT与具名IOR。无新独立实付订单、同BOM RFQ或补货；不启动SKU/供应商深搜、不采购。

## 2. Amazon中东站中国卖家路径：C04纠偏

### 2.1 Saudi Commercial Registration适用范围

- Amazon.sa的“About KSA Commercial License Requirement”页面写明：**business located in KSA**的企业需要由KSA当地许可机关签发的Commercial Registration。
- 同一页面解释，扩展Saudi失败的原因之一是企业不在Amazon接受的国家；这与“所有境外卖家必须先成立KSA公司”不是同一规则。
- Amazon中国全球开店中东页面明确向中国卖家开放UAE/Saudi，并提供注册指导；注册资料包括公司营业执照名称和注册地址、身份证明、可扣美元的国际信用卡等。
- 因此C04的“是否接受中国营业执照”应精确改为：**中国卖家路径官方文档已存在；实际主体类型、文件真实性、国家/地区资格与KYC审核仍待Seller Central批准。** 不把本轮公开政策阅读计为账户创建或批准。

### 2.2 新卖家优惠与持续成本

- Amazon.sa：新卖家30% referral-fee折扣，前60天、最多SAR150,000销售额；页面标注有效至2026-12-31。
- SAR370广告抵用额有效30天；官方页面另要求在相应期限内启动Sponsored Products。
- Amazon.ae公开费用页：Beauty与Health & Personal Care类目在总售价不超过AED50时佣金8%，高于AED50时15%；FBA费用按尺寸/重量档位计费，公开表列起始费用，不代表本项目实际ASIN费用。
- 长期模型必须使用正常佣金、FBA、仓储、头程、VAT、IOR、广告、退货成本；新卖家优惠只作为短期敏感性情景，不能把补贴当永久利润。

### 2.3 VAT与进口责任

- Amazon中国官方VAT说明：非UAE/Saudi居民通过FBA向当地消费者销售，需要履行当地VAT注册义务；页面说明在首笔当地含税销售后30天内提出注册。实际法律时点与申报义务应由税务顾问/当地税务机关确认，不能将Noon NGS的目的国VAT安排套到Amazon FBA。
- Amazon Seller Central对FBA进口的公开支持说明：IOR负责关税、税费和清关；Amazon不作为FBA进口商，入仓货件须按DDP交付，不能让Amazon仓库承担到付税费。
- 所以Amazon的IOR必须有具名主体、报关行/货代委托、DDP报价、HS Code和单证责任分配；VAT/IOR仍是实质阻塞。

## 3. Noon China Legal Entity：新增预检清单

[Noon官方拒绝原因及修复指南](https://helpcenter.noon.partners/en/category/onboarding-and-registration/understanding-the-application-rejections-reason-and-how-to-resolve-them)列出的通用LE审查点：

| 字段/要求 | 官方公开指南 | 对本项目的状态 |
|---|---|---|
| 商业登记经营范围 | 应允许Trading、Selling、Manufacturing、Distribution、Wholesale、E-commerce或Retail等经营活动 | 用户真实主体与经营范围未核验 |
| 商业登记有效期 | 拒绝修复页写至少剩余30天；其他一般文件页仍有15天口径 | 冲突保留；30天仅作保守准备缓冲，不宣称是NGS统一法定值 |
| 代表人身份证件 | 拒绝修复页列Passport、Chinese Resident ID等；至少剩余15天 | 中国身份证被通用指南列入，不等于中国NGS本账号已实审通过 |
| 代表人权限 | 代表人应为商业登记列明的所有人；否则需Power of Attorney | 未核验，不得代签或冒用 |
| 收款受益人 | 银行受益人名称须与登记主体/所有人匹配；不匹配应先取得平台确认 | 未核验 |
| 境外收款证明 | 对UAE/KSA/Egypt以外主体，指南列出Payoneer或LianLian授权函（签字并盖章）等可接受证明 | 只作为文件准备线索，未提交 |
| Payout与Origin | Payout Method获批后仍须关联实际Selling Origin；未关联不能转款 | 本账号未验证 |

**重要边界：** 上述为Noon通用LE拒绝修复指南，不是针对本账号China NGS的审批结果。中国个体工商户是否接受仍UNKNOWN；不能因中国身份证被列入证件清单而推断商业登记类别获批。

## 4. 付款政策冲突与现金流

| 官方页面 | 阈值表述 | 适用结论 |
|---|---|---|
| Help Center Payments Processing Policy | 本币100 AED/SAR；异币种1,000 AED/SAR | 通用政策，NGS实际USD账户未验证 |
| Support Agent Payments Processing Policy | UAE/KSA每周1,000；50–1,000按月；50或以下暂存 | 同属Noon官方域，和Help Center存在冲突 |
| NGS专项页面 | 妥投后按USD Transfer Price付款，并引用regular Payment Processing Policy | 未明确该中国账户实际PSP、币种阈值及结算配置 |

因此：`Payout Approved`、`Selling Origin linked`、正向结算单、Bank Transaction ID及实际到账是不同证据。没有本账号结算配置，不承诺首笔到账日期或所需订单数量。

## 5. SKU与V2：保持冻结，不重算

2026-11-03当日14个规范SKU、12个历史已评分、2个未评分；本轮没有SKU同BOM新成交、供应商RFQ、补货或包装实测，故不改Opportunity/Evidence/Data三分及A-K维度。Top10排名全部维持原位。

- 化妆包3/4件套：仍缺同BOM最终包装重量/尺寸、消费者终价、深圳逐单成本；15%安全利润未证明。
- 穿戴甲：Saudi历史主流价格线索集中SAR19–24；SAR35–49成品/组合没有新鲜可核实同BOM实付成交。
- 发饰：AED39八件套及“10+ sold recently”是历史商品页标签，非本轮新订单，且不一定是目标同BOM。
- 原创IP：A22 DABUBU是GCC本土原创IP的品牌级售罄/补货自述，属于GCC→中国反向流动；ChinaGCC无A22授权。HERE集团经销网络覆盖中东不等于逐IP交易证明。中国→GCC首笔实付时间差仍UNKNOWN。
- 翰林面膜继续FROZEN；无非翰林商品真实订单、妥投、到账及全成本复核，不触发解冻。
- 14个SKU认证100件最坏亏损全部null/UNKNOWN；历史预算不是上界。未经授权第三方IP仍Hard Stop。

## 6. 双渠道首单准备度

| 渠道 | 已完成 | 百分比 | 当前最大阻塞 |
|---|---:|---:|---|
| Noon NGS | 1/12（仅UAE GCC Picks Store历史验收） | 8.33% | China LE/NGS资格原因未知；Payout与Origin未批准/未核；SKU QC和真实交易链未启动 |
| Amazon UAE/Saudi | 0/15 | 0% | 中国Seller Account尚未创建；VAT与具名IOR/DDP未落实；SKU/报价/包装/QC/Listing/FBA/广告/订单/回款均未完成 |

本轮未重新登录Seller Lab或Seller Central；1/12与0/15均沿用最后一次有证据的账户快照，不冒充今天重新验收。

## 7. 下一步（不超过3项）

1. Owner侧只读核实是否已有真实中国商业登记、经营范围、有效期、登记所有人/授权代表及可匹配的收款主体；不上传证件、不签约、不办新主体。
2. 不重复打开已知NGS空态页面。只有在用户授权且出现可用Work会话时，才读取现有NGS不适格原因、LE状态、Payout审批、Selling Origin和Invoicing Profile；只读、不提交。
3. Amazon路径仅保留为第二渠道的已文档化备选；暂不创建账户、不发FBA货件。待主体、VAT、IOR和首SKU同BOM经济性有证据后再进入注册/采购决策。

## 8. 主要来源

- Noon NGS：中国卖家资格、深圳交仓、Transfer Price、目的国VAT及付款机制  
  https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program
- Noon LE拒绝原因、经营范围、证件、有效期、授权及付款资料  
  https://helpcenter.noon.partners/en/category/onboarding-and-registration/understanding-the-application-rejections-reason-and-how-to-resolve-them
- Noon Payout方法与Selling Origin关联  
  https://helpcenter.noon.partners/en/category/onboarding-and-registration/how-to-add-the-bank-details-in-the-legal-entity
- Noon Help Center付款阈值  
  https://helpcenter.noon.partners/en/category/finance-and-payments/payments-processing-policy
- Noon Support Agent付款阈值  
  https://supportagent.noon.partners/portal/en/kb/articles/payments-processing-policy
- Amazon中国全球开店中东站  
  https://gs.amazon.cn/middle-east
- Amazon.sa KSA Commercial Registration适用范围  
  https://sell.amazon.sa/en/sell/business
- Amazon.sa新卖家优惠  
  https://sell.amazon.sa/en/
- Amazon.ae公开销售费用  
  https://sell.amazon.ae/pricing
- Amazon中国官方中东VAT说明  
  https://gs.amazon.cn/middle-east/uae-vat
- Amazon FBA进口/DDP/IOR公开支持说明  
  https://sellercentral.amazon.ae/seller-forums/discussions/t/87becf9a-1cd2-4d02-98e6-542e3452427f

**最终判定：** C05纠正了Amazon Saudi本地CR规则的适用范围，并把Noon LE预检字段具体化；没有改变Noon NGS第一、Amazon第二的渠道排序，也没有解锁账户、商品或采购。项目维持 **HOLD / CONDITIONAL_RESTART**。
