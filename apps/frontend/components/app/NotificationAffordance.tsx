import Link from 'next/link';
import {readOwnedOperation} from '../../lib/api/owned-read';
import {envelope} from '../../features/workspace/projection';
import {notificationSummary} from '../../features/notifications/projection';
import {Modal} from '../primitives/Modal';
import styles from './Operational.module.css';
export async function NotificationAffordance(){const result=await readOwnedOperation('GET /api/notifications/summary',{}),summary=result.kind==='success'?notificationSummary(envelope(result.value)):null;
 return <Modal label={summary?`Notifications · ${summary.unread} unread`:'Notifications'} title="Notification overview"><p>{summary?`${summary.unread} unread, as reported by the service.`:result.kind==='forbidden'?'The service did not authorize the notification summary.':'The current unread count could not be confirmed.'}</p><p>Opening this overview does not mark items read or initiate delivery.</p><p><Link className={styles.button} href="/notifications">Open notification inbox</Link></p><p><Link className={styles.button} href="/settings/notifications">Notification delivery settings</Link></p></Modal>;
}
