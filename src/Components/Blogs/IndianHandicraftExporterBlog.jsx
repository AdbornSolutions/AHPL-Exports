import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { containerClass } from "../../utils/tailwindClasses";
import Footer from "../Common/Footer";

import blogHero from "../../assets/Blogs/B15-1.webp";
import blogFeature1 from "../../assets/Blogs/B15-2.webp";
import blogFeature2 from "../../assets/Blogs/B15-3.webp";
import blogFeature3 from "../../assets/Blogs/B15-4.webp";
import blogFeature4 from "../../assets/Blogs/B15-5.webp";

const faqs = [
  [
    "What do Indian handicraft exporters offer?",
    "Indian handicraft exporters allow international buyers to source decorative and crafted items. They also allow the items to be exported efficiently.",
  ],
  [
    "What types of handicrafts does India offer?",
    "India offers a wide range of handicrafts. These include metal, wood, marble, and resin decor items. Many decorative and lifestyle items are offered.",
  ],
  [
    "Why should international buyers purchase handicrafts from India?",
    "India offers a wide range of decorative items. Decor items can be made from many different materials and designs. They can be purchased in retail, wholesale, and for decorating many different environments.",
  ],
  [
    "What should be considered when choosing a handicraft exporter?",
    "Consider the quality of items, variety of items, price, clear communication, packaging, documentation, and delivery.",
  ],
  [
    "Does AHPL Exports offer decorative items to international buyers?",
    "We offer metal, marble, resin, and wood items. If you wish to source Indian items for international markets, we have a range of options to suit your needs.",
  ],
];

