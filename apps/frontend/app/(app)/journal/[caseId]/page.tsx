import {JournalPage} from '../../../../features/journal/JournalPage';
export const dynamic='force-dynamic';
export default async function Page({params}:{params:Promise<{caseId:string}>}){const {caseId}=await params;return <JournalPage caseId={caseId}/>;}
