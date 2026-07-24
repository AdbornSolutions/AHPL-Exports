import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { formEndpoints } from './config/formEndpoints.js'

// https://vite.dev/config/
export default defineConfig(() => {
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

  addSheetsProxy('/api/inquiry', formEndpoints.productInquiry)
  addSheetsProxy('/api/contact-inquiry', formEndpoints.contactInquiry)

  return {
    plugins: [react(), tailwindcss()],
    server: Object.keys(proxy).length ? { proxy } : undefined,
  }
})
