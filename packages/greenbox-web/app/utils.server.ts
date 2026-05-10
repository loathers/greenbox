import { deepEqual } from "fast-equals";
import { type RawSnapshotData } from "greenbox-data";

export function isSnapshotDifferent(a: unknown, b: RawSnapshotData) {
  if (!a || typeof a !== "object") return true;
  return !deepEqual(
    { ...(a as object), meta: undefined },
    { ...b, meta: undefined },
  );
}
