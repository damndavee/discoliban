import express, { Express } from 'express';
import cors from 'cors';
import path from 'path';
import { createDebugRouter } from './routes/debug';
import { config } from './utils';

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

  return app;
}

export async function startServer(): Promise<void> {
  try {
    const app = createApp();
    const server = app.listen(config.port, () => {
      console.info(`🚀 Server running on http://localhost:${config.port}`);
      console.info(`Environment: ${config.env}`);
    });

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        const newPort = config.port + 1;

        console.log(`Port ${config.port} busy, retrying on ${newPort}`);

        app.listen(newPort, () => {
          console.info(`🚀 Server running on http://localhost:${newPort}`);
        });
      }
    });

    process.on('SIGTERM', () => {
     console.info('SIGTERM received, shutting down gracefully...');
     server.close(() => {
       console.info('Server closed');
       process.exit(0);
     });
   });

   process.on('SIGINT', () => {
     console.info('SIGINT received, shutting down gracefully...');
     server.close(() => {
       console.info('Server closed');
       process.exit(0);
     });
   });

 } catch (error) {
   console.error('Failed to start server', error);
   process.exit(1);
 }
}

