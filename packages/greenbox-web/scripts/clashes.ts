import type { ThingType } from "@prisma/client";
import { prisma } from "../app/db";
import { createClient } from "data-of-loathing";
import { loadTattoos, loadTrophies } from "greenbox-data";
import he from "he";

const client = createClient();

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


const data = await client.query({
  allSkills: {
    nodes: {
      name: true,
    }
  },
  allEffects: {
    nodes: {
      name: true,
    }
  },
  allItems: {
    nodes: {
      name: true,
    }
  },
  allFamiliars: {
    nodes: {
      name: true,
    }
  },
})

const tattoos = loadTattoos()?.data ?? [];
const trophies = loadTrophies()?.data ?? [];

const things = {
  SKILL: data.allSkills?.nodes ?? [],
  EFFECT: data.allEffects?.nodes ?? [],
  ITEM: data.allItems?.nodes ?? [],
  FAMILIAR: data.allFamiliars?.nodes ?? [],
  TATTOO: tattoos,
  TROPHY: trophies,
};

function isThingType(type: string): type is ThingType {
  return [
    "SKILL",
    "EFFECT",
    "ITEM",
    "FAMILIAR",
    "TATTOO",
    "TROPHY",
  ].includes(type);
}

const thingNames = Object.values(things).flatMap((t) => t.map((e) => e?.name)).filter((name) => name !== undefined);

const clashes = findDuplicates(thingNames);

// These clash with other things like adventures
clashes.add("Some Assembly Required");
clashes.add("Batter Up!");

for (const [type, thingsOfType] of Object.entries(things)) {
  if (!isThingType(type)) continue;

  const wikiLinks = thingsOfType
    .map((e) => e?.name)
    .filter((name) => name !== undefined)
    .filter((name) => clashes.has(name))
    .map((name) => ({
      name,
      type,
      url: `${he.decode(name).replaceAll(" ", "_")}_(${type.toLowerCase()})`,
      manual: false,
    }));

  await prisma.wikiLinks.createMany({
    data: wikiLinks,
    skipDuplicates: true,
  });
}
