import type { ChinaGCCData } from "../types";
import { isChinaGCCData, normalizeData } from "./dataSource";
export interface GithubSnapshotResponse { ok:boolean; reason?:string; data?:ChinaGCCData; lastSynced?:string; sha?:string; path?:string; }
export async function fetchGithubSnapshot():Promise<GithubSnapshotResponse>{
  if (typeof window !== "undefined" && window.location.hostname.endsWith(".github.io")) {
    return { ok:false, reason:"GitHub Pages测试模式：使用仓库默认快照，不调用实时同步接口。" };
  }
  try{
    const res=await fetch("/api/github-snapshot",{method:"GET",cache:"no-store",headers:{Accept:"application/json"}});
    if(res.status===204)return{ok:false,reason:"未配置GitHub同步，已跳过远程读取。"};
    if(!res.ok){let reason=`GitHub同步失败（HTTP ${res.status}）`;try{const body=await res.json() as {error?:string};if(body.error)reason=body.error;}catch{}return{ok:false,reason};}
    const body=await res.json() as {data?:unknown;lastSynced?:string;sha?:string;path?:string};
    if(!body.data||!isChinaGCCData(body.data))return{ok:false,reason:"GitHub返回数据格式无效。"};
    return{ok:true,data:normalizeData(body.data),lastSynced:body.lastSynced??new Date().toISOString(),sha:body.sha,path:body.path};
  }catch{return{ok:false,reason:"无法连接同步接口，已使用本地数据。"};}
}
