import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { slugify } from "../../data/productCatalog";
import Footer from "../../Components/Common/Footer";
import { buttonIconClass, containerClass, pillButtonClass } from "../../utils/tailwindClasses";
import heroImage from "../../assets/products-images/Metal-table/hero.png";
import aboutImage from "../../assets/products-images/Metal-table/about.png";
import whyChooseImage from "../../assets/products-images/Metal-table/whychoose.png";
import rangeOne from "../../assets/products-images/Metal-table/1.png";
import rangeTwo from "../../assets/products-images/Metal-table/2.png";
import rangeThree from "../../assets/products-images/Metal-table/3.png";
import rangeFour from "../../assets/products-images/Metal-table/4.png";
import rangeFive from "../../assets/products-images/Metal-table/5.png";
import rangeSix from "../../assets/products-images/Metal-table/6.png";
import rangeSeven from "../../assets/products-images/Metal-table/7.png";
import rangeEight from "../../assets/products-images/Metal-table/8.png";
import rangeNine from "../../assets/products-images/Metal-table/9.png";
import rangeTen from "../../assets/products-images/Metal-table/10.png";

const productRange = [
  { name: "Mangal- Jyoti(Black)", image: rangeOne },
  { name: "Alaap", image: rangeTwo },
  { name: "Glow Wing", image: rangeThree },
  { name: "Hoot Holder", image: rangeFour },
  { name: "Symphony (Orange)", image: rangeFive },
  { name: "The Modak Leaf (Green)", image: rangeSix },
  { name: "Lume Lady (Single)", image: rangeSeven },
  { name: "Kalam Kashti", image: rangeEight },
  { name: "Pedal Post", image: rangeNine },
  { name: "Mayur", image: rangeTen },
];

const technicalDetails = [
  ["Product Category", "Metal Table Decor"],
  ["Material", "Iron, Aluminum, Brass, Stainless Steel (As Required)"],
  ["Finish", "Powder Coated, Antique, Matte, Glossy, Gold, Black & Custom"],
  ["Style", "Modern, Contemporary, Classic & Luxury"],
  ["Usage", "Home, Hotel, Office & Commercial Interiors"],
  ["Packaging", "Export Standard Packaging"],
  ["Country of Origin", "India"],
];

const reasons = [
  "Premium Craftsmanship",
  "Superior Quality Materials",
  "Wide Design Collection",
  "Strict Quality Assurance",
];

