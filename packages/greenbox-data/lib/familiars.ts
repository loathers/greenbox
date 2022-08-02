import he from "he";

import { loadMafiaData } from "./utils";

export type FamiliarDef = {
  id: number;
  name: string;
  image: string;
};

const parseFamiliar = (parts: string[]): FamiliarDef => ({
  id: Number(parts[0]),
  name: he.decode(parts[1]),
  image: parts[2],
});

export const loadFamiliars = async () => {
  const raw = await loadMafiaData("familiars");
  return raw.filter((p) => p.length > 2).map(parseFamiliar);
};
