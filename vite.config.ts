import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use a relative base for production so assets resolve on GitHub Pages
// (project pages at /repo-name/ or root user sites) without a hard‑coded path.
// Dev server keeps the default “/” base.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? './' : '/',
}))
