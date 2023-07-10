/* eslint-env node */
import esbuild from "esbuild";
import babel from "esbuild-plugin-babel";
import process from "process";

const args = process.argv.slice(2);

const watch = args.some((a) => a === "--watch" || a === "-w");

const context = await esbuild.context({
  entryPoints: {
    greenbox: "src/greenbox.ts",
    // This is where you generate the data for iotms.ts from MrStoreMonthly; does not need to exist in distribution
    // generateIotmList: "src/generateIotms.ts",
  },
  bundle: true,
  minifySyntax: true,
  platform: "node",
  target: "rhino1.7.14",
  external: ["kolmafia"],
  plugins: [babel()],
  outdir: "dist/scripts/greenbox",
  loader: { ".json": "text" },
  inject: ["./kolmafia-polyfill.js"],
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});

await context.rebuild();

if (watch) {
  await context.watch();
} else {
  context.dispose();
}
