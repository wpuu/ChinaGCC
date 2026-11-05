# ChinaGCC｜2026-11-05 C07：NGS与UAE→KSA两种Global规则隔离、胶贴甲BOM反证、退货会计口径

- **核查日期**：2026-11-05，20时段（Asia/Shanghai）。审计ID：`2026-11-05/C07-NGS-PROGRAM-SCOPE-KHAJUL-GLUE-STICK-TP-RETURN-SPLIT`。
- **模型偏好**：GPT-6 Extra High；运行环境无法核实或强制实际思考等级。
- **证据级别**：A（Noon第一方政策正文）；B（Noon平台具体商品正文/评论数量，非独立实付）；C（旧商品页索引）；U（未取得账号级或实付材料）。
- **合规边界**：仅研究、只读；没有提交主体/证件、签约、上架、采购、广告或外联。不准未经授权的IP或仿品。

## 1. 严格序列：人群→发现→成交→触发→产品族→SKU→供应链→经济风险

1. **人群**：Saudi女性18–45、UAE女性18–39；female Gen Z/学生优先，年轻家庭次级，50+ WATCH；未发现可以细化年龄段的新付款证明。
2. **发现渠道**：Saudi Snapchat、TikTok、Instagram；UAE TikTok、Instagram、Snapchat；广告触达数据不能用来冒充交易。
3. **现实成交**：中国主体Noon NGS为第一验证渠道，Amazon UAE/Saudi第二。现有GCC Picks UAE店的2026-11-01旧验收≠NGS合格。本时段尝试已连接的Browser只读列Tab失败，原始错误：`UNKNOWN: Error code: UNKNOWN; Error: RuntimeException: Browser access requires the originating browser context. Open ChatGPT in the browser with the connected extension and try again.` 因此不能声称已重读Seller Lab。
4. **购买触发**：胶贴甲的婚礼/通勤便利、化妆包旅行分装、抓夹发型演示、无IP原创挂件送礼；目前没有触发→Noon结账的归因证据。
5. **产品族**：24片纯胶贴穿戴甲、4件化妆包、8件发饰、无IP串珠挂件；受权原创盲盒/IP仅WATCH。
6. **SKU**：见下一节的`KHAJUL Z7F9A078917D1591DA616Z`反证；同BOM准入标准不能只看标题。
7. **供应链**：新增独立实付/RFQ/采购补货均为0，不触发新增中国供应商深查（已有研究历史不删除）。
8. **经济风险**：主NGS首售是TP固定回款模型；可售退货当地FBN再售是另一费率模型，不能混算。

## 2. C07重要新发现：标题说“胶贴”，具体配件却出现胶棒

Noon Saudi商品 **KHAJUL 24 Pieces Natural Look Press-On Nails with Fibrous Adhesive Stickers and Nail File**，商品ID `Z7F9A078917D1591DA616Z`；抓取快照约6天前（并非本日实时订单），显示**SAR18.90、4.4分、236条评价、Selling out fast**。但详情文本同时明确列出：

- 24片假甲、24片胶贴、小锉刀、酒精棉片；
- **另有“one small glue stick”**，且表述“stick them with jelly glue or glue”。

**严格判定：** 该SKU可作为“有24片及胶贴”的强商品文本样本，但配件存在另附胶棒/胶的证据，未证明“完全不含液体胶”；因此 **NOT_EXACT_BOM_VERIFIED**，不得标记为`adhesive-tab-only`；胶棒固/液形态未知，不能反向断言一定是液体胶。Selling out fast也不能当日实付交易记录。商品页：https://supermall.noon.com/saudi-en/24-pieces-natural-look-press-on-nails-with-fibrous-adhesive-stickers-and-nail-file-fake-nails/Z7F9A078917D1591DA616Z/p/。网页正文二次打开时超时，保留首次搜索抓取的明文并降低证据等级；没有假装独立订单校验。

这一案例构成“标题/关键词不等于完整BOM”的直接实证，回写到穿戴甲风险字段；下一次应优先核对**盒装配件清单/图片及实际QC**而不是仅查标题。

## 3. 两种“Global”计划不可混用

**中国Noon Global Shipping（NGS）** 的官方专项：有效中国Commercial Registration；当地不必单独开UAE/KSA贸易牌照或目的国VAT；中国本地仓仅用于库存数量管理，实际订单送深圳集货仓；每件设置USD Transfer Price，Noon自主计算买家端markup，负责跨境与税费；**首售妥投TP据官网条款不再扣平台其他费用**，但收款服务商汇兑/后续退货损失尚未核实。官方没有承诺中国主体Legal Entity完整审批或上线天数。来源：https://supportagent.noon.partners/portal/en/kb/articles/noon-global-shipping-program。

