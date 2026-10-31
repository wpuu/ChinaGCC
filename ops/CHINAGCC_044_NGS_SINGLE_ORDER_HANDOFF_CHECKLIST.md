# ChinaGCC｜Noon China NGS单笔订单直发深圳交接卡（044）

**用途：将来获得Noon正式售卖资格、用户单独批准真实交易后执行；不是一张已发生订单，不代表Noon已经批准供应商代贴或未采购库存申报。**
**禁止把买家姓名、详细地址、电话、密码、Cookie、银行资料或真实未脱敏货件标签上传GitHub。** 只在获准业务系统中保存客户与运单信息；公开仓库仅保存脱敏标识、结果、时间与费用。

## 阶段0｜开单前门槛（现在尚未通过）

- [ ] 所用的中国商业经营主体已依法成立，Noon已批准对应Legal Entity、目标UAE/KSA Store、China NGS项目、Origin及有效Payout。
- [ ] 已在正式账号/条款核实NGS的Processing Time、订单截止时区、平台库存口径和缺货取消风险。
- [ ] 商品颜色/尺寸/组成与已获QC批准SKU一致；实际消费者总价/预计到货时效已审核。
- [ ] 卖家有至少1个可采购严格同规格来源，且有按单在截止前包装并送达深圳的具体实施办法；**不要求源头供应商持续库存保证书**。
- [ ] Noon实际NGS认可的商品标签、货件AWB、二维码打印及中国快递交仓流程清楚，未依赖自行编造QR。
- [ ] 用户对正式开卖、订单采购预算及最大亏损额有明确独立批准。

**任何一项未通过：不要把本卡当作开展真实Noon交易的授权。**

## 阶段1｜买家正式下单（未来）

| 字段 | 填入要求 |
|---|---|
| 脱敏Order Ref | NOT_STARTED |
| SKU/PSKU + 变体/数量 | NOT_STARTED |
| 买家订单支付状态 | NOT_STARTED |
| NGS交深圳截止时间 + 时区 | UNKNOWN（必须取本订单真实显示值，不能使用网上V1/V2通用数字） |
| 单独商家接单时限 | UNKNOWN |
| 中国候选源头链接与严格同规格确认 | NOT_VERIFIED |
| 是否可以在截止前送到仓 | UNKNOWN |

**决策：** 若确切商品可采购且完成包装、快递送仓及Noon收货预计不超截止，才进入采购；否则核同BOM备选，确实不能履约就依据真实NGS的OOS政策处理。不用近似颜色/尺寸替换。

## 阶段2｜中国采购与Noon标签（未来）

| 字段 | 记录位置/要求 |
|---|---|
| 实际采购订单及付款时间 | 获准业务系统；公开仅脱敏 |
| 实际单套货款¥ | UNKNOWN |
| 实际国内寄深圳运费¥ | UNKNOWN |
| 供应商是否确认代打印/代贴与密封 | UNKNOWN（无现有正式承诺） |
| 商品码/PSKU正确性 | NOT_VERIFIED |
| Noon平台正式AWB/QR | NOT_CREATED，绝不能自行编造 |
| 带码商品与已建Shipment关联 | NOT_VERIFIED |
| 出口/危险品/标签特别要求 | 仅按当时适用的China NGS正式规则 |

**不要把**普通国内快递号、商品条码、Noon货件AWB、Handover Manifest当作同一个编号。不可把正式账号凭据交供应商。

## 阶段3｜供应商发中国快递到Noon深圳仓（未来）

| 检查 | 证据 |
|---|---|
| 使用**当单正式确认**的深圳集运仓收件信息 | 待核；仓库公开地址不能替代已获准订单最新指引 |
| 一包实际商品与该货件AWB对应 | UNKNOWN |
| 包装、商品标/货件标清楚，未重复贴错码 | UNKNOWN |
| 国内快递真实揽收时间 | UNKNOWN |
| 国内快递真实运单号（脱敏） | UNKNOWN |
| 国内承运商签收时间及证据 | UNKNOWN |
| **Noon真正正确接收/扫描的状态及时间** | UNKNOWN（与快递签收分别记录） |

**停止点：** 供应商只会寄件但不会按平台认可的方式贴码、当前没有合法AWB、或者估计到仓超PT时，不能继续裸件寄仓。备选方案为国内第三方贴标/集运服务，需另核费用和时效且经批准。

## 阶段4｜Noon跨境妥投和实际回款（未来）

- [ ] Noon显示实际货件入仓；不能只用国内快递签收冒充。
- [ ] 国际物流状态可查，客户实际妥投时间取得。
- [ ] 记录美元Transfer Price应计、平台账单与退货/取消调整；正常妥投TP结算条件与实际到账时点分开。
- [ ] 经合法批准收款账户实际收到款项，人民币净到账/手续费及税务处理有原始证据。
- [ ] 归集采购、国内运费、标签包装、退损、获客、人工和固定成本（同一订单分摊原则）；确认真实贡献率和净利润。
- [ ] 异常订单另记缺货、超时、退件、标签错码实际损失，不把用户预估<1%当历史实测。

## 参考依据及未证实说明

- [Noon China NGS专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)：中国仓是Seller Lab库存节点，深圳集运仓才是实际物流交接，卖家在PT内送仓、Noon接管国际段。
- [Noon官方Directship订单教程](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/how-to-process-directship-order-using-the-seller-lab)：通用AWB扫码、货件生成、重印与Handover；不是已验证的中国NGS账号功能。
- [Noon官方包装材料问答](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/ordering-your-packaging-materials)：不可自建AWB二维码；NGS官方同时免Noon专用包装。
- [Work-043已读四页](https://github.com/wpuu/ChinaGCC/blob/main/research/2026-10-31/CHINAGCC_043_NGS_BACKEND_FOUR_REMAINING_EVIDENCE_ACCEPTANCE.md)：当前NGS项目不符合资格、没有业务可用订单/货件证据。
- [044来源与适用范围](https://github.com/wpuu/ChinaGCC/blob/main/research/2026-10-31/CHINAGCC_044_SUPPLIER_DIRECT_TO_SHENZHEN_SOURCE_RULES_AND_PROOF_GATES.md)：未验证的V2 5天/重量标签/处罚与现有中国供方代贴许可不得当作既定合同。

**本卡是空白控制清单，不是Noon订单、平台卖家资格、供应商合同或采购交仓的完成回执。**
