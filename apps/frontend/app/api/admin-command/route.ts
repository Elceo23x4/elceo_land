import 'server-only';
import {getAuthTopologyConfig} from '../../../lib/auth/config';
import {mediateAdminCommand} from '../../../lib/admin/mediation';
export async function POST(request:Request){return mediateAdminCommand(request,getAuthTopologyConfig(),process.env.ELCEO_INTERNAL_API_TOKEN);}
