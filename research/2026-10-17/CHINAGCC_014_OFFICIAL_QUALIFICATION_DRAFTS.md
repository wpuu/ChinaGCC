# ChinaGCC-014｜真正对外验证前的最后一步：已创建Noon与连连官方咨询草稿

- **执行日期**：2026-10-17
- **执行模型**：GPT-6
- **范围**：非翰林商品跨境自营的入驻主体资格与收款规则，不扩展SKU、不新增付费线索
- **阶段判断**：`BLOCKED_PENDING_OFFICIAL_REPLY`，但目前两封邮件均**仅保存草稿、尚未发送**。
- **外部联络**：未发送、未注册Noon、未为此申请连连账户、未提交个人身份证件、未采购或产生费用。
- **敏感信息纪律**：该仓库是公开仓库。Gmail用户地址、邮件草稿标识、链接中的邮箱登录参数及身份证/银行数据不进入本仓库。

## 一、仓库最新状态与起点

2026-10-17本轮开始核对`main`最新提交`4a817bd444c91111339d93d5f230dd1ca5a1cc55`，执行板[Issue #24](https://github.com/wpuu/ChinaGCC/issues/24)仍处于`WAIT_EXTERNAL_CONFIRMATION`，没有新评论或Noon已通过的法律主体证据。`data/daily/2026-10-17.json`当时不存在，不据此假装当日已取得订单。

**保留013结论**：TradeWheel三条买家仍不能独立验真，不为联系人付费。Noon为自营首单的优先但阻塞路径；连连只是可能的付款工具，不能替Noon决定主体资格；翰林冻结。

## 二、本次补充的官方证据

### Noon本身
- 中国NGS专项说明明确`valid Chinese Commercial Registration`，没有逐字说明中华人民共和国`个体工商户`的可接受性。**不得仅因一般`Individual Seller Egypt only`就把合法登记的中国个体户自动定为不合格或已合格。**
- NGS：按USD Transfer Price，在妥投后付款；常规跨境费用由平台向买家加价，退货后另有资金风险。
- 全球销售的Invoicing Profile流程将销售起运地（Origin）关联**获批准的Legal Entity和获批准的Payment Method**。所以预先开连连收款账号不能替代Noon经营主体审核。
- 来源：
  - https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program
  - https://helpcenter.noon.partners/en/category/global-selling/how-to-setup-the-invoicing-profile-for-global-selling
  - https://helpcenter.noon.partners/en/category/onboarding-and-registration/who-can-sell-on-noon
  - https://helpcenter.noon.partners/en/category/onboarding-and-registration/documents-required-to-sell-on-noon

### 连连自己的官方帮助中心
- `Noon-沙特站(USD)`收款账户流程允许先填`暂无店铺`申请，后续补店铺信息；**受益人名称必须与Noon开店主体一致**。KYC存在个人与企业类别并不能证明Noon准许个体工商户或个人卡。
- 2026-04-29连连官方发文明确Noon USD收款服务已支持沙特/阿联酋站点。
- 不能把连连另一款`全球收单`最低1000 USD提现规则错套到Noon跨境电商平台收款产品。
- 官方：
  - https://global.lianlianpay.com/support/detail/OUeCzsOi
  - https://global.lianlianpay.com/article/MTUxNzMxLGMyOA.html
  - https://global.lianlianpay.com/support/detail/tb2mI3Wt
  - https://global.lianlianpay.com/company/contact

## 三、本轮真实执行（非报告代替外联）

已通过用户已连接的Gmail实际**创建两份可供用户审核的草稿**：

| 草稿 | 官方收件人 | 唯一目标 | 实际状态 |
|---|---|---|---|
| A：China NGS主体与USD打款门槛 | `seller@noon.com` | 中国个体工商户LE审核是否接受；连连企业/个人KYC是否符合商家主体；常规跨币种打款门槛如何对NGS美元TP适用 | `CREATED_DRAFT__UNSENT` |
| B：Noon沙特USD连连账户匹配 | `service@lianlianpay.com` | 注册主体/经营者/账户受益人一致性；无店铺预申请的费用；Noon美元平台收款最低金额、提现到中国与相关费用 | `CREATED_DRAFT__UNSENT` |

**注意**：草稿只在Gmail中，内容未发送给Noon/连连，未收到回复，不代表真实对外验证完成。草稿私人链接不写进公开仓库；用户可在本次对话中点击草稿链接查看。用户明确决定发出时再进入等待回复阶段。

## 四、后续只能由真实平台证据完成的资格闸门

`Q1` Noon China NGS是否允许以中国大陆个体工商户执照提交Legal Entity？中国个体户字号或经营者姓名、批准文件、合同签署要求如何？

`Q2` 连连专用Noon沙特USD账户应以哪种KYC与收款人名称匹配？Noon是否确认符合其不接受普通个人银行账户的通用规则？

`Q3` 对中国NGS的USD转移价，平台何时结算、是否执行1000 SAR/AED跨币种最低打款门槛；连连对应平台款的提现起点/手续费/贸易材料要求是什么？

`Q4` 获得Q1—Q3后，再讨论目标非翰林SKU沙特准入、真实买家最终价和时效、同BOM供货/深圳逐单物流费。任何一项未确认都**不注册执照、不进货、不投广告**。

`GO`：得到可核验的官方/登录后书面账号答案、合法主体、收款规则及经济性证据；再考虑一个SKU最小试单。

`STOP`：明确不支持个体户且有限公司固定成本不可接受，或需高库存/昂贵认证/无法核算利润；继续保留研究包不投入。

## 五、停止循环规则

本轮至此**公共资料可解决的核心问题已查完**；任何第015轮若仍无用户发送草稿、官方回复或真实Noon主体审核进展，就只回报`BLOCKED_WAIT_OFFICIAL_PROOF`，不要继续产生同类SKU评分/重复政策报告/所谓真实订单进展。可在其它授权项目上继续开展独立工作，但不能假称ChinaGCC已前进到售卖。

**截至归档：** 草稿2，发信0，实际账号审核0，报价0，订单0，到账0，支出0，翰林联络0（FROZEN）。
