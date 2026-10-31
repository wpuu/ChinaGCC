# ChinaGCC-042｜NGS订单后采购：主研究已核证据、错误教程排除、只读Work分工及实施前闸门

**研究时间：2026-10-31，北京时间；主仓库：** wpuu/ChinaGCC。  
**接续基线：** main `c9aa422de9f17304356231f58694c3442e93c14c`；已读[041正式Work回执](CHINAGCC_041_NGS_ORDER_BACKED_PROCUREMENT_DIRECT_SHENZHEN_RULES_AND_SOP.md)、040、Issue #24（含Owner取消库存保证书硬门槛）、031原Noon账号验收和037B商业HOLD。**041的四项账号深层验收未完成是子代理提前finish造成的执行失误，不能冒充Noon官方拒绝/明确权限门槛。**
**本次权限边界：** 仅公开规则检索、GitHub内容新增、Issue同步；没有登录Noon、操作Ego、点击正式订单、注册店铺/主体、提交银行证件、咨询外联、联系供方、采购下单、付款、上架、发货、广告或修改既有自动化。

## 1. 经营目标与Owner已经纠偏的规则

- 目标模式（仍属**条件实施方案**）：UAE买家在Noon支付→Seller Lab有效订单→卖家在中国选严格同BOM供应商采购→以获Noon认可的货件识别码打包/供应商或第三方代打包→中国快递交深圳集货仓→核Noon收货扫描→Noon跨境/目的地清关/妥投→平台完成账单与有效收款账户实际到账。
- 无须假设用户本人先收货，不要求提前囤海外仓。中国采购和中国段物流**由卖家先垫付**，客户已付Noon并不等于卖家立即拿到现金。
- **供应商持续保证库存的书面文件不再作为独立硬门槛。** 可由多个严格相同规格货源补货。用户估计缺货率<1%属经营判断，非真实订单历史。缺货允许按NGS真实适用规则取消，**不能假定0罚费/无绩效影响或无限虚填可售数量**。
- 官方[China NGS专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)说明中国仓在Seller Lab仅用于库存配置而非实际国内备货/物流仓，指定深圳集货仓是实物流交接点；PT覆盖送达集货点，而不是中国快递揽收。

## 2. 本轮独立检索的三项纠错（不同源的适用性不得互换）

### 2.1 “NGS固定3天/最长96小时”仍未被官方批准规则证实

