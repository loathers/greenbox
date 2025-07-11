import { data } from "react-router";
import * as z from "zod";

import { prisma } from "../db.js";

import type { Route } from "./+types/webhooks.update.js";

const Payload = z.object({
  playerId: z.number(),
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

    const { playerId } = payload;

    const { count } = await prisma.greenbox.deleteMany({
      where: { playerId },
    });

    return data(
      {
        success: true,
        playerId,
        message: `All greenbox records deleted`,
        count,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error wiping greenbox data:", error);

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
