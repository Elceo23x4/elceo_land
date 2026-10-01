import { SettingsPage } from '../../../features/settings/SettingsPage';
import {redirect} from 'next/navigation';
export const dynamic = 'force-dynamic';
export default async function Page({searchParams}:{searchParams:Promise<{billing?:string|string[]}>}) {
 const {billing}=await searchParams;
 // Frozen providers return to /settings. Canonical UI reconciliation lives here;
 // return text is navigation only and is never payment/access authority.
 if(typeof billing==='string'&&['return','sandbox_success','sandbox_cancel'].includes(billing))redirect('/settings/billing');
 return <SettingsPage mode="hub" />;
}
