import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    site: 'https://vectralya.com'
    // quitamos temporalmente: server: { entry: "server" }
  },
  nitro: {
    preset: 'static'
  }
});