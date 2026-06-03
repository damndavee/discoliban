export type Relationships =
  | 'area-rels'
  | 'artist-rels'
  | 'event-rels'
  | 'instrument-rels'
  | 'label-rels'
  | 'place-rels'
  | 'recording-rels'
  | 'release-rels'
  | 'release-group-rels'
  | 'series-rels'
  | 'url-rels'
  | 'work-rels';

export type MiscIncludes =
  | 'aliases'
  | 'annotation'
  | 'tags'
  | 'genres'
  | 'ratings'
  | 'media';

export type RelationsIncludes =
  | 'area-rels'
  | 'artist-rels'
  | 'event-rels'
  | 'genre-rels'
  | 'instrument-rels'
  | 'label-rels'
  | 'place-rels'
  | 'recording-rels'
  | 'release-rels'
  | 'release-group-rels'
  | 'series-rels'
  | 'url-rels'
  | 'work-rels';

export type ArtistIncludes =
  | MiscIncludes
  | RelationsIncludes
  | 'recordings'
  | 'releases'
  | 'release-groups'
  | 'works';

