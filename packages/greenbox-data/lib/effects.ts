import he from "he";

import { loadMafiaData } from "./utils";

export type EffectDef = {
  id: number;
  name: string;
  image: string;
};

const parseEffect = (parts: string[]): EffectDef => ({
  id: Number(parts[0]),
  name: he.decode(parts[1]),
  image: parts[2],
});

export const loadEffects = async () => {
  const raw = await loadMafiaData("statuseffects");
  return raw.filter((p) => p.length > 2).map(parseEffect);
};
