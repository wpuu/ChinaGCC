# ChinaGCC-040｜订单后国内采购、供应商代发Noon深圳集货仓：官方链路、缺货规则及账号验收分工

核验日期：2026-10-31（北京时间）。目标：不囤海外库存，用户未来获准销售后，在Noon China NGS客户下单→国内采购/代打包→Noon深圳集货→Noon国际配送及妥投→按USD Transfer Price在批准的账户结算。  
只读独立验证/记录；**未登录Noon、未写入平台、未注册主体、未下单或联系供应商、未采购、未发货、未外联、未上架、未投广告**。本轮不修改任何已存在定时任务。
基线：在本次核对时ChinaGCC main最新提交`57a64fcbc4b27cbf6087f3ebbfdb0a6ea19259a6`；`README`有039国际回款现金流条件测算以及037B渠道决策；Issue #24最顶部已经记录Owner取消“供应商库存保证必须出函”这一硬门槛。**不重复改变或覆盖原039/037B/038记录。**

## 1. 用户风险偏好调整：不强制供应商库存保证

- 国内通用商品可采用多家同BOM替代货源；不要求供应商出具承诺持续库存的合同，缺货触发应急采购/及时平台缺货取消。用户预计单次缺货风险<1%，为**Owner预测而非验证历史率**。
- 不再用“没有库存保证书”阻塞只读研究、具备合法卖家资格之后的条件性零预囤货方案。
- **不能**把可售数量虚构成真实自有仓现货；首次上架仍须根据平台规则和实际上可在Processing Time内取得并交仓的能力设置小额可售量并及时更新；Noon是否认可“后采货但无持有库存”的库存口径，官方NGS仅写“管理可售库存”，**对供方可采购库存应如何填报未说明**，需账号/平台专项核验。
- 对确实无货订单必须采用Noon允许的取消/拒单流程，不应拖延、标记已发货或用颜色/尺寸不匹配商品替代。供方替换应同BOM、合法授权、同款实货。

## 2. 一手官方已经通过的动作

**[Noon China NGS专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)：**
1. 仅有合法有效Chinese Commercial Registration的中国卖家属于该模式的潜在资格，需创建/审核Store/Legal Entity、设置中国库存仓/Processing Time、通过SKU QC、设置USD TP及库存、做好Payout与Origin。
2. 新订单产生后卖家“Prepare and pack”，在所选Processing Time内以邮寄或交付方式把包裹送达深圳NGS集货点；**中国仓用于库存信息，不是Noon实际提货的中国仓**；Noon自深圳集货交接后负责国际段/清关/末端。
3. NGS订单不要求Noon品牌包装；**不等于可以省略SKU/包裹识别码**。官网“Prepare and pack”链接通用[FBP Directship处理](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/how-to-process-directship-order-using-the-seller-lab)，包含`Orders→Create Shipment→AWB/QR标签`和`Mark as Out of Stock`页面。**NGS是否使用完全相同的AWB取号/扫码/第三方代打印步骤未按真实NGS订单验证，不能100%宣布正式完成贴码要求**。
4. 所有真实收款要以获批的收款账户/Origin关联，成功妥投按USD TP结算；买方实际含跨境加价后价格由Noon系统决定，不能凭竞争公开标价/假设TP估值充当本店买家价格。

**[Noon官方创建仓库说明](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/creating-and-managing-a-new-warehouse)：**
- 可设置`noon International Logistics (UAE / KSA) - For global shipping`的Delivery Model及Processing Time；
- 仓库General Config、手机号/邮箱OTP/地址配置、Forward Shipment Handover和manifest等是实际功能，需要获准Store和真实信息后才能写入；
- 后台可选Processing Time的**针对中国NGS实际下拉值未取得**。通用FBP取消政策写1–10天；普通库存导入模板举例`same_day/1_day/2_days/3_days/4_days`。**不能根据两类不同模式公开文件直接认定本店NGS能选3天、4天或10天**。

