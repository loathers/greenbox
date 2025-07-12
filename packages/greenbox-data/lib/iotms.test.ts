import { describe, expect, it } from "vitest";

import { compressIotMs, IotMStatus } from "./iotms.js";
import { tuple } from "./utils.js";

describe("Compress IotMs", () => {
  it("should compress a list of IotMs", () => {
    const rawIotMs = [
      tuple([894, IotMStatus.NONE]),
      tuple([914, IotMStatus.NONE]),
      tuple([924, IotMStatus.NONE]),
      tuple([954, IotMStatus.NONE]),
      tuple([961, IotMStatus.NONE]),
      tuple([1040, IotMStatus.NONE]),
      tuple([1083, IotMStatus.NONE]),
      tuple([1152, IotMStatus.BOUND]),
      tuple([1242, IotMStatus.BOXED]),
    ];
    const compressed = compressIotMs(rawIotMs);
    expect(compressed).toBe("000000021");
  });

  it("should trim trailing zeroes", () => {
    const rawIotMs = [
      tuple([894, IotMStatus.NONE]),
      tuple([914, IotMStatus.NONE]),
      tuple([924, IotMStatus.NONE]),
      tuple([954, IotMStatus.NONE]),
      tuple([961, IotMStatus.NONE]),
      tuple([1040, IotMStatus.NONE]),
      tuple([1083, IotMStatus.BOUND]),
      tuple([1152, IotMStatus.BOUND]),
      tuple([1242, IotMStatus.NONE]),
    ];
    const compressed = compressIotMs(rawIotMs);
    expect(compressed).toBe("00000022");
  });
});
