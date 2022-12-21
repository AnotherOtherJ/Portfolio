/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "components": resolve(__dirname, "./src/components"),
      "pages": resolve(__dirname, "./src/pages"),
      "assets": resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    VitePWA({
      registerType: "autoUpdate",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/vitestSetup.ts",
  },
});
