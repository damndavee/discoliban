import { config, logger } from '../utils';
import { UrlBuilder, HttpClient } from '../utils';
import { BrowsableEntity, Payload, Response, SearchableEntity, LookupEntity } from '../types/service/misc';
import { EntityMap } from '@discoliban/types';
import { getBrowseParam } from './helpers/mb.helper';

// search:   /<ENTITY_TYPE>?query=<QUERY>&limit=<LIMIT>&offset=<OFFSET>
// browse:   /<RESULT_ENTITY_TYPE>?<BROWSING_ENTITY_TYPE>=<MBID>&limit=<LIMIT>&offset=<OFFSET>&inc=<INC>
// lookup:   /<ENTITY_TYPE>/<MBID>?inc=<INC>

class MusicBrainzService {
  private baseUrl: string;
  private http: HttpClient;

  constructor() {
    this.baseUrl = config.musicbrainz.baseUrl;

    this.http = new HttpClient({
      defaultHeaders: {
        'User-Agent': config.musicbrainz.userAgent,
        Accept: 'application/json',
      },
      timeout: config.musicbrainz.requestTimeout,
      retries: 2,
    });
  }

  async search<E extends SearchableEntity>(
    entity: E,
    { query, inc, offset = 0, limit = 25 }: Payload<E, 'search'>,
  ): Promise<Response<E, 'search'>> {
    logger.debug('Searching MusicBrainz using search', { entity, query });

    const url = new UrlBuilder(this.baseUrl, { fmt: 'json' })
      .path(entity)
      .set('query', query)
      .set('limit', limit)
      .set('offset', offset)
      .set('inc', (inc || []).toString())
      .build();

    return this.http.get<Response<E, 'search'>>(url);
  }

  async browse<E extends BrowsableEntity>(
    entity: E,
    payload: Payload<E, 'browse'>,
    options?: {
      inc?: EntityMap[E]['inc'][];
    },
  ): Promise<Response<E, 'browse'>> {
    logger.debug('Searching MusicBrainz using browse', { entity, payload });

    const url = new UrlBuilder(this.baseUrl, { fmt: 'json' }).path(entity);
    const params = getBrowseParam(payload);

    if (!params) {
      throw new Error('Invalid browse payload');
    }

    const [browseBy, mbid] = params;

    url.set(browseBy, mbid);

    if ('limit' in payload && payload.limit !== undefined) {
      url.set('limit', payload.limit);
    }

    if ('offset' in payload && payload.offset !== undefined) {
      url.set('offset', payload.offset);
    }

    if (options?.inc?.length) {
      url.set('inc', (options.inc || []).toString());
    }

    return this.http.get<Response<E, 'browse'>>(url.build());
  }

  async lookup<E extends LookupEntity>(entity: E, { inc, mbid } : Payload<E, 'lookup'>): Promise<Response<E, 'lookup'>> {
    logger.debug('Searching MusicBrainz using lookup', { entity, mbid });

    const url = new UrlBuilder(this.baseUrl, { fmt: 'json' })
      .path(`${entity}/${mbid}`)
      .set('inc', (inc || []).toString())
      .build();

    return this.http.get<Response<E, 'lookup'>>(url);
  }
}

export const musicBrainzService = new MusicBrainzService();
