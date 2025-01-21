import * as fs from "fs/promises";
import { loadTattoos, OutfitTattooStatus } from "greenbox-data";
import { describe, expect, it, vi } from "vitest";

import { getTattooStatus } from "./greenbox.js";

vi.mock("libram", () => ({
  property: {
    getBoolean: vi.fn(),
  },
}));

const tattoos = loadTattoos()?.data ?? [];

describe("Tattoo parsing", () => {
  it("can detect lack of Gattoo when player has other substring tattoos", async () => {
    const glover = tattoos.find((t) => "misc" in t && t.misc === 37)!;

    expect(glover).not.toBe(undefined);

    const page = await fs.readFile(
      `${__dirname}/__fixtures__/fronobulax_20240521_account_tattoos.html`,
      "utf-8",
    );

    const status = getTattooStatus(page, glover);

    expect(status).toBe(OutfitTattooStatus.NONE);
  });

  it("can detect Guzzlr tattoos", async () => {
    const guzzlrOutfit = tattoos.find(
      (t) => "outfit" in t && t.outfit === 159,
    )!;

    expect(guzzlrOutfit).not.toBe(undefined);

    const page = await fs.readFile(
      `${__dirname}/__fixtures__/fronobulax_20240521_account_tattoos.html`,
      "utf-8",
    );

    const status = getTattooStatus(page, guzzlrOutfit);

    expect(status).toBe(OutfitTattooStatus.HAVE);
  });
});
