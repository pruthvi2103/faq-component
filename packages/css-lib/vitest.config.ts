import { defineConfig } from "vitest/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["./setup-test-env.ts"],
    include: ["./src/**/*.{test,spec}.{tsx,ts}"],
    deps: {
      fallbackCJS: true,
    },
  },
});
