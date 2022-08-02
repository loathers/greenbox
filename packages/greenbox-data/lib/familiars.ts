import he from "he";

import { loadMafiaData } from "./utils";

export type FamiliarDef = {
  id: number;
  name: string;
  image: string;
  pokefam: boolean;
};

const isPokefam = (familiarId: number) => {
  return familiarId >= 215 && familiarId < 260;
};

const parseFamiliar = (parts: string[]): FamiliarDef => ({
  id: Number(parts[0]),
  name: he.decode(parts[1]),
  image: parts[2],
  pokefam: isPokefam(Number(parts[0])),
});

export const loadFamiliars = async () => {
  const raw = await loadMafiaData("familiars");
  return raw.filter((p) => p.length > 2).map(parseFamiliar);
};
