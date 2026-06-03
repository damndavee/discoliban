import type {
  IMayHaveRelations,
  IMayHaveTagsAndGenres,
  IEntity,
} from '../common/index.js';
import type { IArtistCredit } from './artist.js';
import type { IReleaseGroup } from './release-group.js';
import type { ICollection } from './collection.js';
import type { IArea } from './area.js';
import type { ITrack } from './recording.js';
import type { ILabelInfo } from './label.js';
import { MiscIncludes, RelationsIncludes } from '../relations/index.js';
import {
  IBrowseReleasesQuery,
  IBrowseReleasesResult,
  IReleaseList,
} from '../search/index.js';
import {
  Browse,
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';

export type ReleaseStatus =
  | 'Official'
  | 'Promotion'
  | 'Bootleg'
  | 'Pseudo-release'
  | 'Withdrawn'
  | 'Expunged'
  | 'Cancelled';

export type ReleaseQuality = 'normal' | 'high';

export type ReleasePackaging =
  | 'Book'
  | 'Box'
  | 'Cardboard/Paper Sleeve'
  | 'Cassette Case'
  | 'Clamshell Case'
  | 'Digibook'
  | 'Digifile'
  | 'Digipak'
  | 'Discbox Slider'
  | 'Fatbox'
  | 'Gatefold Cover'
  | 'Jewel case'
  | 'Keep Case'
  | 'Longbox'
  | 'Metal Tin'
  | 'Plastic sleeve'
  | 'Slidepack'
  | 'Slim Jewel Case'
  | 'Snap Case'
  | 'SnapPack'
  | 'Super Jewel Box'
  | 'Other'
  | 'None';

export interface ICoverArtArchive {
  count: number;
  front: boolean;
  darkened: boolean;
  artwork: boolean;
  back: boolean;
}

export interface IReleaseEvent {
  area?: IArea;
  date?: string;
}

export interface IMedium {
  title: string;
  format?: string; // optional, type doesn't work
  'format-id': string;
  tracks: ITrack[];
  'track-count': number;
  'track-offset': number;
  position: number;
}

export interface IRelease
  extends IEntity,
    IMayHaveRelations,
    IMayHaveTagsAndGenres {
  title: string;
  'text-representation': { language: string; script: string };
  disambiguation: string;
  asin: null | string;
  status: ReleaseStatus;
  'status-id': string;
  packaging?: ReleasePackaging;
  'packaging-id'?: string;
  'release-events'?: IReleaseEvent[];
  date: string;
  media: IMedium[];
  'cover-art-archive': ICoverArtArchive;
  country: string;
  quality: ReleaseQuality;
  barcode: string;
  'artist-credit'?: IArtistCredit[];
  'release-group'?: IReleaseGroup;
  collections?: ICollection[];
  'track-count'?: number;
  count?: number;
  'label-info'?: ILabelInfo[];
}

export type ReleaseEntity = {
  inc: MiscIncludes | RelationsIncludes;
  search: Search<SearchPayload<MiscIncludes | RelationsIncludes>, IReleaseList>;
  browse: Browse<IBrowseReleasesQuery, IBrowseReleasesResult>;
  lookup: Lookup<LookupPayload<MiscIncludes | RelationsIncludes>, IRelease>;
};