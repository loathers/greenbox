export const tuple = <T extends unknown[]>(args: [...T]): T => args;

export const arrayOf = <T>(items: T | T[]): T[] =>
  Array.isArray(items) ? items : [items];
