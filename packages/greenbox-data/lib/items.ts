import { specialItems } from "../data/items.js";

export const enum ItemStatus {
  NONE = 0,
  HAVE = 1,
}

export type RawItem = [id: number, quantity: number];

export const compressItems = (items: RawItem[]): string => {
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
