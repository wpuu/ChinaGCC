# ChinaGCC｜2026-11-05 China NGS 主体／天津地址／银行KYC／万里汇回款限定只读复核

**核验日期：2026-11-05（北京时间）**  
**任务范围**：接续GCC Picks已创建、China LE未提交及NGS Not Eligible原因不明的现有证据；只读核验中国营业登记要求、天津真实注册地址规则、银行开户尽调与WorldFirst-Noon回款链，不注册/联系服务商/付款/修改Noon/提交证件。无卖家后台实时会话不声称账号验收。  
**本轮新增**：官方万里汇2026-10-10 Noon绑定指南；人民银行集中登记地址开户负面清单与银行真实性审查的双向纠偏。无新增商品销售证据。

## 0. 核验基线与账号实证边界

- 仓库既有 2026-11-01 Work049/055：UAE Store `GCC Picks`已创建；Setup Guide 的 `Submit your legal entity` 为 `Required`；提交/批准均未证实。
- 历史 China NGS 页面：`Your store doesn’t qualify for any cross-border programs at the moment`。**没有展示具体拒绝原因**；不得擅自解释为主体类型、LE未提交、地域、材料或账户异常中某一项。
- Payout Approved / Selling Origin mapping / Invoicing Profile：**UNKNOWN**；KSA Store：**NOT_VERIFIED**。截止既有2026-11-05日报，Noon readiness `1/12`，Channel Access Gate `NO_GO`，真实自营订单/平台到账 `0`。
- 本轮连接浏览器只读尝试失败，原文核心：`Browser access requires the originating browser context`，因而**本轮未实时读取Seller Lab**，不得把规则查验包装为账号验收。
- Gmail只读查询（`noon`，2026-10-25以后）发现 2026-11-02 主题 `Create your Legal Entity`，摘要称 `GCC Picks is created — add your legal details next`；2026-11-03还有卖家退货新页介绍。此类通知仅佐证创建和后续待办，不是 LE/NGS/Payout 的已批凭证。这里不公开邮箱、手机号、组织ID或证件数据。
- 基线：`research/2026-11-01/CHINAGCC_055_WORK049_STORE_ACCEPTANCE_AND_HONGLIANG_1688_RIGHTS_GATE.md`、`ops/CHINAGCC_056_CHINA_NGS_LE_REVIEW_PREFLIGHT_AND_STOP_GATES.md`及`data/daily/2026-11-05.json`。

## 1. Noon官方准入与回款链（A级：第一方公开政策）

