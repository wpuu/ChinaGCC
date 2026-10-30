# ChinaGCC-031｜Noon 原账号 Ego Lite 只读验收

**核查日期：2026-10-31（北京时间）**  
**执行：Work 主代理判断，GPT-6.1 Terra / Medium 子代理操作正式 Ego Lite。**  
**边界：只读；不重复注册，不创建店铺、主体、Origin、商品或库存，不提交审核、证件、银行资料或合同，不产生费用，不外联。**

## 1. 恢复基线

- 已读取 README.md 当前收口段、Issue #24、最新 main 提交 `7c58763590f57be7cc1b3c243704372a03abc31d`（032报告，UTC 2026-10-30 16:44:03 / 北京时间10-31 00:44:03）。
- 已完整读取 [029原始供应商验证](../2026-10-30/CHINAGCC_029_SUPPLIER_DIRECT_SHENZHEN_UAE_PRICE_VERIFICATION.md) 及 [032刷具竞争与退货闸门](CHINAGCC_032_BRUSH_MOQ1_COMPETITION_DELIVERY_AND_RETURNS_GATE.md)。
- 用户此前自述尚未持有公司或个体工商户营业执照，明确暂缓办照。本轮不办理。
- 上一接续轮执行宿主缺失，本轮已恢复；`ego-browser skill` 正常返回v2.2.0完整指南。子代理本轮真实 `listTaskSpaces` 已成功连接原用户空间，故旧 `Failed to connect to ego_cli bootstrap` **不是本轮当前结果**。
- 账号标识公开脱敏为组织 `M*** G***`、项目 `PRJ***1008`；证据URL不保留项目参数。不保存密码、OTP、Cookie、证件内容、完整银行信息或私钥。

## 2. 逐项验收

分类口径：**已通过**仅代表该项存在性/可读性；**明确失败**表示本轮验收条件当前不满足，不表示平台审核驳回或永久不合格；**工具不可读取**表示本轮未取得所需状态（包括页面未显示/入口不可用），不表示Ego整体故障。**待审核：0项获证实**，不能将未知状态写成审核中。

| 验收项 | 分类 | 真实页面证据及边界 | 北京时间10-31 | 页面（已脱敏） |
|---|---|---|---|---|
| Organization / Project | 已通过（存在性） | 组织M*** G***，Owner；项目PRJ***1008已存在。 | 00:46 | https://welcome.noon.partners/en/organizations |
| UAE Store | 明确失败（当前无店铺） | Stores列表当前项目无任何noon store；不是店铺审核被驳回。 | 00:45 | https://noon-store.noon.partners/en/ |
| KSA Store | 明确失败（当前无店铺） | 同一项目Stores空列表；不能推广到其他项目。 | 00:45 | https://noon-store.noon.partners/en/ |
| Legal Entity | 明确失败（无有效主体） | 页面No Valid Legal Entities Found，提示商业注册/营业执照及税务信息。未显示具体主体类型、逐条缺件、提交/审核记录或中国个体工商户选项。 | 00:46 | https://finance.noon.partners/en/ |
| Payment / Payout | 工具不可读取（审批状态未取得） | Legal页无收款绑定/审核状态；Payments & Fees只有账单、交易、导出入口。本轮不能确认是否已有收款或批准，也不能断言具体阻断原因。 | 00:49—00:50 | https://noon-store.noon.partners/en/edit |
| Origin / Invoicing Profile | 工具不可读取（关联状态未取得） | Store Management → Legal显示当前项目无店铺；未见Origin或Invoicing及其LE/Payment关联状态。 | 00:49—00:50 | https://noon-store.noon.partners/en/edit |
| NGS / 仓库 / Processing Time | 明确失败（当前跨境资格未满足）；配置未读 | 当前店铺暂不符合任何跨境项目，未列原因；未展示China NGS、仓库或Processing Time，不等于永久不合格。 | 00:47 | https://xborder.noon.partners/en-ae/programs |
| Generic化妆刷目录 / 条码 / QC | 已通过（目录页可只读访问）；工具不可读取（专项要求） | My Catalog为0条；noon目录支持SKU/URL搜索，指定Generic十支+袋公开URL返回No noon SKUs found。不能推断商品不存在；未取得具体类目、条码和审批字段，未添加/映射/创建商品。 | 00:48—00:51 | https://noon-catalog.noon.partners/en/noon-catalog |
| 无商品 / 无可售库存的TP及消费者价格预览 | 工具不可读取（未确认存在可用功能） | 本轮未取得可用的China NGS TP/消费者含税含运费终价预览；不是断言平台绝无此功能。不用FBN/FBP估算器冒充。 | 00:48—00:50 | https://noon-catalog.noon.partners/en/catalog |

