import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Common/Footer'
import hero from '../../assets/Blogs/B9-1.png'
import feature from '../../assets/Blogs/B9-2.png'
import blog from '../../data/luxuryHomeDecorBlog.json'
import { containerClass } from '../../utils/tailwindClasses'

const origin = 'https://www.ahplexports.com'
const url = origin + blog.path
const title = 'Luxury Home Decor Wholesale Exporter | AHPL Exports'
const links = [
  ['Merchant Exporter from India', '/blog/benefits-of-working-with-indian-merchant-exporter'],
  ['metal home decor suppliers', '/product/metal-table-decor'],
  ['Industrial V Belt Exporter', '/product/industrial-v-belts'],
  ['Copper tableware and drinkware', '/product/copper-articles'],
]
const linkedText = (text) => {
  const match = links.find(([label]) => text.includes(label))
  if (!match) return text
  const [label, to] = match
  const index = text.indexOf(label)
  return <>{text.slice(0, index)}<Link to={to}>{label}</Link>{linkedText(text.slice(index + label.length))}</>
}

export default function LuxuryHomeDecorWholesaleBlog() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title
    const entries = [
      ['name', 'description', blog.description],
      ['property', 'og:type', 'article'],
      ['property', 'og:title', title],
      ['property', 'og:description', blog.description],
      ['property', 'og:url', url],
      ['property', 'og:site_name', 'AHPL Exports'],
      ['property', 'og:image', new URL(hero, origin).href],
      ['property', 'og:image:alt', 'Luxury home decor wholesale sourcing with AHPL Exports'],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:title', title],
      ['name', 'twitter:description', blog.description],
      ['name', 'twitter:image', new URL(hero, origin).href],
    ]
    const managed = entries.map(([attribute, key, content]) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
      const created = !element
      const previous = element?.getAttribute('content')
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
      return { element, created, previous }
    })
    const schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'BlogPosting', '@id': url + '#article', headline: blog.title, description: blog.description, image: [new URL(hero, origin).href, new URL(feature, origin).href], mainEntityOfPage: url, inLanguage: 'en', author: { '@type': 'Organization', name: 'AHPL Exports', url: origin }, publisher: { '@type': 'Organization', name: 'AHPL Exports', url: origin }, articleBody: blog.blocks.map(block => block.text || block.items.join(' ')).join('\n') },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: origin }, { '@type': 'ListItem', position: 2, name: 'Blog', item: origin + '/blog' }, { '@type': 'ListItem', position: 3, name: blog.title, item: url }] },
      ],
    })
    document.head.appendChild(schema)
    return () => {
      document.title = previousTitle
      schema.remove()
      managed.forEach(({ element, created, previous }) => {
        if (created) element.remove()
        else if (previous === null) element.removeAttribute('content')
        else element.setAttribute('content', previous)
      })
    }
  }, [])

  return <>
    <main className="bg-white">
      <header className="overflow-hidden bg-[#102b4e]"><img src={hero} alt="Luxury home decor wholesale sourcing with AHPL Exports" className="h-auto w-full" fetchPriority="high" /></header>
      <article className={`${containerClass} py-14 md:py-20`}>
        <div className="mx-auto max-w-4xl text-[17px] leading-8 text-[#4e6076] [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#183255] [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#183255] [&_p]:mb-5 [&_a]:text-[#087f77] [&_a]:underline">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm"><Link to="/">Home</Link> / <Link to="/blog">Blog</Link> / Luxury Home Decor Wholesale Exporter</nav>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#183255] md:text-5xl">{blog.title}</h1>
          <p className="text-sm">By AHPL Exports · Ananta Horizons Pvt Ltd</p>
          {blog.blocks.map((block, index) => {
            const Tag = block.type
            return <div key={index}>
              {block.type === 'h2' && block.text.startsWith('Packaging:') && <figure className="my-12 overflow-hidden rounded-3xl"><img src={feature} alt="AHPL Exports luxury home decor collection for global wholesale buyers" className="h-auto w-full" loading="lazy" decoding="async" /></figure>}
              {block.type === 'list' ? <ul className="mb-6 list-disc space-y-2 pl-6">{block.items.map(item => <li key={item}>{item}</li>)}</ul> : <Tag>{linkedText(block.text)}</Tag>}
            </div>
          })}
          <section className="mt-12 rounded-3xl bg-[#112f55] p-7 text-white md:p-10">
            <h2 className="!mt-0 !text-white">Discuss your wholesale sourcing requirements</h2>
            <p>Share your product references, quantities, destination and preferred finishes with our team.</p>
            <Link className="!text-white" to="/contact-us">Request a sourcing quote</Link><span className="mx-3">·</span><a className="!text-white" href="mailto:Info@ahplexports.com">Info@ahplexports.com</a>
          </section>
          <aside className="mt-12" aria-label="Related articles"><h2>Related sourcing guides</h2><ul className="list-disc space-y-3 pl-6"><li><Link to="/blog/b2b-sourcing-in-india-guide-for-international-buyers">B2B sourcing in India: a guide for international buyers</Link></li><li><Link to="/blog/best-wooden-decor-supplier-global-wholesale-buyers">Choosing a wooden decor supplier for wholesale orders</Link></li><li><Link to="/blog/leading-polyresin-decor-supplier-global-importers-wholesalers">Polyresin decor sourcing for global importers</Link></li></ul></aside>
        </div>
      </article>
    </main>
    <Footer />
  </>
}
