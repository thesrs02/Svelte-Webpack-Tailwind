import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { createHtmlPlugin } from "vite-plugin-html";
import sveltePreprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: `bundle.js`,
        chunkFileNames: `[hash].js`,
        assetFileNames: `[hash].[ext]`,
      },
    },
  },
  plugins: [
    svelte({
      preprocess: [sveltePreprocess({ postcss: true })],
    }),
    createHtmlPlugin({
      minify: true,
      entry: "src/main.js",
      template: "public/index.html",
    }),
  ],
});
