import 'server-only';
import { headers } from 'next/headers';
import { createBrowserApiClient } from './browser';
import { getAuthTopologyConfig } from '../auth/config';
import type { BrowserUserOperationKey, ReadOperationKey } from '../contracts/policy';
import type { ReadInput } from './transport';

/** RSC adapter for the existing browser-safe owner partition. No arbitrary URL API. */
export async function readOwnedOperation<K extends ReadOperationKey<BrowserUserOperationKey>>(key: K, input: ReadInput<K>) {
  const config = getAuthTopologyConfig();
  const incoming = await headers();
  const cookie = incoming.get('cookie');
  const client = createBrowserApiClient({baseOrigin:config.backendOrigin,fetchImplementation:async(url,init)=>{
    const forwarded = new Headers(init?.headers);
    if (cookie) forwarded.set('cookie',cookie);
    return fetch(url,{...init,headers:forwarded,cache:'no-store',redirect:'manual'});
  }});
  return client.read(key,input);
}
