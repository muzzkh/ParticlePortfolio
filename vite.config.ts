import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// Custom domain (www.muzzamilkhan.com) serves from the site root,
// so a "/" base works in both dev and production.
//
// Two pages, both vendored from muzzkh/arrakis by scripts/sync-desert.sh:
// index.html, the interactive desert résumé (three.js, src/desert/), and
// management/index.html, the editor at /management.
export default defineConfig({
  base: '/',
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        management: fileURLToPath(new URL('./management/index.html', import.meta.url)),
      },
    },
  },
})
