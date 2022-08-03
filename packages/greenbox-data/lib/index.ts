export * from "./skills";
export * from "./familiars";
export * from "./tattoos";
export * from "./trophies";

/**
 * Interface for the JSON output.
 */
export interface SnapshotData {
  skills: { [skillBlock: string]: string };
  familiars: string;
  trophies: string;
  tattoos: string[];
}
