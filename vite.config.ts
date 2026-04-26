import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (www.muzzamilkhan.com) serves from the site root,
// so a "/" base works in both dev and production.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
