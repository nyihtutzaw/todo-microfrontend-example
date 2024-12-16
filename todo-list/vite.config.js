import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const env = loadEnv("all", process.cwd());

let port = env.VITE_APP_PORT;
let uiLibDomain = env.VITE_UI_LIB_DOMAIN;

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "form",
      filename: "remoteEntry.js",
      exposes: {
        "./List": "./src/container/ListContainer.jsx",
      },
      shared: ["react", "react-dom"],
      remotes: {
        ui: `${uiLibDomain}remoteEntry.js`,
      },
    }),
  ],
  preview: {
    port: port || 4002,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    modulePreload: false,
  },
});
