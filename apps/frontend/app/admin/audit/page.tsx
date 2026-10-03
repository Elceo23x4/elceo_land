import {AdminPage,type AdminSearch} from '../../../features/admin/AdminPage';
export default function Page({searchParams}:{searchParams:AdminSearch}){return <AdminPage path="/admin/audit" searchParams={searchParams}/>;}
