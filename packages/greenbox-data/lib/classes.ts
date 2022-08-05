import classes from "../data/classes";

export type ClassDef = {
  id: number;
  name: string;
  image: string;
};

export function loadClasses(): ClassDef[] {
  return classes as unknown as ClassDef[];
}
