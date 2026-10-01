import {readOwnedOperation} from '../../lib/api/owned-read';
import {ReadState} from '../../components/app/ReadState';
import {Modal} from '../../components/primitives/Modal';
import {envelope} from '../workspace/projection';
import {journalReplayProjection} from './projection';
import ui from '../../components/app/Operational.module.css';
export async function CaseReplay({caseId}:{caseId:string}){
 const result=await readOwnedOperation('GET /api/journal/cases/{caseId}/replay',{path:{caseId}});
 const items=result.kind==='success'?journalReplayProjection(envelope(result.value)?.replay,caseId):null;
 return <section className={ui.panel}><h2>The recorded chronology</h2><p>Review revisions returned by the service. This history is not reconstructed from the current case.</p><Modal label="View case history" title="Case history">{result.kind!=='success'?<ReadState kind={result.kind}/>:!items?<ReadState kind="invalid_payload"/>:!items.length?<p>No revisions returned for this case.</p>:<ol className={ui.timeline}>{items.map(v=><li key={v.revisionId}><time dateTime={v.changedAt}>{v.changedAt}</time><h3>{v.revisionType.replaceAll('_',' ')}</h3><p>{v.previousStatus===null?'Initial record':v.previousStatus.replaceAll('_',' ')} → {v.nextStatus.replaceAll('_',' ')}</p><p>{v.summary}</p></li>)}</ol>}</Modal></section>;
}
