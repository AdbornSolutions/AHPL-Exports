import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { getProduct } from '../../data/productCatalog'
import { getSpaceCollection } from '../../data/spaceCollections'

const siteOrigin = 'https://www.ahplexports.com'

const pageSeo = {
  '/': {
    title: 'AHPL Exports | Indian Products for Global Markets',
    description: 'AHPL Exports connects global buyers with Indian home decor, handicrafts, industrial goods, lifestyle products, and export-ready sourcing solutions.',
  },
  '/about-us': {
    title: 'About AHPL Exports | Global Sourcing from India',
    description: 'Learn about AHPL Exports, our Indian sourcing network, export capabilities, quality standards, and commitment to international B2B buyers.',
  },
  '/saffron': {
    title: 'Saffron Home Decor Collection | AHPL Exports',
    description: 'Explore Saffron by AHPL Exports, featuring handcrafted Indian home decor, lifestyle accessories, and curated products for global interiors.',
  },
  '/product': {
    title: 'Products and Export Categories | AHPL Exports',
    description: 'Explore AHPL Exports product categories, including handcrafted decor, lifestyle products, industrial goods, food products, and natural materials.',
  },
  '/product/metal-table-decor': {
    title: 'Metal Table Decor Manufacturer and Exporter | AHPL',
    description: 'Explore handcrafted metal table decor for wholesale, hospitality, retail, gifting, and private-label export requirements.',
  },
  '/product/metal-wall-decor': {
    title: 'Metal Wall Decor Manufacturer and Exporter | AHPL',
    description: 'Source handcrafted metal wall decor from India for wholesale, retail, hospitality, and international private-label collections.',
  },
  '/product/polyresin-decor': {
    title: 'Polyresin Decor Supplier and Exporter | AHPL',
    description: 'Discover export-ready polyresin decor, sculptures, figurines, and custom collections for global importers and wholesale buyers.',
  },
  '/product/marble-decor': {
    title: 'Marble Decor Manufacturer and Exporter | AHPL',
    description: 'Explore handcrafted Indian marble decor, tabletop accents, gifting products, and custom collections for international buyers.',
  },
  '/product/lifestyle-utility': {
    title: 'Lifestyle and Utility Products Exporter | AHPL',
    description: 'Source practical lifestyle and utility products from India for wholesale, retail, private-label, and international export programs.',
  },
  '/product/wooden-decor': {
    title: 'Wooden Decor Supplier and Exporter from India | AHPL',
    description: 'Explore handcrafted wooden decor, tabletop accessories, gifting products, and custom collections for global wholesale buyers.',
  },
  '/product/industrial-v-belts': {
    title: 'Industrial V-Belts Supplier and Exporter | AHPL',
    description: 'Source industrial V-belts and dependable power-transmission products from India for international commercial requirements.',
  },
  '/product/copper-articles': {
    title: 'Copper Articles Manufacturer and Exporter | AHPL',
    description: 'Explore handcrafted copper drinkware, serveware, devotional products, decor, and wholesale export collections from India.',
  },
  '/product/makhana': {
    title: 'Makhana Supplier and Exporter from India | AHPL',
    description: 'Source natural, roasted, seasoned, and retail-ready Indian makhana for wholesale and private-label international markets.',
  },
  '/product/dehydrated-powders': {
    title: 'Dehydrated Powders Supplier from India | AHPL',
    description: 'Source dehydrated vegetable and spice powders from India for food manufacturing, retail, wholesale, and export requirements.',
  },
  '/product/biomass-pellets': {
    title: 'Biomass Pellets Supplier and Exporter | AHPL',
    description: 'Explore renewable biomass pellet grades for industrial heating, energy applications, bulk supply, and international export.',
  },
  '/product/multani-mitti': {
    title: 'Multani Mitti Supplier and Exporter from India | AHPL',
    description: 'Source natural, cosmetic-grade, spa-grade, and bulk Multani Mitti for beauty, wellness, retail, and international markets.',
  },
  '/blog': {
    title: 'Export, Sourcing and Home Decor Insights | AHPL Blog',
    description: 'Read AHPL Exports insights about sourcing from India, home decor manufacturing, handicrafts, wholesale supply, and global trade.',
  },
  '/contact-us': {
    title: 'Contact AHPL Exports | Product and Sourcing Enquiries',
    description: 'Contact AHPL Exports for product sourcing, bulk orders, private labeling, custom manufacturing, and international export enquiries.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | AHPL Exports',
    description: 'Read the AHPL Exports privacy policy covering website data collection, usage, security, and user rights.',
  },
  '/terms-and-conditions': {
    title: 'Terms and Conditions | AHPL Exports',
    description: 'Review the terms and conditions governing use of the AHPL Exports website and services.',
  },
}

const titleFromSlug = (slug) => slug
  .split('-')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ')

const getRouteSeo = (pathname) => {
  if (pageSeo[pathname]) return pageSeo[pathname]

  const parts = pathname.split('/').filter(Boolean)

  if (parts[0] === 'shop-by-space' && parts.length === 2) {
    const collection = getSpaceCollection(parts[1])
    if (!collection) return null
    const name = titleFromSlug(collection.slug)
    return {
      title: `${name} Collection | AHPL Exports`,
      description: collection.description,
    }
  }

  if (parts[0] === 'product' && parts.length === 3) {
    const result = getProduct(parts[1], parts[2])
    if (!result) return null
    const { category, product } = result
    return {
      title: `${product.name} | ${category.title} | AHPL Exports`,
      description: product.shortDescription || product.description || `Explore ${product.name} from AHPL Exports.`,
    }
  }

  return null
}

const RouteSeo = () => {
  const { pathname } = useLocation()
  const normalizedPath = pathname === '/' ? pathname : pathname.replace(/\/+$/, '')
  const seo = useMemo(() => getRouteSeo(normalizedPath), [normalizedPath])

  useEffect(() => {
    let canonical = document.head.querySelector('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    canonical.setAttribute('href', new URL(normalizedPath, siteOrigin).href)
  }, [normalizedPath])

  useEffect(() => {
    if (!seo) return undefined

    const previousTitle = document.title
    const metadata = [
      { selector: 'meta[name="description"]', tag: 'meta', attributes: { name: 'description', content: seo.description } },
    ]
    const managedElements = metadata.map(({ selector, tag, attributes }) => {
      let element = document.head.querySelector(selector)
      const created = !element
      const previousAttributes = element
        ? Object.keys(attributes).reduce((values, attribute) => ({ ...values, [attribute]: element.getAttribute(attribute) }), {})
        : null

      if (!element) {
        element = document.createElement(tag)
        document.head.appendChild(element)
      }

      Object.entries(attributes).forEach(([attribute, value]) => element.setAttribute(attribute, value))
      return { element, created, previousAttributes }
    })

    document.title = seo.title

    return () => {
      document.title = previousTitle
      managedElements.forEach(({ element, created, previousAttributes }) => {
        if (created) element.remove()
        else Object.entries(previousAttributes).forEach(([attribute, value]) => value === null ? element.removeAttribute(attribute) : element.setAttribute(attribute, value))
      })
    }
  }, [normalizedPath, seo])

  return null
}

export default RouteSeo
