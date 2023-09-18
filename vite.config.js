import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      manifest: {
        theme_color: "#2fd3f4",
        background_color: "#020a2c",
        icons: [
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "/icon.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "/icon.png",
            type: "image/png",
          },
        ],
        orientation: "portrait",
        display: "standalone",
        dir: "auto",
        lang: "en-GB",
        name: "Takhali Timer",
        short_name: "Takhali",
        start_url: "/",
        scope: "/",
        description: "A small Pomodoro Timer App for more productivity",
      },
    }),
  ],
});
