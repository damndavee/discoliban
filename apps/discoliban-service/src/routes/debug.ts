import { Router } from 'express';
import { logger } from '../utils';
import { musicBrainzService } from '../services/mb';
import { EntityType } from '@discoliban/types/mb';
import {
  parseQuery,
  buildSearchInput,
  buildBrowseInput, buildLookupInput,
} from '../services/helpers/mb.helper';

export const createDebugRouter = (): Router => {
  const router = Router();

  // SEARCH DEBUG
  router.get('/search/artists', async (req, res) => {
    const rawQuery = parseQuery(req);
    const { query, limit, offset, inc } = buildSearchInput(
      EntityType.artist,
      rawQuery,
    );

    logger.info('Debug Search -> artists');

    try {
      const results = await musicBrainzService.search(EntityType.artist, {
        query,
        inc,
        offset,
        limit,
      });
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: `Failed to fetch results: ${error}` });
    }
  });

  router.get('/search/releases', async (req, res) => {
    const rawQuery = parseQuery(req);
    const { inc, offset, limit, query } = buildSearchInput(
      EntityType.release,
      rawQuery,
    );

    logger.info('Debug Search -> releases');

    try {
      const results = await musicBrainzService.search(EntityType.release, {
        query,
        inc,
        offset,
        limit,
      });
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: `Failed to fetch results: ${error}` });
    }
  });

  router.get('/search/release-groups', async (req, res) => {
    const rawQuery = parseQuery(req);
    const { inc, offset, limit, query } = buildSearchInput(
      EntityType.releaseGroup,
      rawQuery,
    );

    logger.info('Debug Search -> release-groups');

    try {
      const results = await musicBrainzService.search(EntityType.releaseGroup, {
        query,
        inc,
        offset,
        limit,
      });
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: `Failed to fetch results: ${error}` });
    }
  });

  // BROWSE DEBUG
  router.get('/browse/artist', async (req, res) => {
    const rawQuery = parseQuery(req);
    const input = buildBrowseInput(EntityType.artist, rawQuery, req.query);

    logger.info('Debug browse -> artist');

    try {
      const results = await musicBrainzService.browse(EntityType.artist, input);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: `Failed to fetch results: ${error}` });
    }
  });

  router.get('/browse/releases', async (req, res) => {
    const rawQuery = parseQuery(req);
    const input = buildBrowseInput(EntityType.release, rawQuery, req.query);

    logger.info('Debug browse -> releases');

    try {
      const results = await musicBrainzService.browse(
        EntityType.release,
        input,
      );
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: `Failed to fetch results: ${error}` });
    }
  });

  // LOOKUP DEBUG
  router.get("/lookup/artist", async (req, res) => {
    const rawQuery = parseQuery(req);
    const { inc, mbid } = buildLookupInput(EntityType.artist, rawQuery);

    logger.info('Debug lookup -> artist');

    try {
      const results = await musicBrainzService.lookup(EntityType.artist, { mbid, inc });
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: `Failed to fetch results: ${error}` });
    }
  })

  return router;
};
