# ChinaGCC-045｜2026-09-01 Global V2原件核验、商品条码与AWB差异、深圳集货交接规则

**核查日期：2026-10-31（北京时间）**  
**范围**：严格只读独立研究2026年9月1日所谓Noon《跨境Global直发物流履约管理规则V2》原件/官方公告、24小时接单、5天入仓、重量体积、PID/PSKU/PH/NSAI标签、拒收及罚款；核官方商品码/AWB和供应商第三方代贴、中国普通快递寄Noon深圳集货仓证据。  
**仓库基线**：起点main最新 `a7d6c073ef80c1f93d33d569693e6838097d6161`。已读[044证据审计](CHINAGCC_044_SUPPLIER_DIRECT_TO_SHENZHEN_SOURCE_RULES_AND_PROOF_GATES.md)、[044交接卡](../../ops/CHINAGCC_044_NGS_SINGLE_ORDER_HANDOFF_CHECKLIST.md)、[043实际Ego四页回执](CHINAGCC_043_NGS_BACKEND_FOUR_REMAINING_EVIDENCE_ACCEPTANCE.md)、[Issue #24](https://github.com/wpuu/ChinaGCC/issues/24)（含并行044旧搜索）。  
**权限和未做**：不进入卖家后台、不重复043四页，不注册/建店、无证照/银行上传、无采购/订单/AWB/发货/广告/外联/工单/自动化修改。本轮没有真实订单、入仓、妥投、到账或盈利。

## 一、证据分级：不能把三种来源混成Noon官方批准

| 类型 | 来源与页面 | 验收等级及局限 |
|---|---|---|
| P1：Noon一手专项 | [noon Global Shipping (NGS)](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program) | 确认中国卖家中国商业注册、卖家设USD TP、Noon接管深圳以后的国际段及买家目的国税费、订单后备货、可通过邮寄或自送交深圳集货仓、仓Processing Time；**没有写2026-09-01 V2版本、5天、24小时、5kg、PH/NSAI细则和罚款金额** |
| P2：Noon一手普通模式 | [仓库/时间设置](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/creating-and-managing-a-new-warehouse)、[Directship订单](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/how-to-process-directship-order-using-the-seller-lab)、[包装材料/AWB FAQ](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/ordering-your-packaging-materials)、[商品Barcode要求](https://helpcenter.noon.partners/en/category/product-listing/barcode-requirements) | 普通FBP/Directship功能与产品码的一手证据；**不等于中国NGS已自动继承所有仓/面单、费率和时限** |
| S1：旧V1全文转载 | [Noonerpiu Noon Global模式教程](https://www.noonerpiu.com/guide-noon-global-mode.html)、[vooyyy镜像](https://vooyyy.com/tutorials/guide-noon-global-mode.html) | 标2026-05-10执行的V1第三方文本、带标签示意图和《Global China Shipment》附图。**不是noon签发原始电子文件**，页头写2kg、正文写5kg，存在内部冲突。vooyyy页面即便2026-10更新仍展示V1，也不证明10月规则仍是V1。 |
| S2：V2行业转述 | [AMZDH 2026-08-31](https://amzdh.com/kjtt/10368.html) | 声称“2026-09-01生效”的V2规则及数值，页脚明确文章为网络采集、不代表其立场；**未公开可核Noon原件链接、Noon盖章PDF、后台版本或有效条款**。 |
| S2-同源转载 | [厦门施莱德 2026-09-10](https://www.xmshredder.com/cn/xinwendongtai/xingyezixun/3050.html) | 之前044并行Work逐图核对，文章/网站自称与AMZDH有关，图片是物流/宣传素材，不是Noon签发规则图片；**不能当第二个独立Noon官方佐证**。 |
| B：原账户只读 | [043 Work成功进入Programs、Catalog、Orders、Shipments](CHINAGCC_043_NGS_BACKEND_FOUR_REMAINING_EVIDENCE_ACCEPTANCE.md) | Programs有当前不符合任何跨境计划的明确信息但无原因；其它页面空态，没有NGS专用PT、标签/入仓/取消规则；**本轮不重新检查**。 |

### 对V2原件的独立检索覆盖与阴性结论

本轮分别使用英文/中文名称及官方站域限定进行公开检索：`Noon Global V2 2026 September 1`、`跨境Global直发物流履约管理规则 V2`、`NSAI PH PID PSKU 2026`、`site:helpcenter.noon.partners`、`site:noon.partners`、`site:noon-docs.noonpartners.dev`、`site:storage.googleapis.com`、`filetype:pdf`及微信公开索引等组合；访问Noon当前帮助中心、AMZDH旧/新稿及V1转载。**结果：本轮没有检到Noon发布的V2原文/官方生效公告/与当前中国NGS签约适用关系；此为`PRIMARY_V2_NOT_OBTAINED`，不是证明V2不存在或造假。**

## 二、逐项原文与证据等级对照

| 争议项 | S1旧V1转载内容 | S2 V2行业转述内容 | P1/P2官方能确认到何程度 | 本轮状态 |
|---|---|---|---|---|
| 24小时系统接单 | 旧V1已经写24小时 | 仍写24小时 | 中国NGS专项没有固定24h接单条文 | **二手文本双方一致，但不是V2新增或本账号获批规则** |
| 到仓截止 | V1写买家付款后96小时入仓 | V2写下单含当天5天入仓 | 专项只写按仓库设置的Processing Time内邮寄或送达集货点，不公开具体天数 | **V2的5天及“含当天”未一手证实** |
| 重量上限 | V1网页顶部2kg、正文包裹实重≤5kg，**自相矛盾** | V2称计费重≤5kg及体积重/5000 | NGS专项未直接列5kg及计费重计算公式 | **上限和计费口径UNKNOWN** |
| 包裹尺寸 | V1列最长边≤60cm，三边之和≤130cm | V2同样列60cm、130cm | NGS专项未列对应数值 | **两版转述一致，未有官方本账号验收** |
| 商品标签 | V1已经列PID、PSKU条码、Made in China | V2重复PID/PSKU/产地 | 官方商品条码一般规则允许自定义码或PSKU，在Seller Lab先关联，但非NGS V2标签全部字段证据 | **商品码标准可核，V2指定尺寸及用途未知** |
| 货件标签 | V1列PH或NSAI+QR、PID、AE/SA、产地及无电/带电 | V2增加无电/带电/液体/粉末等细则 | 官方通用FBP需平台有效AWB/QR，不允许自行生成AWB QR；**未确认中国NGS PH/NSAI对应关系** | **AWB真实性要求明确，V2字段集合未知** |
| 包装拒收 | V1声称标签错漏、包破损、色差/缺配件、过大件可拒收 | V2声称可拒收/收费1—10元换包装 | NGS指南仅要求发到集货点按要求备货，未公开V2拒收费用表 | **二手风险线索，不作已生效罚款** |
| 迟交与不发 | V1有24h和96h，迟交固定30%未证 | V2声称超时订单价30%、不发率≥20%禁售15天 | NGS专项没有公开对应费用/百分比 | **UNKNOWN，不能计入真实费卡** |
| 重量瞒报 | 旧文无可信统一费卡 | V2称超200g按¥50/kg加收 | NGS专项没有公布该处罚及误差阈值 | **UNKNOWN** |
| 施行日期 | V1转载自称2026-05-10 | V2行业转述2026-09-01 | 官方未公开相应版本和生效日期 | **尚无官方一手印证** |

**重要交叉结论：** 所谓V2的“24小时接单”“PID/PSKU/PH/NSAI标签”“60/130cm”并不是在行业转述出现后才首次出现；V1第三方转载已经描述。不能以多个转载重复同一细则，就认定V2确实正式生效。核心真正有差异的是**96小时→5天计时**及**处罚量化**，必须有Noon一手适用条款才可用于履约计划/现金测算。

## 三、商品条码与货件AWB的关键一手区别：真正新增可执行知识

### 3.1 商品SKU识别码：Noon允许卖家按规范生成

官方[Barcode requirements](https://helpcenter.noon.partners/en/category/product-listing/barcode-requirements)适用于FBN/FBP：
- 原商品没有厂家码时，可用不超过16个字符的唯一字母数字商品条码，或使用Partner SKU/型号；不得用符号空格。
- 在Seller Lab通过`Imports > Barcode > Partner Barcode Map`映射至`partner_sku`，每个颜色/尺码变体必须有独立可识别码。一般规则允许使用在线条码生成器打印**商品条码**。
- NGS的商品刊登官方仍参照标准Noon listing/QC，**该商品码规则是合理技术参考，但此项目没有创建/审核任何具体中国NGS条码映射**。

历史V1转载的[Global China Shipment商品条码示意图](https://www.noonerpiu.com/assets/img/jiao4/image3.png)也提及在线生成商品码；由于源自第三方图片，这只是过去操作惯例，不作中国NGS最新合同一手证据。

### 3.2 Noon AWB货件QR：不能自行编造

官方[Ordering your packaging materials](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/ordering-your-packaging-materials)明确“不能自行生成AWB的QR码，需通过Seller Lab正式包装材料流程取得”；[Directship web order教程](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/how-to-process-directship-order-using-the-seller-lab)提供扫描/输入已有效AWB和货件`Re-print AWB`，属于**普通Directship**。

NGS专项明确卖家**不必须使用Noon包装材料**，但并没有明确“中国NGS采用哪种AWB发放/导出机制”及“第三方供应商代贴”是否准许。因此不能把FBP包装采购流程直接要求给中国NGS，也**绝不能**因商品条码可以自己生成而认为AWB可以自己造。

**本项目安全技术边界：** 未来只能以该获准的NGS正式订单/官方系统提供的有效货件标签为准；供方可以收到脱敏、正确、合法允许转交的打印文件及贴标指令，而非Seller Lab密钥/密码；**供方代打印/贴标是否获准及Noon会否认可其直寄，仍`UNKNOWN`**。

## 四、国内普通快递→深圳集货仓：官方确认与尚未明确的责任

**Noon[NGS专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)**明文支持卖家在Processing Time内`ship the package`或`drop off directly`至其中国指定深圳集货仓。**因此无需默认“义乌供应商→天津本人→深圳仓”二次运输**。可以选中国普通快递作为技术实施方式，前提是包裹格式及当单交接方式由Noon接受，实际是否可用具体承运商及发货主体仍要获批货件/签收证据确认。

**时间端点须谨慎：** 目前NGS官方一处定义PT覆盖履约并把货交集货点，另一处使用“可以在PT内ship或drop off”的表述；**对于通过第三方快递寄出的订单，究竟以快递揽收、到达深圳还是Noon内部入仓扫描作为处罚计时结束事件，官方网页没有逐项精确定义**。旧V1二手写96小时`到仓登记`、V2二手写5天`入仓`，不足以越级作正式规则。为了避免实际超期，项目内部应**保守按Noon确认接收时间**反推采购/包装/国内运输缓冲；但这只是风险控制方案，**不是宣称Noon已核验此考核口径**。

**供应商/代发点工作与原账号分开**：
- 有国内商家明示接受“一件代发/贴标”，不等于现有指定SKU或中国Noon仓已签收过其包裹；不能假定FBA贴标=Noon AWB贴标。
- 国内一个普通快递大外箱内含若干Noon独立子包裹、每包有独立标签的办法见[V1第三方转载](https://www.noonerpiu.com/guide-noon-global-mode.html)，**不是Noon 2026年V2官方批准的多单打包规范**。
- **交仓验证的两份不同证据：** 国内承运商签收记录与Noon仓对正确Shipment/AWB的实收/扫描记录；后者名称、时间字段、是否为PT计时点仍待真实订单证明。
- 任何合法商家/代发商只是承接被授权的打包代寄任务，最终SKU、库存、履约及异常责任依平台条款仍可能由卖家承担；不能把代发商当作免赔保障。

## 五、Noon现有账号状态及最短下一步

依据[Work-043实际四页验收](CHINAGCC_043_NGS_BACKEND_FOUR_REMAINING_EVIDENCE_ACCEPTANCE.md)：
- Global Selling Programs实际显示当前不符合跨境计划资格，**没有给出具体原因**；没有可核中国NGS PT下拉。
- Catalog空表、Directship Orders/Shipments无实际订单/货件；**未持有供应商库存的申报许可、NGS异常取消费卡、标签交接仍无专项实际证据**。
- 不重复Ego四个空页面、不重注册、不开虚假Store/LE/库存、不凭旧第三方V1/V2推定账号资格。

**判定：**
- `GO_PUBLIC_RESEARCH_AND_CONDITIONAL_PROCESS_DESIGN`：官方确认订单后备货/邮寄中国集货仓及一般条码规则；可维持044空白交接卡。
- `UNKNOWN_PRIMARY_NOON_GLOBAL_V2`：V2版本、2026-09-01施行、5天与24h、重量尺寸、PH/NSAI详细标签、罚款均没有适用于该账号的原件。
- `UNKNOWN_NGS_SUPPLIER_DIRECT_LABEL`：第三方供应商代贴正式AWB、何种国内快递号与货件绑定、深圳实际入仓事件需未来有效规则/订单证据。
- `NO_GO_LIVE_SALES`：没有有效LE/Store/NGS/Payout，且不能确定是否能承诺按单直发/消费者价，未授权注册、交易或外联。
- **不恢复供应商长期库存保证书硬门槛；** 用户预计缺货<1%仍为假设，按正式取消规则处理，不把取消看作零费用。

**下次触发（避免无意义重复）：** 若出现**可追溯Noon签发的Global V2原件/正式生效公告、当前账户批准NGS后的可读PT与货件规则、或用户另行批准获得供方实际贴标交仓声明**之一，再针对其具体证据做精准045后续复核；此前不应再做同义V2 SEO搜索、生成新SKU榜单、重复Ego空页或创建模拟AWB。037B渠道HOLD继续生效。

## 六、来源清单与已实测权限

**一手官方：**
- https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program
- https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/creating-and-managing-a-new-warehouse
- https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/how-to-process-directship-order-using-the-seller-lab
- https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/ordering-your-packaging-materials
- https://helpcenter.noon.partners/en/category/product-listing/barcode-requirements

**第二手材料：**
- https://amzdh.com/kjtt/10368.html
- https://www.xmshredder.com/cn/xinwendongtai/xingyezixun/3050.html
- https://www.noonerpiu.com/guide-noon-global-mode.html
- https://vooyyy.com/tutorials/guide-noon-global-mode.html
- https://www.noonerpiu.com/assets/img/jiao4/image3.png

**没有**获取Noon2026 Global V2原件、官方生效条款或当前卖家认可的面单，也没有生成或验证平台正式二维码。未创建任何真实业务操作/费用/订单/包裹/收款事件。
