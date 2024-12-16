import { defineConfig,loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const env = loadEnv(
  'all',
  process.cwd()
);

let port = env.VITE_APP_PORT;



export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "ui",
      filename: "remoteEntry.js",
      exposes: {
        "./components": "./src/components",
      },
      shared: ["react", "react-dom","postcss","tailwindcss"],
    }),
  ],
  preview: {
    port: port || 4003,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
  },
});