export default function IndianHandicraftExporterBlog() {
  useEffect(() => {
    const previousTitle = document.title;

    const updates = [
      [
        "description",
        "We offer a wide range of metal, marble, resin, and wood handicraft products. Perfect for sourcing and supplying in international markets.",
      ],
      ["keywords", "Indian handicraft exporter"],
    ];

    const saved = updates.map(([name, content]) => {
      let el = document.head.querySelector(`meta[name="${name}"]`);

      const created = !el;

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }

      const previous = el.getAttribute("content");

      el.setAttribute("content", content);

      return { el, created, previous };
    });

    document.title = "Indian handicraft exporter in 2027 | AHPL Exports";

    return () => {
      document.title = previousTitle;

      saved.forEach(({ el, created, previous }) => {
        if (created) {
          el.remove();
        } else if (previous === null) {
          el.removeAttribute("content");
        } else {
          el.setAttribute("content", previous);
        }
      });
    };
  }, []);

  return (
    <>
      <main className="bg-white">
        {/* Hero Banner */}
        <header className="overflow-hidden bg-[#102b4e]">
          {blogHero ? (
            <img
              className="h-auto w-full object-cover"
              src={blogHero}
              alt="Indian handicraft exporter logistics banner showing warehouse staff managing handcrafted decor items, air cargo, shipping port containers, and 25+ countries served badge."
              fetchPriority="high"
            />
          ) : (
            <div
              className="h-40 sm:h-64 lg:h-80"
              aria-label="Blog banner placeholder"
            />
          )}
        </header>

        {/* Blog Content */}
        <article className={`${containerClass} py-14 md:py-20`}>
          <div
            className="
              mx-auto max-w-4xl
              text-[17px] leading-8 text-[#4e6076]

              [&_h2]:mb-4
              [&_h2]:mt-12
              [&_h2]:text-3xl
              [&_h2]:font-bold
              [&_h2]:leading-tight
              [&_h2]:text-[#183255]

              [&_h3]:mt-8
              [&_h3]:mb-4
              [&_h3]:text-xl
              [&_h3]:font-bold
              [&_h3]:text-[#183255]

              [&_p]:mb-5

              [&_p_a]:text-[#0000FF]
              [&_p_a]:underline
              [&_p_a]:font-normal
              [&_p_a]:cursor-pointer
            "
          >
            {/* H1 Heading */}
            <h1 className="mb-8 text-4xl font-bold leading-tight text-[#183255] md:text-5xl">
              Indian handicraft exporter in 2027
            </h1>

            {/* Introduction */}
            <p>
              Indian handicrafts are very creative and well made. We offer
              metal, wood, and marble decorative items. They are popular to
              purchase due to the uniqueness within them.
            </p>

            <p>
              Finding a reliable{" "}
              <a to="https://www.ahplexports.com/">
                Indian handicraft exporter
              </a>{" "}
              is useful in international markets.
            </p>

            <p>
              Due to the variety in unique designs, versatility, and variety of
              materials, Indian handicrafts are popular in many international
              markets. They can be used in domestic environments,
              hotel/hospitality environments, retail items, and as corporate
              gifts.
            </p>

            <p>
              Below we look at some examples of popular Indian handicrafts. We
              explain why it is important to find a reliable exporter and how
              AHPL Exports can supply Indian products to international buyers.
            </p>

            {/* Section 1 */}
            <h2>Indian handicraft market</h2>

            <p>
              There is great variety in the{" "}
              <a href="https://www.ahplexports.com/product">
                Indian handicraft market
              </a>
              . There are many design styles, materials, and finishes in Indian
              decor items, therefore making them popular in international
              markets.
            </p>

            <h3>Metal Decor Items</h3>

            <p>
              Elevate your interior space with timeless{" "}
              <a href="https://www.ahplexports.com/assets/hero-D1zp3iE6.webp">
                metal decor items
              </a>
              . Adding style to tables with the metal decor items, popular in
              domestic, hotel, and hospitality areas.
            </p>

            {/* Feature Image 1 */}
            {blogFeature1 && (
              <figure className="my-12 overflow-hidden rounded-3xl bg-[#eef4f4] shadow-[0_20px_55px_rgba(16,43,78,0.12)]">
                <img
                  src={blogFeature1}
                  alt="Handcrafted desk accessories display featuring a brass antique train pen holder, a decorative metallic Krishna figurine candle stand, and a hand-painted owl pen container placed near a sunlit window."
                  loading="lazy"
                />
              </figure>
            )}

            <h3>Metal Wall Art</h3>

            <p>
              Can add style to a space with timeless{" "}
              <a href="https://www.ahplexports.com/product/metal-wall-decor">
                metal wall art
              </a>
              . Can fit well with various interior design styles. Popular with
              buyers wanting to add unique wall art.
            </p>

            {/* Feature Image 2 */}
            {blogFeature2 && (
              <figure className="my-12 overflow-hidden rounded-3xl bg-[#eef4f4] shadow-[0_20px_55px_rgba(16,43,78,0.12)]">
                <img
                  src={blogFeature2}
                  alt="Three framed colorful Indian metal musician wall art pieces arranged above wooden hexagonal and floating shelves holding small potted succulents on a sunlit bedroom wall."
                  loading="lazy"
                />
              </figure>
            )}

            <h3>Marble decor items</h3>

            <p>
              Very stylish.{" "}
              <a href="https://www.ahplexports.com/product/marble-decor">
                Marble decor items
              </a>{" "}
              can be used within domestic areas, offices, as gifts, and within
              interiors.
            </p>

            <h3>Resin decor items</h3>

            <p>
              Offer a variety of styles.{" "}
              <a href="https://www.ahplexports.com/product/polyresin-decor">
                Resin decor items.
              </a>{" "}
              Can complement modern interiors and retail items.
            </p>

            {/* Feature Image 3 */}
            {blogFeature3 && (
              <figure className="my-12 overflow-hidden rounded-3xl bg-[#eef4f4] shadow-[0_20px_55px_rgba(16,43,78,0.12)]">
                <img
                  src={blogFeature3}
                  alt="Three framed colorful Indian metal musician wall art pieces arranged above wooden hexagonal and floating shelves holding small potted succulents on a sunlit bedroom wall."
                  loading="lazy"
                />
              </figure>
            )}

            <h3>Wood decor items</h3>

            <p>
              Add a natural feel to interiors.{" "}
              <a href="https://www.ahplexports.com/product/wooden-decor">
                Wood decor items
              </a>{" "}
              A great option for customers wanting natural style decor items.
            </p>

            {/* Feature Image 4 */}
            {blogFeature4 && (
              <figure className="my-12 overflow-hidden rounded-3xl bg-[#eef4f4] shadow-[0_20px_55px_rgba(16,43,78,0.12)]">
                <img
                  src={blogFeature4}
                  alt="Geometric wooden wall shelf displaying traditional Indian handicraft figurines, including a Rajasthani couple, a small brass camel, three folk musicians, a painted peacock pen holder with pens, a colorful bird figurine, two lit tealight pots, a painted wooden box, and a carriage clock against a beige wall."
                  loading="lazy"
                />
              </figure>
            )}

            {/* Section 2 */}
            <h2>Benefits of using Indian handicraft exporters</h2>

            <p>
              Using Indian handicraft exporters can be highly beneficial for
              businesses, as it ensures reliable services. This includes
              good-quality products, clear communication, suitable packaging,
              and efficient shipping.
            </p>

            <h3>Multiple item options</h3>

            <p>
              Choosing a reliable exporter means international buyers can source
              multiple item options in one place. This makes it easier for
              buyers in both wholesale and retail to find the correct items.
            </p>

            <h3>Good quality items</h3>

            <p>
              Good quality items are very important within international
              markets. Choosing a supplier who can give buyers the correct
              quality items can help make the right purchasing decision.
            </p>

            <h3>Efficient Exporting</h3>

            <p>
              For products to be exported internationally, it is very important
              to have efficient procedures in place, including documentation,
              packaging, and delivery. Having a reliable exporter can mean these
              processes are efficient.
            </p>

            <h3>Bulk purchasing options</h3>

            <p>
              Working with an Indian handicraft exporter means businesses can
              look into bulk purchasing options. Multiple item options can be
              sourced.
            </p>

            {/* Section 3 */}
            <h2>Features of reliable Indian handicraft exporters</h2>

            <p>
              International buyers may wish to consider certain factors when
              choosing an exporter.
            </p>

            <h3>Variety of items</h3>

            <p>
              Ensure that the exporter has a variety of items to suit the needs
              of your business. For example, metal, marble, resin, and wood
              decor items.
            </p>

            <h3>Good quality items</h3>

            <p>
              Ensure that items are well finished and packaged for international
              transport.
            </p>

            <h3>Clear Communication</h3>

            <p>
              Having clear communication with the exporter will help buyers
              understand relevant information such as item details, pricing,
              ordering, and delivery.
            </p>

            <h3>Efficient Exporting</h3>

            <p>
              Reliable exporters will be very efficient when exporting items
              internationally. This can include efficient documentation and
              delivery.
            </p>

            {/* Section 4 - AHPL Highlight */}
            <section className="my-14 rounded-3xl bg-[#112f55] p-7 text-white md:p-10">
              <h2 className="!mt-0 !text-white">
                AHPL Exports – Supply Indian Products to International Markets
              </h2>

              <p className="!text-white/80">
                AHPL Exports (as part of Ananta Horizons Pvt. Ltd.) allows
                international businesses to purchase items from India.
              </p>

              <p className="!text-white/80">
                We offer a wide range of decorative &amp; lifestyle items. This
                includes metal, marble, resin, and wood decor items.
              </p>

              <p className="!text-white/80">
                We offer quality purchasing, quality items, cost-effective
                prices, and efficient logistics. If you are looking to purchase
                decorative items or lifestyle items or wish to purchase them in
                bulk, AHPL Exports can make it easy to trade internationally.
              </p>

              <h3 className="!text-white">Wide range of decorative items</h3>

              <p className="!text-white/80">
                AHPL Exports offers a wide range of decorative items, meaning
                international buyers can easily find items from India to suit
                their needs.
              </p>

              <h3 className="!text-white">Efficient purchasing</h3>

              <p className="!text-white/80">
                We aim to offer efficient purchasing options to allow buyers to
                source the correct items for them.
              </p>

              <h3 className="!text-white">International businesses</h3>

              <p className="!mb-0 !text-white/80">
                AHPL Exports aims to supply items from India to international
                markets in an efficient manner.
              </p>
            </section>

            {/* Section 5 */}
            <h2>Choosing a reliable Indian Handicraft Exporter</h2>

            <p>
              It is very important to choose reliable exporters. In addition to
              price and design, consider:
            </p>

            <h3>Knowing what product you need</h3>

            <p>
              Know what type of product, design, material, and amount of
              products you need.
            </p>

            <h3>Quality of Product</h3>

            <p>
              Ensure the item is good quality, that it meets the correct
              specification and has been put into the correct packaging.
            </p>

            <h3>Price and Order Requirements</h3>

            <p>
              Understand the price of the item and any minimum order amounts.
              Understand payment requirements and any other purchasing
              requirements.
            </p>

            <h3>Delivery</h3>

            <p>
              Ensure documentation, delivery times, and delivery are clear to
              avoid confusion.
            </p>

            {/* Section 6 */}
            <h2>Unique designs</h2>

            <p>
              Purchasing Indian handicraft items can allow international
              businesses to provide unique designs and decorative items to
              customers.
            </p>

            <p>
              Finding a reliable Indian handicraft exporter can make purchasing
              products easy. Long-term relationships can be formed between
              exporters and international businesses.
            </p>

            <p>
              AHPL Exports aims to provide items from India to international
              markets in a reliable and efficient manner.
            </p>

            <p>
              Whether you are in wholesale, retail or importing, or just want to
              purchase decorative items, purchasing Indian handicraft items
              could open up new opportunities for your product range.
            </p>

            {/* Section 7 */}
            <h2>Conclusion</h2>

            <p>
              Within the Indian handicraft market, there is a wide variety of
              creative and well-made items. Metal table and wall decor items,
              marble items, resin items, and wood items mean there are many
              opportunities for international buyers to purchase decorative
              items.
            </p>

            <p>
              Finding reliable Indian handicraft exporters means that buyers can
              easily purchase products, with the correct quality and efficient
              processes for international trade.
            </p>

            <p>
              AHPL Exports aims to supply Indian products to international
              markets. We offer a wide range of decorative &amp; lifestyle
              items. We offer efficient purchasing and exporting.
            </p>

            <p>
              If you wish to supply Indian handicraft items to your business,
              take a look at <Link to="/">AHPL Exports</Link> today.
            </p>

            {/* Contact CTA */}
            <div className="my-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#eaf9f7] p-8 md:flex-row md:items-center">
              <div>
                <h2 className="!m-0 !text-2xl">
                  Looking for a reliable Indian handicraft exporter?
                </h2>

                <p className="!mb-0 mt-2">
                  Explore our decorative and lifestyle products for your
                  international sourcing requirements.
                </p>
              </div>

              <Link
                className="
                  inline-flex flex-none items-center gap-2
                  rounded-full bg-[#30c8bb]
                  px-6 py-3 text-sm font-bold
                  text-[#102b4e] transition
                  hover:-translate-y-0.5
                  hover:bg-[#58d8cd]
                "
                to="/contact-us"
              >
                Contact AHPL
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* FAQs */}
            <section aria-labelledby="faq-heading">
              <h2 id="faq-heading">FAQs</h2>

              <div className="mt-6 space-y-3">
                {faqs.map(([question, answer], index) => (
                  <details
                    className="
                      group rounded-2xl
                      border border-[#dce6e8]
                      bg-white p-5
                      open:shadow-[0_12px_30px_rgba(16,43,78,0.08)]
                    "
                    key={question}
                    open={index === 0}
                  >
                    <summary className="cursor-pointer list-none pr-6 font-semibold text-[#183255]">
                      {index + 1}. {question}
                    </summary>

                    <p className="!mb-0 mt-3 text-[15px] leading-7">{answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
