# ChinaGCC｜2026-11-03 C04：Noon Generic/品牌、回款阈值冲突、Amazon KSA注册与IOR、100件亏损数据审计

**Audit ID:** 2026-11-03/C04-BRAND-GENERIC-PAYOUT-CONFLICT-AMAZON-CR-IOR-LOSS-DATA  
**模型偏好：** GPT-6 Extra High；当前运行环境无法独立验证实际思考等级，不作切换成功声明。  
**范围：** 官方公开政策交叉核验 + GitHub结构化数据修复；未登录Seller Lab、未提交证件、未改账户、未采购、未上架、未投广告、未外联。

## 1. 本轮结论

- 渠道顺序不变：**Noon China NGS第一、Amazon UAE/Saudi第二**；但两条实际账户路径均未达到GO。
- 本轮新增独立付款订单、同BOM RFQ、同BOM补货凭证均为 **0**；历史V2分数不重算，Sample Ready=0，采购批准=0。
- 新增一个重要修正：Noon品牌政策不能一概理解为“所有Generic SKU都必须先申请品牌”。真实无品牌商品可按官方SKU规则使用 Brand=generic；自有新品牌和第三方受控品牌仍有各自审核/授权门槛。
- Noon公开付款政策存在两份官方页面口径冲突；NGS具体收款工具、账户币种和Selling Origin未验证前，不能把100或1,000 AED/SAR中的任何一个写成账户已确认回款门槛。
- Amazon Saudi卖家注册页面新增明确提示Commercial Registration是强制前提；中国营业执照是否满足该字段，或是否要求Saudi本地CR，公开页面没有说清，必须向Amazon书面确认。
- Amazon FBA不能默认由Amazon充当进口商。Seller Central员工答复说明跨境FBA卖家需承担目的国IOR角色并安排报关行；具体由自有主体还是合规货代承担，须在货件前写入合同及进口单证。
- 修复了结构化数据把历史“规划止损预算”写在 worstLoss100 字段、容易被误读为最坏亏损上限的问题：14个SKU的认证值统一设为 null / UNKNOWN_NOT_CERTIFIED，历史预算另存。

## 2. Noon品牌路径：Generic与Brand Approval分开

官方规则：
- 真正无品牌/Generic商品，Brand字段填写 **generic**，不能写N/A、unbranded或No brand。
- 自有新品牌申请需要英文/阿拉伯文名称、Logo、网站或可验证社媒链接；Seller SKU可以在Pending期间预建，但品牌获批前不能Go Live。
- Noon-controlled/gated品牌需要白名单/授权及可能的采购发票、品牌授权、进口许可或监管文件。
- 第三方IP没有书面授权仍是Hard Stop，不能通过把Brand改成generic绕开。

来源：
- https://helpcenter.noon.partners/en/category/product-listing/the-seller-sku-brand
- https://helpcenter.noon.partners/en/category/product-listing/brand-registration
- https://helpcenter.noon.partners/en/category/product-listing/product-listing-policy

**执行修正：** 每个SKU先判断真实包装和商品究竟是Generic、Owner自有品牌还是第三方品牌。不能因为没有品牌授权就把带有他人角色/图案的商品标成Generic。

## 3. Noon回款门槛：官方页面冲突，账户规则未定

Noon Seller Help Center的Payment Processing Policy写明：
- 银行账户币种与市场币种相同：100 AED/SAR；
- 国际币种银行账户：1,000 AED/SAR；
- 周三生成对账单，UAE/KSA符合条件的付款在下一周四处理；低于门槛的余额顺延。

但Noon另一官方Support Agent文章写法不同：每周付款门槛1,000 AED/SAR，50–1,000按月处理，50或以下暂存。

NGS官方只说回款遵循常规Payment Processing Policy；且批准Payout Method后仍须映射到正确Selling Origin。NGS USD Transfer Price不代表实际收款钱包的币种分类，也不能直接推断阈值。

**结论：** payoutThresholdApplicability=CONFLICTING_OFFICIAL_DOCS__ACCOUNT_NOT_VERIFIED。下一次只读Seller Lab核实实际Provider、结算币种、阈值和Origin映射；没有账户证据前不做回款天数或周转资金承诺。

