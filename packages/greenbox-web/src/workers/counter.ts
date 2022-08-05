import { expose } from "threads/worker";

expose((names: string[]) => {
  // Count all the instances of every name
  const counts = names.reduce(
    (acc, name) => ({
      ...acc,
      [name]: (acc[name] || 0) + 1,
    }),
    {} as { [name: string]: number }
  );

  // Filter down this map to only names appearing more than once
  return Object.entries(counts)
    .filter(([k, v]) => v > 1)
    .map(([k]) => k);
});

export type {};
