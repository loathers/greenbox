import { expand } from "greenbox-data";
import { data } from "react-router";
import * as z from "zod";

import { prisma } from "../db.js";
import { isSnapshotDifferent } from "../utils.server.js";

import type { Route } from "./+types/webhooks.update.js";

const Payload = z.object({
  playerId: z.number(),
  playerName: z.string(),
  greenboxString: z.string(),
});

export async function action({ request }: Route.ActionArgs) {
  // Only allow POST requests
  if (request.method !== "POST") {
    return data({ error: "Method not allowed" }, { status: 405 });
  }

  const auth = request.headers.get("Authorization");
  if (auth !== "Bearer " + process.env.WEBHOOK_SECRET) {
    return data({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Parse the request body
    const body = await request.json();
    const payload = Payload.parse(body);

    const { playerId, greenboxString, playerName } = payload;

    const player = await prisma.player.upsert({
      where: { playerId },
      update: {},
      create: {
        playerId,
        playerName,
      },
      include: {
        greenbox: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    const greenboxData = expand(greenboxString);

    if (!isSnapshotDifferent(player.greenbox.at(0)?.data, greenboxData)) {
      const id = player.greenbox.at(0)!.id;
      return data(
        {
          success: true,
          id,
          message: "Greenbox data unchanged since last update",
        },
        { status: 201 },
      );
    }

    const { id } = await prisma.greenbox.create({
      data: {
        playerId,
        data: { ...greenboxData },
      },
    });

    return data(
      {
        success: true,
        id,
        message: "Greenbox data saved",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error saving greenbox data:", error);

    if (error instanceof z.ZodError) {
      return data(
        { error: "Invalid request body", reason: z.prettifyError(error) },
        { status: 400 },
      );
    }

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return data({ error: "Invalid JSON in request body" }, { status: 400 });
    }

    return data({ error: "Internal server error" }, { status: 500 });
  }
}

// Handle GET requests to return method info
export async function loader() {
  return data({
    endpoint: "/api/saveGreebox",
    method: "POST",
    description: "Webhook endpoint to save greenbox data",
    requiredFields: ["playerId", "data"],
    optionalFields: ["playerName"],
    example: {
      playerId: 12345,
      playerName: "SamplePlayer",
      data: {
        // greenbox data structure
      },
    },
  });
}
