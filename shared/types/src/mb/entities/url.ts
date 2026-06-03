import type { IMayHaveRelations, IEntity } from '../common/index.js';
import { MiscIncludes, RelationsIncludes } from '../relations/index.js';
import {
  Browse,
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';
import {
  IBrowseUrlsQuery,
  IUrlList,
  IUrlLookupResult,
} from '../search/index.js';

export interface IUrl extends IEntity, IMayHaveRelations {
  id: string;
  resource: string;
}

type UrlInc = MiscIncludes | RelationsIncludes;

export type UrlEntity = {
  inc: UrlInc;
  search: Search<SearchPayload<UrlInc>, IUrlList>;
  browse: Browse<IBrowseUrlsQuery, IUrlLookupResult>;
  lookup: Lookup<LookupPayload<UrlInc>, IUrl>;
};