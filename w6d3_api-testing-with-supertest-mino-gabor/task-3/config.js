// HELPER CODE:
// A useful library on NPM that gives us some quick, early feedback if our environment is misconfigured.
// For example, we'll get a helpful error message if an environment variable is required but not set/loaded.
// Details: https://www.npmjs.com/package/env-var
import env from "env-var";

export const DB_HOST = env.get("PGHOST").required().asString();
export const DB_USER = env.get("PGUSER").required().asString();
export const DB_DATABASE = env.get("PGDATABASE").required().asString();
export const DB_PASSWORD = env.get("PGPASSWORD").required().asString();
export const DB_PORT = env.get("PGPORT").required().asPortNumber();
