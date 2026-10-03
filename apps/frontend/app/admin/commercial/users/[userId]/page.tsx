import {AdminPage,type AdminSearch} from '../../../../../features/admin/AdminPage';
export default async function Page({params,searchParams}:{params:Promise<{userId:string}>;searchParams:AdminSearch}){const {userId}=await params;return <AdminPage path="/admin/commercial/users/[userId]" userId={userId} searchParams={searchParams}/>;}