## 3. 缺货取消已经确认会有风险，但中国NGS具体费用仍未证实

- [Noon库存与价格管理官方](https://helpcenter.noon.partners/en/category/price-and-inventory/how-do-i-manage-my-stock-and-prices)：因为缺货而取消的订单不能恢复，提示会产生cancellation/retention penalty，库存在0仍来单须联系支持、实际无货应拒单而非发替代货。
- [FBP Directship订单取消政策](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/fbp-order-cancellation-and-rejection-policy)：卖家取消/拒单会产生费用并影响履约，处理截止时间之后可能自动取消；现货不足及时拒单、不能替换错误颜色。
- [Noon交易报表字段](https://helpcenter.noon.partners/en/category/finance-and-payments/new-statement-detail-report)定义`CNCL`为卖家发起缺货等取消的逐件罚款项。
- [Directship卖家绩效](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/directship-seller-performance-management)：普通Directship滚动7天Seller Cancellation Rate要求<2.5%、Late Shipment Rate<3%，超标可能下架/暂停店铺。这些**不是中国NGS专项公布的门槛**，不得当成本项目当前店铺的真实绩效目标或罚款卡。
- [FBP UAE正常费用](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/fulfilled-by-partner-fbp-fees-in-uae)称标准Directship的取消费按该类FBP佣金费率计算；**NGS专项正常妥投TP不扣国际段手续费，与FBP费卡适用范围不同**；不能据此虚构NGS取消比例。
- 第三方[N​​oon Global模式实操教程](https://www.xkdoo.com/tutorials/4.html)声称NGS取消存在罚金、提及Seller Lab AWB和国内仓包裹标识；有助于确认操作研究方向，但非Noon原始专项规则/商家合同，不将其具体金额或动作作为已验收的账户结论。

**字段状态：** `NGS_seller_cancel_supported=CONDITIONALLY_EXPECTED_FROM_LINKED_DIRECTSHIP_DOC`、`NGS_specific_cancellation_fee_schedule=UNKNOWN`、`NGS_cancellation_performance_threshold=UNKNOWN`、`Owner_estimated_OOS_rate_lt_1pct=UNVERIFIED_ASSUMPTION`。执行规则：不因缺货库存书一票否决；首单前必须至少确认中国NGS真实适用的缺货操作、绩效/取消风险范围，不能把“允许取消”宣称“零成本取消”。

## 4. 最短合法现实订单链（需售卖资格后才执行）

`Noon UAE/KSA买家确认付款→Seller Lab收到订单及SKU/数量/颜色、截止PT→当天在原供方或严格同BOM备选确认采购来源→在Seller Lab走适用NGS订单处理并取得唯一订单/货件识别标签及交仓要求→给供应商标签+深圳指定收件要求→供方1件代发、贴合规标签及国内快递单→把国内快递号与Noon AWB/订单号绑定记录→追踪深圳仓**实际接收**→Noon跨境配送及妥投→订单成功结算USD TP→获批账户收到款项→归集采购/国内运费/标签/退货/税务/获客费用`。

**关键差异：** 卖家可按NGS规则邮寄到深圳，不等于每一个供方有“代生成Noon标签/扫码/准时交仓”的能力，也不等于中国快递签收已被Noon仓正确扫描。官方未证实允许从陌生供应商直接向Noon集货仓投递无平台识别的包裹。若供方不具备贴码，可采用国内第三方打包代发点再送Noon；此路径增加费用和PT，**只是可执行备选结构，尚无指定服务商已报价/签约**。

## 5. 未通过事项与下一步责任分工（不制造无效重复任务）

| 闸门 | 目前状态 | 需要谁做何种实际验证 | 不做什么 |
|---|---|---|---|
| 经营主体及合法LE | 031已确认没有有效LE；个体户是否被接受仍UNKNOWN | 主线独立读官方，必要时在用户授权下获得Noon正式答复；用户本人负责真实法律主体/资料 | 不假照、不先办公司碰运气 |
| UAE/KSA Store与NGS | 已核没有店铺及合法NGS资格 | Work只读现有账号中**新增的**可见国家/主体资格、运营规则，能读就截图脱敏；遇店铺门槛就标阻塞 | 不重注册、不创建空店铺 |
| NGS实际PT可选值、上架供应库存口径 | 公开NGS要求存在，具体值和“可采购库存”口径未知 | Work可只读查看已存在菜单/规则/创建前说明；若无获准店铺无法读，标`BLOCKED_NEEDS_APPROVED_STORE` | 不改库存、不设置仓、不建假商品 |
| NGS缺货/取消费率 | 通用Directship有罚款和绩效，但NGS金额未知 | Work读现有账号条款/NGS政策及费率，如当前不可见，保留待批准账号后核验；不得自行外发官方咨询 | 不假定零罚款/默认标准FBP费率 |
| 国内源头单件寄深圳 | 034A刷具广东公开运费5.60元≤0.3kg，非深圳实际运费；其他商品欠标准毛重 | 后续针对已经通过主体/平台准入的最终SKU，先公开未付款试算；供应商签收/打包需要真实订单级或供方确认 | 不先下单、不把省级运费当最终运费 |
| Noon独家AWB/扫码 | 官方通用FBP流程存在，NGS具体流程缺订单级证据 | Work查官方订单页面操作说明（无真实订单时只读模拟界面/官方文档），如无店铺则保持未知 | 不创建订单/运单/发邮件/签约 |
| TP→UAE用户终价及ETA | 未验证本账号具体商品 | LE/Store/NGS批准后才可能实际创建合法SKU进行审批/授权的真实价格核验 | 不发布假库存，不套普通FBN计算器 |

## 6. Work只读任务传递要点（本轮用户希望自行交给Work）

若当前原Noon账号可继续读取，**只核新增四项而非重复031**：
1. 国家/商业主体预审页或创建Store第一屏有没有明确中国Individual Industrial/Commercial Household的选项、限制或准确英文要求；
2. China NGS国际物流仓的Processing Time可用下拉区间是否可预览、库存为可采购但未持有时的写入/经营要求；
3. NGS特定缺货取消入口、适用取消费/七天绩效门槛、如何出具官方政策/账户条款出处；
4. 订单Shipment、AWB二维码、国内快递号与深圳集货仓实际接收的对应要求、能否由供应商在Seller Lab授权模式下代贴单（或只打印后卖家发送面单）。

**所有只是“可否只读看到”，不是让Work实际创建或修改仓库/店铺、生成发货单、上传私钥或联系官方。** 如果因为无LE/无店铺根本不可见，明确写`NOT_OBSERVABLE_UNTIL_STORE_AND_LE_APPROVED`，只保留公开一手政策已核结论，不反复重登陆/创建账号。

## 7. 经营决策

- **订单后国内采购再直寄深圳的业务模式：GO_FOR_PROCESS_DESIGN；不用自有海外仓，不必须由单家供应商保证库存。**
- **Noon渠道真实上架/开始交易：NO_GO_NOW，主拦阻仍是合法中国经营主体、有效LE/Store/NGS/Payout、商品合法与真实买家终价/国内履约。**
- **取消订单作为极少数异常处理：CONDITIONALLY_ACCEPTABLE_OPERATIONAL_RISK**，不可当无费用常态流程；用户估计<1%为早期假设，真实订单后可记录并计算滚动缺货率。
- 用户已经把“供应商保证库存书”降级，严禁后续研究员再次把这一文件作为独立强制前置门槛。但必须遵守不虚报可交付数量及处理时间的真实义务。
- **下一步**：Work只读有针对性地核一个可见的NGS仓PT/库存/取消及贴码界面，并将脱敏证据写入GitHub；独立研究继续关注可验证的中国送仓流程，只有新增授权或真实店铺资格时才推进实际发货，不为缺少供应商库存承诺而冻结其它研究。翰林商品保持既有冻结。
