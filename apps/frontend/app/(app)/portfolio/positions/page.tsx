import {PortfolioPage} from '../../../../features/portfolio/PortfolioPage';
export default async function Page({searchParams}:{searchParams:Promise<{selected?:string|string[]}>}){const {selected}=await searchParams;return <PortfolioPage view="positions" selected={typeof selected==='string'?selected:undefined}/>;}
