import 'server-only';
import type {AuthTopologyConfig} from '../auth/core.ts';
import {adminClient,AdminAccessFailure} from './access.ts';
import {executeAdminCommand,InvalidAdminCommand} from './commands.ts';
import {commandDefinitions,type AdminCommand} from '../../features/admin/commands.ts';
const reply=(kind:string,status:number)=>Response.json({kind,status},{status,headers:{'cache-control':'private, no-store'}});
/** One reviewed command endpoint. No URL, headers, cookie or authority field is accepted. */
export async function mediateAdminCommand(request:Request,config:AuthTopologyConfig,credential:string|undefined,fetcher:typeof fetch=fetch):Promise<Response>{
 if(new URL(request.url).pathname!=='/api/admin-command'||new URL(request.url).search)return reply('not_found',404);
 if(request.method!=='POST')return reply('method_not_allowed',405);
 if(request.headers.get('origin')!==config.publicOrigin||request.headers.get('sec-fetch-site')==='cross-site')return reply('forbidden',403);
 if(!request.headers.get('content-type')?.startsWith('application/json'))return reply('validation_failure',415);
 if(request.headers.has('x-elceo-internal-token')||request.headers.has('authorization'))return reply('forbidden',403);
 const key=request.headers.get('idempotency-key');if(!key?.trim())return reply('validation_failure',400);
 try{
  // Frozen admin parseJsonBody maximum is 64 KiB; this is request-local, not an invented upstream ceiling.
  const reader=request.body?.getReader();if(!reader)return reply('validation_failure',400);
  let bytes=0;const chunks:Uint8Array[]=[];try{for(;;){const chunk=await reader.read();if(chunk.done)break;bytes+=chunk.value.byteLength;if(bytes>64*1024){await reader.cancel();return reply('payload_too_large',413);}chunks.push(chunk.value);}}finally{reader.releaseLock();}
  const joined=new Uint8Array(bytes);let offset=0;for(const c of chunks){joined.set(c,offset);offset+=c.byteLength;}
  const parsed:unknown=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(joined));
  if(!parsed||typeof parsed!=='object'||Array.isArray(parsed)||Object.keys(parsed).some(k=>!['command','body'].includes(k)))return reply('validation_failure',400);
  const command=Reflect.get(parsed,'command');if(typeof command!=='string'||!Object.hasOwn(commandDefinitions,command))return reply('not_found',404);
  const client=await adminClient(config,request.headers.get('cookie')??'',credential,(url,init)=>fetcher(url,{...init,signal:request.signal}));
  const result=await executeAdminCommand(command as AdminCommand,Reflect.get(parsed,'body'),key,client);
  return Response.json(result,{status:result.kind==='success'?200:result.status&&result.status>=400?result.status:502,headers:{'cache-control':'private, no-store'}});
 }catch(error){if(error instanceof AdminAccessFailure)return reply(error.kind,error.status);if(error instanceof InvalidAdminCommand||error instanceof SyntaxError)return reply('validation_failure',400);return reply('unknown_error',502);}
}
