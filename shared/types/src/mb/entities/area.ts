import type {
  LifeSpan,
  IMayHaveRelations,
  IMayHaveTagsAndGenres,
  ITypedEntity,
} from '../common/index.js';
import { MiscIncludes, RelationsIncludes } from '../relations/index.js';
import {
  Browse,
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';
import {
  IAreaList,
  IBrowseAreasQuery,
  IBrowseAreasResult,
} from '../search/index.js';

export type AreaType =
  | 'Country'
  | 'Subdivision'
  | 'Municipality'
  | 'City'
  | 'District'
  | 'Island';

export interface IArea
  extends ITypedEntity,
    IMayHaveRelations,
    IMayHaveTagsAndGenres {
  type: AreaType;
  'iso-3166-1-codes'?: string[];
  primary: boolean;
  name: string;
  'sort-name': string;
  disambiguation: string;
  'life-span': LifeSpan;
}


type AreaInc = MiscIncludes | RelationsIncludes;

export type AreaEntity = {
  inc: AreaInc;
  search: Search<SearchPayload<AreaInc>, IAreaList>;
  browse: Browse<IBrowseAreasQuery, IBrowseAreasResult>;
  lookup: Lookup<LookupPayload<AreaInc>, IArea>;
};