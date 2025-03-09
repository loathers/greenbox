import { expose } from "comlink";

const duplicateFinder = (strings: string[]) => {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const string of strings) {
    if (seen.has(string)) {
      duplicates.add(string);
    } else {
      seen.add(string);
    }
  }
  return [...duplicates];
};

expose(duplicateFinder);

export type DuplicateFinder = typeof duplicateFinder;

export type {};
