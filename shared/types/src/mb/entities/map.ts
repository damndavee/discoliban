import { ArtistEntity } from './artist.js';
import { ReleaseEntity } from './release.js';
import { ReleaseGroupEntity } from './release-group.js';
import { RecordingEntity } from './recording.js';
import { WorkEntity } from './work.js';
import { LabelEntity } from './label.js';
import { AreaEntity } from './area.js';
import { EventEntity } from './event.js';
import { InstrumentEntity } from './instrument.js';
import { SeriesEntity } from './series.js';
import { PlaceEntity } from './place.js';
import { UrlEntity } from './url.js';
import { CdStubEntity } from './cd-stub.js';

export type Entity = keyof EntityMap;

export type EntityMap = {
  artist: ArtistEntity;
  release: ReleaseEntity;
  'release-group': ReleaseGroupEntity;
  recording: RecordingEntity;
  work: WorkEntity;
  label: LabelEntity;
  area: AreaEntity;
  event: EventEntity;
  instrument: InstrumentEntity;
  series: SeriesEntity;
  place: PlaceEntity;
  url: UrlEntity;
  'cd-stub': CdStubEntity;
};