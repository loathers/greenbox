export type Meta = { name: string; id: string; revision: number; timestamp: number };

export const compressMeta = (meta: Meta) =>
  Object.entries(meta)
    .map(([k, v]) => `${k}:${v}`)
    .join(",");

export const expandMeta = (s: string) =>
  Object.fromEntries(
    s
      .split(",")
      .map((s) => s.split(":"))
      .map(([k, v]) => [k, k === "timestamp" ? Number(v) : v]),
  ) as Meta;
