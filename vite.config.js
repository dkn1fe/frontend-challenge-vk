import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/frontend-challenge-vk/",
  plugins: [react()],
  server: {
    host: true,
  },
});
