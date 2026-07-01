import type { RawSnapshotData } from "greenbox-data";
import {
  type ColumnType,
  Kysely,
  PostgresDialect,
  type Generated,
} from "kysely";
import pg from "pg";

export interface Database {
  Greenbox: {
    id: Generated<number>;
    playerId: number;
    data: ColumnType<RawSnapshotData, string, string>;
    createdAt: Generated<Date>;
  };
  Player: {
    playerId: number;
    playerName: string;
  };
}

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new pg.Pool({ connectionString: process.env.DATABASE_URL }),
  }),
});
