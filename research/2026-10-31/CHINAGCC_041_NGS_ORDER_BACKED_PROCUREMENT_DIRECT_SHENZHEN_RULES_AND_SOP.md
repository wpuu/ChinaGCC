# ChinaGCC-041｜NGS订单后采购、供应商直发深圳：实际规则及条件操作说明

**核验日：2026-10-31，北京时间。** main基线 `7c58a76a87ac679465ebd51dd53aa6f1f87ee136`；先读040报告、Issue #24及031原账号验收。新增本文件，不覆盖任何已有报告。关联：[Issue #24](https://github.com/wpuu/ChinaGCC/issues/24)。

**商业判断：客户下单后备货、邮寄深圳、由Noon履约的链路有中国NGS官方依据；“完全未采购库存如何申报”“供应商获准代贴正式面单”“NGS专项取消费用”尚未核实，不能宣布整条模式已经获准开卖。没有必要把“供应商持续库存保证书”恢复成硬门槛。** 本轮只完成官方规则核对和条件SOP；四项账号深层配置未完成读取，具体原因见第2节。

## 1. 五类证据状态

| 核验项 | 官方已核实 | 当前后台已核实 | 不具备资格暂时不可读取 | 公开资料未说明 | 后续需要真实交易才能验证 |
|---|---|---|---|---|---|
| China NGS Processing Time | PT覆盖备妥并交中国集货仓；中国国际物流模式有公开说明[S1/S2] | **未读到设置或下拉** | 031已有无Store/有效LE的前置缺口；041没有取得直接权限因果提示 | China NGS实际可选天数、工作日/自然日、截止时区及超时细节未明确 | 真实订单显示的截止时间及深圳接收时间是否匹配 |
| 库存管理 | NGS需设置库存；中国“仓”用于库存信息；通用库存文档支持改数量、0库存及缺货处理[S1/S3] | **未读到NGS库存字段/口径** | 同上，不能把工具导航失败当作平台资格拒绝 | 供方可采购数量是否可申报、是否须本人占有实物、NGS同步延迟 | 真实可履约数量、更新生效、订单占用与缺货率 |
| 缺货取消 | NGS备货步骤链接Directship教程；该教程有Mark as Out of Stock及收费提示；通用库存文档说取消不可逆[S3/S4] | **未读到NGS实际取消入口/适用条款** | 无获准可交易账号及真实订单，未有NGS按钮证据 | NGS取消费率/计费基数、绩效阈值、申诉及订单恢复专项例外 | 获准发生的真实异常订单、账单费用与绩效；不能为测试故意取消 |
| Shipment / AWB | 链接教程有Create Shipment、AWB扫码/手输及重打QR；通用包装说明要求正式QR[S4/S5] | **未读到NGS货件界面或标签样本** | 041未到NGS订单页，不能声称其与普通Directship完全相同 | NGS首个AWB来源、供应商代打印许可、国内快递号后台绑定字段及深圳具体扫码回执 | 一笔获准真实订单的标签→包裹→深圳接收→国际跟踪闭环 |
| 中国主体类型/NGS资格 | 中国NGS要求有效中国商业登记[S1] | 仅首页当前项目无Store；未取得新的主体类型/拒绝原因 | 031无有效LE、跨境未符合条件是历史验收；041未重查该提示 | 中国大陆个体工商户明确接受路径、当前不能加入NGS的具体原因 | 审核批准是正式审核事项，不是靠交易试验替代 |
| 收款 | 中国NGS妥投按USD TP结算，仍走付款政策[S1/S8] | 本轮未检查或改变收款 | 沿用未批准/未知的031基线，不推定已有获批收款 | 本账号USD收款门槛及实际入账费用未确认 | 真实账单、实际到账与人民币净收 |

表中“未读到”不等于不存在功能；“不具备资格”也不是本轮对每一项取得了平台明示拒绝。**四项账号端结果统一为 `NOT_VERIFIED_THIS_RUN`，不能假装已完成验收。**

## 2. 本轮Ego原账号实际结果与执行缺口

执行：主代理综合判断；用户指定的 **GPT-6.1 Terra / Medium** 子代理承担正式Ego只读操作。

