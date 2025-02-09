import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    hmr: mode === "development" ? true : false,  // Disable HMR in production
  },
  preview: {
    hmr: false,  // Ensure preview mode doesn’t use HMR
  }
}))
