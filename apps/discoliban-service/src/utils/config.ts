import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '4000', 10),
  host: process.env.HOST ?? 'localhost',
  env: process.env.NODE_ENV || 'development',
  musicbrainz: {
    baseUrl: 'https://musicbrainz.org/ws/2',
    userAgent: process.env.USER_AGENT || 'user agent',
    requestTimeout: 5000,
  },
} as const;