import he from "he";

import { loadMafiaData } from "./utils";

export type ItemDef = {
  id: number;
  name: string;
  image: string;
};

const parseItem = (parts: string[]): ItemDef => ({
  id: Number(parts[0]),
  name: he.decode(parts[1]),
  image: parts[3],
});

export const loadItems = async () => {
  const raw = await loadMafiaData("items");
  return raw.filter((p) => p.length > 2).map(parseItem);
};
