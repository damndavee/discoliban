import type {
  IMayHaveRelations,
  IMayHaveTagsAndGenres,
  IMayHaveRating,
  ITypedEntity,
  IPeriod,
} from '../common/index.js';
import {
  Browse,
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';
import { MiscIncludes, RelationsIncludes } from '../relations/index.js';
import {
  IBrowseEventsQuery,
  IBrowseEventsResult,
  IEventList,
} from '../search/index.js';

export interface IEvent
  extends ITypedEntity,
    IMayHaveRelations,
    IMayHaveTagsAndGenres,
    IMayHaveRating {
  cancelled: boolean;
  'life-span': IPeriod;
  disambiguation: string;
  time: string;
  setlist: string;
  name: string;
}

type EventInc = MiscIncludes | RelationsIncludes;

export type EventEntity = {
  inc: EventInc;
  search: Search<SearchPayload<EventInc>, IEventList>;
  browse: Browse<IBrowseEventsQuery, IBrowseEventsResult>;
  lookup: Lookup<LookupPayload<EventInc>, IEvent>;
};