import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for external preview access via reverse proxy (.modal.host)
// - Bind to 0.0.0.0
// - Keep strict port 3000
// - Enable CORS
// - Explicitly allow the current external hostname
const ALLOWED = [
  'localhost',
  '127.0.0.1',
  'ta-01ka7zbmtfdx99yvzdm16teftd-3000.wo-7yqm22npnmpiwr8zaphiyd8j0.w.modal.host'
]

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    cors: true,
    allowedHosts: ALLOWED
  }
})
