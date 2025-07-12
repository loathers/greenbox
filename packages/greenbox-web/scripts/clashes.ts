import type { ThingType } from "@prisma/client";
import { createClient } from "data-of-loathing";
import { getTattoos, getTrophies } from "greenbox-data";
import he from "he";

import { prisma } from "../app/db";

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
      skillModifierBySkill: {
        modifiers: true,
      },
    },
  },
  allEffects: {
    nodes: {
      name: true,
      effectModifierByEffect: {
        modifiers: true,
      },
    },
  },
  allItems: {
    nodes: {
      name: true,
      itemModifierByItem: {
        modifiers: true,
      },
    },
  },
  allFamiliars: {
    nodes: {
      name: true,
      familiarModifierByFamiliar: {
        modifiers: true,
      },
    },
  },
});

const tattoos = getTattoos();
const trophies = getTrophies();

const things = {
  SKILL: data.allSkills?.nodes ?? [],
  EFFECT: data.allEffects?.nodes ?? [],
  ITEM: data.allItems?.nodes ?? [],
  FAMILIAR: data.allFamiliars?.nodes ?? [],
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
  let modifiers;
  if ("skillModifierBySkill" in thing) {
    modifiers = thing.skillModifierBySkill?.modifiers;
  } else if ("effectModifierByEffect" in thing) {
    modifiers = thing.effectModifierByEffect?.modifiers;
  } else if ("itemModifierByItem" in thing) {
    modifiers = thing.itemModifierByItem?.modifiers;
  } else if ("familiarModifierByFamiliar" in thing) {
    modifiers = thing.familiarModifierByFamiliar?.modifiers;
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
