/* eslint-env node */

import { build } from "esbuild";
import babel from "esbuild-plugin-babel";

build({
    entryPoints: {
        greenbox: "src/greenbox.ts",
    },
    bundle: true,
    platform: "node",
    target: "rhino1.7.14",
    external: ["kolmafia"],
    plugins: [babel()],
    outdir: "dist"
});