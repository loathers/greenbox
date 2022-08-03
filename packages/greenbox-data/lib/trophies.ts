import trophies from "../data/trophies";

export type TrophyDef = typeof trophies[number];

export function loadTrophies(): readonly TrophyDef[] {
  return trophies;
}
