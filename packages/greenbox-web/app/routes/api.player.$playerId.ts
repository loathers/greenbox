import { data } from "react-router";

import { db } from "../db.js";

import type { Route } from "./+types/api.player.$playerId.js";

export async function loader({ params }: Route.ActionArgs) {
  const playerId = params.playerId;

  if (!playerId) {
    return data({ error: "Player ID is required" }, { status: 400 });
  }

  try {
    const player = await db
      .selectFrom("Player")
      .where("playerId", "=", Number(playerId))
      .selectAll()
      .executeTakeFirst();

    if (!player) {
      return data({ error: "Player not found" }, { status: 404 });
    }

    const greenbox =
      (await db
        .selectFrom("Greenbox")
        .where("playerId", "=", Number(playerId))
        .orderBy("createdAt", "desc")
        .selectAll()
        .executeTakeFirst()) ?? null;

    return data({ ...player, greenbox }, { status: 200 });
  } catch (error) {
    console.error("Error fetching player data:", error);
    return data({ error: "Internal server error" }, { status: 500 });
  }
}
