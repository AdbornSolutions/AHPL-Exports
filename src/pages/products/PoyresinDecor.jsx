import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { slugify } from "../../data/productCatalog";
import Footer from "../../Components/Common/Footer";
import { buttonIconClass, containerClass, pillButtonClass } from "../../utils/tailwindClasses";
import heroImage from "../../assets/products-images/Poyresin Decor/hero.png";
import aboutImage from "../../assets/products-images/Poyresin Decor/about.png";
import whyChooseImage from "../../assets/products-images/Poyresin Decor/whychoose.png";
import rangeOne from "../../assets/products-images/Poyresin Decor/1.png";
import rangeTwo from "../../assets/products-images/Poyresin Decor/2.png";
import rangeThree from "../../assets/products-images/Poyresin Decor/3.png";
import rangeFour from "../../assets/products-images/Poyresin Decor/4.png";
import rangeFive from "../../assets/products-images/Poyresin Decor/5.png";
import rangeSix from "../../assets/products-images/Poyresin Decor/6.png";
import rangeSeven from "../../assets/products-images/Poyresin Decor/7.png";
import rangeEight from "../../assets/products-images/Poyresin Decor/8.png";
import rangeNine from "../../assets/products-images/Poyresin Decor/9.png";
import rangeTen from "../../assets/products-images/Poyresin Decor/10.png";

const productRange = [
  { name: "Rudra-Ansh (Black)", image: rangeOne },
  { name: "Ashwa", image: rangeTwo },
  { name: "Mayureshwar", image: rangeThree },
  { name: "Night-Charm (White)", image: rangeFour },
  { name: "Gaj-Jhoola", image: rangeFive },
  { name: "Carbon Horse", image: rangeSix },
  { name: "Aura-Hawk", image: rangeSeven },
  { name: "Midnight Monk (White)", image: rangeEight },
  { name: "Chhatrapati", image: rangeNine },
  { name: "Twin Grace", image: rangeTen },
];

const technicalDetails = [
  ["Product Category", "Polyresin Decor"],
  ["Material", "Premium Polyresin"],
  ["Finish", "Matte, Glossy, Antique, Metallic & Custom"],
  ["Style", "Modern, Contemporary, Classic, Luxury"],
  ["Application", "Home, Hotel, Office & Commercial Interiors"],
  ["Packaging", "Export Standard Packaging"],
  ["Country of Origin", "India"],
];

const reasons = [
  "Premium Craftsmanship",
  "Wide Range of Designs",
  "High-Quality Materials",
  "Quality Assured",
];

const PoyresinDecor = () => (
  <>
    <main className="bg-white text-[#1b3156]">
      <section className="bg-[#2b241d]">
        <img className="h-auto min-h-[250px] w-full object-cover object-center max-md:min-h-[230px]" src={heroImage} alt="Premium polyresin decor exported from India" />
      </section>

      <section className="py-[68px] max-lg:py-14 max-md:py-10">
        <div className={`${containerClass} grid max-w-[1480px] grid-cols-[0.9fr_1fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-8`}>
          <div className="max-w-[650px] max-lg:max-w-none">
            <h1 className="text-[clamp(34px,4.3vw,56px)] font-bold leading-[1.12] text-[#1b3156]">
              Elegant Décor Crafted with <span className="text-[#30c8bb]">Precision</span>
            </h1>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.45] text-[#6d7480] max-md:text-[15px]">
              <p>
                Ananta Horizons Pvt Ltd exports a premium range of polyresin décor products that blend creativity,
                craftsmanship, and quality. Manufactured by trusted Indian artisans and suppliers, every piece is
                carefully designed to deliver outstanding aesthetics and long-lasting durability.
              </p>
              <p>
                From decorative figurines to contemporary sculptures, our collection is created to meet the
                expectations of international retailers, wholesalers, distributors, and interior designers.
              </p>
            </div>
          </div>
          <img className="ml-auto w-full max-w-[600px] rounded-[24px] object-cover shadow-[0_18px_36px_rgba(27,49,86,0.12)] max-lg:mx-auto" src={aboutImage} alt="Premium decorative polyresin collection" />
        </div>
      </section>

      <section className="pb-[70px] max-md:pb-12">
        <div className={`${containerClass} max-w-[1480px] text-center`}>
          <h2 className="mx-auto max-w-[720px] text-[clamp(34px,4vw,52px)] font-bold leading-[1.18] text-[#1b3156]">
            Our Polyresin <span className="text-[#30c8bb]">Decor Range</span>
          </h2>
          <p className="mt-4 text-[15px] font-semibold text-[#8b929b]">We export a wide variety of decorative products, including:</p>
          <div className="mt-10 grid grid-cols-5 gap-x-6 gap-y-7 text-left max-xl:gap-x-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
            {productRange.map((product) => (
              <Link className="group text-inherit no-underline" to={`/product/polyresin-decor/${slugify(product.name)}`} key={product.name}>
                <div className="aspect-[1.08/1] overflow-hidden bg-[#f5f5f2]">
                  <img className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src={product.image} alt={product.name} />
                </div>
                <h3 className="mt-4 text-[14px] font-bold leading-tight text-[#6f737b] max-sm:text-[13px]">{product.name}</h3>
              </Link>
            ))}
          </div>
          <a className={`${pillButtonClass} mt-10`} href="/contact-us">
            View Brochure <span className={buttonIconClass}><ArrowUpRight size={15} /></span>
          </a>
        </div>
      </section>

      <section className="pb-[76px] max-md:pb-12">
        <div className={`${containerClass} max-w-[1600px] rounded-[26px] bg-[#1d3058] px-8 py-[82px] text-white max-lg:py-14 max-md:rounded-[20px] max-md:px-4 max-md:py-10`}>
          <h2 className="text-center text-[clamp(34px,4vw,50px)] font-bold leading-tight">Technical <span className="text-[#30c8bb]">Details</span></h2>
          <div className="mx-auto mt-7 max-w-[920px] overflow-hidden border-t border-white/18">
            {technicalDetails.map(([label, value]) => (
              <div className="grid grid-cols-[0.55fr_1fr] border-b border-white/14 py-4 text-[14px] leading-relaxed max-md:grid-cols-1 max-md:gap-1" key={label}>
                <span className="font-bold text-[#d9e4f2]">{label}</span>
                <span className="font-semibold text-[#b9c6d6]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[76px] max-md:pb-12">
        <div className={`${containerClass} grid max-w-[1480px] grid-cols-[0.95fr_1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-9`}>
          <img className="w-full max-w-[690px] max-lg:mx-auto" src={whyChooseImage} alt="Polyresin craftsmanship and decorative collection" />
          <div>
            <span className="inline-flex rounded-full border border-[#30c8bb] px-6 py-2 text-[12px] font-bold text-[#30c8bb]">Why Choose AHPL</span>
            <h2 className="mt-6 text-[clamp(34px,4vw,52px)] font-bold leading-[1.12] text-[#1b3156]">
              Why Choose Our <span className="text-[#30c8bb]">Polyresin Decor?</span>
            </h2>
            <p className="mt-7 max-w-[650px] text-[16px] leading-[1.55] text-[#677180]">
              At Ananta Horizons Pvt Ltd, our polyresin décor collection is designed to combine artistic beauty
              with exceptional durability. Every product is crafted with precision to meet the highest international quality standards.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 max-sm:grid-cols-1">
              {reasons.map((reason) => (
                <div className="flex items-center gap-3 text-[14px] font-bold text-[#1b3156]" key={reason}>
                  <CheckCircle2 className="size-5 flex-none fill-[#30c8bb] text-white" />{reason}
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

export default PoyresinDecor;
