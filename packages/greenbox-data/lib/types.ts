export type ClassDef = {
  id: number;
  name: string;
  image: string;
};

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

export interface TattooDef {
  name: string;
  image: string | string[];
  outfit?: number;
}

export interface TrophyDef {
  id: number;
  image: string;
  name: string;
}
