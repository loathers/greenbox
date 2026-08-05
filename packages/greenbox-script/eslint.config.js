// @ts-check
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import libram, { verifyConstantsSinceRevision } from "eslint-plugin-libram";
import tseslint from "typescript-eslint";

const VERIFY_CONSTANTS_SINCE = 29135;

await verifyConstantsSinceRevision(VERIFY_CONSTANTS_SINCE);

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  libram.configs.recommended,
  { ignores: ["dist/*"] },
);
