import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import productOne from "../assets/p1.png";
import productTwo from "../assets/p2.png";
import productThree from "../assets/p3.png";
import productFour from "../assets/p4.png";
import { containerClass, darkEyebrowClass } from "../utils/tailwindClasses";

const products = [
  {
    title: "Agricultural\nProducts",
    text: "Premium agricultural commodities sourced from trusted producers and supplied to international markets with consistent quality and reliability.",
    image: productOne,
    alt: "Agricultural grains for export",
  },
  {
    title: "Spices &\nFood Products",
    text: "Authentic and high-quality food products and spices carefully sourced to meet global demand while maintaining freshness and quality standards.",
    image: productTwo,
    alt: "Spices and packaged food products for export",
  },
  {
    title: "Textiles &\nGarments",
    text: "A wide selection of textile products and apparel tailored to meet the needs of wholesalers, retailers, and international buyers.",
    image: productThree,
    alt: "Textiles and garments arranged for export",
  },
  {
    title: "Industrial\nMaterials",
    text: "Reliable industrial products and raw materials supplied to manufacturing and infrastructure sectors worldwide.",
    image: productFour,
    alt: "Industrial materials and raw products for export",
  },
];

const productButtonClass =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2.5 rounded-full border-0 bg-[#2EC4B6] px-5 text-[13px] font-bold text-white no-underline shadow-[0_10px_24px_rgba(46,196,182,0.22)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(46,196,182,0.3)]";

const productButtonIconClass = "grid size-6 place-items-center rounded-full bg-white text-[#2EC4B6]";

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % products.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index) => setActiveIndex((index + products.length) % products.length);

  return (
    <section id="industries" className="pb-[72px] max-md:pb-12">
      <div
        className={`${containerClass} rounded-[28px] bg-[#192b50] px-11 pb-11 pt-[54px] text-white max-lg:px-7 max-md:rounded-[22px] max-md:px-4 max-md:pb-5 max-md:pt-8`}
      >
        <div className="flex items-end justify-between gap-6 px-3.5 pb-7 max-lg:items-start max-md:flex-col max-md:px-0 max-md:pb-6">
          <div>
            <span className={darkEyebrowClass}>Products We Export</span>

            <h2 className="mt-4 text-[clamp(28px,3.2vw,40px)] font-bold leading-[1.15] tracking-normal max-sm:text-[30px]">
              Diverse Products. Global Markets.
              <br />
              <span className="text-[#2EC4B6]">Reliable Trade Solutions.</span>
            </h2>
          </div>

          <button className={`${productButtonClass} shrink-0 max-sm:px-5 max-sm:py-3`}>
            Browse All
            <span className={productButtonIconClass}>
              <ArrowUpRight size={15} />
            </span>
          </button>
        </div>

        <div className="overflow-hidden rounded-[26px] max-md:rounded-[22px]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {products.map((product) => (
              <article
                className="grid min-w-full grid-cols-[0.9fr_1.55fr] overflow-hidden rounded-[26px] border border-white/20 bg-[#3b4b6d] max-lg:grid-cols-[1fr_1.35fr] max-md:grid-cols-1 max-md:rounded-[22px]"
                key={product.title}
              >
                <div className="flex flex-col justify-between p-[34px] max-lg:p-7 max-md:p-6">
                  <div>
                    <h3 className="mb-40 whitespace-pre-line text-[40px] font-bold leading-[1.35] max-xl:mb-28 max-lg:mb-16 max-lg:text-[34px] max-md:mb-6 max-md:text-[32px] max-sm:text-[30px]">
                      {product.title}
                    </h3>

                    <p className="max-w-[390px] text-[19px] leading-[1.35] text-white max-lg:text-[17px] max-md:max-w-full max-md:text-[16px]">
                      {product.text}
                    </p>

                    <div className="mt-4 h-px w-full max-w-[420px] bg-white/15" />

                    <ul className="sr-only">
                      <li>
                        <Check size={14} /> Quality checked sourcing
                      </li>
                      <li>
                        <Check size={14} /> Global delivery network
                      </li>
                    </ul>
                  </div>

                  <button className={`${productButtonClass} mt-7 w-fit max-sm:px-5 max-sm:py-3`}>
                    View More
                    <span className={productButtonIconClass}>
                      <ArrowUpRight size={15} />
                    </span>
                  </button>
                </div>

                <div className="relative min-h-[455px] p-[34px] pl-0 max-lg:min-h-[390px] max-lg:p-6 max-lg:pl-0 max-md:min-h-[320px] max-md:p-4 max-sm:min-h-[260px]">
                  <img
                    className="h-full w-full rounded-[24px] object-cover [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%,0_24%)] max-md:rounded-[18px] max-md:[clip-path:none]"
                    src={product.image}
                    alt={product.alt}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 px-3.5 max-md:px-0">
          <div className="flex gap-2">
            {products.map((product, index) => (
              <button
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-[#2EC4B6]" : "w-2.5 bg-white/35 hover:bg-white/60"
                }`}
                type="button"
                aria-label={`Show ${product.title.replace("\n", " ")}`}
                aria-current={activeIndex === index}
                onClick={() => goToSlide(index)}
                key={product.title}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              type="button"
              aria-label="Previous product"
              onClick={() => goToSlide(activeIndex - 1)}
            >
              <ArrowLeft size={17} />
            </button>
            <button
              className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              type="button"
              aria-label="Next product"
              onClick={() => goToSlide(activeIndex + 1)}
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
