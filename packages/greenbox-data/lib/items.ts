import { specialItems } from "../data/items";

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
  name: parts[1],
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

export type RawItem = [id: number, quantity: number];

export const compressItems = (items: RawItem[]) => {
  return items
    .filter(([, q]) => q > 0)
    .map(([id, q]) => `${id}${q > 1 ? `:${q}` : ""}`)
    .sort()
    .join(",");
};

export const expandItems = (s = ""): RawItem[] =>
  s.split(",").map((l) => {
    const parts = l.split(":");
    return [Number(parts[0]), parts[1] ? Number(parts[1]) : 1];
  });

export { specialItems };
