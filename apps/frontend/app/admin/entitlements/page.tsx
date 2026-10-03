import {AdminPage,type AdminSearch} from '../../../features/admin/AdminPage';
export default function Page({searchParams}:{searchParams:AdminSearch}){return <AdminPage path="/admin/entitlements" searchParams={searchParams}/>;}
