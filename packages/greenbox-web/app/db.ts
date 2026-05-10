import { Kysely, PostgresDialect, type Generated } from "kysely";
import pg from "pg";

export interface Database {
  Greenbox: {
    id: Generated<number>;
    playerId: number;
    data: unknown;
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
