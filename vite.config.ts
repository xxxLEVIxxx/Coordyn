import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // allows you to use test/expect without importing
    environment: "jsdom", // no jsdom, for pure logic tests
    setupFiles: "./vitest.setup.ts",
  },
});
