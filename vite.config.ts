/**
 * Estilo Caderno de Decisão: configuração enxuta para uma página editorial estática,
 * com saída dedicada e caminhos relativos compatíveis com GitHub Pages.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.resolve(rootDir, "client"),
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "client/src"),
    },
  },
  build: {
    outDir: path.resolve(rootDir, "dist-pages"),
    emptyOutDir: true,
  },
});
