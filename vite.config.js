import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
  base: "/", // racine pour KingMate05.github.io
  css: {
    postcss: {},
  },
  sourcemap: true,
  root: "src",

  plugins: [
    ViteMinifyPlugin({}), // juste le plugin minify
  ],

  build: {
    outDir: "../dist",
    emptyOutDir: true,

    rollupOptions: {
      input: {
        index: "./src/index.html",
      },
    },
  },
});
