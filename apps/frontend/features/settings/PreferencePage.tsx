import Link from 'next/link';
import {requireAuthenticatedSession} from '../../lib/auth/server';
import {readOwnedOperation} from '../../lib/api/owned-read';
import {OperationalChrome} from '../../components/app/OperationalChrome';
import {ReadState} from '../../components/app/ReadState';
import {envelope} from '../workspace/projection';
import {trackedAssets,accountPreferences} from './account-projection';
import {AccountPreferenceForm} from './AccountPreferenceForm';
import styles from '../../components/app/Operational.module.css';
export async function PreferencePage({mode}:{mode:'assets'|'preferences'}){
 const session=await requireAuthenticatedSession(`/settings/${mode}`),result=await readOwnedOperation('GET /api/account/state',{});
 let content;
 if(result.kind!=='success')content=<ReadState kind={result.kind}/>;
 else if(mode==='assets'){const assets=trackedAssets(envelope(result.value));content=assets?<AccountPreferenceForm mode="assets" assets={assets}/>:<ReadState kind="invalid_payload"/>;}
 else {const p=accountPreferences(envelope(result.value));content=p?<AccountPreferenceForm mode="preferences" motion={p.motionIntensity}/>:<ReadState kind="invalid_payload"/>;}
 return <OperationalChrome session={session}><header className={styles.title}><div><h1>{mode==='assets'?'Define your field of view.':'Set your preferred pace.'}</h1><p>{mode==='assets'?'Choose the markets you want to track across your account. A selection does not assert live data availability.':'Keep the experience comfortable, with device accessibility preferences respected.'}</p></div></header><nav className={styles.tabs} aria-label="Account preferences"><Link href="/settings">Account</Link><Link href="/settings/assets">Tracked markets</Link><Link href="/settings/preferences">Motion preference</Link></nav>{content}</OperationalChrome>;
}