- 官方[China NGS](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)只要求在卖家设置的`Processing Time`内交到中国集货仓，未明示可选天数、工作/自然日、订单截止时区。
- 官方[创建/管理仓库](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/creating-and-managing-a-new-warehouse)确实有PT下拉，但未列中国NGS真实可用值。
- 官方[普通FBP取消政策](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/fbp-order-cancellation-and-rejection-policy)写PT可在1—10天以及不能给已有订单延长PT；此为普通FBP，不作为原账号NGS已核选项。
- 第三方[大数跨境2026-06文章](https://www.10100.com/article/149389707)称NGS固定3天，[另篇中国卖家手册](https://www.10100.com/article/151146255)又称3天建议、96小时上限。两者与Noon一手`seller-set processing time`有取值差异。**不得继续将3天、4天或96小时写成本店已获准的刚性承诺**。
- 实际落地的时间判断应该是：`真实采购确认及出库耗时 + 贴码/包装耗时 + 国内运输耗时 + 深圳仓实际接收缓冲 ≤ 本店NGS实际订单PT`。供应商写“48h发货”只代表发出，不是中国仓接收，若PT不足不能放出无法实现的量。

### 2.2 普通FBP佣金/跨境附加费不能塞入中国NGS正常妥投TP

- 官方[China NGS专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)明确卖家设置USD `Transfer Price`；正常成功妥投向卖家支付TP，“no additional fees or charges deducted from this amount”；平台内部决定加在买家的国际段、税费、清关成本。
- [大数跨境2026-06文章](https://www.10100.com/article/149389707)又声称NGS正常销售额外从卖家扣8%—15%类目佣金及5%跨境费；这与Noon专项的一手TP结算口径**冲突**。不得把第三方收费表归入这条NGS模型，也不能推成中国出口税/银行换汇费0。
- 官方[Payments Processing](https://helpcenter.noon.partners/en/category/finance-and-payments/payments-processing-policy)包含普通本币账户100 AED/SAR和异币账户1000 AED/SAR门槛、周结转滚存；这些是**一般账户规则**，中国NGS指定USD/实际收款通道是否按相同方式执行依账户协议判定，不声称本用户需要多少订单才能提现。

### 2.3 Noon AWB、国内快递号、产品条码与Handover码不能按“一个号”理解

- 官方NGS`Prepare and Pack`链接[Seller Lab Directship处理教程](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/how-to-process-directship-order-using-the-seller-lab)。该教程显示`Create Shipment`、扫描/输入AWB、查看`Shipments`、`Re-print AWB`、打印官方货件二维码以及`Handover Manifest`二维码。**一般Directship官方存在这些按钮，不等于本店未开通NGS的订单页面已有此按钮、也不等于可自行生成与原单无关的码。**
- [Noon Packing Guidelines](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/packing-guidelines-for-directship)说明每货件只能使用符合规定的Noon QR，避免多个相互冲突的QR；NGS免专用Noon品牌包装不代表免二维码。
- [Noon商品Barcode规则](https://helpcenter.noon.partners/en/category/product-listing/barcode-requirements)说明商品不同颜色/型号变体各有独立码；这是**商品身份**，不同于代表一包/一货件的AWB、交接manifest和国内快递承运号。
- 第三方[小蝌蚪跨境ERP实操](https://www.xkdoo.com/tutorials/4.html)称可以在特定操作中用Item Purchase Nr./国内运单号作为AWB输入。必须由本账号明确核对NGS提供/接受的AWB生成/导入规则，**不能仅凭该教程把任何中国快递号填成Noon AWB**。同理第三方[马帮ERP授权说明](https://help.mabangerp.com/kbzx/nested/details?id=4664&resource_id=1)只证实存在专门`noon线上发货`渠道下的授权打单操作，并非本账号已授权API/ERP。
- 中国快递物流“签收”与Noon深圳集货仓正确`AWB Accepted / Received`的事实不同；正式回执事件名称在账号订单上仍UNKNOWN。

## 3. 取消订单与商家健康：不能用普通Directship阈值代替中国NGS

- [普通FBP取消](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/fbp-order-cancellation-and-rejection-policy)和[Directship订单教程](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/how-to-process-directship-order-using-the-seller-lab)确认缺货标记/取消可能收费，且影响绩效。
- [Directship seller performance](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/directship-seller-performance-management)的普通Directship滚动7天取消率低于2.5%及迟交低于3%是公开文档，不是本NGS专项阈值。
- [Reputation dashboard](https://helpcenter.noon.partners/en/category/reputation-management/reputation-management-dashboard)对卖家库存缺货及最近10天Late Shipment展示不同统计窗口。普通/Express/NGS适用口径可能不同，**只能在真实卖家条款/费表或NGS明确官方文件确认后入账**。
- `Owner_oos_rate_below_1pct=ASSUMPTION`；取消预计影响在首单前保守纳入异常预算，但不恢复“库存保证书”要求，更不能为了测试罚款故意制造取消订单。

## 4. 现有账号的现实状态：正确的因果分账

- [Work-031实际账号验收](CHINAGCC_031_NOON_ORIGINAL_ACCOUNT_EGO_READONLY_ACCEPTANCE.md)：Org/Project存在；当前项目UAE/KSA无Store、LE页面`No Valid Legal Entities Found`、Payout/Origin状态不可读、NGS尚未证明具备售卖资格。
- [Work-041实际操作](CHINAGCC_041_NGS_ORDER_BACKED_PROCUREMENT_DIRECT_SHENZHEN_RULES_AND_SOP.md)：正式Ego空间13仅进入旧账号首页看见`You don't have any noon store on this project`；`Seller Logistics`入口元素视口不可见错误；`Global Selling`并未打开；子代理提前`finish`退出。**不能将四项未读取改写为明确平台权限拒绝，更不能声称Ego当前再次bootstrap失败。**
- 041失败的空间已经终止。下一次若用户给Work发起**新的独立只读核查任务**，允许以官方工具建立新的正常任务空间，但这不等于尝试用新空间“恢复失效的旧空间”，不能套用旧空间ID或绕过控制权。新的独立任务应事先列明验收标准，在全部检查/明确受阻后才finish。
- 即使读取到NGS页面，**不能在未批准真实LE/Store时创建假仓库、库存、SKU或取真实AWB**。

## 5. 工作分工：哪些已经由我做了，哪些是真Work任务

| 任务 | 责任 | 当前可交付状态 | 禁止伪装的结果 |
|---|---|---|---|
| 公开NGS基本模式/汇率、回款、深圳仓地址 | 主研究 | 官方来源已核；历史041归档 | 公开流程≠现店铺已上线 |
| 3天/96小时与佣金第三方冲突 | 主研究 | **本042新完成的核验** | 第三方口径不得当官方 |
| AWB/商品条码/国内快递号区分及正常取消风险 | 主研究 | **本042已核、特定NGS UNKNOWN** | 不替平台生成订单AWB |
| 国内多货源的采购步骤、出库时效不等式、异常SOP | 主研究 | 可独立形成非交易计划 | 货源列表≠供应商已签代贴服务 |
| Noon账号真实NGS可见PT下拉/未持有库存管理 | Work Ego只读 | **NOT_VERIFIED**；新任务只读一手页面 | 不创建仓、库存或SKU |
| 当前Store/LE门槛的具体页面提示（此前031已证存在性） | Work Ego只读 | 只核**新增明确原因** | 不重查组织/不新注册 |
| NGS专项缺货取消费表/绩效条款、第三方贴码和扫码流程 | Work Ego只读 | **NOT_VERIFIED**；如果只读页因无店铺打不开，明确未知并停止该项 | 不套普通FBP费率 |
| 实际同BOM供应商按Noon指令逐单代贴/送仓 | 需未来真实供应商询价或合法订单级验证；当前仅公开页独立核查 | **UNKNOWN**，本轮禁止外联 | 不把MOQ1解释成已获代发承诺 |
| 主体审批、收款、真实订单、入仓、妥投、到账 | 需要合法主体+用户明确批准后真实业务 | 全部未通过/不存在本项目成交证据 | 模拟无法替代真实 |

## 6. 最短SOP和首单安全门槛

**仅在Store/LE/NGS/Payout合法通过后**：
1. 在一个SKU颜色/规格/订单量真实可交的条件下设置适量可售量（库存为可采购量是否获准仍需官方确认）；不无限填现货。
2. 订单真实产生，核SKU/数量及平台显示的NGS交仓截止时间，确认至少一处可采购同款货源。
3. 获取Noon当单真实Shipment AWB/合规产品条码要求，按NGS当时认可流程提供给国内执行人或供应商；不要求共享Noon账号/密码/API私钥。
4. 卖家垫付商品款/国内快递费；供应商完成**已确认可用的**贴码和封包，并把包裹按当时平台指定的地址交到Noon深圳集货仓。能否代贴并非已通过。
5. 自建最小对账字段：Order ID、SKU/Variant/Qty、PT deadline、supplier&cost、Noon Shipment AWB、domestic courier tracking、Noon hub Received time、delivery status、USD TP due、actual payout settled、returns/deductions。该字段表是**建议模板**而不是说Seller Lab已有全部字段。
6. 若在PT内不能交仓，按真实NGS的OOS/取消路径处理，不强迫发不符色号/低质量替代品；按实际收到的罚费及店铺健康后评估用户的<1%缺货假设。
7. 收到Noon深圳正确入仓与国际发货状态后跟踪妥投，按官方结算与实际到账验收；国内快递“签收”不等于Noon Received。

**本轮判定：`GO_PROCESS_RESEARCH`；`NO_GO_LIVE_LISTING`；`WORK_READONLY_NGS_FIELDS_PENDING`。不得因新报告重复启动大范围选品或费用模型。**

## 7. 下一步对Work的可验收限定任务（另在对话提供完整可复制版本）

只读原Noon已登录账号，进入`Global Selling`或`Fulfilled by Partner>Warehouse`确实可见的页面，不重复只看Home/无Store；分四项输出**页面URL/时间/可读原文或截图/结论**：
- 是否能看到Noon International Logistics中国NGS PT下拉及具体天数（不点击创建/保存）；
- 是否有明文允许/禁止`供应商可采购但未持有实物`作为可售数量；看不到保持UNKNOWN；
- 是否有明确中国NGS专项OOS取消费用/绩效阈值及取消入口；
- Shipment/AWB QR和国内快递号、Noon深圳仓Received事件能否在未创建真实货件的页面或官文中看到、供方代打印/直寄是否有平台一手说明；
- 只需要在后台出现明确的`requires Store/LE`文案时才报`BLOCKED_BY_NO_STORE_OR_LE`，单纯按钮不在视口或导航失败应报`ELEMENT_ERROR`并按同页面正常观察/滚动一次。无能读的页面就停止，不再无限重试。

**禁止事项：** 不创建Store、仓库、商品、运单、库存，不发邮件/工单，不绑定支付，不上传证件、不签约、不采购付费、不绕过登录/权限或抢占用户控制权。**任务结束条件：四项都已核到或各项明确记录“当前界面不可见/未核实”，在全部交付并写GitHub回读后才finish；不能再次只看Noon首页就提前结束。**

## 一手来源索引

- https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program
- https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/creating-and-managing-a-new-warehouse
- https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/fbp-order-cancellation-and-rejection-policy
- https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/how-to-process-directship-order-using-the-seller-lab
- https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/packing-guidelines-for-directship
- https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/directship-seller-performance-management
- https://helpcenter.noon.partners/en/category/reputation-management/reputation-management-dashboard
- https://helpcenter.noon.partners/en/category/product-listing/barcode-requirements
- https://helpcenter.noon.partners/en/category/finance-and-payments/payments-processing-policy
- 第三方误差/案例：https://www.10100.com/article/149389707 、https://www.10100.com/article/151146255 、https://www.xkdoo.com/tutorials/4.html 、https://help.mabangerp.com/kbzx/nested/details?id=4664&resource_id=1

**无新增Noon账号审批、实体注册、商品上架、采购交仓、妥投或真实利润。**
