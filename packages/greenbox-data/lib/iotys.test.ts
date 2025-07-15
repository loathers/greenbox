import { describe, expect, it } from "vitest";

import { compressIotYs, IotYStatus } from "./iotys.js";
import { tuple } from "./utils.js";

describe("Compress IotYs", () => {
  it("should compress a list of IotYs", () => {
    const rawIotYs = [
      tuple([898, IotYStatus.NONE]),
      tuple([897, IotYStatus.NONE]),
      tuple([1308, IotYStatus.NONE]),
      tuple([1307, IotYStatus.NONE]),
      tuple([1970, IotYStatus.NONE]),
      tuple([1967, IotYStatus.NONE]),
      tuple([2939, IotYStatus.NONE]),
      tuple([2937, IotYStatus.BOUND]),
      tuple([3481, IotYStatus.BOXED]),
    ];
    const compressed = compressIotYs(rawIotYs);
    expect(compressed).toBe("000000021");
  });

  it("should trim trailing zeroes", () => {
    const rawIotYs = [
      tuple([898, IotYStatus.NONE]),
      tuple([897, IotYStatus.NONE]),
      tuple([1308, IotYStatus.NONE]),
      tuple([1307, IotYStatus.NONE]),
      tuple([1970, IotYStatus.NONE]),
      tuple([1967, IotYStatus.NONE]),
      tuple([2939, IotYStatus.BOUND]),
      tuple([2937, IotYStatus.BOUND]),
      tuple([3481, IotYStatus.NONE]),
    ];
    const compressed = compressIotYs(rawIotYs);
    expect(compressed).toBe("00000022");
  });
});
