# ChinaGCC-013｜三条海湾采购线索独立降级 + 连连Noon沙特USD收款路径核实

**核验日期：2026-10-17（北京时间）**  
**执行：GPT-6；公开资料交叉核查、GitHub研究与任务板维护**  
**项目限制：翰林全部商品继续冻结；无对外邮件、私信、采购、注册、店铺、账号密码、资金与真实销售动作。**  
**结论：B2B三条旧TradeWheel询价全部退出首单执行池；Noon NGS继续仅保留一个“官方资格和收款主体匹配”待验证任务，不把研究误称为销售成果。**

## 1. 仓库核查和真正新增

开始已回读`main`最新`b65c7e66e7be3d608571f51bb0f910d68ac05cf1`、README与Issue #24；`data/daily/2026-10-17.json`尚不存在；2026-10-16日报未有实际成交证据。避免与011/012重复选品。

本轮新增两项**证据层面的进展**：
1. 三个先前列出的“潜在GCC真实买方”页面实际展示相同`82% High-Quality RFQ`及`88/100 Trust Score`；公开页面均隐藏公司名/联系方式，没有独立交易或采购权限证据。这些数字很可能是平台模板或非可公开审计的算法结果，不能当作第三方真实性背书。这一点**不能单独证明RFQ虚假**，但买家可联系性在公开只读阶段为零，付费后也无法保证有效。
2. 中国持牌收款机构连连支付自己的帮助中心专门说明`Noon-沙特站(USD)`账号可通过`Noon & KUL`申请，且**无Noon店铺可先选择“暂无店铺”申请收款账户**，后补店铺，准备银行证明。但连连实名认证支持“个人/企业”两种，**绝不代表Noon China NGS的中国个体工商户审核必然允许**；连连页明确受益人名称需要与Noon开店合法主体**完全一致**。

## 2. B2B三条线索最终可操作性判断（不购买会员）

| RFQ | 页面 | 公开原文信息 | 独立核实缺口 | 执行决定 |
|---|---|---|---|---|
| Qatar #1006037（2026-08-26） | https://www.tradewheel.com/buyers/buying-cosmetics-bags-quantity-500-units/1006037/ | `I need 500 units`，无详细商品参数，数量顶端字段显示`-` | 公司名、邮箱电话均要求注册查看、没有期限或正式PO、不能验证买方权限 | **C级历史线索；退出当前执行池** |
| UAE #983187（2026-06-04） | https://www.tradewheel.com/buyers/want-rushed-on-suitcase-nylon-luggage-travel-packing/983187/ | 询问100/300/500件报价、包装、贴牌、FNSKU、样品运迪拜；比另两条详细 | 公司名及店铺不公开，无法独立确认Amazon运营主体、目前仍采购；搜索到同名/近名职业资料并不建立为同一采购人或买方经营事实 | **C级历史需求样本；退出当前执行池** |
| UAE #962235（2026-05-07） | https://www.tradewheel.com/buyers/searching-for-cosmetics-bags/962235/ | `I need 100 units`，无规格与交期 | 公司名、采购权限、当前在采及可联系性均未知 | **C级历史线索；退出当前执行池** |

三条的页面均有自报`Email Verified`、`82%`、`88/100`、`Company Name Register To Contact`、`Contact Number Register To Contact`。这只表示平台页面显示了这些标志，不代表我们独立审核了真实性。
TradeWheel公开会员费与论坛评价此前已审（见012）；**当前不付费、不写供应商报价、不试图绕过其联系方式限制。**
不能以这个取样结果声称GCC没有B2B需求；只能说**这三条无法低成本确认有真实买方和采购意愿，不值得继续投入**。未来只有公开可独立核验经营实体且具备最新采购期限的线索才有机会进入首单池。

## 3. 官方Noon与连连收款新交叉核查

### 3.1 Noon China NGS专用合同与新店审核

Noon官方中国NGS指南：
https://helpcenter.noon.partners/en/category/global-selling/noon-global-shipping-program

- 中国商家须`valid Chinese Commercial Registration`；是否包括“中国大陆个体工商户”没有找到书面明确批准。
- 创建组织账号需邮箱/手机OTP；但正式店铺的Legal Entity要求中国企业登记信息、业务活动等，审核通过才可认为有经营资格。一个SKU可以上架申请QC。
- USD Transfer Price妥投后按该额结算；中国进货与送深圳等由自己承担；退货另有资金风险。
- 国际收款方式明确包括Bank Account、Payoneer、LianLian、WorldFirst、PingPong；新中国商家开卖前须有有效收款方式。
- 卖家通用FAQ特别写`Personal bank details will not be accepted`（一般规定），这**不能跳过中国NGS对个体工商户/支付服务商的特定审核问答**。
  https://help.noon.com/portal/en/kb/articles/seller-onboarding-faq
