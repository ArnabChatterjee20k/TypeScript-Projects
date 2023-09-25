import type { Config } from "drizzle-kit";
import { DB_URL } from "./src/db/setup";

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    connectionString: DB_URL,
  },
  driver: "mysql2",
} satisfies Config;