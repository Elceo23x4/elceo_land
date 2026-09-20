import { proxyCanonicalBrowserApiRequest } from '../../../lib/auth/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export const GET = proxyCanonicalBrowserApiRequest;
export const POST = proxyCanonicalBrowserApiRequest;
export const PUT = proxyCanonicalBrowserApiRequest;
export const PATCH = proxyCanonicalBrowserApiRequest;
export const DELETE = proxyCanonicalBrowserApiRequest;
