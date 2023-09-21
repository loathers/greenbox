export type Meta = {
  name: string;
  id: string;
  revision: number;
  timestamp: number;
  version: number;
};

export const compressMeta = (meta: Meta) =>
  Object.entries(meta)
    .map(([k, v]) => `${k}:${v}`)
    .join(",");

export const expandMeta = (s: string) => {
  const meta = Object.fromEntries(
    s
      .split(",")
      .map((s) => s.split(":"))
      .map(([k, v]) => [k, k === "timestamp" ? Number(v) : v]),
  ) as Meta;
  if (!meta.version) meta.version = 1;
  return meta;
};
