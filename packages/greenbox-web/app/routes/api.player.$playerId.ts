import { data } from "react-router";

import { db } from "../db.js";

import type { Route } from "./+types/api.player.$playerId.js";

export async function loader({ params }: Route.ActionArgs) {
  const playerId = params.playerId;

  if (!playerId) {
    return data({ error: "Player ID is required" }, { status: 400 });
  }

  try {
    const row = await db
      .selectFrom("Player")
      .where("Player.playerId", "=", Number(playerId))
      .leftJoin(
        (eb) =>
          eb
            .selectFrom("Greenbox")
            .where("playerId", "=", Number(playerId))
            .orderBy("createdAt", "desc")
            .limit(1)
            .select(["id", "playerId", "data", "createdAt"])
            .as("g"),
        (join) => join.onRef("g.playerId", "=", "Player.playerId"),
      )
      .select([
        "Player.playerId",
        "Player.playerName",
        "g.id as greenboxId",
        "g.data as greenboxData",
        "g.createdAt as greenboxCreatedAt",
      ])
      .executeTakeFirst();

    if (!row) {
      return data({ error: "Player not found" }, { status: 404 });
    }

    const greenbox =
      row.greenboxId !== null
        ? {
            id: row.greenboxId,
            playerId: Number(playerId),
            data: row.greenboxData,
            createdAt: row.greenboxCreatedAt,
          }
        : null;

    return data(
      { playerId: row.playerId, playerName: row.playerName, greenbox },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching player data:", error);
    return data({ error: "Internal server error" }, { status: 500 });
  }
}
