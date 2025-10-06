import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  root: resolve(__dirname, "src"),
  plugins: [ViteMinifyPlugin({})],
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
