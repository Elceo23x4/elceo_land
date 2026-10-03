import {requireAuthenticatedSession} from '../../lib/auth/server';
import {readOwnedOperation} from '../../lib/api/owned-read';
import {OperationalChrome} from '../../components/app/OperationalChrome';
import {ReadState} from '../../components/app/ReadState';
import {envelope} from '../workspace/projection';
import {analyticsProjection,coachingProjection} from './projection';
import {GenerateReview} from './GenerateReview';
import styles from '../../components/app/Operational.module.css';
function Notes({title,items}:{title:string;items:string[]}) {return <section className={styles.panel}><h2>{title}</h2>{items.length?<ul>{items.map((text,i)=><li key={i}>{text}</li>)}</ul>:<p>No notes are recorded in this category.</p>}</section>;}
export async function ReviewPage({family}:{family:'analytics'|'coaching'}){
 const session=await requireAuthenticatedSession(`/${family}`);
 const result=await readOwnedOperation(family==='analytics'?'GET /api/analytics/latest':'GET /api/coaching/latest',{});
 let content;
 if(result.kind!=='success')content=<ReadState kind={result.kind}/>;
 else{
  const data=envelope(result.value);
  if(data?.snapshot===null)content=<section className={styles.state}><h2>No {family} snapshot yet.</h2><p>There is no recorded review to display. You can explicitly request one below; availability depends on your account and recorded activity.</p></section>;
  else if(family==='analytics'){
   const v=analyticsProjection(data?.snapshot);
   content=!v?<ReadState kind="invalid_payload"/>:<><p className={styles.meta}><time dateTime={v.generatedAt}>{v.generatedAt}</time><span>Recorded lookback: {v.lookbackDays} days</span></p><div className={styles.split}><section><section className={styles.panel}><h2>The review sample</h2><dl className={styles.metrics}><div><dt>Closed cases</dt><dd>{v.closed}</dd></div><div><dt>Reviewed cases</dt><dd>{v.reviewed}</dd></div><div><dt>Open cases</dt><dd>{v.open}</dd></div></dl></section><section className={styles.panel}><h2>Setup patterns</h2><ul className={styles.timeline}>{v.setups.map((r,i)=><li key={i}><h3>{String(r.setupType)}</h3><p>Sample: {String(r.sampleCount)} · Discipline: {String(r.disciplineScore)} · Performance: {String(r.performanceScore)}</p></li>)}</ul>{!v.setups.length&&<p>No setup patterns are recorded.</p>}</section><section className={styles.panel}><h2>Behaviour patterns</h2><ul className={styles.timeline}>{v.behaviors.map((r,i)=><li key={i}><h3>{String(r.behaviorTag)}</h3><p>Sample: {String(r.sampleCount)} · Importance: {String(r.importanceScore)}</p></li>)}</ul>{!v.behaviors.length&&<p>No behaviour patterns are recorded.</p>}</section></section><aside><Notes title="Read these cautions first" items={v.cautions}/><Notes title="Limits of the evidence" items={v.confidence}/><Notes title="Recurring strengths" items={v.strengths}/><Notes title="Patterns to review" items={v.mistakes}/></aside></div></>;
  }else{
   const v=coachingProjection(data?.snapshot);
   content=!v?<ReadState kind="invalid_payload"/>:<><p className={styles.meta}>Recorded at <time dateTime={v.generatedAt}>{v.generatedAt}</time></p><div className={styles.split}><section className={styles.panel}><h2>Current focus</h2><ul className={styles.timeline}>{v.focus.map(r=><li key={String(r.focusId)}><p className={styles.meta}>{String(r.priority)} priority</p><h3>{String(r.headline)}</h3><p>{String(r.explanation)}</p></li>)}</ul>{!v.focus.length&&<p>No focus areas are recorded.</p>}</section><section className={styles.panel}><h2>Put review into practice</h2><ol className={styles.timeline}>{v.actions.map(r=><li key={String(r.actionId)}><p className={styles.meta}>{String(r.priority)} priority</p><h3>{String(r.instruction)}</h3><p>Review measure: {String(r.successMetric)}</p></li>)}</ol>{!v.actions.length&&<p>No action plan is recorded.</p>}</section></div><section className={styles.panel}><h2>Keep these strengths</h2><ul className={styles.timeline}>{v.strengths.map(r=><li key={String(r.strengthId)}><h3>{String(r.headline)}</h3><p>{String(r.explanation)}</p></li>)}</ul></section><Notes title="Context for this review" items={v.notes}/></>;
  }
 }
 return <OperationalChrome session={session}><header className={styles.title}><div><h1>{family==='analytics'?'Review the pattern.':'Turn review into practice.'}</h1><p>{family==='analytics'?'Your recorded behaviour and setup evidence, with its cautions intact.':'Focus, strengths and an action plan from your recorded journal and analytics.'}</p></div></header>{content}<GenerateReview family={family}/></OperationalChrome>;
}