另一份官网 **“UAE to KSA: Onboarding Guide for noon Sellers”** 面向已有活跃**UAE本地主体**向沙特扩展的Global Selling：要求UAE VAT、有合格UAE仓/本地库存、签字人；部分流程写“allow up to 24 hours”。这些**不能套到中国NGS路径**。该文件给出的AED基础销售价格→SAR含VAT计算式也**不是**中国NGS的USD TP markup公式。来源：https://supportagent.noon.partners/portal/en/kb/articles/uae-to-ksa-onboarding-guide-for-noon-sellers。

**防止误判**：以后碰到“Not Eligible”必须先记录页面标题/计划名/URL及账号路径，区分China NGS与AE→SA Global Selling；未实际读取账号就仍是`UNKNOWN`，不武断认定是UAE VAT缺失。

## 4. NGS售后：首售TP与退货FBN收费要分账

- 官方NGS首售妥投支付预设TP，称不从该TP扣其他费用；这不证明退货后不会冲回或收款PSP换汇无费。
- 客退**可售**转UAE/KSA当地FBN，再售受当地FBN费率/出库费用影响，官方仅最多60日存储费豁免；默认再次售价目标接近原TP不是已实现净收入。
- 客退**不可售**无残值回款；公开专项称免移除/销毁费用；原TP是否冲回、RTV具体成本仍U。
- 官网通用Seller Protection针对Generic的grading payout显示NG=0%；但中国NGS专项与索赔申诉适用范围未明确，压力情景默认赔偿0，不宣称全部损坏必为0赔。来源：https://supportagent.noon.partners/portal/en/kb/articles/noon-global-shipping-program、https://supportagent.noon.partners/portal/en/kb/articles/returns-and-seller-protection-policy。

**口径检查**：绝不能把当地FBN佣金直接从未退货的第一笔NGS TP中再扣一次；同样不能因为“TP首售无额外扣费”就把退货FBN再售当作免费。

## 5. 四SKU测试TP与单位成本红线（情景，非实报价）

假设订单10%最终不形成可保留TP收入，目标15%贡献利润，卖家平均全成本上限=`0.9 × 0.85 × TP=0.765TP`。未知损失全部必须从成本红线里覆盖，若不足则NO-GO。

| SKU | 历史Opportunity / Confidence / Completeness | 假设TP(USD) | 0.765TP成本上限(USD) | 真正准入 |
|---|---:|---:|---:|---|
| 四件套化妆包 | 78/90/73 | 4.5/5.5/6.5 | 3.4425/4.2075/4.9725 | 须同BOM新交易+真实毛重+深圳交仓费 |
| 八件发饰 | 70/92/78 | 2.4/2.9/3.4 | 1.836/2.2185/2.601 | 须8件同BOM实付/采购及类目 |
| 24片仅胶贴穿戴甲 | 67/92/80 | 1.5/1.9/2.3 | 1.1475/1.4535/1.7595 | KHAJUL配件不符待验，禁止当已验证无液体胶 |
| 无IP原创串珠挂件 | 68/84/76 | 1.7/2.2/2.7 | 1.3005/1.683/2.0655 | 须同BOM采购证据/原创权利清晰 |

**100件最坏亏损仍UNKNOWN/null**：缺同BOM成本、按最终包装核算的国内交仓费、实际退货/TP冲回、当地FBN净回款、残值、锁定SKU合规结论。最坏情景不能靠假设10%损失替代：`100 × (采购+包装+中国交仓) + 额外无法回收的固定支出 + 实际售后损失 - 已证实可回款与残值`。不得将历史预算当认证最大亏损。

## 6. V2、硬性闸门与后续施工

- **Issue #12 V2**：历史分数暂保留，原因是新证据属于BOM反证与政策模型纠偏而非新的同BOM独立付款或真实成本；不臆测改变41子项。四SKU已有13项画像字段、原优点和Top5风险保留，甲片新增“胶棒配件反证”风险事实。
- **需求信号**：新独立实付0；新同BOM RFQ0；新同BOM补货0；新增中国供应商深查0；中国IP→GCC同系列两地首笔实付日期配对0，趋势落后天数UNKNOWN。
- **IP**：仅自己原创或书面授权；无授权Hard Stop。儿童玩具、彩虹色/宗教节庆图案及商品禁限售按具体图案与Noon实际QC核验。
- **Channel Access Gate**：Noon **NO-GO（1/12历史证据）**；Amazon **NO-GO（0/15）**。China LE仍未证实批准、NGS Not Eligible原因U、Payout Approved / Selling Origin / Invoice Profile未核验。
- **下一步**：拿到原已授权浏览器会话后只读采集**计划名称+Not Eligible全文+LE+Payout/Origin+Invoice**（不提交）；继续追踪真正在售的无液体胶甲片完整BOM和同BOM实付；无需求闸门则不扩大供应链。不得创建新计划、重复空查询或把页面无法打开说成实审通过。
