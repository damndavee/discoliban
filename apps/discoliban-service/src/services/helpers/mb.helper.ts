import { Request } from 'express';
import { EntityMap } from '@discoliban/types';
import {
  BrowsableEntity,
  LookupEntity,
  Payload,
  SearchableEntity,
  RawQuery
} from '../../types/service/misc';

export function parseQuery(req: Request): RawQuery {
  const { query, inc, limit, offset } = req.query;

  return {
    query: typeof query === 'string' ? query : undefined,
    inc: Array.isArray(inc)
      ? inc.filter((x): x is string => typeof x === 'string')
      : typeof inc === 'string'
        ? [inc]
        : undefined,
    limit: typeof limit === 'string' ? Number(limit) : undefined,
    offset: typeof offset === 'string' ? Number(offset) : undefined,
  };
}

export function buildSearchInput<E extends SearchableEntity>(
  entity: E,
  raw: RawQuery,
): Payload<E, 'search'> {
  return {
    query: raw.query ?? '',
    limit: raw.limit ?? 25,
    offset: raw.offset ?? 0,
    inc: buildInc<EntityMap[E]['inc']>(raw.inc),
  };
}

export function buildBrowseInput<E extends BrowsableEntity>(
  entity: E,
  raw: RawQuery,
  query: Request['query'],
): Payload<E, 'browse'> {
  return {
    ...query,

    limit: raw.limit ?? 25,
    offset: raw.offset ?? 0,

    inc: buildInc<EntityMap[E]['inc']>(raw.inc),
  } as Payload<E, 'browse'>;
}

export function buildLookupInput<E extends LookupEntity>(
  entity: E,
  raw: RawQuery,
): Payload<E, 'lookup'> {
  return {
    mbid: raw.query || '',
    inc: buildInc<EntityMap[E]['inc']>(raw.inc),
  };
}

const PAGINATION_KEYS = ['limit', 'offset'];

export function getBrowseParam(
  payload: object,
): [key: string, value: string] | null {
  for (const [key, value] of Object.entries(
    payload as Record<string, unknown>,
  )) {
    if (!PAGINATION_KEYS.includes(key) && typeof value === 'string') {
      return [key, value];
    }
  }

  return null;
}

export function buildInc<I extends string>(inc: unknown): I[] | undefined {
  if (!inc) return undefined;

  if (typeof inc === 'string') {
    return [inc] as I[];
  }

  if (Array.isArray(inc)) {
    return inc.filter((x): x is I => typeof x === 'string');
  }

  return undefined;
}