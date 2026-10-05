type NodeRes={status:(code:number)=>NodeRes;setHeader:(k:string,v:string)=>void;json:(body:unknown)=>void;end:()=>void};type NodeReq={method?:string};const REPO="wpuu/ChinaGCC";const PATH="data/current.json";
export default async function handler(req:NodeReq,res:NodeRes){
 res.setHeader("Cache-Control","no-store");res.setHeader("Content-Type","application/json; charset=utf-8");
 if(req.method&&req.method!=="GET"){res.status(405).json({ok:false,error:"仅支持GET"});return;}
 if(process.env.VERCEL_ENV==="production"&&process.env.CHINAGCC_PRIVATE_DEPLOYMENT_CONFIRMED!=="true"){res.status(403).json({ok:false,error:"生产环境实时GitHub同步默认关闭。请先启用Vercel部署保护，再设置CHINAGCC_PRIVATE_DEPLOYMENT_CONFIRMED=true。"});return;}
 const token=process.env.GITHUB_TOKEN;if(!token){res.status(204).end();return;}
 try{const gh=await fetch(`https://api.github.com/repos/${REPO}/contents/${PATH}`,{headers:{Authorization:`Bearer ${token}`,Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28","User-Agent":"ChinaGCC-Dashboard"}});
 if(!gh.ok){const body=await gh.text();res.status(gh.status).json({ok:false,error:`GitHub读取失败（${gh.status}）：${body.slice(0,180)}`});return;}
 const payload=await gh.json() as {content?:string;encoding?:string;sha?:string;path?:string};if(payload.encoding!=="base64"||!payload.content){res.status(502).json({ok:false,error:"GitHub返回内容无法解码。"});return;}
 const raw=Buffer.from(payload.content.replace(/\n/g,""),"base64").toString("utf-8");let data:unknown;try{data=JSON.parse(raw);}catch{res.status(502).json({ok:false,error:`${PATH}不是合法JSON。`});return;}
 res.status(200).json({ok:true,data,lastSynced:new Date().toISOString(),sha:payload.sha,path:payload.path??PATH,repo:REPO});
 }catch(err){const msg=err instanceof Error?err.message:"未知错误";res.status(500).json({ok:false,error:`同步异常：${msg}`});}
}
