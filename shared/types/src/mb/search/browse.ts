import type { IPagination, OneOf, IReleaseTypeAndStatus } from './query.js';
import type {
  IWork,
  IUrl,
  IArea,
  ICollection,
  IArtist,
  IPlace,
  IEvent,
  IInstrument,
  ISeries,
  ILabel,
  IRecording,
  IReleaseGroup,
  IRelease,
} from '../entities/index.js';

export interface ILinkedEntitiesArea {
  collection?: string;
}

export interface ILinkedEntitiesArtist {
  area?: string;
  collection?: string;
  recording?: string;
  release?: string;
  'release-group'?: string;
  work?: string;
}

export interface ILinkedEntitiesCollection {
  area?: string;
  artist?: string;
  editor?: string;
  event?: string;
  label?: string;
  place?: string;
  recording?: string;
  release?: string;
  'release-group'?: string;
  work?: string;
}

/**
 * https://musicbrainz.org/doc/MusicBrainz_API#Subqueries
 * /ws/2/event             area, artist, collection, place
 */
export interface ILinkedEntitiesEvent {
  area?: string;
  artist?: string;
  collection?: string;
  place?: string;
}

export interface ILinkedEntitiesInstrument {
  collection?: string;
}

export interface ILinkedEntitiesLabel {
  area?: string;
  collection?: string;
  release?: string;
}

export interface ILinkedEntitiesPlace {
  place?: string;
}

export interface IBrowseArgumentPlace {
  area?: string;
  collection?: string;
}

export interface ILinkedEntitiesRecording {
  area?: string;
  collection?: string;
  release?: string;
  work?: string;
}

export interface ILinkedEntitiesRelease {
  area?: string;
  artist?: string;
  collection?: string;
  label?: string;
  track?: string;
  track_artist?: string;
  recording?: string;
  'release-group'?: string;
}

export interface ILinkedEntitiesReleaseGroup {
  artist?: string;
  collection?: string;
  release?: string;
}

export interface ILinkedEntitiesSeries {
  collection?: string;
}

export interface ILinkedEntitiesWork {
  artist?: string;
  collection?: string;
}

export interface ILinkedEntitiesUrl {
  resource?: string;
}

interface BrowseReleasesEntityParams {
  area: string;
  artist: string;
  editor: string;
  event: string;
  label: string;
  place: string;
  recording: string;
  release: string;
  'release-group': string;
  track_artist: string;
  work: string;
}
export type IBrowseReleasesQuery = IPagination &
  IReleaseTypeAndStatus &
  OneOf<BrowseReleasesEntityParams>;

interface BrowseArtistsEntityParams {
  area: string;
  collection: string;
  recording: string;
  release: string;
  'release-group': string;
  work: string;
}
export type IBrowseArtistsQuery = IPagination &
  OneOf<BrowseArtistsEntityParams>;

interface BrowseCollectionsEntityParams {
  area: string;
  artist: string;
  editor: string;
  event: string;
  label: string;
  place: string;
  recording: string;
  release: string;
  'release-group': string;
  work: string;
}
export type IBrowseCollectionsQuery = IPagination &
  OneOf<BrowseCollectionsEntityParams>;

interface BrowseEventsEntityParams {
  area: string;
  artist: string;
  collection: string;
  place: string;
}
export type IBrowseEventsQuery = IPagination & OneOf<BrowseEventsEntityParams>;

interface BrowseLabelsEntityParams {
  area: string;
  collection: string;
  release: string;
}
export type IBrowseLabelsQuery = IPagination & OneOf<BrowseLabelsEntityParams>;

interface BrowsePlacesEntityParams {
  area: string;
  collection: string;
}
export type IBrowsePlacesQuery = IPagination & OneOf<BrowsePlacesEntityParams>;

interface BrowseRecordingsEntityParams {
  artist: string;
  collection: string;
  release: string;
  work: string;
}
export type IBrowseRecordingsQuery = IPagination &
  OneOf<BrowseRecordingsEntityParams>;

interface BrowseReleaseGroupsEntityParams {
  artist: string;
  collection: string;
  release: string;
}
export type IBrowseReleaseGroupsQuery = IPagination &
  IReleaseTypeAndStatus &
  OneOf<BrowseReleaseGroupsEntityParams>;

interface BrowseWorksEntityParams {
  artist: string;
  collection: string;
}
export type IBrowseWorksQuery = IPagination & OneOf<BrowseWorksEntityParams>;

export interface IBrowseAreasQuery extends IPagination {
  collection?: string;
}

export interface IBrowseInstrumentsQuery extends IPagination {
  collection?: string;
}

export interface IBrowseSeriesQuery extends IPagination {
  collection?: string;
}

export interface IBrowseUrlsQuery extends IPagination {
  resource?: string;
}

// =============== Browse Result Types ===============

export interface IBrowseAreasResult {
  area: IArea;
  'area-count': number;
  'area-offset': number;
}

export interface IBrowseArtistsResult {
  artists: IArtist[];
  'artist-count': number;
  'artist-offset': number;
}

export interface IBrowseCollectionsResult {
  collections: ICollection[];
  'collection-count': number;
  'collection-offset': number;
}

export interface IBrowseEventsResult {
  events: IEvent[];
  'event-count': number;
  'event-offset': number;
}

export interface IBrowseInstrumentsResult {
  instruments: IInstrument[];
  'instrument-count': number;
  'instrument-offset': number;
}

export interface IBrowseLabelsResult {
  label: ILabel[];
  'label-count': number;
  'label-offset': number;
}

export interface IBrowsePlacesResult {
  place: IPlace[];
  'place-count': number;
  'place-offset': number;
}

export interface IBrowseRecordingsResult {
  recording: IRecording[];
  'recording-count': number;
  'recording-offset': number;
}

export interface IBrowseReleasesResult {
  releases: IRelease[];
  'release-count': number;
  'release-offset': number;
}

export interface IBrowseReleaseGroupsResult {
  'release-groups': IReleaseGroup[];
  'release-group-count': number;
  'release-group-offset': number;
}

export interface IBrowseSeriesResult {
  series: ISeries[];
  'series-count': number;
  'series-offset': number;
}

export interface IBrowseWorksResult {
  works: IWork[];
  'work-count': number;
  'work-offset': number;
}

export interface IUrlLookupResult {
  'url-offset': number;
  'url-count': number;
  urls: IUrl[];
}

