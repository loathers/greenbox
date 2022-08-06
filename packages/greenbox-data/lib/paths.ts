import paths from "../data/paths";

export interface PathDef {
  name: string;
  image: string;
  items: number[];
  equipment: number[];
  tattoos: { name: string; image: string | string[] }[];
}

export function loadPaths(): PathDef[] {
  return paths as unknown as PathDef[];
}
