import express, { Express } from 'express';
import cors from 'cors';
import path from 'path';
import { createDebugRouter } from './routes/debug';
import { config, logger } from './utils';
import { errorMiddleware } from './middleware';

export function createApp(): Express {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/assets', express.static(path.join(__dirname, 'assets')));

  app.use('/debug', createDebugRouter());

  app.use((req, res) => {
    res.status(404).json({
      error: 'Route not found',
      status: 404,
    });
  });

  app.use(errorMiddleware.errorHandler)

  return app;
}

export async function startServer(): Promise<void> {
  try {
    const app = createApp();
    const server = app.listen(config.port, () => {
      logger.info(`🚀 Server running on http://localhost:${config.port}`);
      logger.info(`Environment: ${config.env}`);
    });

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        const newPort = config.port + 1;

        logger.info(`Port ${config.port} busy, retrying on ${newPort}`);

        app.listen(newPort, () => {
          logger.info(`🚀 Server running on http://localhost:${newPort}`);
        });
      }
    });

    process.on('SIGTERM', () => {
     logger.info('SIGTERM received, shutting down gracefully...');
     server.close(() => {
       logger.info('Server closed');
       process.exit(0);
     });
   });

   process.on('SIGINT', () => {
     logger.info('SIGINT received, shutting down gracefully...');
     server.close(() => {
       logger.info('Server closed');
       process.exit(0);
     });
   });

 } catch (error) {
   logger.error('Failed to start server', error);
   process.exit(1);
 }
}

