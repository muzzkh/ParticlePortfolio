import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (www.muzzamilkhan.com) serves from the site root,
// so a "/" base works in both dev and production.
//
// Two pages:
//   /          index.html          the interactive desert résumé (three.js)
//   /classic/  classic/index.html  the plain particle résumé (React)
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        classic: fileURLToPath(new URL('./classic/index.html', import.meta.url)),
      },
    },
  },
})
