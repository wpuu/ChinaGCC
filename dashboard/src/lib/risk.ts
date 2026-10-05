import type { Risk, Sku } from "../types";
export function riskValue(risk: Risk): number { return (Number(risk.probability)||0)*(Number(risk.impact)||0); }
export function riskLevel(value:number):"low"|"mid"|"high"|"severe"{if(value>=16)return"severe";if(value>=11)return"high";if(value>=6)return"mid";return"low";}
export function riskLevelLabel(value:number):string{const lv=riskLevel(value);if(lv==="severe")return"严重";if(lv==="high")return"高";if(lv==="mid")return"中";return"低";}
export function getTopRisks(sku:Sku,n=5):Risk[]{return [...(sku.risks??[])].sort((a,b)=>riskValue(b)-riskValue(a)).slice(0,n);}
export function getHardStops(sku:Sku):Risk[]{return(sku.risks??[]).filter((r)=>r.isHardStop);}
export function isSevereRiskResolved(risk:Risk):boolean{return riskValue(risk)<16||(risk.canMitigate==="yes"&&risk.mitigationVerified===true&&typeof risk.residualRisk==="number"&&risk.residualRisk<16);}
export function getSevereOpenRisks(sku:Sku):Risk[]{return(sku.risks??[]).filter((r)=>riskValue(r)>=16&&!isSevereRiskResolved(r));}