- 本轮Ego连接正常；旧bootstrap错误不是当前结果。使用空间13、p1，实际只导航原账号首页 `https://noon-store.noon.partners/en/`。
- 操作期间精确时间锚为**2026-10-31 13:33:30北京时间**。页面显示：`You don't have any noon store on this project.`
- 导航可见Global Selling及其目标 `https://xborder.noon.partners/en-ae/programs`，以及普通Fulfilled by Partner / Directship菜单。**本轮没有打开Global Selling，也没有打开Directship仓库页或NGS配置页。**
- 点击Seller Logistics时实际返回 `ElementResolutionError: page.click timed out ... element is not visible in the viewport`。这是工具导航失败，不是Noon确认Store/LE导致NGS不可见。
- 子代理在完成四项读取前提前执行finish，返回FINISHED、keep=[]、退出码0。**这部分执行未达标，不能写成“因平台资格阻塞而完成四项核查”。** 主代理尝试接续时，经正式CLI枚举确认空间13已不存在；未另建空间、更换浏览器或用接口绕过。
- 031关于无有效LE及跨境暂不符合项目的结果仅沿用作基线，本轮未重现；没有新的具体拒绝原因，未要求用户重复注册、重复登录或创建空店铺。普通Directship导航不代表China NGS配置已可见。
- 页面证据只在工具快照输出中；无脱敏截图文件。未保存用户密码、验证码、Cookie、银行资料或私钥。脚本目录 `C:/Users/Admin/ego/chinagcc-041-account-20261031/`；主代理最小接续检查目录 `C:/Users/Admin/ego/chinagcc-041-account-main-20261031/`。脚本不是商业证据本身。
- 报告完成时没有本轮存活Ego任务。没有业务配置写入、真实订单、采购、付款、货件、外联、工单、证件/银行提交、合同或API密钥创建。

操作依据为[本机Ego技能](C:/Users/Admin/.codex/plugins/cache/openai-curated-remote/ego/2.1.0/skills/ego-browser/SKILL.md)及其运行指南：finish结束页面句柄；不得另建任务空间恢复失败页面。本报告保留实际错误与未完成项，不把工具限制伪装成平台政策。

## 3. Processing Time真正约束什么

**中国NGS官方的终点是把货交到中国集货仓，不是取得国内快递单号。** 因而实际采购、供方备货、包装贴码、国内运输和交仓都必须放进订单允许的时限[S1]。

中国NGS选择的Delivery Model是国际物流模式；公开创建仓库文档能确认存在该模式和PT设置，但没有给出本账号中国NGS下拉选项[S2]。本轮：
- **可选天数：UNKNOWN。**
- 不套用普通FBP政策的1—10天，也不把库存模板same_day至4_days当中国NGS选项。
- 不承诺“买家付款后一定还有3天/5天/10天”，不把其他国家上午10点取件规则搬来中国。
- 判断是否来得及，应使用真实NGS订单的截止时间和实际深圳接收证据；不能自行假定可给已有订单延长PT。

## 4. 可采购库存、自有实物和缺货

### 已确认与未确认的边界

NGS的中国仓是库存信息节点，不要求先把待售商品囤到海外；这与“卖家是否必须先购买/持有国内实物”是两回事。**本次未找到中国NGS明文要求卖家本人保管全部实物，也未找到明确允许将尚未采购的供应商可买数量直接填为库存的专项定义。** 两端均不能凭沉默推成肯定。

通用库存文档说明数量/仓库/PT的更新，并提示设0仍可能收到订单、缺货应拒单、已取消订单不可恢复且可能有费用[S3]。这不是本账号NGS字段的实测。

补充检索到通用UAE卖家条款对出售商品有清晰所有权等保证[S9]；**所有权/合法销售权不等于实物必须在本人手里**。该通用条款与本账号NGS实际合同的适用关系未取得，不能据此否定订单后采购，也不能忽略获准账号真实要求。另有标题“International seller”的旧条款开头明确FBN，不因带International就当NGS专项[S10]。

### 拟用操作原则（实施建议，不冒充平台已批准）

在库存口径获得确认后，以当前确实能采购到**同型号、颜色、尺寸、数量并及时交仓**的能力确定可售量，定期更新；不要无限填大数，不要为赶时间用近似款替代。无需供应商持续库存保证书，也不要求为这个文件专门签约。

无货时：先判断严格同款备选是否还能在截止前交仓；不能则及时按该NGS订单的真实缺货入口处理，而非虚假发货。设0通常用于阻止后续销售，**不等于已生成订单自动消失或免责**。本轮没有改过任何库存。

用户预计缺货率低于1%仍是风险假设，不是历史实测，也不是自动满足平台绩效的证明。

## 5. 取消订单：具体费用仍未知，不能当免费选项

| 问题 | 本轮准确答案 |
|---|---|
| NGS官方是否完全没有取消线索？ | 不是。NGS备货步骤实际链接Directship教程，教程有缺货操作及收费警告[S1/S4] |
| 是否已经确认本账号NGS按钮？ | 没有；无真实NGS订单界面证据 |
| 取消费、费率及基数 | **UNKNOWN**；不假设0元、不套普通FBP佣金 |
| 绩效影响 | 普通Directship明确会计入取消/迟交绩效[S6/S7]；本账号NGS具体适用范围和阈值未核实 |
| 取消后能否恢复原订单？ | 通用库存及FBP文档说不可逆[S3/S6]；中国NGS有无专项例外未找到。实操不要按“先取消再恢复”安排采购 |
| 店铺健康能否恢复？ | 这是账户整改问题，与恢复被取消原订单不同。通用Directship有整改计划渠道[S7]；NGS具体流程未知，本轮不提交 |
| 普通Directship的2.5%/3%、FBP的1—10天是否适用？ | 只有对应通用文件依据，**不能宣布为中国NGS适用值** |
| 网上/其他合同的“最高100%货价”能否用作NGS罚款？ | 检索到该值的国际卖家页面自身标FBN[S10]，**不能据此给本NGS订单定罚款** |

