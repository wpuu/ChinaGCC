# ChinaGCC｜058：NGS收款上线时点冲突与100件亏损证据等级审计

- 日期：2026-11-02（Asia/Shanghai）；审计编号：2026-11-02/C04-PRELIVE-PAYOUT-AND-100UNIT-LOSS-CERTIFICATION
- 模型偏好：GPT-6 Extra High；运行环境无法独立证明实际思考等级锁定。
- 范围：官方政策和已存仓库证据；未登录Noon后台、未外联、未上传个人资料、未创建SKU/报价/库存、未采购或投广告。
- 原研究链：Saudi女性18–45 / UAE女性18–39、female Gen Z学生 → TikTok/Snapchat/Instagram种草（归因未核）→ Noon中国NGS第一、Amazon UAE/Saudi第二 → 日常造型/美妆/旅行收纳/礼品触发假说 → Top10历史V2 → 无本轮独立付费订单/RFQ/补货新增证明则不扩供应池 → 成本、退货、结算与首单证据闸门。

## 一、同一NGS官方页面的收款前置条件表述有差异

1. NGS页面「How does the payout work?」下：**新中国卖家店铺正式Live前需要有效payment method**。
2. 同页末尾「How to receive payout once an order is fulfilled?」下：**刊登商品前录入payout可选，但实际收款前必须完成并经批准**。
3. 两句不完全等价。不能据第二句推断本店可在收款未批时正常Live；也不能据第一句说实际店铺已被审核拒绝。本账号的China LE仍required/未提交，NGS显示不符合资格但原因未披露，Payout及Origin绑定未知。
4. 收款专项官方政策另外规定：**支付方式Approved仍不够，还必须映射发货Selling Origin**；否则账款可累计但不能汇出。
5. 保守可执行决定：Payout Method = Approved 且 Selling Origin = mapped、实际中国NGS通道批准、真实SKU/QC与商品授权齐备之前，禁止生成可售状态（不填实盘库存/Transfer Price以触发自动上线）。此系项目内部安全闸门，不冒充Noon法定通用禁令。

证据：https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program 及 https://helpcenter.noon.partners/en/category/onboarding-and-registration/how-to-add-the-bank-details-in-the-legal-entity；真实店铺证据：https://github.com/wpuu/ChinaGCC/blob/main/research/2026-11-01/CHINAGCC_055_WORK049_STORE_ACCEPTANCE_AND_HONGLIANG_1688_RIGHTS_GATE.md。

## 二、100件最坏亏损认证与止损预算分离

仓库Top10的历史“USD620、USD210、¥2480”等是旧情景、限额或裸货假设，不是100件最大损失上界。对每个Top10执行候选，维持：
- certifiedUpperBound = false
- certifiedWorstLoss100 = null
- sampleReady = false
- Channel Access Gate = NO_GO
- historicalScenario = 原字段保留，不得用它写“100件最坏亏损为X”

**模型A：先采购100件、0件售出：** 100×（同BOM已确认采购价＋不可追回包装及国内运费）＋固定/推广/仓储成本－可实际回收残值。全部要有报价/订单凭证、成本上限、残值假设，才能填入数值。

**模型B：100次交仓后均成为不可售退货：** 100×（货值＋包装＋逐票深圳交仓＋不可追回的结算/汇兑＋适用售后处理）＋固定/广告/损耗－实证残值；这类订单不能预记TP收入。当地可售退货可能转FBN二次上架，需另建现金流分支，且不能把“免费60天仓储”当作永久零费。

**模型C：订单后采购而无法按处理时效到仓：** 零预压库存不等于最大亏损为零。迟交、取消、供应商违约/代发失败及店铺处罚的实际条款/金额未验，仍不能给可信上界。

单位经济性假设：若TP为美元单价、q是假设最终没有TP收入的尝试比例、每次尝试已含全部可归属费用C，那么目标15%预期贡献利润要求 C ≤ 0.85×(1−q)×TP。**这不是平台实测毛利率，不覆盖可售退货FBN二次销售、额外收费、TP未到账风险，也不等于100件损失上界。**

尤其**四件绗缝化妆包**：只要最终零售包装毛重尺寸、同BOM三家报价、深圳逐单运费和Noon买家结账价/ETA未齐，就不能从竞品SAR59.90或样本540–570g推导15%利润。标记 NOT_PROVEN；不采购。

## 三、First Sale Readiness的证据时间

- Noon 1/12 = 8.3%：唯一经历史后台验收完成的是 **UAE GCC Picks Store**（2026-11-01）。Organization/Project存在但独立Org ID标识凭证未存，KSA未核实，China LE未提交，NGS未获资格，Payout未核实，后续QC/TP/首单/交深圳/妥投/回款均为0。
- Amazon 0/15：主账号/AE/SA/VAT/IOR/SKU/三报价/重量/QC/Listing/FBA发货入仓/广告/首单/回款均缺证据。
- **没有11月2日本店后台重新登录凭证；“11月2日复盘”不能误写成“11月2日账号已重新验证”。** 状态为上一已核实账号快照沿用，不是对当日后台的实时断言。
- 当前最大3阻塞：①真实中国经营主体/NGS实际审批与Payout-Origin；②同BOM成本、包装及深圳交仓/QC/权利；③本店消费者终价/ETA、退损、结算实测。

## 四、商品与市场复核结论

- Top10次序保持：化妆包、硅胶刷、10件化妆刷、旅行瓶、粘毛滚、抓夹、穿戴甲、无IP串珠挂件、线材整理、化妆海绵；不因旧索引成交标签重打分。
- 基础穿戴甲与低价粘毛滚/化妆海绵需求信号高但经济性未达安全线；硅胶刷是结构性成本风险较稳而不是“已盈利”。
- 穿戴甲SAR35–49标准化成品/组合：无同期同款可靠真实付款核验；四件化妆包最终包重/尺寸与15%安全利润未通过。
- WAKUKU等原创IP已发现公司级收入披露，但同系列“中国首付费单—GCC首付费单”时差以及第三方销售授权无法确认，IP商品继续Hard Stop；无IP原创串珠挂件另行审视产品合规。翰林面膜继续冻结。
- Noon NGS目的国VAT专项豁免与一般跨境规则不可混淆；Amazon AE/SA本账号VAT/IOR均未通过实证。
- 历史V2 41子项冲突：旅行瓶主表75 vs独立74；串珠挂件主表68 vs独立41项合计69。保留原值，不杜撰补分。

## 五、下一轮仅3项

1. 核对既有中国主体真实可用性、经营范围和Noon LE待提交材料；获取NGS资格不符原因与中国个体工商户专项受理证据（禁止虚填、上传/签署未经批准资料）。
2. 在有条件前提下仅验证一个SKU同BOM三份供应报价、打包毛重/尺寸、逐单到深圳安邦集货点费用和可执行处理时效；未经许可不外联或付款。
3. 法律主体、Payout-Origin和NGS获准后，才验证一个SKU实际Transfer Price→买家终价/ETA/退货及15%贡献利润，随后再审Sample Ready。不存在实盘批准时不创建可售商品。

> 所有数字/排名为历史研究工作值或显式假设，没有新增实付款、店铺获批或已认证亏损上界。该报告属于数据完整性与官方文件核验的实际交付，不是交易施工。