- Noon公开可以不用卖家账号、直接发咨询邮件至`seller@noon.com`（官方指南页底部）。

### 3.2 连连Noon沙特USD支付的实际步骤

**一手服务商文档（非第三方培训）**：
https://global.lianlianpay.com/support/detail/OUeCzsOi

1. 完成连连实名认证（可选个人或企业的实名身份类别；**注意没有等同Noon卖家身份资格**）。
2. 申请收款账户，平台选`Noon & KUL`、站点`Noon-沙特站(USD)`；**无店铺也可选“暂无店铺”先申请，店铺必须后补完善绑定**。
3. 受益人/持有人名称填**与Noon开店主体一致**的实名名称；以连连账户详情实际银行所在地、银行名、账号、SWIFT填Noon。
4. 连连可提供银行证明（Letter of Authorization），再在Noon提交付款方式审核并**绑定至Legal & Payment的实际Store**，才会打入连连。
5. 连连能查看可提现余额及贸易材料要求，但没有实际China NGS账单就**不能宣称已可入账或提款**。

连连另有“B2C出口跨境电商提现规则”说明中国大陆个人KYC可以提到本人大陆人民币银行账户；这属于**支付服务商端**规则，不是Noon对`个人收款账户`的批准：
https://global.lianlianpay.com/support/detail/4XOVCNWf

**注意不能跨产品线混淆**：连连“全球收单（Global Acquiring）”公开的起提最低1000美元属于另一支付产品；不能无证据套用到`Noon平台跨境电商收款`。请避免后续模型混算。
相关页面：https://global.lianlianpay.com/support/detail/tb2mI3Wt

### 3.3 当前真正的三项未确认

- **P0-NGS-ENTITY**：中国个体工商户是否满足Noon China NGS商家Legal Entity？如可以，执照经营者/店铺开户名称应该如何填写？
- **P0-PAYOUT-MATCH**：个体户经营者、连连实名认证个人/企业类型、银行证明与Noon店铺主体一致性的准确执行方案；是否必须对公或认可经营者名义账号？
- **P0-NGS-MINIMUM**：Noon常规支付政策跨币种`1000 SAR/AED`起付门槛是否适用于中国NGS的沙特站USD Transfer Price与连连收款账户？连连后续提现起点与费用另问连连平台。

**其他独立P0**：化妆旅行包的KSA商品合规、真正可比的四件套供货价/毛重、NGS买家最终价/ETA仍待真实账号和官方文件。任何一个无法解决，不采购、不开发工具、不投广告。

## 4. 只需要问一次的问题，材料已准备（未发送）

**Noon → seller@noon.com（重点只问法律主体+付款匹配）**

Subject: China NGS: Mainland individual business eligibility and LianLian USD payout

Hello noon Seller Support,

I am evaluating the China-origin noon Global Shipping (NGS) program for a small non-cosmetic travel pouch product sold to Saudi Arabia. I have not yet registered a business or a noon store.

1. Can a PRC Individual Industrial and Commercial Household (个体工商户) with a valid Mainland China business license be approved as a Legal Entity for **China NGS**? If yes, which legal name and supporting documents are accepted?
2. For this China NGS entity, can the approved payout method be a LianLian `Noon-Saudi Arabia (USD)` receiving account opened under the registered business operator's personal KYC, or must the receiving account be enterprise KYC/business-named? The public general FAQ says personal bank details are not accepted, while LianLian offers both KYC types. Please advise the valid matching rule.
3. Does the general overseas-currency payment threshold of 1,000 SAR apply to a China NGS seller receiving USD via LianLian, and how is the threshold calculated?

Please share an official rule or the appropriate China NGS onboarding support contact before I incur company registration fees or buy inventory.

Regards,
[Name]

**连连客服**：官网`service@lianlianpay.com`及400-091-0999，只能让其解释在各类中国主体下可以开设的Noon专用收款产品和提款要求；不能替Noon承诺中国NGS商家能通过审核。

**发送状态：没有发送任何官方问询或买家私信。** 当前仓库约束`NO_EXTERNAL_OUTREACH`仍生效；用户下一次明确发出指令才可以外联。

## 5. Owner决策及不会被重做的内容

- **Noon NGS当前唯一值得解锁的真实阻塞**：商家法律主体资格及连连收款主体一致性；拿到书面答案前不用做第14轮同类商品研究。
- B2B三条TradeWheel旧RFQ不能被列为执行任务/“商机”；留历史需求事实，联系人未独立核实，一律暂停。
- 不把Noon Affiliate佣金当自营SKU；不启用翰林。
- 如下一轮仍无Noon审核/回复，Owner报告必须写`WAIT_EXTERNAL_CONFIRMATION`，不能以“再找3个SKU”充当新成果。
- 完成状态严格区分：**研究/决策更新=YES；注册审核/账户绑定/收款/订单=NO**。
