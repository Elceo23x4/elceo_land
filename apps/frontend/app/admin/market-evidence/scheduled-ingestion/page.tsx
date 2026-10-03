import {AdminPage,type AdminSearch} from '../../../../features/admin/AdminPage';
export default function Page({searchParams}:{searchParams:AdminSearch}){return <AdminPage path="/admin/market-evidence/scheduled-ingestion" searchParams={searchParams}/>;}
