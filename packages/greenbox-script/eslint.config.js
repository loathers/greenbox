// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import * as libram from "eslint-plugin-libram";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  { plugins: { libram }, rules: { "libram/verify-constants": "error" } },
  { ignores: ["dist/*"] }
);
