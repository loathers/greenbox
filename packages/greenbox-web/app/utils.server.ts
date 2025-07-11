import type { JsonValue } from "@prisma/client/runtime/library";
import { deepEqual } from "fast-equals";
import { type RawSnapshotData } from "greenbox-data";

export function isSnapshotDifferent(
  a: JsonValue | undefined,
  b: RawSnapshotData,
) {
  if (!a || typeof a !== "object") return true;
  return !deepEqual({ ...a, meta: undefined }, { ...b, meta: undefined });
}
