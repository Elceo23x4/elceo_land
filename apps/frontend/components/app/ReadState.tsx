import Link from 'next/link';
import styles from './Operational.module.css';
const states:Record<string,[string,string]>={
  unauthenticated:['Your session needs attention.','Sign in again to read your workspace.'],
  forbidden:['This view is not available to your account.','The service did not authorize this request. Review your account access; a plan name alone does not establish permission.'],
  not_found:['This record is unavailable.','It may no longer exist or may not be visible to your account.'],
  rate_limited:['Give this request a little time.','The service is limiting requests. Wait before checking again.'],
  unavailable_degraded:['The service is temporarily unavailable.','No current information can be confirmed. Existing data has not been replaced with an empty result.'],
  invalid_payload:['The response could not be displayed safely.','The service returned data that does not match this view’s contract. No values have been inferred.'],
};
export function ReadState({kind}:{kind:string}) {
  const [title,copy]=states[kind]??['We could not confirm this view.','The request did not return a usable response. No automatic retry or refresh has been started.'];
  return <section className={styles.state} role="status"><h2>{title}</h2><p>{copy}</p>{kind==='forbidden'&&<Link href="/settings/access">Review access and usage</Link>}{kind==='unauthenticated'&&<Link href="/login">Return to sign in</Link>}</section>;
}
