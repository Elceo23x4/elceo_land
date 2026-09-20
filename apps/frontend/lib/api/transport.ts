import type { OpenApiOperationTypes } from '../contracts/generated/openapi-operation-map.generated';
import type {
  AllowedHeaderName,
  MutationOperationKey,
  OperationKey,
  OperationPolicy,
  ReadOperationKey,
} from '../contracts/policy';
import type { ContractResult, SafeBackendError } from '../contracts/result';

type GeneratedRequest<K extends OperationKey> = OpenApiOperationTypes[K]['request'];
type GeneratedResponse<K extends OperationKey> = OpenApiOperationTypes[K]['response'];

type CallerHeaderName<K extends OperationKey> = Exclude<AllowedHeaderName<K>, 'Idempotency-Key'>;
type CallerHeaders<K extends OperationKey> = [CallerHeaderName<K>] extends [never]
  ? { headers?: never }
  : { headers?: Partial<Record<CallerHeaderName<K>, string>> };

export type RequestContext = Readonly<{ signal?: AbortSignal }>;

export type OperationInput<K extends OperationKey> = Omit<GeneratedRequest<K>, 'url' | 'headers'>
  & CallerHeaders<K>
  & Readonly<{ context?: RequestContext }>;

type IdempotencyInput<K extends OperationKey> = OperationPolicy<K>['idempotency'] extends 'required'
  ? Readonly<{
      idempotency: Readonly<{
        key: string;
        /** Network attempts for the same logical mutation; the key is reused verbatim. */
        maxAttempts?: 1 | 2 | 3;
      }>;
    }>
  : Readonly<{ idempotency?: never }>;

export type MutationInput<K extends OperationKey> = OperationInput<K> & IdempotencyInput<K>;

type RuntimePolicy = Readonly<{
  key: string;
  method: string;
  routePath: string;
  responseContract: string;
  idempotency: 'required' | 'not_required';
  sideEffectRisk: string;
  allowedHeaders: readonly string[];
}>;

type RuntimeInput = {
  path?: Record<string, string | number>;
  query?: Record<string, string | number | boolean | readonly (string | number | boolean)[] | null | undefined>;
  body?: unknown;
  headers?: Record<string, string>;
  context?: RequestContext;
  idempotency?: { key: string; maxAttempts?: 1 | 2 | 3 };
};

export type TransportConfiguration = Readonly<{
  baseOrigin: string;
  fetchImplementation: typeof fetch;
}>;

export type PolicyClient<K extends OperationKey> = Readonly<{
  read<P extends ReadOperationKey<K>>(
    operation: P,
    input: OperationInput<P>,
  ): Promise<ContractResult<P, GeneratedResponse<P>>>;
  mutate<P extends MutationOperationKey<K>>(
    operation: P,
    input: MutationInput<P>,
  ): Promise<ContractResult<P, GeneratedResponse<P>>>;
}>;

const safeError = (value: unknown, fallback: string): SafeBackendError => {
  if (!value || typeof value !== 'object') return { message: fallback };
  const candidate = 'error' in value && value.error && typeof value.error === 'object'
    ? value.error as Record<string, unknown>
    : value as Record<string, unknown>;
  return {
    ...(typeof candidate.code === 'string' ? { code: candidate.code } : {}),
    message: typeof candidate.message === 'string' ? candidate.message : fallback,
    ...('details' in candidate ? { details: candidate.details } : {}),
  };
};

const parsePayload = async (response: Response): Promise<unknown> => {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};

const commercialState = (operation: string, payload: unknown) => {
  if (operation !== 'POST /api/billing/checkout' || !payload || typeof payload !== 'object') return null;
  const operationPayload = (payload as { operation?: unknown }).operation;
  if (!operationPayload || typeof operationPayload !== 'object') return null;
  const state = (operationPayload as { state?: unknown }).state;
  return state === 'processing' || state === 'unknown' || state === 'reconciliation_required' ? state : null;
};

