/* eslint-env node */
import { build } from "esbuild";
import babel from "esbuild-plugin-babel";
import process from "process";

const args = process.argv.slice(2);

const watch = args.some((a) => a === "--watch" || a === "-w");

build({
  entryPoints: {
    greenbox: "src/greenbox.ts",
  },
  bundle: true,
  platform: "node",
  target: "rhino1.7.14",
  external: ["kolmafia"],
  plugins: [babel()],
  outdir: "dist/scripts/greenbox",
  watch,
  loader: { ".json": "text" },
});
