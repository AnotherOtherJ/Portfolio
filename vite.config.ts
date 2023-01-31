/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        app: resolve(__dirname, "./src/app"),
        components: resolve(__dirname, "./src/components"),
        pages: resolve(__dirname, "./src/pages"),
        assets: resolve(__dirname, "./src/assets"),
        styles: resolve(__dirname, "./src/styles"),
        hooks: resolve(__dirname, "./src/hooks"),
        shared: resolve(__dirname, "./src/shared"),
        providers: resolve(__dirname, "./src/providers"),
      },
    },
    plugins: [
      react({ jsxImportSource: "@emotion/react" }),
      VitePWA({
        registerType: "autoUpdate",
      }),
      svgr(),
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/vitestSetup.ts",
      threads: true,
    },
  };
});
