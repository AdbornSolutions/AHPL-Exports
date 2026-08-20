import { CheckCircle2 } from "lucide-react";
import Footer from "../../Components/Common/Footer";
import { containerClass } from "../../utils/tailwindClasses";
import ProductRangeGrid from "../../Components/Products/ProductRangeGrid";
import { copperProducts } from "../../data/otherProductRanges";
import heroImage from "../../assets/products-images/CopperArticles/Hero.png";
import aboutImage from "../../assets/products-images/CopperArticles/About.jpg";
import whyChooseImage from "../../assets/products-images/CopperArticles/WhyChoose.png";

const reasons = [
  "Diverse Product Range",
  "Authentic Craftsmanship",
  "Quality-Focused Sourcing",
  "Customization Options",
];

const CopperArticles = () => (
  <>
    <main className="bg-white text-[#1b3156]">
      <section className="bg-[#efe0cf]">
        <img
          className="h-auto min-h-[250px] w-full object-cover object-center max-md:min-h-0 max-md:object-contain"
          src={heroImage}
          alt="Premium copper bottles, jugs, glasses, decor, and utility articles crafted in India"
        />
      </section>

      <section className="py-[68px] max-lg:py-14 max-md:py-10">
        <div className={`${containerClass} grid max-w-[1480px] grid-cols-[0.9fr_1fr] items-center gap-14 max-lg:grid-cols-1 max-lg:gap-8`}>
          <div className="max-w-[620px] max-lg:max-w-none">
            <h1 className="text-[clamp(34px,4.3vw,56px)] font-bold leading-[1.12] text-[#1b3156]">
              Traditional Craftsmanship,
              <br className="max-sm:hidden" />
              <span className="text-[#30c8bb]"> Timeless Appeal</span>
            </h1>
            <div className="mt-6 space-y-5 text-[16px] leading-[1.45] text-[#6d7480] max-md:text-[15px]">
              <p>AHPL offers a diverse range of premium copper articles sourced from trusted Indian manufacturers and skilled artisans. From functional drinkware to intricately crafted decorative idols, every product reflects attention to detail, quality workmanship, and authentic Indian craftsmanship.</p>
              <p>Our collection is suitable for international buyers looking for distinctive Indian-origin products for retail, gifting, hospitality, decor, and everyday utility.</p>
            </div>
          </div>
          <img className="ml-auto w-full max-w-[600px] rounded-[24px] object-cover  max-lg:mx-auto" src={aboutImage} alt="Indian artisan handcrafting premium copper articles" />
        </div>
      </section>

      <section className="pb-[70px] max-md:pb-12">
        <div className={`${containerClass} max-w-[1480px] text-center`}>
          <h2 className="mx-auto max-w-[650px] text-[clamp(34px,4vw,52px)] font-bold leading-[1.18] text-[#1b3156]">
            Explore Our <span className="text-[#30c8bb]">Copper Articles</span>
          </h2>
          <p className="mt-4 text-[15px] font-semibold text-[#8b929b]">Explore handcrafted drinkware, serveware, décor, and devotional copper articles.</p>
          <ProductRangeGrid products={copperProducts} categorySlug="copper-articles" />
        </div>
      </section>

      <section className="pb-[76px] max-md:pb-12">
        <div className={`${containerClass} grid max-w-[1480px] grid-cols-[0.95fr_1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-9`}>
          <img className="w-full max-w-[690px] max-lg:mx-auto" src={whyChooseImage} alt="Copper drinkware and handcrafted copper idol collection" />
          <div>
            <span className="inline-flex rounded-full border border-[#30c8bb] px-6 py-2 text-[12px] font-bold text-[#30c8bb]">Why Choose AHPL</span>
            <h2 className="mt-6 text-[clamp(34px,4vw,52px)] font-bold leading-[1.12] text-[#1b3156]">
              Why Choose Our <span className="text-[#30c8bb]">Copper Articles?</span>
            </h2>
            <p className="mt-7 max-w-[650px] text-[16px] leading-[1.55] text-[#677180]">Our copper articles combine traditional Indian craftsmanship, functional design, and refined finishing to meet the needs of global buyers. From bottles and jugs to idols and decorative pieces, every product is carefully sourced for quality, durability, and visual appeal. With flexible customization, bulk-order support, and export-ready packaging, AHPL provides a reliable solution for retailers, wholesalers, gifting brands, and hospitality businesses seeking premium copper products from India.</p>
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

export default CopperArticles;
