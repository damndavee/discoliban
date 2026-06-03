import type {
  IMayHaveRelations,
  IMayHaveTagsAndGenres,
  ITypedEntity,
} from '../common/index.js';
import { MiscIncludes } from '../relations/index.js';
import {
  Browse,
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';
import {
  IBrowseSeriesQuery,
  IBrowseSeriesResult,
  ISeriesList,
} from '../search/index.js';

export interface ISeries
  extends ITypedEntity,
    IMayHaveRelations,
    IMayHaveTagsAndGenres {
  name: string;
  disambiguation: string;
}

export type SeriesEntity = {
  inc: MiscIncludes;
  search: Search<SearchPayload<MiscIncludes>, ISeriesList>;
  browse: Browse<IBrowseSeriesQuery, IBrowseSeriesResult>;
  lookup: Lookup<LookupPayload<MiscIncludes>, ISeries>;
};
