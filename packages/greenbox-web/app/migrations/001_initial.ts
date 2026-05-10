import { type Kysely, sql } from "kysely";

export async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable("Player")
    .ifNotExists()
    .addColumn("playerId", "integer", (col) => col.primaryKey().notNull())
    .addColumn("playerName", "text", (col) => col.notNull())
    .execute();

  await db.schema
    .createTable("Greenbox")
    .ifNotExists()
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("playerId", "integer", (col) =>
      col.notNull().references("Player.playerId"),
    )
    .addColumn("data", "jsonb", (col) => col.notNull())
    .addColumn("createdAt", "timestamp", (col) =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`),
    )
    .execute();

  await db.schema.dropTable("_prisma_migrations").ifExists().execute();
  await db.schema.dropTable("WikiLinks").ifExists().execute();
  await sql`DROP TYPE IF EXISTS "ThingType"`.execute(db);
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable("Greenbox").ifExists().execute();
  await db.schema.dropTable("Player").ifExists().execute();
}
