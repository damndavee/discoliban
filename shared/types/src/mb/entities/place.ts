import type {
  IMayHaveRelations,
  IMayHaveTagsAndGenres,
  IMayHaveRating,
  ITypedEntity,
  LifeSpan,
} from '../common/index.js';
import type { IArea } from './area.js';
import { MiscIncludes, RelationsIncludes } from '../relations/index.js';
import {
  Browse,
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';
import { IBrowsePlacesQuery, IBrowsePlacesResult, IPlaceList } from '../search/index.js';

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IPlace
  extends ITypedEntity,
    IMayHaveRelations,
    IMayHaveTagsAndGenres,
    IMayHaveRating {
  name: string;
  disambiguation: string;
  address: string;
  coordinates: ICoordinates | null;
  'life-span': LifeSpan;
  area: IArea | null;
}

type PlaceInc = MiscIncludes | RelationsIncludes;

export type PlaceEntity = {
  inc: PlaceInc;
  search: Search<SearchPayload<PlaceInc>, IPlaceList>;
  browse: Browse<IBrowsePlacesQuery, IBrowsePlacesResult>;
  lookup: Lookup<LookupPayload<PlaceInc>, IPlace>;
};