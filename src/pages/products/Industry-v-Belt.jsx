import { useState } from "react";
import { CheckCircle2, ChevronDown, CircleCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Common/Footer";
import { containerClass } from "../../utils/tailwindClasses";
import heroImage from "../../assets/products-images/Industry-v-belt/hero.png";
import aboutImage from "../../assets/products-images/Industry-v-belt/about.png";
import whyChooseImage from "../../assets/products-images/Industry-v-belt/whychoose.png";
import craftedBg from "../../assets/products-images/Industry-v-belt/craftedbg.png";

const technicalDetails = [
  ["Product Category", "Industrial V-Belts"],
  ["Material", "High-Quality Rubber with Reinforced Tensile Cords"],
  ["Belt Type", "Classical, Narrow, Cogged, Wrapped, Banded & Custom"],
  ["Temperature Resistance", "Suitable for Industrial Operating Conditions"],
  ["Application", "Industrial Machinery, Agriculture, Automotive & Manufacturing"],
  ["Packaging", "Export Standard Packaging"],
  ["Country of Origin", "India"],
];

const benefits = ["Superior Quality Materials", "High Performance", "Reliable Durability", "Precision Manufacturing"];
const customizations = ["Custom Label Art Designs", "Size Variations", "Color & Finish Options", "Brand Logo", "Customized Packaging", "OEM Manufacturing Support"];
const faqs = [
  { question: "How can I place bulk export orders?", answer: "You can request a quote via our contact form or email. Our team will guide you through the MOQ, pricing tiers, packaging, documentation, and international shipment process." },
  { question: "What customization options do you offer?", answer: "We offer custom sizing, belt profiles, colors, private labels, brand logos, export packaging, and OEM manufacturing support based on order requirements." },
  { question: "How do you ensure export-quality packaging?", answer: "Every order is quality checked and packed using export-standard materials designed to protect the belts from moisture, dust, deformation, and transit damage." },
  { question: "Which countries do you currently export to?", answer: "We support buyers across global markets. Contact our export team with your destination country so we can confirm logistics, documentation, and delivery options." },
];

const IndustryVBelt = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <main className="bg-white text-[#1b3156]">
        <section className="bg-[#eef3f7]">
          <img className="h-auto min-h-[260px] w-full object-cover object-center max-md:min-h-0 max-md:object-contain" src={heroImage} alt="High-performance industrial V-belts exported from India" />
        </section>

        <section className="py-[70px] max-md:py-12">
          <div className={`${containerClass} grid max-w-[1480px] grid-cols-[1.05fr_0.9fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-9`}>
            <div>
              <h1 className="text-[clamp(34px,4.2vw,56px)] font-bold leading-[1.12] text-[#1b3156]">Reliable Power<br className="max-sm:hidden" /> Transmission <span className="text-[#30c8bb]">Solutions</span></h1>
              <div className="mt-6 max-w-[720px] space-y-4 text-[16px] leading-[1.55] text-[#6d7480] max-md:text-[15px]">
                <p>Ananta Horizons Pvt. Ltd. exports a comprehensive range of Industrial V-Belts that deliver superior performance, durability, and efficiency across a variety of industrial applications. Sourced from certified manufacturers, our belts are produced using high-grade materials and advanced manufacturing processes to ensure consistent quality and dependable operation.</p>
                <p>Whether you are an importer, distributor, OEM, or industrial supplier, our V-Belts provide a reliable solution for machinery requiring efficient and uninterrupted power transmission.</p>
              </div>
            </div>
            <img className="ml-auto w-full max-w-[600px] object-cover max-lg:mx-auto" src={aboutImage} alt="Industrial V-belts product range" />
          </div>
        </section>

        <section className="pb-[78px] max-md:pb-12">
          <div className={`${containerClass} max-w-[1600px] rounded-[28px] bg-[#1d3158] px-8 py-[76px] text-white max-md:rounded-[20px] max-md:px-4 max-md:py-10`}>
            <h2 className="text-center text-[clamp(34px,4vw,50px)] font-bold">Technical <span className="text-[#30c8bb]">Details</span></h2>
            <div className="mx-auto mt-7 max-w-[930px] border-t border-white/20">
              {technicalDetails.map(([label, value]) => <div className="grid grid-cols-[0.58fr_1fr] border-b border-white/15 py-4 text-[14px] leading-relaxed max-md:grid-cols-1 max-md:gap-1" key={label}><span className="font-bold text-[#dce6f4]">{label}</span><span className="font-medium text-[#bdc9da]">{value}</span></div>)}
            </div>
          </div>
        </section>

        <section className="pb-[78px] max-md:pb-12">
          <div className={`${containerClass} grid max-w-[1480px] grid-cols-[0.92fr_1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-9`}>
            <img className="w-full max-w-[650px] max-lg:mx-auto" src={whyChooseImage} alt="High-quality industrial V-belts" />
            <div>
              <span className="inline-flex rounded-full border border-[#30c8bb] px-6 py-2 text-[12px] font-bold text-[#30c8bb]">Why Choose AHPL</span>
              <h2 className="mt-6 text-[clamp(34px,4vw,52px)] font-bold leading-[1.12] text-black">Why Choose Our<br /><span className="text-[#30c8bb]">Industrial V-Belts?</span></h2>
              <p className="mt-7 max-w-[680px] text-[16px] leading-[1.55] text-[#68717e]">At Ananta Horizons Pvt. Ltd., designed for reliability and efficiency, our Industrial V-Belts deliver dependable performance even in demanding operating environments.</p>
              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 max-sm:grid-cols-1">{benefits.map((benefit) => <div className="flex items-center gap-3 text-[14px] font-bold text-[#263650]" key={benefit}><CheckCircle2 className="size-5 flex-none fill-[#30c8bb] text-white" />{benefit}</div>)}</div>
            </div>
          </div>
        </section>

        <section className="pb-[82px] max-md:pb-12">
          <div className={`${containerClass} relative max-w-[1600px] overflow-hidden rounded-[28px] bg-[#16325a] bg-cover bg-center px-14 py-16 text-white max-lg:px-8 max-md:rounded-[20px] max-md:px-5 max-md:py-10`} style={{ backgroundImage: `linear-gradient(90deg, rgba(12,39,76,.95) 0%, rgba(12,39,76,.8) 48%, rgba(12,39,76,.22) 100%), url("${craftedBg}")` }}>
            <div className="grid grid-cols-[1fr_0.9fr] items-center gap-16 max-lg:grid-cols-1">
              <div className="max-w-[650px]"><h2 className="text-[clamp(30px,3vw,44px)] font-bold">Crafted with Precision</h2><p className="mt-6 text-[15px] leading-[1.65] text-white/80">Our rigorous quality control ensures that every item leaving our facility is a masterpiece of Indian craftsmanship. We blend age-old techniques with modern manufacturing processes to deliver excellence at scale.</p><div className="mt-7 space-y-4">{["Strict Quality Checks", "Premium Raw Materials"].map((item) => <div className="flex items-center gap-3 text-sm font-bold" key={item}><ShieldCheck className="size-5 text-[#30c8bb]" />{item}</div>)}</div></div>
              <div className="rounded-[24px] bg-white p-10 text-[#1f2937] shadow-2xl max-md:p-6"><h3 className="text-[clamp(25px,2.4vw,36px)] font-bold leading-tight">Tailored to Your Business Needs</h3><div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 max-sm:grid-cols-1">{customizations.map((item) => <div className="flex items-start gap-2 text-[12px] font-semibold uppercase text-[#68717e]" key={item}><CircleCheck className="mt-0.5 size-4 flex-none text-[#30c8bb]" />{item}</div>)}</div><Link className="mt-8 flex min-h-12 items-center justify-center rounded-md bg-[#30c8bb] px-5 text-sm font-bold text-white no-underline transition hover:bg-[#24b8ac]" to="/contact-us">Enquire About Customization</Link></div>
            </div>
          </div>
        </section>

        <section className="pb-[86px] max-md:pb-14">
          <div className={`${containerClass} max-w-[900px]`}><h2 className="text-center text-[clamp(34px,4vw,52px)] font-bold text-black">Frequently Asked <span className="text-[#30c8bb]">Questions</span></h2><div className="mt-10 space-y-4">{faqs.map((faq, index) => { const isOpen = openFaq === index; return <div className="border border-[#e2e6eb] bg-white" key={faq.question}><button className="flex w-full items-center justify-between gap-5 px-7 py-5 text-left text-[13px] font-bold uppercase text-[#4a515c]" type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>{faq.question}<ChevronDown className={`size-4 flex-none transition ${isOpen ? "rotate-180" : ""}`} /></button>{isOpen && <p className="px-7 pb-6 text-[14px] leading-[1.65] text-[#737b87]">{faq.answer}</p>}</div>; })}</div></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IndustryVBelt;
