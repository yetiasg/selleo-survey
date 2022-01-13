import dotenv from "dotenv";

dotenv.config();
export const config = {
  NODE_ENV: process.env.NODE_ENV,
  server: {
    PORT: process.env.PORT || 3005,
  },
  db: {
    MONGO_DB_USERNAME: process.env.MONGO_DB_USERNAME,
    MONGO_BD_PASSWORD: process.env.MONGO_BD_PASSWORD,
  },
};
