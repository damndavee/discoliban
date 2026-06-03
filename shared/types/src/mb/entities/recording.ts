import type {
  IMayHaveRelations,
  IMayHaveTagsAndGenres,
  IMayHaveRating,
  IEntity,
} from '../common/index.js';
import type { IRelease } from './release.js';
import type { IArtistCredit } from './artist.js';
import type { IAlias } from './alias.js';
import {
  Browse,
  Lookup,
  LookupPayload,
  Search,
  SearchPayload,
} from '../common/base.js';
import { MiscIncludes, RelationsIncludes } from '../relations/index.js';
import {
  IBrowseRecordingsQuery,
  IBrowseRecordingsResult,
  IRecordingList,
} from '../search/index.js';

export interface IRecording
  extends IEntity,
    IMayHaveRelations,
    IMayHaveTagsAndGenres,
    IMayHaveRating {
  video: boolean;
  length: number;
  title: string;
  disambiguation: string;
  isrcs?: string[];
  releases?: IRelease[];
  'artist-credit'?: IArtistCredit[];
  aliases?: IAlias[];
  'first-release-date': string;
}

export interface ITrack extends IEntity {
  position: number;
  recording: IRecording;
  number: string; // in JSON, this is a string field
  length: number;
  title: string;
  'artist-credit'?: IArtistCredit[];
}

type RecordingInc = MiscIncludes | RelationsIncludes;

export type RecordingEntity = {
  inc: RecordingInc;
  search: Search<SearchPayload<RecordingInc>, IRecordingList>;
  browse: Browse<IBrowseRecordingsQuery, IBrowseRecordingsResult>;
  lookup: Lookup<LookupPayload<RecordingInc>, IRecording>;
};
