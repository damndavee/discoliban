import type {
  IMayHaveRelations,
  IMayHaveTagsAndGenres,
  IMayHaveRating,
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
  IBrowseWorksQuery,
  IBrowseWorksResult,
  IWorkList,
} from '../search/index.js';

export interface IWorkAttribute extends ITypedEntity {
  value: string;
}

export interface IWork
  extends ITypedEntity,
    IMayHaveRelations,
    IMayHaveTagsAndGenres,
    IMayHaveRating {
  title: string;
  disambiguation: string;
  language: string;
  languages: string[];
  iswcs: string[];
  attributes: IWorkAttribute[];
}

type WorkInc = MiscIncludes | RelationsIncludes;

export type WorkEntity = {
  inc: WorkInc;
  search: Search<SearchPayload<WorkInc>, IWorkList>;
  browse: Browse<IBrowseWorksQuery, IBrowseWorksResult>;
  lookup: Lookup<LookupPayload<WorkInc>, IWork>;
};
