import { defineConfig } from 'vite'

// Custom domain (www.muzzamilkhan.com) serves from the site root,
// so a "/" base works in both dev and production.
//
// The site is a single page: index.html, the interactive desert résumé
// (three.js) vendored from muzzkh/arrakis into src/desert/.
export default defineConfig({
  base: '/',
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1200,
  },
})
