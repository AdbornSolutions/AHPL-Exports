import { useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Footer from '../Common/Footer'
import blogHero from '../../assets/Blogs/B5-1.png'
import blogFeature from '../../assets/Blogs/B5-2.png'
import { containerClass } from '../../utils/tailwindClasses'

const productPortfolio = [
  'Metal Table Décor',
  'Metal Wall Décor',
  'Polyresin Décor',
  'Marble Décor',
  'Wooden Décor',
  'Lifestyle & Utility Products',
  'Copper Articles',
  'Industrial V-Belts and other industrial goods',
  'Biomass products',
  'Makhana',
  'Dehydrated Powders',
  'Multani Mitti',
]

const decorativeProducts = ['Metal Table Décor', 'Metal Wall Décor', 'Polyresin Décor', 'Marble Décor', 'Wooden Décor']

const sourcingSteps = [
  ['Share Your Requirement', 'The buyer provides product details, quantity, specifications, packaging requirements, and destination.'],
  ['Product & Supplier Sourcing', 'The exporter identifies suitable products and coordinates with relevant Indian suppliers.'],
  ['Quotation & Confirmation', 'Pricing, quantities, specifications, and commercial terms are discussed and finalized.'],
  ['Quality & Order Coordination', 'The exporter coordinates with suppliers to ensure the order follows the agreed requirements.'],
  ['Documentation & Shipment', 'Necessary export documentation and logistics coordination are handled before the goods are dispatched.'],
  ['Delivery', 'The products are shipped to the buyer according to the agreed terms.'],
]

const faqs = [
  ['What is a merchant exporter from India?', 'A merchant exporter from India sources products from Indian manufacturers or suppliers and exports them to buyers in international markets. They can coordinate sourcing, supplier communication, documentation, and shipment-related activities.'],
  ['What products can I source from AHPL Exporter?', 'AHPL Exporter offers products across several categories, including metal table décor, metal wall décor, polyresin décor, marble décor, wooden décor, lifestyle and utility products, industrial goods, copper articles, biomass, makhana, dehydrated powders, and Multani Mitti.'],
  ['Can I source multiple products through one exporter?', 'Yes. One of the key benefits of working with a merchant exporter is the ability to source products from different categories through a single export partner, depending on availability and requirements.'],
  ['Is sourcing from India suitable for international businesses?', 'India has a broad supplier and manufacturing base across several industries. International businesses can source products from categories such as handicrafts, décor, industrial goods, agricultural products, and natural products based on their market requirements.'],
  ['How can I start sourcing products from AHPL Exporter?', 'You can contact AHPL Exporter with your product requirements, expected quantity, specifications, packaging needs, and destination market. The team can then discuss suitable sourcing and export options based on your requirements.'],
]

const BulletList = ({ items }) => (
  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
    {items.map((item) => (
      <li className="flex items-start gap-2.5 rounded-xl bg-[#f3f8f8] px-4 py-3 text-[15px] font-medium text-[#183255]" key={item}>
        <CheckCircle2 className="mt-0.5 size-[18px] flex-none text-[#30c8bb]" />
        {item}
      </li>
    ))}
  </ul>
)

const MerchantExporterBlog = () => {
  useEffect(() => {
    const previousTitle = document.title
    const canonicalUrl = `${window.location.origin}/blog/benefits-of-working-with-indian-merchant-exporter`
    const metadata = [
      { selector: 'meta[name="description"]', tag: 'meta', attributes: { name: 'description', content: 'Discover the benefits of working with a merchant exporter from India and how AHPL Exporter helps global buyers source quality Indian products with ease.' } },
      { selector: 'meta[name="keywords"]', tag: 'meta', attributes: { name: 'keywords', content: 'Merchant Exporter from India, Indian merchant exporter, export products from India, Indian handicrafts exporter, industrial goods exporter, Indian product sourcing, global sourcing from India' } },
      { selector: 'link[rel="canonical"]', tag: 'link', attributes: { rel: 'canonical', href: canonicalUrl } },
    ]
    const managedElements = metadata.map(({ selector, tag, attributes }) => {
      let element = document.head.querySelector(selector)
      const created = !element
      const previousAttributes = element ? Object.keys(attributes).reduce((values, attribute) => ({ ...values, [attribute]: element.getAttribute(attribute) }), {}) : null
      if (!element) {
        element = document.createElement(tag)
        document.head.appendChild(element)
      }
      Object.entries(attributes).forEach(([attribute, value]) => element.setAttribute(attribute, value))
      return { element, created, previousAttributes }
    })

    document.title = 'Benefits of Working with an Indian Merchant Exporter | AHPL Exporter'

    return () => {
      document.title = previousTitle
      managedElements.forEach(({ element, created, previousAttributes }) => {
        if (created) element.remove()
        else Object.entries(previousAttributes).forEach(([attribute, value]) => value === null ? element.removeAttribute(attribute) : element.setAttribute(attribute, value))
      })
    }
  }, [])

  return (
    <>
      <main className="bg-white">
        <header className="overflow-hidden bg-[#102b4e]">
          <img className="h-auto w-full object-cover" src={blogHero} alt="Merchant Exporter from India offering diverse Indian products for global buyers" fetchPriority="high" />
        </header>

        <article className={`${containerClass} py-14 md:py-20`}>
          <div className="mx-auto max-w-4xl text-[17px] leading-8 text-[#4e6076] [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#183255] [&_p]:mb-5">
            <h1 className="mb-8 text-4xl font-bold leading-tight text-[#183255] md:text-5xl">Benefits of Working with an Indian Merchant Exporter</h1>
            <p className="text-xl font-medium leading-9 text-[#294361]">India has become an important sourcing destination for businesses looking for diverse products, competitive pricing, and reliable supply options. However, buying directly from multiple manufacturers across different regions can involve considerable time, coordination, and paperwork.</p>
            <p>This is where a <strong>Merchant Exporter from India</strong> can make international sourcing much simpler.</p>
            <p>A merchant exporter works with manufacturers, artisans, suppliers, and producers to source products and supply them to buyers in international markets. Instead of dealing with several suppliers individually, overseas buyers can work with one export partner who manages sourcing, coordination, documentation, and shipment-related requirements.</p>
            <p>For businesses looking to source products from India, <strong>AHPL Exporter</strong> provides access to a diverse range of products across décor, lifestyle, utility, industrial, agricultural, and natural product categories.</p>

            <h2>What Is a Merchant Exporter?</h2>
            <p>A merchant exporter is a business that sources products from manufacturers or suppliers and exports them to customers in other countries.</p>
            <p>Unlike a manufacturer exporter, a merchant exporter does not necessarily manufacture the products themselves. Their role is to connect suitable Indian suppliers with international buyers while managing important parts of the export process.</p>
            <p>This model can be particularly useful when buyers need <strong>different products from different suppliers</strong> but prefer to manage their purchases through one reliable export partner.</p>

            <h2>Why Work with a Merchant Exporter from India?</h2>

            <h3 className="mt-7 text-xl font-bold text-[#183255]">1. Access to a Wide Range of Products</h3>
            <p>One of the biggest advantages is product variety.</p>
            <p>India has a strong manufacturing and artisan ecosystem, making it possible to source products from several categories. AHPL Exporter offers a diverse product portfolio, including:</p>
            <BulletList items={productPortfolio} />
            <p className="mt-5">This variety allows international buyers to explore multiple sourcing requirements through a single export partner.</p>

            <h3 className="mt-9 text-xl font-bold text-[#183255]">2. Easier Supplier Coordination</h3>
            <p>Sourcing directly from different Indian manufacturers can mean communicating with multiple companies, comparing quotations, checking product specifications, and coordinating production and dispatch schedules.</p>
            <p>A merchant exporter can simplify this process.</p>
            <p>Instead of managing several supplier relationships, buyers can communicate with one export partner who coordinates with the relevant manufacturers and suppliers.</p>
            <p>This saves time and makes the purchasing process more organized.</p>

            <h3 className="mt-9 text-xl font-bold text-[#183255]">3. Better Understanding of the Indian Market</h3>
            <p>Finding the right supplier is not always about choosing the lowest price.</p>
            <p>Product quality, manufacturing capabilities, consistency, packaging, lead time, and supplier reliability can all affect an international order.</p>
            <p>An experienced Indian merchant exporter understands the local supplier ecosystem and can help identify suitable sourcing options based on the buyer&apos;s requirements.</p>
            <p>This local understanding can be especially valuable for international companies that are new to sourcing from India.</p>

            <h3 className="mt-9 text-xl font-bold text-[#183255]">4. Convenient Export Documentation and Coordination</h3>
            <p>International trade involves documentation and coordination at different stages of an order.</p>
            <p>Depending on the product and destination, this may include commercial invoices, packing lists, shipping documents, certificates, and other export-related paperwork.</p>
            <p>Working with a merchant exporter can reduce the administrative burden for buyers by having an experienced export partner coordinate the required documentation and shipment process.</p>

            <h3 className="mt-9 text-xl font-bold text-[#183255]">5. Competitive Sourcing Opportunities</h3>
            <p>India offers a wide manufacturing base across handicrafts, décor, industrial products, agricultural products, and other categories.</p>
            <p>By sourcing through established supplier networks, a <strong>Merchant Exporter from India</strong> can help international buyers explore products at competitive sourcing prices while maintaining the required specifications.</p>
            <p>The final price, of course, depends on factors such as product type, quantity, customization, packaging, shipping, and destination.</p>

            <h3 className="mt-9 text-xl font-bold text-[#183255]">6. One Partner for Multiple Product Categories</h3>
            <p>For many international buyers, purchasing different categories from different suppliers can become complicated.</p>
            <p>A merchant exporter can offer a more convenient alternative.</p>
            <p>For example, a buyer may be interested in decorative products such as metal wall décor and marble décor while also looking for lifestyle products or industrial goods. Having one export partner for multiple requirements can simplify communication and order management.</p>
            <p>This is one of the key reasons businesses consider an <strong>Indian merchant exporter</strong> for their sourcing needs.</p>

            <h2>Product Categories You Can Source Through AHPL Exporter</h2>
            <p>AHPL Exporter focuses on bringing together products from different Indian categories for international buyers.</p>

            <h3 className="mt-7 text-xl font-bold text-[#183255]">Home &amp; Decorative Products</h3>
            <p>The décor range includes:</p>
            <BulletList items={decorativeProducts} />
            <p className="mt-5">These products can be suitable for home décor retailers, interior businesses, gifting companies, wholesalers, and international décor markets.</p>

            <h3 className="mt-9 text-xl font-bold text-[#183255]">Lifestyle &amp; Utility Products</h3>
            <p>Lifestyle and utility products combine everyday functionality with practical design, making them suitable for different retail and wholesale requirements.</p>

            <h3 className="mt-9 text-xl font-bold text-[#183255]">Industrial Goods</h3>
            <p>AHPL Exporter also deals in industrial products such as <strong>industrial V-belts and other industrial goods</strong>, helping businesses source specific industrial requirements from India.</p>

            <h3 className="mt-9 text-xl font-bold text-[#183255]">Natural, Agricultural &amp; Specialty Products</h3>
            <p>The product portfolio also includes <strong>makhana, dehydrated powders, biomass, and Multani Mitti</strong>, offering international buyers opportunities to source products from India&apos;s agricultural and natural-product segments.</p>

            <h2>How the Sourcing Process Works</h2>
            <p>Working with an Indian merchant exporter can follow a straightforward process:</p>
            <ol className="mt-6 grid gap-4">
              {sourcingSteps.map(([title, description], index) => (
                <li className="rounded-2xl border border-[#dce6e8] bg-white p-5 shadow-[0_10px_25px_rgba(16,43,78,0.05)]" key={title}>
                  <div className="flex items-start gap-4">
                    <span className="flex size-9 flex-none items-center justify-center rounded-full bg-[#30c8bb] text-sm font-bold text-[#102b4e]">{index + 1}</span>
                    <div>
                      <h3 className="text-lg font-bold text-[#183255]">{title}</h3>
                      <p className="!mb-0 mt-1 text-[15px] leading-7">{description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <figure className="my-12 overflow-hidden rounded-3xl bg-[#eef4f4] shadow-[0_20px_55px_rgba(16,43,78,0.12)]">
              <img className="h-auto w-full object-cover" src={blogFeature} alt="Indian merchant exporter managing product sourcing and international shipments" loading="lazy" />
            </figure>

            <section className="my-14 rounded-3xl bg-[#112f55] p-7 text-white md:p-10">
              <h2 className="!mt-0 !text-white">Why Choose AHPL Exporter?</h2>
              <p className="!text-white/75">AHPL Exporter aims to make sourcing from India more convenient for international buyers by bringing multiple product categories and supplier relationships under one export-focused business.</p>
              <p className="!text-white/75">From <strong>metal and wooden décor to industrial goods, biomass, makhana, dehydrated powders, and Multani Mitti</strong>, the company offers a broad selection for different business requirements.</p>
              <p className="!text-white/75">The focus is simple: <strong>understand the buyer&apos;s requirement, source the right products, coordinate efficiently, and support a smoother export process.</strong></p>
              <p className="!mb-0 !text-white/75">For businesses looking to build long-term sourcing relationships in India, having a dependable export partner can make international procurement more manageable.</p>
            </section>

            <section aria-labelledby="faq-heading">
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-3">
                {faqs.map(([question, answer], index) => (
                  <details className="group rounded-2xl border border-[#dce6e8] bg-white p-5 open:shadow-[0_12px_30px_rgba(16,43,78,0.08)]" key={question} open={index === 0}>
                    <summary className="cursor-pointer list-none pr-6 font-semibold text-[#183255]">{index + 1}. {question}</summary>
                    <p className="!mb-0 mt-3 text-[15px] leading-7">{answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <h2>Conclusion</h2>
            <p>Working with an Indian merchant exporter can make international sourcing more convenient, especially when a business needs products from multiple categories or suppliers. From supplier coordination and product sourcing to export documentation and shipment management, the right export partner can reduce complexity and save valuable time.</p>
            <p>With its diverse product portfolio covering <strong>décor, lifestyle and utility, industrial goods, copper articles, biomass, makhana, dehydrated powders, and Multani Mitti</strong>, AHPL Exporter aims to connect international buyers with sourcing opportunities from India.</p>
            <p>If your business is looking to source quality products from India, <strong>AHPL Exporter can be your partner for exploring reliable and diverse Indian products for global markets.</strong></p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default MerchantExporterBlog
