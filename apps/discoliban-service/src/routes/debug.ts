import { Router } from 'express';

export const createDebugRouter = (): Router => {
  const router = Router();

  router.get('/', (req, res) => {
    res.send({ message: 'Hello API' });
  });

  return router;
};
