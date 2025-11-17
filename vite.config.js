import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for external preview access
// - host: true => bind 0.0.0.0
// - strictPort: true => always use 3000
// - cors: true => allow cross-origin during dev
// - allowedHosts: 'all' => accept reverse-proxied hostnames (e.g., *.modal.host)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    cors: true,
    allowedHosts: 'all'
  }
})
