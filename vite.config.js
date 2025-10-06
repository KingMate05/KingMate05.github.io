import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
  base: "/", // ton site est à la racine (kingmate05.github.io)
  root: "src", // ton index.html est dans src/
  plugins: [ViteMinifyPlugin({})],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
