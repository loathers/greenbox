import trophies from "../data/trophies";

export type TrophyDef = {
  id: number;
  name: string;
  image: string;
};

export function loadTrophies(): TrophyDef[] {
  return trophies;
}
