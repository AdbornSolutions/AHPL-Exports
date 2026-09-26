import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createServer } from 'vite'

const siteOrigin = 'https://www.ahplexports.com'
const root = process.cwd()

const appSource = await readFile(resolve(root, 'src/App.jsx'), 'utf8')
const staticRoutes = [...appSource.matchAll(/<Route\s+path="([^"]+)"\s+element=\{<([A-Za-z]+)/g)]
  .filter(([, route, component]) => component !== 'Navigate' && !route.includes(':'))
  .map(([, route]) => route)

const vite = await createServer({
  root,
  appType: 'custom',
  logLevel: 'silent',
  server: { middlewareMode: true },
})

let productCatalog
let spaceCollections

try {
  ;({ productCatalog } = await vite.ssrLoadModule('/src/data/productCatalog.js'))
  ;({ spaceCollections } = await vite.ssrLoadModule('/src/data/spaceCollections.js'))
} finally {
  await vite.close()
}

const productRoutes = productCatalog.flatMap((category) =>
  category.products.map((product) => `/product/${category.slug}/${product.slug}`),
)
const spaceRoutes = spaceCollections.map((collection) => `/shop-by-space/${collection.slug}`)
const routes = [...new Set([...staticRoutes, ...spaceRoutes, ...productRoutes])]

const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => `  <url><loc>${escapeXml(new URL(route, siteOrigin).href)}</loc></url>`),
  '</urlset>',
  '',
].join('\n')

await writeFile(resolve(root, 'public/sitemap.xml'), sitemap, 'utf8')

console.log(`Generated public/sitemap.xml with ${routes.length} canonical URLs.`)