补充页面：00:49，https://directship.noon.partners/en/warehouse 显示 `No warehouses available`，仅属于Directship，不当作China NGS仓库不存在的证明。

**本轮明确错误：**导航两次返回 `ElementResolutionError: element is not visible in the viewport`；依据重新观察到的页面入口继续，未绕过权限。没有本轮新的来源授权拒绝；旧bootstrap错误和旧来源拒绝均不替代本轮结果。

**浏览器结束记录：**原只读核查结束后，同一空间接续了一次指定公开商品URL的只读目录搜索，返回 `No noon SKUs found`，随即结束。两次接续分别成功finish；没有新建第二空间或新账号。最后保留目录结果页供用户继续，未再操作。

## 3. 官方政策复核（2026-10-31约00:45—00:50，北京时间）

### 3.1 Generic退货分级补偿

[Returns and seller protection policy](https://helpcenter.noon.partners/en/category/program-policies/returns-and-seller-protection-policy)：无品牌/Generic列为NG，不享受分级补偿，表中0%。不能把普通物流损坏X档100%直接套给Generic，也不能推定所有争议均无申诉；本账号具体NGS案件的适用结论尚未取得。本轮没有提交争议或工单。

### 3.2 NGS退货、当地FBN和定价

[China NGS专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)：
- 可售退货转目的国FBN，适用当地FBN费率；免仓储最多60天，不等于所有费用豁免。
- 未设置当地售价时Noon可自动设默认价，目标接近原Transfer Price，**并非保证原TP实收**。本SKU当地售价、适用费用及净回收均未知。
- [UAE FBN现行费表](https://helpcenter.noon.partners/en/category/fulfilled-by-noon-fbn/fulfilled-by-noon-fbn-fees-in-uae)另列类目佣金、按尺寸/重量/售价计的出库费、仓储及情形费用，所示佣金/出库费自2026-09-10生效、月仓储自2026-10-01生效。费用不含VAT；因刷具实际类目及打包数据未验收，本轮不套数计算退货再售利润，也不把这些普通FBN费用套到正常NGS妥投TP。
- 不可售退货当地清算可无移除/销毁费，但该商品没有销售收益；另可选择退当地仓，实际费用未知。
- 新中国卖家开售前须有效收款方式；同页末“上架前可选、收款前必须批准”不应被理解为可以无有效收款方式开售。
- 正常妥投按USD TP结算；Noon内部决定国际段/税费等买家加价。深圳国内段、收款汇兑及异常损失仍需核算。

### 3.3 Origin、Legal Entity与Payment Method

[Invoicing Profile官方指南](https://helpcenter.noon.partners/en/category/global-selling/how-to-setup-the-invoicing-profile-for-global-selling)：发货Origin关联法律主体及收款方式；选择已批准LE，未签合同会触发签约流程；收款方式须批准并正确关联。  
[Payout关联指南](https://helpcenter.noon.partners/en/category/onboarding-and-registration/how-to-add-the-bank-details-in-the-legal-entity)：收款方式获批后还须分配到具体Origin，未关联不能据此保证付款。本轮不创建Origin、不触发条款邮件、不签约、不绑定收款。

### 3.4 中国大陆个体工商户路径

[NGS专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)要求有效中国商业登记；[Who can sell](https://helpcenter.noon.partners/en/category/onboarding-and-registration/who-can-sell-on-noon)与[材料要求](https://helpcenter.noon.partners/en/category/onboarding-and-registration/documents-required-to-sell-on-noon)未在本轮读到明确接受“中国大陆个体工商户”的条款。一般Individual Seller限埃及，不能据此肯定或否定中国持照个体户的国际卖家资格。**正式可接受路径仍UNVERIFIED，不据此办照、缴费或断言必须有限公司。**

### 3.5 条码、审批与价格预览边界

- [Barcode requirements](https://helpcenter.noon.partners/en/category/product-listing/barcode-requirements)：一般FBN/FBP每单位需条码；无制造商条码可用自定义字母数字码（最长16字符）或PSKU/型号，颜色/尺寸变体独立。此处不等于本账号China NGS刷具贴码方案已通过。
- [Product listing policy](https://helpcenter.noon.partners/en/category/product-listing/product-listing-policy)：内容QC、价格/库存、条码映射等属于独立上架条件；Generic不自动豁免审核。本轮没有创建或映射商品，未把刷具擅自归入彩妆受限类目。
- [Fees and revenue calculator](https://helpcenter.noon.partners/en/category/price-and-inventory/fees-and-revenue-calculator)虽有new product估算模式，但只按标准FBN/FBP费率且不含VAT；**不是China NGS TP→买家含运费到手价预览**。
- 029记载的只读BatchGetTransferPrice端点用于已有SKU TP，本轮公开文档访问返回 `Internal Error / URL ... is not accessible via this tool`。未调用API、未创建密钥；该文档读取错误不等于Noon账号API拒绝。不能据此声称无库存新SKU消费者预览已被验证。

## 4. 采购价格单独记录

| SKU | 029已核公开供货价 | 未通过的成本/履约证据 |
|---|---|---|
| 10支刷+袋 | ¥7.80/套，MOQ1；页标95g | 深圳真实单票运费、包装毛重、贴码/逐单代发SLA、买家NGS终价及ETA |
| 11件旅行瓶 | ¥3.80/套，MOQ2 | 单买家1套与MOQ2冲突、整包毛重、深圳实际运费、逐单履约 |

这些是029供货页证据沿用，本轮未采购或重新报价。**¥6国内寄深圳仍不能写为已核实费用；真实利润UNKNOWN。** 不以竞品标价、TP模拟或当地退货再售值补空。

## 5. 当前判断及权限边界

1. **账号完成到组织/项目已建立且原会话可读**，未达到可开卖状态。当前项目无UAE/KSA店铺、无有效LE；页面没有证实任何收款批准、Origin匹配或中国NGS配置。
2. **实际阻碍**：店铺和有效LE验收不通过；用户目前暂缓办照，不能跳过真实商业登记。个体工商户是否适用仍待正式证据，不能强推有限公司。收款、Origin、NGS、具体刷具准入、国内交仓SLA、买家实际终价/ETA也未通过。本轮不编造驳回原因或额外缺件。
3. **可安全继续**：只读页面/公开规则、商品规格及付款前成本验证。**配置写入本轮0项**；创建店铺、仓库、Origin、设置处理时长或价格均需用户另行批准并基于真实信息。真实证件、收款账户验证及正式签约应由用户本人完成；本轮禁止的付费、API密钥、商品/库存发布及外联不得自动推进。
4. **最短下一动作**：在继续暂缓办照的前提下，只读核对原化妆刷1套寄深圳宝安的付款前商品款、运费及总价；不生成订单、不付款。此为下一步建议，不是本031已完成动作，也不解除任何开卖闸门。

本报告新增到GitHub，Issue #24在保留历史正文的前提下置顶当前验收状态；不修改README、历史供应商价格或商业数据。

本轮没有真实成交、妥投、到账或已实现利润证据。仓库报告、登录成功及页面验收均不计入交易完成。
