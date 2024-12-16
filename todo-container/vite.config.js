import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const env = loadEnv("all", process.cwd());

let port = env.VITE_APP_PORT;
let formAppDomain = env.VITE_FORM_APP_DOMAIN;
let listAppDomain = env.VITE_LIST_APP_DOMAIN;
let storeDomain = env.VITE_STORE_DOMAIN;


export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        form: `${formAppDomain}remoteEntry.js`,
        list: `${listAppDomain}remoteEntry.js`,
        store: `${storeDomain}remoteEntry.js`,
      },
      shared: ["react", "react-dom",'@reduxjs/toolkit','react-redux'],
    }),
  ],
  server: {
    port: port || 4000,
  },
});
