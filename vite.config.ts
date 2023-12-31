import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ plugins: [["@swc/plugin-styled-components", {}]] }),
    tsconfigPaths(),
  ],
  base: "/",
  server: {
    port: 3000,
  },
})
