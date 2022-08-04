import he from "he";

import { loadMafiaData } from "./utils";

export enum FamiliarStatus {
  NONE = 0,
  HATCHLING = 1,
  TERRARIUM = 2,
}

export type FamiliarDef = {
  id: number;
  name: string;
  image: string;
  pokefam: boolean;
};

const isPokefam = (familiarId: number) => {
  return familiarId >= 215 && familiarId < 260;
};

const parseFamiliar = (parts: string[]): FamiliarDef => ({
  id: Number(parts[0]),
  name: he.decode(parts[1]),
  image: parts[2],
  pokefam: isPokefam(Number(parts[0])),
});

export const loadFamiliars = async () => {
  const raw = await loadMafiaData("familiars");
  return raw.filter((p) => p.length > 2).map(parseFamiliar);
};

export type RawFamiliar = [id: number, status: FamiliarStatus, hundredPercent: boolean];

export const compressFamiliars = (familiars: RawFamiliar[]) =>
  familiars
    .sort((a, b) => a[0] - b[0])
    .reduce(
      (r, familiar) =>
        `${r}${"0".repeat(familiar[0] - r.length - 1)}${familiar[1]}${familiar[2] ? "*" : ""}`,
      ""
    )
    .replace(/0+$/, "");

export const expandFamiliars = (s: string) => {
  let id = 0;

  let result = [] as RawFamiliar[];

  for (const c of s) {
    if (c === "*" && result.length > 0) {
      result[result.length - 1][2] = true;
      continue;
    }

    result.push([++id, Number(c), false]);
  }

  return result;
};