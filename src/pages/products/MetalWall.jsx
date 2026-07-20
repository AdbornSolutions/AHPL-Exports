import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { slugify } from "../../data/productCatalog";
import Footer from "../../Components/Common/Footer";
import {
  buttonIconClass,
  containerClass,
  pillButtonClass,
} from "../../utils/tailwindClasses";
import heroImage from "../../assets/products-images/Metal-wall/hero.png";
import aboutImage from "../../assets/products-images/Metal-wall/about.png";
import rangeOne from "../../assets/products-images/Metal-wall/1.png";
import rangeTwo from "../../assets/products-images/Metal-wall/2.png";
import rangeThree from "../../assets/products-images/Metal-wall/3.png";
import rangeFour from "../../assets/products-images/Metal-wall/4.png";
import rangeFive from "../../assets/products-images/Metal-wall/5.png";
import rangeSix from "../../assets/products-images/Metal-wall/6.png";
import rangeSeven from "../../assets/products-images/Metal-wall/7.png";
import rangeEight from "../../assets/products-images/Metal-wall/8.png";
import rangeNine from "../../assets/products-images/Metal-wall/9.png";
import rangeTen from "../../assets/products-images/Metal-wall/10.png";

const productRange = [
  { name: "Turban Tales", image: rangeOne },
  { name: "The Divine Hour", image: rangeTwo },
  { name: "Turban Art", image: rangeThree },
  { name: "Bansuri Bliss", image: rangeFour },
  { name: "Gilded Ganesha", image: rangeFive },
  { name: "Bloom Basket (Golden)", image: rangeSix },
  { name: "The Holy Hook", image: rangeSeven },
  { name: "Gaj-Kriti", image: rangeEight },
  { name: "Time Trek", image: rangeNine },
  { name: "Symphony Strings", image: rangeTen },
];

const technicalDetails = [
  ["Product Category", "Metal Wall Décor"],
  ["Material", "Iron, Aluminum, Brass, Stainless Steel"],
  ["Finish", "Matte, Glossy, Antique, Gold, Black & Custom"],
  ["Style", "Modern, Contemporary, Luxury, Industrial"],
  ["Application", "Residential & Commercial Interiors"],
  ["Mounting", "Wall Mounted"],
  ["Country of Origin", "India"],
];



const MetalWall = () => (
  <>
    <main className="bg-white text-[#1b3156]">
      <section className="bg-[#e9e4db]">
        <img
          className="h-auto min-h-[250px] w-full object-cover object-center max-md:min-h-0 max-md:object-contain"
          src={heroImage}
          alt="Metal wall decor exported from India"
        />
      </section>

      <section className="py-[68px] max-lg:py-14 max-md:py-10">
        <div className={`${containerClass} grid max-w-[1480px] grid-cols-[0.9fr_1fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-8`}>
          <div className="max-w-[650px] max-lg:max-w-none">
            <h1 className="text-[clamp(34px,4.3vw,56px)] font-bold leading-[1.12] tracking-normal text-[#1b3156]">
              Stylish Wall Decor Crafted
              <br className="max-sm:hidden" />
              for <span className="text-[#30c8bb]">Global Interiors</span>
            </h1>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.45] text-[#6d7480] max-md:text-[15px]">
              <p>
                Ananta Horizons Pvt Ltd exports an exclusive range of metal wall décor designed to enhance
                modern and contemporary spaces. Sourced from trusted Indian manufacturers, each piece is
                crafted with precision using high-quality materials and finished to meet international quality
                standards.
              </p>
              <p>
                Our collection is ideal for importers, wholesalers, retailers, distributors, interior designers,
                and hospitality businesses seeking elegant and export-ready decorative wall art.
              </p>
            </div>
          </div>

          <img
            className="ml-auto w-full max-w-[600px] rounded-[24px] object-cover shadow-[0_18px_36px_rgba(27,49,86,0.12)] max-lg:mx-auto"
            src={aboutImage}
            alt="Decorative metal wall art in a contemporary interior"
          />
        </div>
      </section>

      <section className="pb-[70px] max-md:pb-12">
        <div className={`${containerClass} max-w-[1480px] text-center`}>
          <h2 className="mx-auto max-w-[650px] text-[clamp(34px,4vw,52px)] font-bold leading-[1.18] tracking-normal text-[#1b3156]">
            Our Metal Wall <span className="text-[#30c8bb]">Decor Range</span>
          </h2>
          <p className="mt-4 text-[15px] font-semibold text-[#8b929b]">
            We export a wide variety of decorative products, including:
          </p>

          <div className="mt-10 grid grid-cols-5 gap-x-6 gap-y-7 text-left max-xl:gap-x-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
            {productRange.map((product) => (
              <Link className="group text-inherit no-underline" to={`/product/metal-wall-decor/${slugify(product.name)}`} key={product.name}>
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
            View Brochure
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


    </main>

    <Footer />
  </>
);

export default MetalWall;
