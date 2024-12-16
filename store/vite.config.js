import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const env = loadEnv("all", process.cwd());

let port = env.VITE_APP_PORT;

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "store",
      filename: "remoteEntry.js",
      exposes: {
        "./Store": "./src/store",
        "./TodoSlice": "./src/slices/todoSlice",
      },
      shared: ["react", "react-dom",'react-redux','@reduxjs/toolkit'],
    }),
  ],
  preview: {
    port: port || 4004,
  },
  build: {
    target: "esnext",
    minify: false,
  },
});
