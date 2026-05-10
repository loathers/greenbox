import { defineConfig } from "kysely-ctl";

import { db } from "./app/db.js";

export default defineConfig({
  kysely: db,
  migrations: {
    migrationFolder: "./app/migrations",
  },
});
