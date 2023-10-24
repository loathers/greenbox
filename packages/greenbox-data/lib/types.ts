export interface PathDef {
  id: number;
  name: string;
  image: string;
  items: number[];
  equipment: number[];
  tattoos: { name: string; image: string | string[] }[];
  points: string | string[] | null;
  maxPoints: number;
}

export interface BaseTattooDef {
  name: string;
  image: string | string[];
}

export interface OutfitTattooDef extends BaseTattooDef {
  outfit: number;
}

export interface MiscTattooDef extends BaseTattooDef {
  misc: number;
}

export type TattooDef = BaseTattooDef | OutfitTattooDef | MiscTattooDef;

export interface TrophyDef {
  id: number;
  image: string;
  name: string;
}