const Metaltable = () => (
  <>
    <main className="bg-white text-[#1b3156]">
      <section className="bg-[#efe0cf]">
        <img
          className="h-auto min-h-[250px] w-full object-cover object-center max-md:min-h-[230px]"
          src={heroImage}
          alt="Metal table decor exported from India"
        />
      </section>

      <section className="py-[68px] max-lg:py-14 max-md:py-10">
        <div className={`${containerClass} grid max-w-[1480px] grid-cols-[0.9fr_1fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-8`}>
          <div className="max-w-[620px] max-lg:max-w-none">
            <h1 className="text-[clamp(34px,4.3vw,56px)] font-bold leading-[1.12] tracking-normal text-[#1b3156]">
              Elegant Designs Crafted
              <br className="max-sm:hidden" />
              for <span className="text-[#30c8bb]">Global Markets</span>
            </h1>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.45] text-[#6d7480] max-md:text-[15px]">
              <p>
                Ananta horizons pvt ltd offers a premium range of metal table decor products that reflect
                India's exceptional craftsmanship and manufacturing excellence. Every piece is carefully
                sourced from trusted manufacturers and finished to meet international quality standards.
              </p>
              <p>
                Our collection combines artistic design with superior durability, making it the perfect choice
                for retailers, wholesalers, importers, interior designers, and distributors seeking high-quality
                decorative products.
              </p>
            </div>
          </div>

          <img
            className="ml-auto w-full max-w-[600px] rounded-[24px] object-cover shadow-[0_18px_36px_rgba(27,49,86,0.12)] max-lg:mx-auto"
            src={aboutImage}
            alt="Metal table decor collection for global markets"
          />
        </div>
      </section>

      <section className="pb-[70px] max-md:pb-12">
        <div className={`${containerClass} max-w-[1480px] text-center`}>
          <h2 className="mx-auto max-w-[650px] text-[clamp(34px,4vw,52px)] font-bold leading-[1.18] tracking-normal text-[#1b3156]">
            Our Metal Table <span className="text-[#30c8bb]">Decor Range</span>
          </h2>
          <p className="mt-4 text-[15px] font-semibold text-[#8b929b]">
            We export a wide variety of decorative products, including:
          </p>

          <div className="mt-10 grid grid-cols-5 gap-x-6 gap-y-7 text-left max-xl:gap-x-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
            {productRange.map((product) => (
              <Link className="group text-inherit no-underline" to={`/product/metal-table-decor/${slugify(product.name)}`} key={product.name}>
                <div className="aspect-[1.08/1] overflow-hidden bg-[#f5f5f2]">
                  <img
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <h3 className="mt-4 text-[14px] font-bold leading-tight text-[#6f737b] max-sm:text-[13px]">
                  {product.name}
                </h3>
              </Link>
            ))}
          </div>

          <a className={`${pillButtonClass} mt-10`} href="/contact-us">
            View Brucher
            <span className={buttonIconClass}>
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>
      </section>

      <section className="pb-[76px] max-md:pb-12">
        <div className={`${containerClass} max-w-[1600px] rounded-[26px] bg-[#1d3058] px-8 py-[82px] text-white max-lg:py-14 max-md:rounded-[20px] max-md:px-4 max-md:py-10`}>
          <h2 className="text-center text-[clamp(34px,4vw,50px)] font-bold leading-tight tracking-normal">
            Technical <span className="text-[#30c8bb]">Details</span>
          </h2>
          <div className="mx-auto mt-7 max-w-[920px] overflow-hidden border-t border-white/18">
            {technicalDetails.map(([label, value]) => (
              <div
                className="grid grid-cols-[0.55fr_1fr] border-b border-white/14 py-4 text-[14px] leading-relaxed max-md:grid-cols-1 max-md:gap-1"
                key={label}
              >
                <span className="font-bold text-[#d9e4f2]">{label}</span>
                <span className="font-semibold text-[#b9c6d6]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[76px] max-md:pb-12">
        <div className={`${containerClass} grid max-w-[1480px] grid-cols-[0.95fr_1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-9`}>
          <img
            className="w-full max-w-[690px] max-lg:mx-auto"
            src={whyChooseImage}
            alt="Metal table decor craftsmanship and quality"
          />

          <div>
            <span className="inline-flex rounded-full border border-[#30c8bb] px-6 py-2 text-[12px] font-bold text-[#30c8bb]">
              Why Choose AHPL
            </span>
            <h2 className="mt-6 text-[clamp(34px,4vw,52px)] font-bold leading-[1.12] tracking-normal text-[#1b3156]">
              Why Choose Our <span className="text-[#30c8bb]">Metal Table Decor?</span>
            </h2>
            <p className="mt-7 max-w-[650px] text-[16px] leading-[1.55] text-[#677180]">
              At Ananta Horizons pvt ltd, we combine India's rich craftsmanship with modern manufacturing
              to deliver premium metal table decor for global markets. Every product is carefully sourced,
              quality-checked, and export-ready, ensuring exceptional value for importers, wholesalers,
              retailers, and distributors.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 max-sm:grid-cols-1">
              {reasons.map((reason) => (
                <div className="flex items-center gap-3 text-[14px] font-bold text-[#1b3156]" key={reason}>
                  <CheckCircle2 className="size-5 flex-none fill-[#30c8bb] text-white" />
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </>
);

export default Metaltable;
