import type {
  IWork,
  IPlace,
  IInstrument,
  IArtist,
  IRelease,
  IArea,
  IEvent,
  ILabel,
  ISeries,
  IUrl,
  IReleaseGroup,
  IRecording,
} from '../entities/index.js';
import type { IGenre } from '../common/rating.js';

export type RelationDirection = 'backward' | 'forward';

export interface IRelation {
  artist?: IArtist;
  'attribute-ids': unknown[];
  direction: RelationDirection;
  'target-credit': string;
  end: null | unknown;
  'source-credit': string;
  ended: boolean;
  'attribute-values': unknown[];
  attributes?: any[];
  type: string;
  begin?: null | unknown;
  'target-type'?: 'url';
  'type-id': string;
  url?: IUrl;
  release?: IRelease;
  area?: IArea;
  event?: IEvent;
  genre?: IGenre;
  instrument?: IInstrument;
  label?: ILabel;
  place?: IPlace;
  recording?: IRecording;
  release_group?: IReleaseGroup;
  series?: ISeries;
  work?: IWork;
}

export type { IMayHaveRelations } from '../common/mixins.js';



