import { ArtistKind, ArtistLabel, MBArtist } from '../artist/index.js';

export interface SearchOptions {
  query: string;
  limit?: number;
}

export interface MusicBrainzResponse {
  artists: MBArtist[];
}

export interface SearchResult {
  id: string;
  name: string;
  kind: ArtistKind;
  label: ArtistLabel;
  isBestMatch: boolean;
  description: string;
}
