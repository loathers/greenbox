export * from "./skills";
export * from "./familiars";
export * from "./tattoos";
export * from "./trophies";

/**
 * Interface for the JSON output.
 */
export interface SnapshotData {
  hardcore: number[];
  softcore: number[];
  familiars: number[];
  hatchlings: number[];
  trophies: number[];
  tattoos: string[];
}
