import { expand } from "greenbox-data";
import { data } from "react-router";
import * as z from "zod";

import { db } from "../db.js";
import { isSnapshotDifferent } from "../utils.server.js";

import type { Route } from "./+types/webhooks.update.js";

const Payload = z.object({
  playerId: z.number(),
  playerName: z.string(),
  greenboxString: z.string(),
});

const EXPECTED_AUTH = `Bearer ${process.env.WEBHOOK_SECRET}`;

export async function action({ request }: Route.ActionArgs) {
  // Only allow POST requests
  if (request.method !== "POST") {
    return data({ error: "Method not allowed" }, { status: 405 });
  }

  const auth = request.headers.get("Authorization");
  console.log("webhook auth received:", JSON.stringify(auth));
  console.log("expected auth:", EXPECTED_AUTH);
  console.log("auth matches expected:", auth === EXPECTED_AUTH);
  if (auth !== EXPECTED_AUTH) {
    return data({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Parse the request body
    const body = await request.json();
    const payload = Payload.parse(body);

    const { playerId, greenboxString, playerName } = payload;

    const latestGreenbox = await db
      .with("upsert", (db) =>
        db
          .insertInto("Player")
          .values({ playerId, playerName })
          .onConflict((oc) => oc.column("playerId").doNothing())
          .returning("playerId"),
      )
      .selectFrom("Greenbox")
      .where("playerId", "=", playerId)
      .orderBy("createdAt", "desc")
      .limit(1)
      .selectAll()
      .executeTakeFirst();

    const greenboxData = expand(greenboxString);

    if (!isSnapshotDifferent(latestGreenbox?.data, greenboxData)) {
      const id = latestGreenbox!.id;
      return data(
        {
          success: true,
          id,
          message: "Greenbox data unchanged since last update",
        },
        { status: 201 },
      );
    }

    const { id } = await db
      .insertInto("Greenbox")
      .values({ playerId, data: JSON.stringify(greenboxData) })
      .returning("id")
      .executeTakeFirstOrThrow();

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
