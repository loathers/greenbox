import { reactRouter } from "@react-router/dev/vite";
import dol from "data-of-loathing/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter(), dol()],
});
