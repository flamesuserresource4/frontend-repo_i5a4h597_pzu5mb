import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simplified Vite config to ensure external preview works reliably
// - Enables host binding for external access
// - Removes restrictive allowedHosts and disables custom HMR/watch flags
// - Keeps defaults for optimizeDeps
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // 0.0.0.0 and proper external exposure
    strictPort: true,
    cors: true
  }
})
