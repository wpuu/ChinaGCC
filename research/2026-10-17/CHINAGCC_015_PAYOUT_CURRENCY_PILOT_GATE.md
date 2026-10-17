# ChinaGCC-015｜自营试单收款门槛：沙特USD与阿联酋AED分支决策

**核验日期：2026-10-17（北京时间）｜模型：GPT-6｜状态：研究+现有Gmail草稿优化，均未发送**

## 1. 起点与真实动作
- 回读`main`起点`47bf51001aadc6e28de5caa201c8fe455e5da7cb`、[Issue #24](https://github.com/wpuu/ChinaGCC/issues/24)，并查询已连接Gmail收发情况：Noon与连连两封预先保存的官方资格问询均为`DRAFT`，没有这两家机构的已发送问询或回信。
- 通过Gmail连接器**原位更新并回读两封现有草稿**，新增“中国NGS阿联酋是否支持连连AED收款/较低打款门槛”和“经审核账户何时可预览消费者到手价及配送时效”的问题；连连草稿还新增官网Noon & KUL 0.7%提现标示费率适用性核实。**邮件仍未发送；没有创造新的邮件线索或联系人。**
- 用户既有项目约束`NO_EXTERNAL_OUTREACH`尚未解除。出于合同性质，对外发送、注册/提交实名资料、付款/购买库存均不因“继续推进”自动执行。
- 具体Gmail草稿链接和个人邮箱只留在对话，**不写进公开GitHub仓库**。

## 2. 官网现已证实的事实（不等于对当前个人账户已经审核）

### NGS中国自营主体
- Noon China NGS要求`valid Chinese Commercial Registration`、审核Legal Entity、签约及合法收款方式；卖家以USD Transfer Price设价，妥投后按此价结算（专项规则），国际物流及目的国VAT由Noon向消费者端处理。
- 中国大陆个体工商户营业执照是否获China NGS认可，**仍无明确书面答复**；普通Noon商家FAQ的`Individual Seller Egypt only`不能单独判断。
- 来源：https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program

### Noon官方一般付款门槛
- 付款规则：https://helpcenter.noon.partners/en/category/finance-and-payments/how-will-i-get-paid-for-my-sales
- 收款账户币种**与交易市场当地币相同**：最低100 AED/SAR；不同币种：最低1000 AED/SAR；不到账的应付额会按官方周期滚动。
- NGS专项另声明`payouts follow regular Payment Processing Policy`，但**中国来源NGS/USD TP如何折算与分类、对应连连账户类别，是具体账户的未解问题**。
- 不能把“单笔已妥投”自动当作“已可将钱提现到中国”。

### 连连支付
- 官方支持Noon `Saudi USD`：无店铺可先选`暂无店铺`申请；受益人名称必须与Noon店铺Legal Entity匹配：
  https://global.lianlianpay.com/support/detail/OUeCzsOi
- 官方还支持`UAE AED`收款账户，并建议一般Noon阿联酋店AED、沙特店USD：
  https://global.lianlianpay.com/support/detail/HNbWanwD
- 连连2026-04-29宣布Noon阿联酋/沙特均可USD收款：
  https://global.lianlianpay.com/article/MTUxNzMxLGMyOA.html
- 连连`出口电商收款`公开表Noon & KUL列出提现费率`0.7%`（阿联酋AED和沙特/阿联酋USD）；实际活动费率、汇兑价差、最低提现、可能固定费用及本账户能否使用仍以正式账户/书面答复为准：
  https://global.lianlianpay.com/solutions/ecommerce_export

## 3. 条件测算：收款门槛可能比选品利润更影响首单计划

旧项目测试网格（**非Noon真实报价**）：USD Transfer Price = `4.50 / 5.50 / 6.50`。模型只按`卖出一件获得一笔TP`、无退款、无款项抵扣、汇率固定作纯数学演示；不代表实际销量、收入或可提现余额。

官方钉住的参考汇率：USD/SAR = 3.7500（沙特中央银行）；USD/AED约3.672—3.673（阿联酋央行买卖美元干预水平）。
- https://www.sama.gov.sa/en-us/pages/default.aspx
- https://centralbank.ae/en/our-operations/monetary-policy-and-domestic-markets/domestic-market-operations/

| 设想场景（尚未确认中国NGS适用） | 一般打款门槛 | 若TP $4.5 | 若TP $5.5 | 若TP $6.5 |
|---|---:|---:|---:|---:|
| 沙特站USD收款，被划为跨币种账户 | 1000 SAR | 60笔 | 49笔 | 42笔 |
| 阿联酋站USD收款，被划为跨币种账户 | 1000 AED | 61笔 | 50笔 | 42笔 |
| 阿联酋站AED收款，**且Noon确认可作为China NGS本币账户** | 100 AED | 7笔 | 5笔 | 5笔 |

**重要**：这是条件比较，不是实际中国NGS门槛。NGS Transfer Price本身使用USD，阿联酋AED能否打款/换算/按100 AED判断必须由Noon正式确认；实际Noon打款余额计算、连连入账、汇兑成本可能改变所需件数。不能用未确定的“7笔”对外保证回款。

## 4. 真正的业务决策分支

1. **优先要Noon回答中国大陆个体工商户身份能否获China NGS批准**；如不支持、有限公司固定成本过高，先停止此路径，而不是为求证注册有限公司。
2. 如账户资格可行，**再确认中国NGS阿联酋站能否用连连UAE AED账户，并适用100 AED本币门槛**。如果确认，并且UAE同SKU消费者实际总价/配送时效可竞争，则第一个试验市场可以从沙特转为阿联酋，仅为缩短验证结算周期。
3. 如果只能使用USD跨币种账户且1000 AED/SAR阈值适用，在没有真实销量与复购前，不应仅为验证“首笔回款”提前购买几十单库存，更不能代购/刷单凑门槛。先比较真实预计订单量、完整成本、退货及资金占用；否则项目暂停或依法转向其他渠道。
4. 若连连的Noon账户提现/换汇费率与实际收款规则不符合预期，重新评估Payoneer/WorldFirst/PingPong；前提必须真实服务可开设，非只看名字。
5. **任何分支不改变翰林冻结状态**：非翰林真实合规SKU付款、妥投、到账与全成本利润通过，用户明确批准，才有资格讨论翰林合作。

## 5. 本轮完成与需要用户决定的事项

- [x] 读取GitHub/Issue24和Gmail，证实两封草稿未发送且没有官方回信
- [x] Noon与连连原邮件草稿加入阿联酋AED条件核验，并从Gmail回读确认`DRAFT`
- [x] 新增0.7%公开费率、沙特与阿联酋打款门槛差异的**条件测算**，避免假设一个订单就能拿到钱
- [ ] 用户审阅后**明确同意发送**两封草稿，才开始外部资格问询（已存Gmail；未发送）
- [ ] 收到Noon/连连对中国NGS的正式答复；再决定是否注册、什么主体、收款币种、首单市场
- [ ] 真实NGS后台商品准入、买家价格和ETA；同规格供货商正式报价；无这些证据不进货
- 当前状态：`DRAFTS_UPDATED_UNSENT__WAIT_OFFICIAL_CONTACT_AUTHORIZATION`，真实买家0、订单0、妥投0、到账0、项目新增支出0

**不要为“持续推进”重复造报告或开新的SKU评分任务；本报告的实质增量是收款币种与打款门槛影响首单验证可行性的判断。**
