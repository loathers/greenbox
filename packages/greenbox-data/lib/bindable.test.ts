import { describe, expect, it } from "vitest";

import {
  compressIotMBindables,
  BindableStatus,
  compressIotYBindables,
} from "./bindable.js";
import { tuple } from "./utils.js";

describe("Compress IotMs", () => {
  it("should compress a list of IotMs", () => {
    const rawIotMs = [
      tuple([894, BindableStatus.NONE]),
      tuple([914, BindableStatus.NONE]),
      tuple([924, BindableStatus.NONE]),
      tuple([954, BindableStatus.NONE]),
      tuple([961, BindableStatus.NONE]),
      tuple([1040, BindableStatus.NONE]),
      tuple([1083, BindableStatus.NONE]),
      tuple([1152, BindableStatus.BOUND]),
      tuple([1242, BindableStatus.BOXED]),
    ];
    const compressed = compressIotMBindables(rawIotMs);
    expect(compressed).toBe("000000021");
  });

  it("should trim trailing zeroes", () => {
    const rawIotMs = [
      tuple([894, BindableStatus.NONE]),
      tuple([914, BindableStatus.NONE]),
      tuple([924, BindableStatus.NONE]),
      tuple([954, BindableStatus.NONE]),
      tuple([961, BindableStatus.NONE]),
      tuple([1040, BindableStatus.NONE]),
      tuple([1083, BindableStatus.BOUND]),
      tuple([1152, BindableStatus.BOUND]),
      tuple([1242, BindableStatus.NONE]),
    ];
    const compressed = compressIotMBindables(rawIotMs);
    expect(compressed).toBe("00000022");
  });
});

describe("Compress IotYs", () => {
  it("should compress a list of IotYs", () => {
    const rawIotYs = [
      tuple([898, BindableStatus.NONE]),
      tuple([897, BindableStatus.NONE]),
      tuple([1308, BindableStatus.NONE]),
      tuple([1307, BindableStatus.NONE]),
      tuple([1970, BindableStatus.NONE]),
      tuple([1967, BindableStatus.NONE]),
      tuple([2939, BindableStatus.NONE]),
      tuple([2937, BindableStatus.BOUND]),
      tuple([3481, BindableStatus.BOXED]),
    ];
    const compressed = compressIotYBindables(rawIotYs);
    expect(compressed).toBe("000000021");
  });

  it("should trim trailing zeroes", () => {
    const rawIotYs = [
      tuple([898, BindableStatus.NONE]),
      tuple([897, BindableStatus.NONE]),
      tuple([1308, BindableStatus.NONE]),
      tuple([1307, BindableStatus.NONE]),
      tuple([1970, BindableStatus.NONE]),
      tuple([1967, BindableStatus.NONE]),
      tuple([2939, BindableStatus.BOUND]),
      tuple([2937, BindableStatus.BOUND]),
      tuple([3481, BindableStatus.NONE]),
    ];
    const compressed = compressIotYBindables(rawIotYs);
    expect(compressed).toBe("00000022");
  });
});
