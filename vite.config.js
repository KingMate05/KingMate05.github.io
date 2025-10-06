export default defineConfig({
  base: "/",
  plugins: [ViteMinifyPlugin({})],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
