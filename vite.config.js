/* global process */

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const proxy = {}

  const addSheetsProxy = (route, endpoint) => {
    if (!endpoint) return

    const sheetsUrl = new URL(endpoint)
    proxy[route] = {
      target: sheetsUrl.origin,
      changeOrigin: true,
      followRedirects: true,
      rewrite: () => sheetsUrl.pathname,
    }
  }

  addSheetsProxy('/api/inquiry', env.GOOGLE_SHEETS_WEB_APP_URL)
  addSheetsProxy('/api/contact-inquiry', env.GOOGLE_CONTACT_SHEETS_WEB_APP_URL)

  return {
    plugins: [react(), tailwindcss()],
    server: Object.keys(proxy).length ? { proxy } : undefined,
  }
})
