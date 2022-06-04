import pg from "pg";
import * as config from "../config.js";

export const pool = new pg.Pool({
  host: config.DB_HOST,
  user: config.DB_USER,
  database: config.DB_DATABASE,
  password: config.DB_PASSWORD,
  port: config.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});
