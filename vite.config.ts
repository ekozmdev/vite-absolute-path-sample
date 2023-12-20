import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // パスのマッピング②
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  plugins: [react()],
});
