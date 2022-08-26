import he from "he";

import { loadMafiaData } from "./utils";

export type ItemDef = {
  id: number;
  name: string;
  image: string;
};

export const enum ItemStatus {
  NONE = 0,
  HAVE = 1,
}

const parseItem = (parts: string[]): ItemDef => ({
  id: Number(parts[0]),
  name: he.decode(parts[1]),
  image: parts[3],
});

export const loadItems = async (lastKnownSize: number) => {
  const raw = await loadMafiaData("items", lastKnownSize);

  if (raw === null) return null;

  return {
    ...raw,
    data: raw.data.filter((p) => p.length > 2).map(parseItem),
  };
};