1. [Noon China NGS官方指南](https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program)：要求卖家在中国注册且持有效 `Chinese Commercial Registration`；无需预先开UAE/KSA本地企业和目的国VAT，但不能推断中国所有主体类型都自动接受。特别是**中国个体工商户/个人独资/一人有限公司逐类型是否获本账户审核接受，仍UNKNOWN**。
2. NGS Legal Entity：营业登记真实名称、号码、地址、日期、文件及授权签署/T&C、目标国家 `Non VAT Registered` 等；LE记录建立不等于提交审核成功，`Skip for now` 不等于批准。
3. NGS卖家设置USD `Transfer Price`，Noon承担深圳集货以后国际物流等，并按妥投和普通Payment Processing Policy执行结算；客户最终价格Noon内部加价未知。实际退货冲回、NGS USD账户支付阈值等仍未知，不能承诺固定到账天数或无售后调整。
4. [Noon Payout官方规则](https://helpcenter.noon.partners/en/category/onboarding-and-registration/how-to-add-the-bank-details-in-the-legal-entity)明确：LE下各`Selling Origin`须有已批准且已分配的收款方式。**只获批Payout未映射Origin仍无法转账，销售收入会累计。** 支持Bank Account、Payoneer、LianLian、WorldFirst、PingPong。
5. 同一Seller Lab账号必须实证核对：`LE status → Payout status → Receiving Payments/Origin assigned → Invoicing Profile → NGS reason`；不能将本节公开规则当作已核验账号状态。

## 2. 天津注册地址（A级：现行官方行政规范）

来源：[《天津市经营主体住所（经营场所）登记管理办法》，津政办规〔2025〕9号](https://www.tj.gov.cn/zwgk/szfwj/tjsrmzfbgt/202507/t20250722_7096106.html)。2025-07-20施行，有效期5年，现行页面标为有效。

- 第5—7条：住所必须真实、合法、有效；需申报承诺，市场监管可查验。地址无法共享查验、同地址已登记20户以上等可要求补件；虚假地址可不予登记。
- 第11条：符合条件的托管住所可登记，须标注`（托管）`，有管理机制和核验义务。
- 第12条：经有权部门规范公示的创业园等集群地址可使用，须真实建立托管关系，营业执照标注`（集群登记）`，管理单位负责文书签收及配合监管。
- **结论**：不能把“所有集群地址”一概判为违法或不可用；也不能把“登记机关允许”当作Noon、银行或WorldFirst已认同该具体地址。实际地址/权属/管理与收文能力未取得可公开核验证据，保留UNKNOWN。

## 3. 银行开户KYC（A级：央行规范＋银行条款）

- [央行《小微企业银行账户开立服务规范负面清单指引》](https://jrj.beijing.gov.cn/2024zcwj/gjzcfg2024/202409/t20240904_3789501.html)：不得**仅以**注册地址为集中登记地、办公场所简单、无门牌、尚未实际经营等理由拒绝小微企业开立账户。该指引不等于免除身份识别和风险审查。
- [工行《单位银行结算账户管理业务条款》](https://media.icbc.com.cn/agreement/1194490803813355520.html)：客户须提供真实合法有效材料、配合尽调；核实注册地址不存在或虚构经营场所将拒开；银行可按异常风险加强核实。
- **修正此前过强说法**：集群/托管地址不是当然银行开户失败。正确区分：`合法登记`、`风险导向KYC`、`独立支付平台与Noon认可` 三道不同审核。不能给出无具体分行/主体/地址的“必过/必拒”判断。

## 4. WorldFirst（万里汇）Noon路径（A级：支付机构与Noon第一方）

- [万里汇《noon收款账户绑定指南》](https://www.worldfirst.com.cn/content/articles/b2c_portal/7zfxo13a)，页面标注2026-10-10：
  1. 万里汇`店铺管理 → 新增店铺收款账户`，选Noon平台，选币种、填写店铺与持有人资料后申请；
  2. Noon后台添加WorldFirst Payout Method；USD币种按指南选择Account Number并提交Noon审核；
  3. 审核通过后在Noon `Store Management → Legal & Payments` 把已批准方法关联对应站点，**不同站点单独绑定**；
  4. 如果未来从其他方式切换，指南提示可能需要停用旧方式，**本轮绝不执行停用或切换**。
- [WorldFirst个人与企业账号区别](https://www.worldfirst.com.cn/content/articles/registration-guide/personal-and-enterprise)：两者不可原地互转；个人账号存在不表示Noon China NGS接受个人主体或可以绑定到企业Legal Entity。
- [WorldFirst 2026企业实名认证要求](https://www.worldfirst.com.cn/content/articles/b2c_portal/cn_auth)：中国内地企业账号要求营业执照、法人身份、股东信息等。**具体Noon收款支持的法律主体类别、个体户能否开对应万里汇店铺账户、收付币种与限额、手续费、资金退回和实际提现时效，本轮未获账号级结果，均UNKNOWN。**
- 结论：`WorldFirst官方支持Noon路径`为VERIFIED_POLICY；`GCC Picks WorldFirst account created/approved/origin mapped`仍UNVERIFIED。切勿现在以个人账号代替实际企业主体预注册。

## 5. 剩余闸门与下一轮验收标准

| 闸门 | 2026-11-05状态 | 可将U变成通过的唯一证据 |
|---|---|---|
| 中国主体类型对Noon China NGS认可 | UNKNOWN | 中国NGS专项针对具体主体类型的官方明确回复/真实审批准入（目前不外联、不提交） |
| 拟用现有登记信息（名称、营业范围、有效期、实益所有人、授权签字人） | UNKNOWN | 真实登记证明及合法授权，当前不上传/公开敏感材料 |
| 地址可合法登记 | 规则已确认，具体地址UNKNOWN | 对应地址产权/使用权与托管/集群管理的真实合法文件 |
| 银行开立或WorldFirst完成KYC | 未测试 | 真实主体、按其合法步骤经机构独立审核；今日仅官方规则 |
| UAE GCC Picks Store | 历史已验收 | 2026-11-01 Work049/055记录，不重复注册 |
| Noon China LE | REQUIRED/NOT_SUBMITTED | 真实提交与获批；当前禁止提交 |
| NGS Not Eligible具体原因 | UNKNOWN | 经授权Seller Lab准确可读的账户专属状态/原因 |
| Payout Approved＋Selling Origin映射 | UNKNOWN | Seller Lab支付页逐项获批和Origin绑定状态 |
| Invoicing Profile | UNKNOWN | 实际只读已验证配置 |
| NGS交易与利润 | 0 | 依法经批准的真实下单、妥投、支付与全成本对账（未授权时不得执行） |

**决策**：`NOON_NGS_HOLD / CONDITIONAL_RESTART`。禁止新办主体、实际地址托管签约、银行/WF注册、账号修改、上传营业执照、签条款、采购、上架或投广告。无账号可访问时停止重复“NGS Not Eligible”空页面循环；更进一步政策堆积不能代替准入和收款实证。

**本轮审计性质**：公开官方规则新核验＋GitHub/邮件历史状态只读复核；不是营业执照、银行账户、支付机构或Noon账号批准，也未取得供应商同BOM报价/买方真实订单。
