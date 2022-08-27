import { loadMafiaData } from "./utils";

export type EffectDef = {
  id: number;
  name: string;
  image: string;
};

const parseEffect = (parts: string[]): EffectDef => ({
  id: Number(parts[0]),
  name: parts[1],
  image: parts[2],
});

export const loadEffects = async (lastKnownSize: number) => {
  const raw = await loadMafiaData("statuseffects", lastKnownSize);

  if (raw === null) return null;

  return {
    ...raw,
    data: raw.data.filter((p) => p.length > 2).map(parseEffect),
  };
};
