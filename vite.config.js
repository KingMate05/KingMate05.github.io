import { defineConfig } from "vite";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
  base: "/", // car ton repo est kingmate05.github.io
  root: "src", // ton index.html est dans src/
  plugins: [ViteMinifyPlugin({})],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html", // <- Chemin relatif à "root"
      },
    },
  },
});
