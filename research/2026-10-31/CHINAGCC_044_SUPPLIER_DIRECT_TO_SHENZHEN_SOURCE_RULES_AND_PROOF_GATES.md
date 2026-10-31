# ChinaGCC-044｜供应商按单采购→Noon深圳集运仓：043验收合并、标签与入仓新证据、实施准入卡

**日期：2026-10-31（北京时间）**  
**本轮基线：** 仓库main核查起点 \`fc2d951dad90d735bf6dde0d895bcd19aba8cbfa\`，该main已经有Work-043提交；已读[042](CHINAGCC_042_PUBLIC_NGS_RULE_CONFLICTS_OWNER_WORK_SPLIT.md)、[043](CHINAGCC_043_NGS_BACKEND_FOUR_REMAINING_EVIDENCE_ACCEPTANCE.md)、[Issue #24](https://github.com/wpuu/ChinaGCC/issues/24)；没有覆盖031、037B、038或前史。  
**商业唯一目标：** 买家通过Noon实际购买 → 正式NGS订单 → 中国按单采购严格同规格商品 → 获认可的标签/包装 → 直接通过中国快递送Noon深圳集运仓 → 经平台接收 → noon完成国际配送及客户妥投 → 经批准账户实际到账 → 全成本净利复核。  
**执行限制：** 仅公开网页和已授权GitHub读取/写研究；不联系任何供应商、Noon、银行或买家，不触发工单，不创建Store/LE/SKU/库存/Shipment/货件，不下单、付款、注册、投广告或修改自动化。用户明确不要求供应商持续库存保证书；预计缺货<1%为本人假设，不是假订单统计。

## 1. Work-043已完成，避免重复派Ego

真正043文件是[CHINAGCC_043_NGS_BACKEND_FOUR_REMAINING_EVIDENCE_ACCEPTANCE.md](CHINAGCC_043_NGS_BACKEND_FOUR_REMAINING_EVIDENCE_ACCEPTANCE.md)，不是早期猜测的\`...FOUR_GATES_ACCEPTANCE.md\`。最新[Issue #24](https://github.com/wpuu/ChinaGCC/issues/24)已置顶043证据，且043在全部证据写入回读后才结束Ego；041提前finish是已处理历史错误，不再重复。
- A: 2026-10-31 14:00:07实际\`xborder.noon.partners/en-ae/programs\`，显示 **“Your store doesn’t qualify for any cross-border programs at the moment.”**；没有原因、没有NGS PT下拉。**这是真实资格限制提示，但不能直接归因于Store或LE特定原因**。
- B: 14:00:34实际\`noon-catalog.noon.partners/en/catalog\`，Active Net Stock、No data。可采购但未持有库存是否可报：UNKNOWN，**不是明确允许/禁止**。
- C: 14:01:01实际\`directship.noon.partners/en/orders\`，No Orders Available to View；NGS取消费、绩效和操作按钮UNKNOWN。
- D: 14:01:14实际\`directship.noon.partners/en/shipments\`，No shipments available to view；NGS AWB/供应商代贴/国内物流号绑定/仓收货回执UNKNOWN。
- **结论：A-D“真实页面读取验收”已完成，NGS“业务准入/交易流程验收”未通过。当前不必再给用户新Work任务重复读相同空态页面。**

## 2. 本轮独立公开研究真正新增的证据

### 2.1 Noon AWB不能自己凭国内单号生成QR

[Noon官方《Ordering your packaging materials》](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/ordering-your-packaging-materials)“Can I create my own QR code for the AWB?”明确答复**不能自行生成AWB QR**，应通过Seller Lab相关材料流程取得平台分配的码。官方[Directship Seller Lab网页订单教程](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/how-to-process-directship-order-using-the-seller-lab)允许对已建货件\`Re-print AWB\`，扫码/手动录入平台AWB，生成Handover Manifest。并有[Directship包装规范](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/packing-guidelines-for-directship)提示不得让多余QR干扰扫描。**全部是官方通用FBP/Directship文件，不可不经当前中国NGS账号验收就照搬发货模式**。

中国NGS自己的[官方专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)明确“无需Noon包装材料”，但仍把\`Prepare and pack\`链接到上述Directship教程。**免专用包装不等于自行编造AWB**。下一次实际操作必须先取得获准中国NGS的正规货件识别标签/格式，才可交给供应商印制。不需要向国内供应商共享Seller Lab密码、Cookie或API私钥。

**订单识别四层，不得混写：** Noon订单及行项目（客人买哪一项）、SKU/PSKU商品条码（什么款色型号）、Noon官方Shipment AWB/QR（哪一包货件）、中国国内快递单号（中国哪家快递承运到深圳）；普通FBP另有Manifest二维码，但NGS通过中国快递交仓时是否需要这项，UNKNOWN。

### 2.2 “中国有单件代发和贴标能力”得到公开可查证据，但未验证原候选供应商

- [1688全球供货中心跨境合作协议](https://terms.alicdn.com/legal-agreement/terms/suit_bu1_b2b/suit_bu1_b2b202001241814_77037.html)对**已经加入其特定合作计划的商家**规定每单一件代发、48小时发货、合同约定送达等。这证明国内供货制度可支持按单发货，**不是Noon的协议、不是全部1688商家都承诺，更不能把48小时发货变成48小时入Noon深圳仓**。
- 义乌购供应商公开声明分化：[一例店铺展示“现货、一件代发、FBA贴标”](https://yiwugo.com/hu/yiwugou654321.html)，另一例店铺[明确“不做一件代发”且公开平台运费只是虚拟估价](https://yiwugo.com/hu/779918.html)。两例只证明**国内服务真实存在且卖家差异明显**，**不是本项目推荐新品或说明此前刷具/首饰盒等现有SKU已可供Noon贴码**。
- [义乌购贸易服务页](https://en.yiwugo.com/service/intro_1.html)还提供集单/仓储/检验服务，适用于先集货再代打包的备选模式，但其是否支持Noon定制标签、按单SLA、费用和发深圳尚无已确认报价；**它不是已经签约的本项目供应链**。

**结论：** “供应商直接寄深圳”可作为优先模式；“这家现有候选的供应商可以正确贴正式Noon标签并满足时间”仍UNKNOWN，只有未来获准的供方沟通/实际订单能证实。Noon先允许订单后备货，不等于每个supplier已被Noon认证为仓配商。

### 2.3 可能存在2026-09-01版中国Global物流V2，且与旧V1冲突：重要待核风险

[AMZDH 2026-08-31新闻](https://amzdh.com/kjtt/10368.html)称**Noon Global直发V2自2026-09-01**施行，转述“24小时接单、含下单当天5天入仓、单包裹计费重≤5kg、最长边≤60cm、三边之和≤130cm、PSKU/PID及PH/NSAI二维码标签”等细则，并提及迟交/重量误报风险。这是**第三方转述，未取得Noon官方V2原文件/本账号最新生效条款**。
另一[第三方ERP转载V1](https://www.noonerpiu.com/guide-noon-global-mode.html)写96小时入仓，页面自身还含\`2kg\`与正文\`5kg\`不一致；[大数跨境文章](https://www.10100.com/article/149389707)称3天。官方[China NGS](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)只定义实际\`Processing Time\`需要包含备货和到深圳仓，不公开当前账号可选数值。
**判断：** V2提供“可能已变更为5天”等真实研究线索，但不能归类为已证实Noon当前强制或获批设置。其**24小时接单、5天含当天、重量上限、面单内容及罚金**全部标\`SECONDARY_V2_CLAIM_NOT_PRIMARY_CONFIRMED\`。不在试卖前编造承诺/计算赔罚。若Noon正式系统/官方原件日后确认，用官方生效日期覆盖旧V1和第三方错误口径。

### 2.4 正确的集货仓完成标准

[Noon China NGS专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)：Seller Lab的“中国仓库”只用于管理库存，**不用于实际物流发货**；实际接收点是深圳指定集货仓；平台从**集货仓收货**后接手国际段。普通FBP术语\`Ready\`、\`Shipped\`、\`Manifest generated\`及Noon物流received由[Directship Features](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/directship-features)区分，但**中国NGS实际入仓状态名称未取得**。
运输完成的最小证据是：供应商打包标签核对→国内快递揽收及签收→**Noon平台确实接受/扫描对应货件编号**→国际发出→买家妥投。**只有国内快递签收还不能证实Noon接纳货件或满足PT**。

## 3. 最短实际业务操作卡（现阶段仅模板）

**逐笔映射表（模板字段，非真实记录）**：
- noon_order_ref（脱敏订单ID，禁止保存买家地址/电话在GitHub）
- noon_order_item_ref、SKU/PSKU、variant/color/qty
- cutoff_at_and_timezone（真正NGS订单可见截止，未获则UNKNOWN）
- supplier_source_and_page、actual_purchase_time、actual_CNY_purchase_cost
- official_noon_AWB_id（禁止自定义伪造）
- product_barcode_verified、AWB_printing_evidence、label_photo_verified（仅保存非敏感脱敏证明；不上传凭证）
- domestic_courier、domestic_tracking、domestic_paid_cost、domestic_signed_at
- noon_hub_received_at_and_status（仅平台真实记录，不自行用国内签收代填）
- international_status、delivered_at、TP_USD_settled、payout_received_at_CNY_net、return_or_cancellation_costs、net_contribution.
对应的实际执行卡另见[ops/CHINAGCC_044_NGS_SINGLE_ORDER_HANDOFF_CHECKLIST.md](../../ops/CHINAGCC_044_NGS_SINGLE_ORDER_HANDOFF_CHECKLIST.md)，只在未来正式授权且具备合法账号及真正订单时填写。

**异常策略**：
- 采购前发现一个源缺货→查严格同BOM可按时交仓的备选源，不必有供应商库存保证书；
- 实物色号/型号不一致→不能用近似品代替顾客下单；
- 无Noon正式标签→不寄无标裸件到深圳；
- 正常出国内快递但临近PT截止→不能声称已交仓，按NGS真实政策处理；
- 买家付款但卖家未到账→采购及国内运费需卖家先垫，不以客户订单当现金入账；
- 取消有潜在费用/绩效影响，\`Owner_assumed_oos_lt_1pct\`不作为“取消无成本”证明。

## 4. 当前实际GO/NO-GO与分工

| 关口 | 本轮结论 | 后续需要的授权/证据 |
|---|---|---|
| China NGS订单后备货+送深圳 | OFFICIAL_PROCESS_VERIFIED；可设计SOP | 真正开卖前仍须Store/LE/NGS/Payout获批 |
| Work-043四页面验收 | **COMPLETED_AS_OBSERVATION**；后端业务UNKNOWN | 不重复Ego，直到新有效权限/新页面 |
| 自行创建AWB QR并让供应商贴 | **NO-GO**；官方明确不能自建 | 只能用正式平台分配/提供的标签 |
| 市场有代贴码+单件代发 | PUBLIC_SERVICE_EXISTENCE_VERIFIED | 不是当前SKU供方已接受/报价 |
| 供应商将正式Noon标签贴在包裹并直寄深圳 | CONDITIONAL_PROPOSAL；不是已获准NGS服务 | 未来需Noon账号适用条款/平台官方确认及供方实际执行证明 |
| NGS具体PT/5天V2等 | UNKNOWN；只有不一致次级资料 | 未来官方原件、获准账号实际订单或公告 |
| 国内快递签收即Noon收货 | **FALSE** | Noon正式入仓回执才算 |
| 用户现在可开卖 | **NO_GO_LIVE_LISTING** | 已存在真实LE/Store/NGS/Payout不足且消费者价/完整履约成本未过 |
| 供应商库存保证 | **NOT_REQUIRED_BY_OWNER** | 保留合法、可交付库存数量与缺货例外风险管理 |

**主代理我能独立查的：完成这一轮的官方标签限制、真实国内一件代发存在性、NGS交仓证据区分、潜在V2条款冲突；没有把任一未知字段写成完成。**  
**Work现在无必要执行：** 043已对四个可访问页面全部实读、目前无NGS交易资格；除非出现新的实际可读专项/审核状态或用户另行授权真实配置，才可提新Work提示词，不再要求重新打开空页。  
**用户授权边界仍有效：** 无注册、店铺创建、外联、采购、付款、上架、广告或自动计划变更。

## 5. 下一轮独立研究的唯一有价值触发

**045不是重新搜商品。** 只在能够拿到实际\`Noon官方Global V2生效条款/原文件\`、\`Noon真实中国NGS订单标签与签收规则\`、或\`明确供应商按正式Noon标签直寄深圳的授权/执行新证据\`时补充审计；否则保持044条件SOP + 037B渠道HOLD，不再制造同义报告。任何正式对外询问供应商或Noon，必须新增明确外联授权。   
