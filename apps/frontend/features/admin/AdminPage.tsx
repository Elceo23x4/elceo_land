import Link from 'next/link';
import {redirect} from 'next/navigation';
import {requireAdminPresentationSession} from '../../lib/auth/server';
import {RouteLink} from '../../components/public/RouteLink';
import {evidenceAssets,evidenceHorizons} from '../../lib/contracts/refinements/admin';
import {adminRoutes,type AdminPath} from './routes';
import {adminSections,type AdminQuery} from './reads';
import {AdminData,AdminState} from './AdminData';
import styles from './Admin.module.css';
import {AdminMutations} from './AdminMutation';
import type {AdminCommand} from './commands';
export type AdminSearch=Promise<Record<string,string|string[]|undefined>>;
export async function AdminPage({path,searchParams,userId}:{path:AdminPath;searchParams?:AdminSearch;userId?:string}){
 const session=await requireAdminPresentationSession(userId?`/admin/commercial/users/${encodeURIComponent(userId)}`:path);
 const raw=await searchParams??{};const q:AdminQuery={};for(const key of ['subjectId','asset','horizon','payloadId','requestId','runId'] as const){const value=raw[key];if(typeof value==='string'&&value.trim())q[key]=value.trim();}if(userId)q.subjectId=userId;
 if(path==='/admin/commercial/users'&&q.subjectId)redirect(`/admin/commercial/users/${encodeURIComponent(q.subjectId)}`);
 const route=adminRoutes.find(r=>r[0]===path)!;const sections=await adminSections(path,q);
 const needsSubject=path.startsWith('/admin/billing/')&&path!=='/admin/billing/provider-mappings'||path==='/admin/entitlements'||path==='/admin/commercial/users';
 const market=['/admin/market-evidence/payloads','/admin/market-evidence/quality','/admin/market-evidence/cognition'].includes(path);
 const commands:Exclude<AdminCommand,'challenge'|'verify'>[]=path==='/admin/billing/operations'&&q.subjectId?['trial','activate','renew','changePlan','pastDue','cancelPeriod','expire','pause','resume']:path==='/admin/entitlements'&&q.subjectId?['entitlementPlan','entitlementState','entitlementOverride']:path==='/admin/billing/provider-mappings'?['mapping']:path==='/admin/market-evidence/scheduled-ingestion'?['dryRun','replay']:path==='/admin/commercial/users/[userId]'?['gift','retract','restrict']:[];
 const readback=userId?`/admin/commercial/users/${encodeURIComponent(userId)}`:path+(q.subjectId?'?subjectId='+encodeURIComponent(q.subjectId):'');
 const className=path==='/admin/audit'?styles.timeline:path==='/admin'||path==='/admin/commercial'?styles.metrics:path.includes('evidence')?styles.evidence:'';
 return <div className={styles.shell}><header className={styles.bar}><Link className={styles.brand} href="/admin">ELCEO / Control</Link><span>{session.user.name??'Administrator'}</span><Link href="/workspace">Return to workspace</Link></header><div className={styles.frame}><nav className={styles.nav} aria-label="Control plane">{['Operations','Billing','Commercial','Evidence','SEO'].map(group=><div key={group}><h2>{group}</h2>{adminRoutes.filter(r=>r[4]===group&&!r[0].includes('[')).map(r=><RouteLink href={r[0]} key={r[0]}>{r[1]}</RouteLink>)}</div>)}</nav><main className={`${styles.main} ${className}`}><header className={styles.title}><h1>{route[2]}</h1><p>{route[3]}</p>{userId&&<p>Target user: {userId}</p>}</header>
 {(needsSubject||market||path==='/admin/market-evidence/scheduled-ingestion')&&<form className={styles.filters} method="get">{needsSubject&&<label>Subject ID<input name="subjectId" defaultValue={q.subjectId} required={path!=='/admin/billing/provider-events'}/></label>}{market&&<><label>Market<select name="asset" defaultValue={q.asset??'xau_usd'}>{evidenceAssets.map(a=><option key={a}>{a}</option>)}</select></label><label>Horizon<select name="horizon" defaultValue={q.horizon??'intraday'}>{evidenceHorizons.map(a=><option key={a}>{a}</option>)}</select></label></>}{path.endsWith('/payloads')&&<><label>Payload ID<input name="payloadId" defaultValue={q.payloadId}/></label><label>Provider request ID<input name="requestId" defaultValue={q.requestId}/></label></>}{path.endsWith('/scheduled-ingestion')&&<label>Stored run ID<input name="runId" defaultValue={q.runId}/></label>}<button className={styles.button}>Read selected context</button></form>}
 {sections.map(section=><section className={styles.section} key={section.title} aria-label={section.title}><h2>{section.title}</h2>{section.kind==='success'&&section.value!==undefined?<AdminData value={section.value}/>:<AdminState kind={section.kind}/>}</section>)}
 {path==='/admin/commercial/prices'&&<div className={styles.state}><h2>Price changes are unavailable</h2><p>The service’s challenge and price-update target bindings are incompatible. No price change can be safely completed through this flow.</p></div>}
 {commands.length>0&&sections.length>0&&sections.every(s=>s.kind==='success')&&<section className={styles.section}><h2>Explicit recorded actions</h2><AdminMutations offers={commands.map(command=>({command,target:q.subjectId}))} readback={readback}/></section>}
 <p className={styles.readonly}>This control plane presents recorded server state. Reading a view does not authorize a mutation, activate a provider or publish content.</p>
 </main></div></div>;
}
