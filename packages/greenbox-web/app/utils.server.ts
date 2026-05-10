import { deepEqual } from "fast-equals";
import { type RawSnapshotData } from "greenbox-data";

export function isSnapshotDifferent(
  a: RawSnapshotData | undefined,
  b: RawSnapshotData,
) {
  if (!a) return true;
  return !deepEqual({ ...a, meta: undefined }, { ...b, meta: undefined });
}
