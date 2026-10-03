import { requireAuthenticatedSession } from '../../lib/auth/server';
import { readOwnedOperation } from '../../lib/api/owned-read';
import { OperationalChrome } from '../../components/app/OperationalChrome';
import { ReadState } from '../../components/app/ReadState';
import { RouteLink } from '../../components/public/RouteLink';
import { agenda, envelope, workspace, type AgendaItem, type WorkspaceView } from './projection';
import { Freshness } from './Freshness';
import { RefreshWorkspace } from './RefreshWorkspace';
import styles from '../../components/app/Operational.module.css';

function Agenda({items}:{items:AgendaItem[]}) {return items.length ? <ol className={styles.timeline}>{items.map(item=><li key={item.agendaId}><div className={styles.meta}><span>{item.priority}</span><span>{item.sourceKind.replaceAll('_',' ')}</span></div><h3>{item.headline}</h3><p>{item.rationale}</p></li>)}</ol>:<p>No agenda items are recorded in this snapshot.</p>;}
function Snapshot({view}:{view:WorkspaceView}) {return <><div className={styles.meta}><span>Health: {view.healthState.replaceAll('_',' ')}</span><span>Attention: {view.attentionLevel}</span><time dateTime={view.generatedAt}>{view.generatedAt}</time></div><div className={styles.split}><section className={styles.panel}><h2>Your market agenda</h2><Agenda items={view.agenda}/></section><aside><section className={styles.panel}><h2>Portfolio context</h2><dl className={styles.metrics}><div><dt>Watchlist entries</dt><dd>{view.portfolio.activeWatchlistCount}</dd></div><div><dt>Recorded positions</dt><dd>{view.portfolio.activePositionCount}</dd></div><div><dt>Open actions</dt><dd>{view.portfolio.openActionCount}</dd></div><div><dt>Critical actions</dt><dd>{view.portfolio.criticalActionCount}</dd></div></dl></section><section className={styles.panel}><h2>Review focus</h2><p>{view.focus??'No focus headline is recorded.'}</p>{view.strength&&<p>{view.strength}</p>}</section><details className={`${styles.panel} ${styles.details}`}><summary>Source dependency status</summary><dl>{Object.entries(view.dependencies).map(([name,status])=><div key={name}><dt>{name}</dt><dd>{status}</dd></div>)}</dl><p>These statuses are supplied by the service. Opening this detail does not refresh or generate a snapshot.</p></details></aside></div></>;}

export async function WorkspacePage({mode}:{mode:'current'|'agenda'|'history'}) {
  const path=mode==='current'?'/workspace':`/workspace/${mode}`;
  const session=await requireAuthenticatedSession(path);
  const operation=mode==='current'?'GET /api/workspace/current':mode==='agenda'?'GET /api/workspace/agenda':'GET /api/workspace/history';
  const result=await readOwnedOperation(operation,{});
  let content;
  if(result.kind!=='success')content=<ReadState kind={result.kind}/>;
  else {
    const data=envelope(result.value);
    if(!data)content=<ReadState kind="invalid_payload"/>;
    else if(mode==='agenda') {const items=agenda(data.agenda);content=items?<Agenda items={items}/>:<ReadState kind="invalid_payload"/>;}
    else if(mode==='history') {
      const raw=data.snapshots;
      const items=Array.isArray(raw)?raw.map(workspace):null;
      content=!items||items.some(v=>v===null)?<ReadState kind="invalid_payload"/>:items.length?<ol className={styles.timeline}>{items.map(view=>view&&<li key={view.snapshotId}><h2>{view.generatedAt}</h2><p>{view.healthState.replaceAll('_',' ')} · {view.attentionLevel} attention</p><details className={styles.details}><summary>Read this snapshot</summary><Snapshot view={view}/></details></li>)}</ol>:<p>No workspace history has been recorded.</p>;
    } else if(data.snapshot===null)content=<section className={styles.state}><h2>Your workspace has no snapshot yet.</h2><p>There is no server-produced workspace to display. Opening this page does not start generation.</p></section>;
    else {const view=workspace(data.snapshot);content=view?<Snapshot view={view}/>:<ReadState kind="invalid_payload"/>;}
  }
  return <OperationalChrome session={session}><header className={styles.title}><div><h1>{mode==='current'?'Your working context.':mode==='agenda'?'What needs attention.':'A record of context.'}</h1><p>Portfolio, coaching and market evidence, held together in the workspace supplied by your service.</p></div></header><nav className={styles.tabs} aria-label="Workspace views"><RouteLink href="/workspace">Overview</RouteLink><RouteLink href="/workspace/agenda">Agenda</RouteLink><RouteLink href="/workspace/history">History</RouteLink></nav>{content}{mode==='current'&&<><Freshness/><RefreshWorkspace/></>}</OperationalChrome>;
}
