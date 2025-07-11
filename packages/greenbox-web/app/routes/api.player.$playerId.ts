import { data } from "react-router";

import { prisma } from "../db.js";

import type { Route } from "./+types/api.player.$playerId.js";

export async function action({ request, params }: Route.ActionArgs) {
  // Only allow POST requests
  if (request.method !== "GET") {
    return data({ error: "Method not allowed" }, { status: 405 });
  }

  const playerId = params.playerId;

  if (!playerId) {
    return data({ error: "Player ID is required" }, { status: 400 });
  }

  try {
    // Fetch the player data
    const player = await prisma.player.findUnique({
      where: { playerId: Number(playerId) },
      include: {
        greenbox: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    if (!player) {
      return data({ error: "Player not found" }, { status: 404 });
    }

    return data(
      {
        success: true,
        player,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching player data:", error);
    return data({ error: "Internal server error" }, { status: 500 });
  }
}
