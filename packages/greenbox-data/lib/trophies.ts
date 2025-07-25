import trophies from "../data/trophies.js";

export enum TrophyStatus {
  NONE = 0,
  HAVE = 1,
}

export function getTrophies() {
  return trophies;
}

export type RawTrophy = [id: number, status: TrophyStatus];

export const compressTrophies = (trophies: RawTrophy[]): string =>
  trophies
    .sort((a, b) => a[0] - b[0])
    .reduce(
      (r, trophy) => `${r}${"0".repeat(trophy[0] - r.length - 1)}${trophy[1]}`,
      "",
    )
    .replace(/0+$/, "");

export const expandTrophies = (s = ""): RawTrophy[] =>
  s.split("").map((c, i) => [i + 1, Number(c)]);