040引用的普通FBP取消页内部还出现“超ESD可自动取消”与特定闭仓FAQ“已处理不自动取消”的不同情景[S6]。不能择取后一句保证中国包裹超时不会取消。以实际NGS订单及条款为准，本轮未做故意取消或收费测试。

## 6. 四类编号和交仓证据分别是什么

NGS备货步骤直接链接官方Seller Lab Directship教程，故“参考这条处理路径”有来源；但不能把普通Directship全部功能、包装耗材和取件模式无条件照搬。

| 标识 | 含义及对应关系 | 证据边界 |
|---|---|---|
| Noon订单号及订单行 | 识别客户买了什么：SKU/变体/数量 | 不等于物流单号；一个订单可含多商品 |
| 商品识别条码/PSKU | 识别商品/颜色/尺寸；不同变体应正确映射 | 通用商品条码规则[S11]，不替代包裹AWB |
| Shipment AWB及二维码 | 识别Noon货件；教程中将选中的订单商品与正式AWB关联，并可重打QR | [S4]支持操作描述；中国NGS首个AWB的取得方式、本账号打印界面未知 |
| Handover / Manifest二维码 | 识别一批交接货件，区别于单个AWB | 通用教程有交接清单及仓端扫码[S4]；中国快递代交是否须随附这张码未说明 |
| 国内快递号 | 中国供应商到深圳仓这段运输的承运单号 | 不是Noon AWB。NGS公开文档未说明必须/可以在哪个字段绑定 |

**实施建议的核对账**为：订单行/SKU/数量 → 对应AWB货件 → 国内快递号 → 深圳接收记录 → Noon国际跟踪及妥投状态。它是我们建议的留痕结构，**不是声称Noon已有这张表或这些必填字段**。不强制订单、AWB、国内快递单三者恒为一对一。

### 标签、供应商代贴和收仓

- 通用包装指南要求使用Noon提供/正式打印的包裹QR，避免重复包裹识别码混淆；商品条码和国内承运面单用途不同[S5/S11]。
- NGS有不强制Noon品牌包装的专项例外[S1]，**不等于允许无正式识别码寄仓**。普通教程用预印AWB/QR、扫描或手输并可重打；不能自行编造AWB二维码，也不能说任意网上生成QR都能入仓。
- **把正式标签文件交中国供应商代打印贴码、由其直接寄深圳，公开NGS资料未明确许可或禁止。** 在平台确认这条路径、且供方能正确执行之前，它是待核实施安排，不是已验收能力。无须给供应商账号密码、验证码或API权限来完成普通打印。
- 中国快递“已签收”只能证明国内承运过程的签收，**不自动证明Noon已识别AWB、收对件数或接纳该货件**。未来应核Noon的收货扫描/状态及时间，并留存国内签收；本轮没有取得中国NGS具体回执名称或字段。
- 不能把普通Directship或海外FBN的ASN/manifest收货证据自动当深圳NGS同一流程。供应商只会发快递而不会贴正确码时，不应无标签寄出。

## 7. 未来获准交易后的条件操作说明

**以下是准备好的操作顺序，不是本轮已执行动作，也不是解锁采购/上架。** 账号、库存口径、NGS取消条款及第三方标签交仓安排需按上述缺口先得到真实适用确认；不得为验证而制造假订单或假库存。

