/* eslint-disable no-undef */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "dashes",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@icons": `${path.resolve(__dirname, "./src/components/icons")}`,
      "@contexts": `${path.resolve(__dirname, "./src/contexts")}`,
      "@components": `${path.resolve(__dirname, "./src/components")}`,
      "@services": `${path.resolve(__dirname, "./src/services")}`,
    },
  },
})
