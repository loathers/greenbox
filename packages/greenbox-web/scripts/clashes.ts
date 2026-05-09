import type { ThingType } from "@prisma/client";
import { createClient, Effect, Familiar, Item, Skill } from "data-of-loathing";
import { getTattoos, getTrophies } from "greenbox-data";
import he from "he";

import { prisma } from "../app/db";

const client = createClient();
await client.load();

const findDuplicates = (strings: string[]) => {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const string of strings) {
    if (seen.has(string)) {
      duplicates.add(string);
    } else {
      seen.add(string);
    }
  }
  return duplicates;
};

const [skills, effects, items, familiars] = await Promise.all([
  client.query.findAll(Skill, { populate: ["modifiers"] }),
  client.query.findAll(Effect, { populate: ["modifiers"] }),
  client.query.findAll(Item, { populate: ["modifiers"] }),
  client.query.findAll(Familiar, { populate: ["modifiers"] }),
]);

const tattoos = getTattoos();
const trophies = getTrophies();

const things = {
  SKILL: skills,
  EFFECT: effects,
  ITEM: items,
  FAMILIAR: familiars,
  TATTOO: tattoos,
  TROPHY: trophies,
};

function isThingType(type: string): type is ThingType {
  return ["SKILL", "EFFECT", "ITEM", "FAMILIAR", "TATTOO", "TROPHY"].includes(
    type,
  );
}

function wikiName(
  thing: (typeof things)[keyof typeof things][number],
): string | null {
  if (!thing) return null;
  let modifiers: Record<string, string> | undefined;
  if (thing instanceof Skill || thing instanceof Effect || thing instanceof Item || thing instanceof Familiar) {
    modifiers = thing.modifiers?.modifiers;
  } else {
    return null;
  }
  if (!modifiers) return null;
  if ("Wiki Name" in modifiers === false) return null;
  const wikiName = modifiers["Wiki Name"];
  if (typeof wikiName !== "string") return null;
  return wikiName.slice(1, -1);
}

const thingNames = Object.values(things)
  .flatMap((t) => t.map((e) => e?.name))
  .filter((name) => name !== undefined);

const clashes = findDuplicates(thingNames);

// These clash with other things like adventures
clashes.add("Some Assembly Required");
clashes.add("Batter Up!");

for (const [type, thingsOfType] of Object.entries(things)) {
  if (!isThingType(type)) continue;

  const wikiLinks = thingsOfType
    .filter((e) => e && e.name !== undefined)
    .filter((e) => clashes.has(e!.name) || wikiName(e))
    .map((e) => ({
      name: e!.name,
      type,
      url:
        wikiName(e)?.replaceAll(" ", "_") ??
        `${he.decode(e!.name).replaceAll(" ", "_")}_(${type.toLowerCase()})`,
      manual: false,
    }));

  await prisma.wikiLinks.createMany({
    data: wikiLinks,
    skipDuplicates: true,
  });
}
