# ChinaGCC｜2026-11-05 原Noon账户跨境资格提示口径纠偏（C07，只读）

**核验日期：2026-11-05（北京时间）**  
**主仓库**：wpuu/ChinaGCC；本项接续提交`528ecf3fc754c194822ab38f53dd7ddda17fcf04`。  
**本轮只读权限**：不注册新主体、不建店、不提交营业执照或证件、不修改Seller Lab、不发邮件/客服工单、不签约、不建SKU/库存、不采购不付款不投广告。  
**新增价值**：将历史截图**所在的通用cross-border programs页面**与**独立中国NGS专项准入规则**剥离，避免把某个通用项目列表的“not qualify”当成“中国NGS专项明确被拒”。

## 1. 原始账号证据究竟说了什么（旧一手回执）

- [Work049实际页面记录](../2026-10-31/CHINAGCC_049_UAE_STORE_CREATION_AND_NONPUBLIC_PRODUCT_FORM_TEST.md)，2026-11-01 10:39:58.634（北京）实际访问地址是 `https://xborder.noon.partners/en-ae/programs`。
- 页面原文为：`Programs are coming soon!` / `Your store doesn’t qualify for any cross-border programs at the moment.`
- **该页面记录没有显示`noon Global Shipping (NGS)`专项名称、项目资格审核号、拒绝原因、与China LE的明确因果映射**；因此最多可忠实判定“2026-11-01该账号所见通用跨境Programs列表无合格项目”。这个观察不能单独证明中国NGS专项账户被明确拒绝，也不能证明它已经开通。
- 同批独立证据：UAE店`GCC Picks`已创建；`Submit your legal entity`为`Required`、未提交/未批准；KSA店未核；没有首笔交易/回款（[055报告](../2026-11-01/CHINAGCC_055_WORK049_STORE_ACCEPTANCE_AND_HONGLIANG_1688_RIGHTS_GATE.md)）。
- 当前会话只读Browser连接实际失败：`Browser access requires the originating browser context`。故本轮**没有实时Seller Lab截图或账号配置的更新观察**。

## 2. 官方书面来源的新交叉验证（公开规则，不是账号资格批准）

1. [noon通用Global Selling Overview](https://supportagent.noon.partners/portal/en/kb/articles/global-selling)公开列出`UAE→KSA`、`UAE→Bahrain/Qatar/Oman/Kuwait`、`India→UAE/KSA`等路线；该**概览页面**没有列出中国NGS。**“没列出”不等于“中国NGS不开放”，更不能断言`/xborder/programs`必然不含NGS**。
2. [独立的noon中国NGS专项指南](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)明确：注册于中国并持有效`Chinese Commercial Registration`的卖家可申请中国NGS；该专项要求真实China LE（含注册信息/授权签字/T&C及批准）、各国店、仓库、产品QC、USD Transfer Price和Invoicing Profile。新中国卖家正式Live前需有效付款方式。**这是条件性政策，不是GCC Picks账号已满足条件的通知**。
3. [通用Why Am I ineligible](https://supportagent.noon.partners/portal/en/kb/articles/why-am-i-ineligible-to-sell-on-noon)讨论CR经营范围或跨境卖家VAT问题；该文并未明确针对中国NGS的上述通用`/xborder/programs`提示。它关于目的国VAT的普遍表述不能推翻中国NGS专项的`Non VAT Registered`路径。**不得据此指认本账号因缺VAT或经营范围而未获资格**。
4. [Noon官方Payout和Origin说明](https://helpcenter.noon.partners/en/category/onboarding-and-registration/how-to-add-the-bank-details-in-the-legal-entity)及[Invoicing Profile](https://helpcenter.noon.partners/en/category/global-selling/how-to-setup-the-invoicing-profile-for-global-selling)：批准收款工具、Origin映射、LE批准及合同条款是独立的配置与法律审批。**不能从无资格列表反推出这些字段的具体状态**。

**本轮专项书面答复搜查结论**：没有检索到针对`GCC Picks`、中国大陆个体工商户法律类别、特定Not Eligible原因的Noon第一方书面YES/NO或账户回复；通用资料无法替代账户专属依据。未发现必须推翻既有HOLD决定的新准入批准事实。

## 3. 建议采用的状态标签（保留历史原文）

| 对象 | 不越界的状态 |
|---|---|
| `xborder.noon.partners/en-ae/programs` 2026-11-01 | `GENERIC_CROSSBORDER_PROGRAM_LIST_NOT_ELIGIBLE`（历史所见） |
| `noon Global Shipping (China NGS)`真实专项资格/拒绝原因 | `NGS_SPECIFIC_STATUS_UNVERIFIED` / `REASON_UNKNOWN` |
| UAE GCC Picks | `CREATED_VERIFIED_HISTORICAL` |
| China LE | `REQUIRED_NOT_SUBMITTED_NOT_APPROVED` |
| KSA Store | `NOT_VERIFIED` |
| Payout Approved / Selling Origin mapping / Invoicing Profile | `UNKNOWN` |
| 真实销售准备度 | `NO_GO`：0订单/0到账，China LE未获批准及其他配置未验收 |

**重要**：不把历史`NGS Not Eligible`称作完全错误——只能说原始页面未证明该**具体专项**被拒。此纠偏不是“已获准参与NGS”的积极证据。仓库既有`data/current.json`及历史日期快照保留，供后续按原始截图逐项审计，不静默重写旧证据。

## 4. 下一次有效的只读取证动作

1. **只能在原有已授权且能读到真实登录状态的Work/Noon Seller Lab浏览器上下文**继续，不新建账号、不提取Cookie、不绕过来源授权。
2. 读取UAE/KSA My Stores、`Store Management → Legal & Payments` 中LE真实状态与对应Origin、`Payout Methods → Receiving Payments` 中Approved和Origin分配、`Invoicing Profile`已有列表/状态；仅观察，不点击Submit/Save/Send Agreement/Sign/Bind。
3. 在跨境页面保留页面URL、标题、是否出现中国NGS项目名、资格细节或拒件原文，并将这类**generic xborder list**与**专项NGS**分别记录；若只有通用空态则维持UNKNOWN，不继续空转。
4. 不公开账号ID、银行资料、代表人证件、cookie或截图中可识别字段。若环境不支持真实账号读取，则仅记录实际错误并停止；**没有新证据不再提交同义报告**。

**最终业务决策**：`NOON_NGS_HOLD / CONDITIONAL_RESTART`；本轮非账户级验收、未取得真实官方准入批复，没有SKU订单/支付/利润进展。模型偏好GPT-6 Extra High；会话内未确认实际thinking effort，不声称已切换。
