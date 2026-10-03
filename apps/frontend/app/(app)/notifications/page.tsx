import {NotificationsPage} from '../../../features/notifications/NotificationsPage';
export const dynamic='force-dynamic';
export default async function Page({searchParams}:{searchParams:Promise<{limit?:string|string[]}>}) {
 const {limit}=await searchParams;
 return <NotificationsPage limit={limit==='200'?200:limit==='100'?100:50}/>;
}