来源：
- https://helpcenter.noon.partners/en/category/finance-and-payments/payments-processing-policy
- https://supportagent.noon.partners/portal/en/kb/articles/payments-processing-policy
- https://helpcenter.noon.partners/en/category/onboarding-and-registration/how-to-add-the-bank-details-in-the-legal-entity

## 4. Amazon中东站：注册、VAT与IOR

- Amazon中国全球开店页面列出UAE与Saudi站点，要求身份资料、国际信用卡和公司营业执照信息。
- Amazon.sa前台当前明确写明：Commercial Registration是Saudi站注册和销售的强制前提。页面没有明确说明中国公司营业执照是否满足该字段，也没有说明是否必须Saudi本地CR，因此标为 **UNKNOWN—需要书面确认**，不自行推定。
- Amazon Saudi Listing Guide明确：非Saudi居民使用当地FBA销售，无论销售额多少都需要Saudi VAT；Amazon中国VAT页面对非UAE居民FBA也说明无销售额门槛。NGS的目的国VAT安排不能套用到Amazon FBA。
- Amazon Seller Central员工在跨境FBA说明中指出：库存从一个国家发往另一个国家时，卖家在原产国承担出口商角色，在目的国承担IOR角色，并需安排customs broker。Amazon不应被默认写成IOR。若由货代提供IOR/DDP服务，必须核实其合法主体、进口文件抬头、责任与追偿条款。

来源：
- https://gs.amazon.cn/middle-east
- https://sell.amazon.sa/en
- https://sell.amazon.sa/en/content/listing-guide
- https://gs.amazon.cn/middle-east/uae-vat
- https://sellercentral.amazon.ae/seller-forums/discussions/t/ca9dfda2-d873-4494-8d94-5c3e242c623f

## 5. 100件最坏亏损：14个SKU全部未认证

统一公式：
- 100件完全滞销：100×(同BOM采购+包装+中国境内交仓/头程)+不可回收固定费用−已验证残值
- 100件全部不可售退货：在上式基础上增加不可售退货/处理成本；没有实际收到的Transfer Price不能作为回收款。

缺少同BOM正式成本、最终包装参数、逐单深圳交仓费、真实退货/平台处理费用及残值证据。故14个SKU的 certifiedWorstLoss100=null，certifiedUpperBound=false。历史USD620、USD210、USD180、CNY2480、AED1,128等全部保留为历史情景/预算，不再放在认证最坏亏损字段。

## 6. SKU评分与数据完整性

- 12个SKU保留历史V2三分；翰林面膜、微纤维布未评分，继续WATCH，不编造A-K或Top5风险。
- 已评分SKU的A-K总分与历史Opportunity Score相符；不因本轮政策审计改变需求分。
- 两项跨文件冲突继续保留：旅行瓶主表75/独立文件74；串珠挂件主表68/独立文件69。
- 14个当前SKU此前只有10个规范独立SKU文件，另有1个旧化妆刷别名文件；本轮补齐缺失的4个规范文件，保留旧别名不作为独立SKU。
- 所有14个SKU仍为Channel Access NO-GO；Generic路径的澄清不会替代China LE、NGS资格、Payout/Origin、Invoicing Profile和SKU QC审批。

## 7. 两套首单准备度

- **Noon NGS：1/12 = 8.3%**，仅UAE GCC Picks Store有2026-11-01现场验收；本轮未重新登录。
- **Amazon：0/15 = 0%**，账户、VAT、IOR、SKU、报价、包装、样品、Listing、货件、入仓、广告、首单和回款均无完成证据。

各未完成项和具体阻塞已写入 data/current.json 与 data/daily/2026-11-03.json 的 firstSaleReadiness。

## 8. 下一步（仅3项）

1. 只读已授权Noon Seller Lab：NGS Not Eligible原因、China LE要求、Brand/Generic状态、Payout审批、Selling Origin映射、Invoicing Profile。
2. 向Amazon书面确认Saudi Commercial Registration是否接受中国营业执照，并确认UAE/Saudi FBA VAT、IOR和DDP责任。
3. 只有渠道路径明确后，再验证四件包/发饰/胶贴甲的新鲜同BOM成交或RFQ、最终包装参数、深圳单票成本和真实消费者终价。

**禁止事项不变：** 不采购、不上传证件、不改账户、不创建SKU、不上架、不投广告、不联系供应商或品牌方。