const mapResult = <K extends OperationKey>(
  operation: K,
  policy: RuntimePolicy,
  status: number,
  responseOk: boolean,
  payload: unknown,
): ContractResult<K, GeneratedResponse<K>> => {
  const pending = commercialState(operation, payload);
  if (responseOk && pending) {
    return {
      kind: 'commercial_pending', operation, status, responseContract: policy.responseContract,
      commercialState: pending, value: payload as GeneratedResponse<K>,
    } as ContractResult<K, GeneratedResponse<K>>;
  }
  if (responseOk && !(payload && typeof payload === 'object' && 'ok' in payload && payload.ok === false)) {
    return {
      kind: 'success', operation, status, responseContract: policy.responseContract,
      value: payload as GeneratedResponse<K>,
    } as ContractResult<K, GeneratedResponse<K>>;
  }
  const error = safeError(payload, 'The backend returned an unrecognized error response.');
  const base = { operation, status, responseContract: policy.responseContract, error };
  if (status === 400 || status === 413 || status === 422
      || error.code === 'validation_error' || error.code === 'bad_request'
      || error.code === 'payload_too_large' || error.code === 'unprocessable_entity') {
    return { kind: 'validation_failure', ...base } as ContractResult<K, GeneratedResponse<K>>;
  }
  if (status === 401 || error.code === 'unauthorized') return { kind: 'unauthenticated', ...base } as ContractResult<K, GeneratedResponse<K>>;
  if (status === 403 || error.code === 'forbidden') return { kind: 'forbidden', ...base } as ContractResult<K, GeneratedResponse<K>>;
  if (status === 404 || error.code === 'not_found') return { kind: 'not_found', ...base } as ContractResult<K, GeneratedResponse<K>>;
  if (status === 409 || error.code === 'conflict') return { kind: 'conflict', ...base } as ContractResult<K, GeneratedResponse<K>>;
  if (status === 429) return { kind: 'rate_limited', ...base } as ContractResult<K, GeneratedResponse<K>>;
  if ([424, 500, 502, 503, 504].includes(status) || error.code === 'dependency_failed' || error.code === 'internal_error') {
    return { kind: 'unavailable_degraded', ...base } as ContractResult<K, GeneratedResponse<K>>;
  }
  return { kind: 'unknown_error', ...base } as ContractResult<K, GeneratedResponse<K>>;
};

const renderUrl = (baseOrigin: string, policy: RuntimePolicy, input: RuntimeInput) => {
  let route = policy.routePath;
  for (const match of route.matchAll(/\{([^}]+)\}/gu)) {
    const name = match[1];
    const value = input.path?.[name];
    if (value === undefined) throw new TypeError(`Missing path parameter ${name} for ${policy.key}`);
    route = route.replace(match[0], encodeURIComponent(String(value)));
  }
  const url = new URL(route, baseOrigin);
  for (const [name, value] of Object.entries(input.query ?? {})) {
    if (value === undefined || value === null) continue;
    for (const item of Array.isArray(value) ? value : [value]) url.searchParams.append(name, String(item));
  }
  return url;
};

export const createPolicyClient = <K extends OperationKey>(
  allowedRegistry: Readonly<Record<K, RuntimePolicy>>,
  configuration: TransportConfiguration,
): PolicyClient<K> => {
  const origin = new URL(configuration.baseOrigin);
  if (!['http:', 'https:'].includes(origin.protocol) || origin.username || origin.password) {
    throw new TypeError('baseOrigin must be an HTTP(S) origin without embedded credentials.');
  }
  const execute = async <P extends K>(operation: P, supplied: unknown) => {
    const policy = allowedRegistry[operation];
    if (!policy) throw new TypeError(`Operation is not allowed by this client: ${operation}`);
    const input = (supplied ?? {}) as RuntimeInput;
    const headers = new Headers();
    const allowed = new Set(policy.allowedHeaders.map((name) => name.toLowerCase()));
    for (const [name, value] of Object.entries(input.headers ?? {})) {
      if (!allowed.has(name.toLowerCase())) throw new TypeError(`Header ${name} is not allowed for ${operation}`);
      headers.set(name, value);
    }
    if (policy.idempotency === 'required') {
      if (!input.idempotency || typeof input.idempotency.key !== 'string' || input.idempotency.key.length === 0) {
        throw new TypeError(`Idempotency context is required for ${operation}`);
      }
      headers.set('Idempotency-Key', input.idempotency.key);
    } else if (input.idempotency) {
      throw new TypeError(`Idempotency context is not accepted for ${operation}`);
    }
    if (input.body !== undefined) headers.set('Content-Type', 'application/json');
    const attempts = input.idempotency?.maxAttempts ?? 1;
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
      try {
        const response = await configuration.fetchImplementation(renderUrl(origin.origin, policy, input), {
          method: policy.method,
          headers,
          signal: input.context?.signal,
          ...(input.body === undefined ? {} : { body: JSON.stringify(input.body) }),
        });
        const payload = await parsePayload(response);
        return mapResult(operation, policy, response.status, response.ok, payload);
      } catch (error) {
        if (attempt < attempts) continue;
        return {
          kind: 'unknown_error', operation, status: null, responseContract: policy.responseContract,
          error: { message: 'The transport outcome is unknown; reconcile authoritative state before a new logical mutation.' },
        } as ContractResult<P, GeneratedResponse<P>>;
      }
    }
    throw new Error('Unreachable transport state.');
  };
  return {
    read: (operation, input) => execute(operation, input),
    mutate: (operation, input) => execute(operation, input),
  } as PolicyClient<K>;
};