1. **客户下单，先核平台订单。** 查看原账号真实新订单、具体SKU/颜色/数量、状态及交仓截止；以平台订单为依据，不凭外部付款截图采购。
2. **检查当单货源与时间。** 确认同款现货可采购，预计“备货＋贴码＋中国快递＋仓收货”仍在真实PT内；否则切换严格同款备选或及时处理缺货，不换近似款硬发。
3. **支付国内采购及寄仓费用。** 买家钱先交Noon，卖家需先垫采购和国内物流；不是等Noon把这单钱先转给卖家后再买货。记录货款、包材/贴码、运费等实际支出。
4. **按获准NGS订单流程处理货件。** 在真实界面中核商品行，使用平台正式AWB；若界面确为引用教程流程，才走Create Shipment、关联AWB及打印/重打。**本轮不生成任何货件。**
5. **供应商按已确认的代贴要求打包直寄。** 卖家发送这笔货件的正确打印文件、SKU/数量核对要求及指定深圳收件信息；供方包装后核对标签清晰、贴对件、不重复复用AWB。若代贴路径仍未获确认，停在此处，不裸寄。
6. **国内快递→指定深圳仓。** 留存国内运单和交付证据并追踪；不能只凭“已经揽收”就当完成PT或擅自标记已交Noon。
7. **核Noon实际接收。** 对比国内签收、Noon货件接收/扫描记录及件数、时间。发生无法识别/错码应按当时获准流程处理，不能自行伪造收仓。
8. **Noon国际履约、客户妥投。** 按真实货件状态跟踪。未妥投、退货、拒收、取消不等于正常成功TP收入。
9. **账单→获批收款账户→实际到账。** 按NGS正常妥投TP及付款周期核账；收款门槛、退货调整、汇兑和实际到账另核，不能把“妥投”写成当天已到账或净利润。

官方在本轮列示深圳集货点为**深圳市宝安区福海街道聚源工业区A区A栋1楼安邦0014**[S1]。这是本次官方页面地址；真正发运前仍应核当单/获准仓提供的有效收件要求，不能只拿历史地址创建快递单。本轮未发货或联系该仓。

**对用户最关心的直发结构：**官方支持以邮寄方式交深圳，并未写必须卖家本人先收包再转寄；因此无需把“先寄给你本人”作为默认流程。供应商→深圳可以作为目标实施结构，但第三方代贴/交仓细节未确认，不能宣称已经全链路获准。

## 8. 付款、异常及明确不做的推断

正常NGS按妥投TP结算不等于所有异常免费；采购、国内运费、退损、税务、获客和收款汇兑仍由实际发生的数据核算。付款政策另有周期、正余额及币种门槛[S8]；普通AED/SAR门槛不能未核账户就套作中国NGS USD最低打款额。

不要求先囤海外库存；但NGS可售退货可能转当地FBN，未来产生当地费用和自动定价问题，沿用031已核风险，不将其写成用户主动预囤海外货。偶发缺货按规则处理，不恢复库存保证书要求，也不将用户<1%预测当成零风险证明。

## 9. 一手来源与适用范围

本轮均重新读取/检索Noon官方资料。全文为概括与实施分析，不转录完整网页。

- **S1 中国NGS专项**：[noon global shipping program](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)；本项目核心模式、PT终点、准备订单的Directship链接及专项例外。
- **S2 仓库通用说明**：[Creating and managing a new warehouse](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/creating-and-managing-a-new-warehouse)；包含国际物流模式，非本账号下拉实测。
- **S3 库存通用说明**：[How do I manage my stock and prices?](https://helpcenter.noon.partners/en/category/price-and-inventory/how-do-i-manage-my-stock-and-prices)。
- **S4 NGS页面所链接教程**：[How to process directship order using the seller lab?](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/how-to-process-directship-order-using-the-seller-lab)；AWB、取消、货件和交接操作；通用教程不是本账号NGS验收。
- **S5 包装通用指南**：[Packing guidelines for directship](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/packing-guidelines-for-directship)；以NGS专项不强制品牌包装为例外，不照搬耗材/境内取件条款。
- **S6 FBP取消政策**：[FBP order cancellation & rejection policy](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/fbp-order-cancellation-and-rejection-policy)；费率/PT/情景不能未经核实套中国NGS。
- **S7 Directship绩效**：[Directship seller performance management](https://helpcenter.noon.partners/en/category/fulfilled-by-partner-fbp/directship-seller-performance-management)；仅用来识别普通模式风险，非NGS阈值。
- **S8 付款政策**：[Payments processing policy](https://helpcenter.noon.partners/en/category/finance-and-payments/payments-processing-policy)；NGS专项有引用，具体USD账户门槛未取得。
- **S9 通用UAE条款**：[UAE seller terms and conditions](https://helpcenter.noon.partners/en/category/program-policies/uae-seller-terms-and-conditions-tandcs)，10.1(g)(i)；未作为本账号已签NGS合同。
- **S10 国际FBN条款反例**：[International seller terms and conditions in UAE](https://helpcenter.noon.partners/en/category/onboarding-and-registration/international-seller-terms-and-conditions-in-uae)；开头标FBN，不套其取消金额、物流/VAT费用到本NGS。
- **S11 商品条码**：[Barcode requirements](https://helpcenter.noon.partners/en/category/product-listing/barcode-requirements)；区分商品码与货件AWB，非NGS仓当单接收回执。

**本轮交付的是带未验证标记的执行说明；不是四项后台验收通过、渠道资格批准、真实成交、交仓、妥投、到账或利润。** 原040与031保留，Issue #24只追加041新增事实与未完成项，不改历史。
