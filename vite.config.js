import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for external preview access via reverse proxy (.modal.host)
// - Bind to 0.0.0.0
// - Keep strict port 3000
// - Enable CORS
// - Disable host check (some reverse proxies rewrite Host header)
// - Configure HMR to use WSS on port 443 through the proxy
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    cors: true,
    // Disable Vite's host check so the reverse proxy hostname is accepted
    allowedHosts: true,
    // Ensure HMR works over HTTPS reverse proxy
    hmr: {
      clientPort: 443,
      protocol: 'wss',
    },
  },
})
