import { describe, expect, it } from "vitest";

import { compressBindables, BindableStatus } from "./bindable.js";
import { tuple } from "./utils.js";

describe("Compress Bindable", () => {
  it("should compress a list of Bindables", () => {
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
    const compressed = compressBindables(rawIotMs);
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
    const compressed = compressBindables(rawIotMs);
    expect(compressed).toBe("00000022");
  });
});
