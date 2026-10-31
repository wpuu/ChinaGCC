# ChinaGCC-050｜049 Work真实进度接收、SKU路径差异及首次合法上架防误触闸门

**核查日期：2026-10-31，北京时间。**  
**主业务目标：** 经Noon中国NGS合法获准 → 自营SKU真实买家付款 → 中国订单后采购 → Noon深圳仓接收 → 跨境妥投 → 实际到账及全成本净利。**报告/SKU研究不计入真实订单。**  
**权限及动作：** 只读GitHub和Noon官方公开帮助中心、写本独立增量报告。**不进入、不接管、不关闭Work的Ego空间18；不填店名电话，不创建Store/LE/仓/SKU，不提交QC、不激活库存和报价、不外联、不下单采购付款、不签约、不改既有自动化。** 保留供应商无需“长期库存保证书”的Owner规则，零预囤货并不等于可虚填可售量。

## 1. 仓库与Work实际状态（不可将研究提交误记为店铺推进）

本轮查询main起点最新提交 **`e883530cd5b19989ebbd3d1991d48ce4a4ae6b3f`**（此外有连续 SKU 市场雷达数据提交，不构成新LE、店铺、NGS或真实订单进度）。已完整读取：
- [Work-049开店与产品表单实测](CHINAGCC_049_UAE_STORE_CREATION_AND_NONPUBLIC_PRODUCT_FORM_TEST.md)，截至19:26:24（北京）：已有Org/Project；UAE/China在Store创建表单已选、Email原账号预填；EN/AR公开店名及真实Phone未填，`Continue`未点，UAE Store未建；Work正规handOff原Ego空间18交用户补资料，**未finish**。
- [049R公开规则/非公开草稿安全审计](CHINAGCC_049R_WORK_STORE_FORM_AND_SKU_LIVE_SAFETY_OFFICIAL_AUDIT.md)：Store后向导官方有`Skip for Now`但本账号未走到；独立China LE表单需真实License Number/Company Name/Address/Issue Date/执照文件，无LE创建/审批；商品身份表单可进入但无正式草稿保存，没图片合法使用授权，`Create & Continue`未点。
- [Issue #24](https://github.com/wpuu/ChinaGCC/issues/24)：最新同工作19:26回执；未见更新后成功创建Store/LE/SKU的可核回执。注意**仓库无回执≠远端浏览器必无进度**；后续Work凭页面实测更新，而非主研究替其宣布状态。

**目前阶段判定**：`WORK_STORE_FORM_AT_USER_FIELDS`；`STORE_CREATED_VERIFIED=false`；`LE_APPROVED_VERIFIED=false`；`NONPUBLIC_SKU_SAVED_VERIFIED=false`；`NGS_ELIGIBILITY_VERIFIED=false`；`REAL_OWNER_ORDERS=0`。此处不要求Work重开043的四个旧空页面，也不要求用户重注册Org。

## 2. 官方新增关键区分一：NSKU和ZSKU不是随便“复制竞品就上架”

[官方 Listing products on noon – FAQ](https://helpcenter.noon.partners/en/category/product-listing/listing-products-on-noon-faq)及[Product listing policy](https://helpcenter.noon.partners/en/category/product-listing/product-listing-policy)：
- **NSKU（N开头）**属于noon控制商品内容，符合条件的相同产品及可销售品牌才可能映射建立卖家的Offer，可能需要品牌白名单；
- **ZSKU（Z开头）**是由特定卖家控制内容；其他卖家**不能直接把对方ZSKU作为自己可挂售的NSKU并复制其内容**。若销售自己的非noon控制品牌/Generic货，需自建真实、合法内容的Seller SKU，由平台QC审核。
- 原项目竞争参照中出现`Z...`页面链接：只用作**市场参照**，不把其图片、标题/详情或ZSKU编号当作自身商品授权或已批准上架路径。
- 非原厂品牌和授权品牌必须按相应`Brand Gating`/类别门槛分别判断；`Generic`不等于免审核、免知识产权要求。
- 同一卖家目录内重复建相同SKU可能触发Duplicate SKU政策；禁止为了“测试按钮”连续制造重复SKU。

这项区别在049R还未独立强调，会直接影响Work创建身份产品时应该选择Single SKU还是错误地对竞品ZSKU建立Offer。**不生成SKU/不重复搜商品**。

## 3. 官方新增关键区分二：普通价格不等于中国NGS的USD Transfer Price

[Noon普通单SKU教程](https://helpcenter.noon.partners/en/category/product-listing/single-sku-creation)描述常规`Offer Details`中`Price`是当地顾客价格（含VAT），还含`Barcode`与`Warehouse & Stock`。但[中国NGS官方专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)明确：卖家需在UAE/KSA对应Store设置USD `Transfer Price`，由专用Import/Offer流程提供，Noon另外内部决定面向买家跨境加价，正常妥投按TP结算。

- **不能**把普通Noon/FBP本地商品`Price`字段当成NGS的USD Transfer Price，或套其一般佣金/本地VAT计算方式。
- [Understanding the Catalog Creation Page](https://helpcenter.noon.partners/en/category/product-listing/understanding-the-catalog-creation-page)显示`Global` SKU分组在**eligible**时才出现；未进入该组不等于其它目录未创建；进入普通`noon`目录也**不证明中国NGS资格通过**。
- Work只有在真实Store/NGS获准后才应检验本账号实际`Global`视图、TP导入模板及该SKU真正USD收款口径，避免为当前测试填一份不可承诺的报价。

## 4. 官方新增关键区分三：QC、Active/Inactive、Live/Not Live、Price、Stock与自动上线

[Noon FAQ](https://helpcenter.noon.partners/en/category/product-listing/listing-products-on-noon-faq)、[Product listing policy](https://helpcenter.noon.partners/en/category/product-listing/product-listing-policy)、[What is catalog?](https://helpcenter.noon.partners/en/category/product-listing/what-is-catalog)定义：
- `Product Identity`：定义商品标题、Brand/Generic、`Partner SKU`、分类、真实有权图片（Work目前仅打开首步）。
- `Product Content`：商品内容及QC审核结果独立记录；提交审核不等于已可售。
- `Offer Details`：标准流程含当地`Price`、Barcode、Warehouse & Stock；NGS另有USD TP与库存设置。
- `Status`：卖家控制`Active/Inactive`；`Visibility`：系统根据内容/QC、报价、库存、条码、品牌/类目授权和销售资格等综合得出的`Live/Not Live`。**一般只有Active且Live时消费者可买**；其中`Invalid Invoicing`也是FAQ明列的未上线健康检查原因，但不能把它作为保证安全、永不自动上线的“永久门禁”。
- 官方普通Catalog给出的基础上线条件包括映射、Active、stock/price>0；[NGS专项](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)Step5–6更指出QC批准、USD TP、库存与所需批准满足后**商品可能自动Live接真实订单**。
- [Noon FAQ](https://helpcenter.noon.partners/en/category/product-listing/listing-products-on-noon-faq)指出报价/库存/条码/质保修改可能数分钟生效，允许**最多30分钟**；因此**不能用“先激活再立刻下架”模拟交易安全测试**，更不能以库存改0实时无延迟作为首单风险保证。
- `Create & Continue`可以继续创建内容流程，官方没有保证它只是纯本地草稿；`Submit`会将SKU送审，Work没有合法图片与完整商品属性时不应为了到下一屏编假数据；即使内容有条件送审，也不能擅自填正库存、激活或发布可售Offer。

[Catalog details page](https://helpcenter.noon.partners/en/category/product-listing/understanding-the-catalog-creation-page)还可查`Offer`、`Content QC`、`Product Visibility`与具体不Live原因，不必在账号未就绪时臆测因LE被拒。

## 5. 发现首单新增的类别/法律闸门（不是恢复选品搜索）

官方[How do I manage my stock and prices](https://helpcenter.noon.partners/en/category/price-and-inventory/how-do-i-manage-my-stock-and-prices)的一般卖家说明在`Extra Documents Requirement`处写**Health & Beauty商品要提供Proof of Purchase或授权函才能Live**。官方[Product listing policy](https://helpcenter.noon.partners/en/category/product-listing/product-listing-policy)进一步区分商标Brand Gating与Category Gating，部分Beauty/Color cosmetic及个人护理类可能需要授权、发票等。

**适用边界：** 这是公开的Noon普通上架政策，**没有证明现有化妆刷SKU一定被分类为Color Cosmetics/Health & Beauty强制发票，也没有证明中国NGS可豁免**。需要未来真实分类/平台QC或该SKU的官方明确规则。若最终类目在开卖前强制采购发票且用户坚持“绝不先采购”，这条SKU的纯订单后采模式可能**无法按现有授权通过**，须转向合法授权/可供证明的商品渠道或暂停该SKU，绝不提交假发票。此为**条件风险**，不重新扩SKU榜单。

## 6. Noon禁止使用未经批准的SKU写入通道

[Product listing policy](https://helpcenter.noon.partners/en/category/product-listing/product-listing-policy)只承认Seller Lab UI、Seller Lab NIS批量导入、noon官方API及Noon批准的集成。不能用后台未授权接口/逆向隐藏端点绕过正式审批和草稿限制。Work通过真实Seller Lab可见UI执行正常授权浏览属于官方路径；本轮绝不要求它使用非公开接口或生成假订单测试。

## 7. Work分工与最短下个实证动作（不抢占空间18）

| 后续门槛 | Work / Owner实际任务 | 主研究已完成/禁区 |
|---|---|---|
| UAE Store首步 | Owner在当前handOff表单提供并确认真实EN/AR店名与可用电话/国家码；Work沿原空间真实继续Store允许的免费创建并保留原页面证据 | 我不擅自填公开名和电话，也不重复031 |
| Store向导是否可Skip LE | Work在有真实创建结果后看`Skip for Now`，若不存在保留原文/截图；不上传假证照、不签约 | 通用官方文档有Skip，账号实际待核 |
| NGS资格是否变化 | 如果新的Store真实创建才检查**新的资格提示**，不反复进入043已经无资格的旧空页 | 不将Store创建成功写成NGS获准 |
| SKU安全草稿 | Work只有在得到真实SKU规格及图片合法使用权后再考虑是否能安全保存；`Create & Continue`非保证无写入；先检查默认是否有Active/Live及Offer条件 | 不复制竞品ZSKU、不填假图片或PartnerSKU |
| 首次合法可售 | 待有效LE、NGS、Invoicing Origin/Payout及类目权限，再按真实TP、可履约库存和PT准备；须单独批准真实开卖 | 现在`NO_GO_ACTIVATE_STOCK`，不购物、不投广告、不下单 |

## 8. 独立GO/NO-GO

- `GO_WORK_STORE_CREATION_WITH_REAL_OWNER_APPROVAL`：可以在已授权Work真实资料条件下继续UAE Store流程，**目前只证实页面/字段、没有成功提交**。
- `GO_OFFICIAL_CATALOG_FLOW_AUDIT`：标准商品身份、内容QC、Offer和商品状态等规则可核；非公开SKU保存未证实。
- `NO_GO_FAKE_SKU_OR_PUBLIC_SALES`：不得为到下一屏使用没有授权的图片、虚假库存/报价/品牌；不得先激活再立即下架测试。
- `NGS_ACTIVE_FIRST_SALE_NO_GO`：本账号合法LE、UAE Store创建、China NGS资格、合法USD TP/库存/结算仍无真实批准证据；没有订单、妥投、到账和已实现利润。
- 本轮主要增量为**ZSKU不能直接挂他人竞品、标准价与NGS TP不同、Global分组有准入前提、库存变化可能延迟、健康类产品可能另需发票/授权、必须使用官方Listing通道**。这些对Work和试卖安全有真实帮助；不展开新SKU/重复V2/035固定费模型。

## 9. 官方来源
- https://helpcenter.noon.partners/en/category/product-listing/listing-products-on-noon-faq
- https://helpcenter.noon.partners/en/category/product-listing/product-listing-policy
- https://helpcenter.noon.partners/en/category/product-listing/what-is-catalog
- https://helpcenter.noon.partners/en/category/product-listing/understanding-the-catalog-creation-page
- https://helpcenter.noon.partners/en/category/product-listing/single-sku-creation
- https://helpcenter.noon.partners/en/category/price-and-inventory/how-do-i-manage-my-stock-and-prices
- https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program

**本文件只产生独立主研究证据，未触碰Work-049报告、Issue#24原有正文、Ego空间、README或定时任务。Work后续实测另行回收，不提前宣布完成。**
