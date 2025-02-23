import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite uses import.meta.env to access environment variables
export default defineConfig({
  plugins: [react()],
  base: import.meta.env.VITE_BASE_PATH || "/cicdpipeline/", // Use the base path from the environment variable
});
