# ChinaGCC-049R｜Work实际开店期间的独立官方审计：联系电话、LE跳过、商品可见性与自动上线风险

**核查日期：2026-10-31 北京时间。**
**范围：** 用户已将Noon实际开店和商品创建测试交给Work。本报告只独立研究公开官方文档，与Work当前已取得的真实页面对照；不接管Ego空间、账号、OTP或店铺表单，不外联、不注册主体、不创建/保存SKU、不设库存/转移价/广告、不付款和采购、不改定时任务。不同项目收入分开记账。

## 1. 已见Work真实进度：不要再用031的空店铺结论掩盖049的新执行

读取截至本轮查询的GitHub最新main提交 `342b9f5452788899d7c2e2d680719cd61c31fc7c`、[049实操报告](CHINAGCC_049_UAE_STORE_CREATION_AND_NONPUBLIC_PRODUCT_FORM_TEST.md)和[Issue #24](https://github.com/wpuu/ChinaGCC/issues/24)。

Work-049已到原Noon项目的真实Store创建页，**销售国UAE、注册国China已选，邮箱预填，公开EN/AR店名及电话仍空，Continue未点击，Store未创建**；已到China Legal Entity Details及Add Product -> Single Products -> Product Identity，但无合法执照和商品图片授权，**未保存LE、SKU、仓库、QC或库存**。北京时间19:26:24，Work正规handOff原Ego空间18供Owner补真实字段，不再抢占。这个停点是缺用户店名/电话号码，不是平台已拒绝China/个体户；没有Noon订单、妥投及到账证据。

## 2. 店铺创建并不需要为了表单而先找UAE手机号（有一手根据）

[Noon China NGS官方7步指南](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)：Step 1 Org ID手机验证允许任何国家的号码；Step 2 Store写明可用与创建账号相同的联系方式，也可以换不同联系人。

[Noon官方Seller Registration Process](https://helpcenter.noon.partners/en/category/onboarding-and-registration/seller-registration-process)：Store信息须销售国、注册国、EN/AR店铺名称、邮箱、电话。

**本轮行动结论：** Work界面默认国际区号+971不是必须使用阿联酋手机号的证据；Owner可以在原授权Store表单使用真实、实际可接收验证的联系方式，若系统允许选择注册地手机区号（例如+86）可按真实号码填写；**不能声称原账号已实测+86 Store手机号成功或验证码通过**，实际是否可选及OTP行为由Work当前表单证明。无需因默认区号买UAE号码。

[Noon官方Store Edit](https://helpcenter.noon.partners/en/category/onboarding-and-registration/edit-your-store-information)：店名EN/AR是买家可见公开信息；已设店铺名称可以在Store Management -> Store Settings修改，但这不是允许使用他人注册品牌的证据。官方禁止使用现有他人受保护品牌、URL/邮箱等不适当名称。阿文名应与真实店名相称、不得虚假关联；当前没有Owner批准的店名，主研究不替Owner自动填。

## 3. Skip for Now有官方明确证据，但只在建店之后的向导成立

[Noon Seller Registration Process](https://helpcenter.noon.partners/en/category/onboarding-and-registration/seller-registration-process)明确：**完成Store创建后**，若没有资料，后续向导中可点击`Skip for Now`并将来继续提供商业注册、税务、代表人、付款等材料。Payment Method还单独允许稍后补。

Work-049独立`finance.noon.partners/en/legal-entities/add`页面没看到`Skip for Now`，**不反驳Store创建后的一般向导有Skip**。Store当时尚未创建，因此不能据通用文档直接宣称本账号该按钮已实测、LE已经豁免或已能营业。

**业务硬分界：** 可以跳过录入步骤≠ Noon's Legal Entity Approved；真实营业执照、代表人、签署条款及必要有效收款/NGS资质仍需真实审核。中国NGS新卖家上线前官方明确需有效付款方式。Work可根据本轮已批准创建Store的范围查看后续向导，但不得未经另行许可上传证件、签具有法律约束的T&Cs或绑定银行。

## 4. SKU创建测试实际的“非公开”安全边界：本轮最重要新结论

[Noon Single SKU Creation一手教程](https://helpcenter.noon.partners/en/category/product-listing/single-sku-creation)：
- Step 1 `Product Identity`输入EN/AR商品名、Partner SKU、真实Brand或“无品牌”、1–9张商品图、Category；
- 点击`Create & Continue`会进入`Product Content`；手动模式可Skip内容，之后为`Offer Details`，包含**Price、Barcode、Warehouse & Stock**；
- **最后一步`Submit`才是将SKU送审，之后约10—15分钟可在Catalog反映；**但一手文档未明确保证在按下`Create & Continue`时绝无SKU部分对象保存，因此不能称它是可靠的“Save Draft”；
- 商品详情/营销图片由商家负责，Noon[UAE卖家一般T&Cs](https://helpcenter.noon.partners/en/category/program-policies/uae-seller-terms-and-conditions-tandcs)要求不侵犯第三方IP；不采用未许可的供应商、其他卖家竞品图片或假品牌。

[Noon Listing Products FAQ](https://helpcenter.noon.partners/en/category/product-listing/listing-products-on-noon-faq)明确SKU`Status`（Active/Inactive）与`Visibility`（Live/Not Live）分别判断；若任何一项不具备Active/Live，买家不可购买；[Noon What is Catalog](https://helpcenter.noon.partners/en/category/product-listing/what-is-catalog)称一般商品需要映射、Active和**price/stock>0**才上线。这个一般规则没有证明现有账号具体按钮默认值或NGS全部条件。

**特别风险：[Noon China NGS专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)Step 5–6**写商品QC审批后加USD Transfer Price与库存，全部完成并获准可能**自动上线、接受真实订单**。因此：
1. 在Work实际验证时不要擅自填写正库存、不启用Active或自动卖货、不提交公开可售Offer。
2. 若User仅授权“非公开草稿测试”，`Create & Continue`与`Submit`不可直接视为无风险保存草稿；实际没有`Save Draft`时，**停在表单并报未验证**，不要编假商品数据逼系统下一步。
3. **内容草稿、商品QC、Store创建与可售Listing是不同事件**；平台上能打开表单不是商品已上线，点击一个按钮也不代表审批或收款完成。
4. 日后得到实际合法商品资料和可使用图片，必须先确认创建动作是否写入真实SKU、默认激活状态及Stock/TP保护才进行受控产品创建。

## 5. NGS不等于已获准零库存代发

官方中国NGS允许在收到订单后备货并邮寄/交中国深圳集货点，Seller Lab“中国仓”用于记录库存而不是实物国内收货仓；但在现有公开NGS文本中没有明确“卖家未购买而仅能从第三方采购的数量可如何声明为可售库存”。Noon[通用库存管理](https://helpcenter.noon.partners/en/category/price-and-inventory/how-do-i-manage-my-stock-and-prices)允许设置FBP库存与PT，并警告缺货取消可能罚款、影响绩效。通用规则不能自动证明NGS允许大额未备货库存。

**运营建议：** 保留Owner取消持续库存保证书的要求，但首单试营业前需要真实可在处理时间内取得与按官方标签直接交深圳的同规格商品。不能用虚假`stock_gross`或伪AWB来“测试上线”。这不影响Work当前安全读取开店向导与非公开商品表单。

## 6. 当前最小行动及执行分工

| 项目 | 主研究本轮已确认 | Work下一步（已另行授权且正在执行） |
|---|---|---|
| 店铺联系方式 | 原Org可以使用非UAE国家号码，Store可以沿用原账号联系人 | 等Owner确认真实EN/AR店名和电话/区号；不用因为+971默认值强行买UAE卡 |
| Store文案 | 英/阿店名公开，后续可编辑，不可冒用注册品牌 | 真实用户确认后才点Continue；保存实际结果 |
| LE资料 | 商家注册文档“Skip for Now”是建Store后向导功能 | 实际进入Store向导时观察，不能提前称LE已豁免 |
| SKU草稿 | 无已验证“Save Draft”；Create & Continue≠显式的只保存草稿 | 仅用有合法内容的真实SKU；不能填假商品名/图片或激活正库存 |
| Product销售 | 只有符合状态、可见性、QC、报价、库存等条件才真实可买 | 真正启用与付款后续另行获准，不因表单可访问擅自上线 |
| China NGS资格/零库存申报 | 当前工作未取得有效LE/NGS准入；是否可申报未购库存UNKNOWN | 不重开043空页；若建店后出现具体新官方资格提示，再定点读取 |
| 真实第一笔付款 | 目前自营销售/妥投/到账仍0 | 合法LE/Store/NGS/Payout/商品履约通过才有真实首单 |

**结论：`GO_REAL_STORE_FORM_WITH_TRUE_OWNER_DETAILS`；`GO_READ_ONLY_SKU_STEP_DISCOVERY`；`NO_GO_LIVE_STOCK_OR_SUBMIT_PUBLIC_OFFER`；`HOLD_LE_APPROVAL_NGS_PAYOUT`。**

## 7. 本轮相关第一方来源

- https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program
- https://helpcenter.noon.partners/en/category/onboarding-and-registration/seller-registration-process
- https://helpcenter.noon.partners/en/category/onboarding-and-registration/edit-your-store-information
- https://helpcenter.noon.partners/en/category/product-listing/single-sku-creation
- https://helpcenter.noon.partners/en/category/product-listing/listing-products-on-noon-faq
- https://helpcenter.noon.partners/en/category/product-listing/what-is-catalog
- https://helpcenter.noon.partners/en/category/price-and-inventory/how-do-i-manage-my-stock-and-prices
- https://helpcenter.noon.partners/en/category/program-policies/uae-seller-terms-and-conditions-tandcs

**仅新增此独立只读文件；Work-049的店铺表单、Issue #24及其正在操作的浏览器未触碰。新的真实Store/LE/SKU状态需以Work稍后的实际回执为准，不预报成功。**
