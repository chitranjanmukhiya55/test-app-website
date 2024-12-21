import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/", // Base path for production
  build: {
    outDir: "public/react-editor/dist", // Production output directory
    emptyOutDir: true, // Ensure old files are removed
    assetsDir: "assets", // Place static assets here
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  server: {
    fs: {
      allow: [resolve(__dirname)], // Prevent recursive file system operations
    },
  },
});


// http://localhost:8080/canva/website/public/react-editor/dist/assets