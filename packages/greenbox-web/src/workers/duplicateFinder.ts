import { expose } from "comlink";

const duplicateFinder = (strings: string[]) => {
  // Count all the instances of every string
  const counts = strings.reduce(
    (acc, string) => ({
      ...acc,
      [string]: (acc[string] || 0) + 1,
    }),
    {} as { [string: string]: number },
  );

  // Filter down this map to only strings appearing more than once
  return Object.entries(counts)
    .filter(([k, v]) => v > 1)
    .map(([k]) => k);
};

expose(duplicateFinder);

export type DuplicateFinder = typeof duplicateFinder;

export type {};
