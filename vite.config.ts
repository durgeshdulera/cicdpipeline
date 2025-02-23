import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "", ""); // Load env vars based on mode
  let base = "/cicdpipeline/";

  if (mode === "development") {
    base = "/cicdpipeline/development/";
  }

  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: mode === "development" ? "dist-development" : "dist", // Set output directory based on mode
    },
  };
});
