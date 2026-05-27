import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || "4000", 10),
  host: process.env.HOST ?? 'localhost',
  env: process.env.NODE_ENV || "development",
} as const;