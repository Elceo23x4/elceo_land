import 'server-only';
import {headers} from 'next/headers';
import {getAuthTopologyConfig} from '../auth/config';
import {adminClient} from './access';
export async function getAdminClient(){const incoming=await headers();return adminClient(getAuthTopologyConfig(),incoming.get('cookie')??'',process.env.ELCEO_INTERNAL_API_TOKEN);}
