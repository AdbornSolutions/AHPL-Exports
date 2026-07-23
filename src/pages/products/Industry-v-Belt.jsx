import { useState } from "react";
import { CheckCircle2, ChevronDown, CircleCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Common/Footer";
import { containerClass } from "../../utils/tailwindClasses";
import heroImage from "../../assets/products-images/Industry-v-belt/hero.png";
import aboutImage from "../../assets/products-images/Industry-v-belt/about.png";
import whyChooseImage from "../../assets/products-images/Industry-v-belt/whychoose.png";
import craftedBg from "../../assets/products-images/Industry-v-belt/craftedbg.png";
import { useTranslation } from "react-i18next";

const IndustryVBelt = () => {
  const { t } = useTranslation("categories"); const content = t("belts", { returnObjects: true }); const common = t("common", { returnObjects: true });
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <main className="bg-white text-[#1b3156]">
        <section className="bg-[#eef3f7]">
          <img className="h-auto min-h-[260px] w-full object-cover object-center max-md:min-h-0 max-md:object-contain" src={heroImage} alt={content.heroAlt} />
        </section>

        <section className="py-[70px] max-md:py-12">
          <div className={`${containerClass} grid max-w-[1480px] grid-cols-[1.05fr_0.9fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-9`}>
            <div>
              <h1 className="text-[clamp(34px,4.2vw,56px)] font-bold leading-[1.12] text-[#1b3156]">{content.title} <span className="text-[#30c8bb]">{content.titleHighlight}</span></h1>
              <div className="mt-6 max-w-[720px] space-y-4 text-[16px] leading-[1.55] text-[#6d7480] max-md:text-[15px]">
                {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <img className="ml-auto w-full max-w-[600px] object-cover max-lg:mx-auto" src={aboutImage} alt={content.aboutAlt} />
          </div>
        </section>

        <section className="pb-[78px] max-md:pb-12">
          <div className={`${containerClass} max-w-[1600px] rounded-[28px] bg-[#1d3158] px-8 py-[76px] text-white max-md:rounded-[20px] max-md:px-4 max-md:py-10`}>
            <h2 className="text-center text-[clamp(34px,4vw,50px)] font-bold">{common.technical} <span className="text-[#30c8bb]">{common.details}</span></h2>
            <div className="mx-auto mt-7 max-w-[930px] border-t border-white/20">
              {content.technical.map(([label, value]) => <div className="grid grid-cols-[0.58fr_1fr] border-b border-white/15 py-4 text-[14px] leading-relaxed max-md:grid-cols-1 max-md:gap-1" key={label}><span className="font-bold text-[#dce6f4]">{label}</span><span className="font-medium text-[#bdc9da]">{value}</span></div>)}
            </div>
          </div>
        </section>

        <section className="pb-[78px] max-md:pb-12">
          <div className={`${containerClass} grid max-w-[1480px] grid-cols-[0.92fr_1fr] items-center gap-16 max-lg:grid-cols-1 max-lg:gap-9`}>
            <img className="w-full max-w-[650px] max-lg:mx-auto" src={whyChooseImage} alt={content.whyAlt} />
            <div>
              <span className="inline-flex rounded-full border border-[#30c8bb] px-6 py-2 text-[12px] font-bold text-[#30c8bb]">{common.whyChoose}</span>
              <h2 className="mt-6 text-[clamp(34px,4vw,52px)] font-bold leading-[1.12] text-black">{content.whyTitle}<br /><span className="text-[#30c8bb]">{content.whyHighlight}</span></h2>
              <p className="mt-7 max-w-[680px] text-[16px] leading-[1.55] text-[#68717e]">{content.whyDescription}</p>
              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 max-sm:grid-cols-1">{content.benefits.map((benefit) => <div className="flex items-center gap-3 text-[14px] font-bold text-[#263650]" key={benefit}><CheckCircle2 className="size-5 flex-none fill-[#30c8bb] text-white" />{benefit}</div>)}</div>
            </div>
          </div>
        </section>

        <section className="pb-[82px] max-md:pb-12">
          <div className={`${containerClass} relative max-w-[1600px] overflow-hidden rounded-[28px] bg-[#16325a] bg-cover bg-center px-14 py-16 text-white max-lg:px-8 max-md:rounded-[20px] max-md:px-5 max-md:py-10`} style={{ backgroundImage: `linear-gradient(90deg, rgba(12,39,76,.95) 0%, rgba(12,39,76,.8) 48%, rgba(12,39,76,.22) 100%), url("${craftedBg}")` }}>
            <div className="grid grid-cols-[1fr_0.9fr] items-center gap-16 max-lg:grid-cols-1">
              <div className="max-w-[650px]"><h2 className="text-[clamp(30px,3vw,44px)] font-bold">{content.craftedTitle}</h2><p className="mt-6 text-[15px] leading-[1.65] text-white/80">{content.craftedDescription}</p><div className="mt-7 space-y-4">{content.qualityPoints.map((item) => <div className="flex items-center gap-3 text-sm font-bold" key={item}><ShieldCheck className="size-5 text-[#30c8bb]" />{item}</div>)}</div></div>
              <div className="rounded-[24px] bg-white p-10 text-[#1f2937] shadow-2xl max-md:p-6"><h3 className="text-[clamp(25px,2.4vw,36px)] font-bold leading-tight">{content.customTitle}</h3><div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 max-sm:grid-cols-1">{content.customizations.map((item) => <div className="flex items-start gap-2 text-[12px] font-semibold uppercase text-[#68717e]" key={item}><CircleCheck className="mt-0.5 size-4 flex-none text-[#30c8bb]" />{item}</div>)}</div><Link className="mt-8 flex min-h-12 items-center justify-center rounded-md bg-[#30c8bb] px-5 text-sm font-bold text-white no-underline transition hover:bg-[#24b8ac]" to="/contact-us">{content.enquire}</Link></div>
            </div>
          </div>
        </section>

        <section className="pb-[86px] max-md:pb-14">
          <div className={`${containerClass} max-w-[900px]`}><h2 className="text-center text-[clamp(34px,4vw,52px)] font-bold text-black">{content.faqTitle} <span className="text-[#30c8bb]">{content.faqHighlight}</span></h2><div className="mt-10 space-y-4">{content.faqs.map((faq, index) => { const isOpen = openFaq === index; return <div className="border border-[#e2e6eb] bg-white" key={faq.question}><button className="flex w-full items-center justify-between gap-5 px-7 py-5 text-left text-[13px] font-bold uppercase text-[#4a515c]" type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>{faq.question}<ChevronDown className={`size-4 flex-none transition ${isOpen ? "rotate-180" : ""}`} /></button>{isOpen && <p className="px-7 pb-6 text-[14px] leading-[1.65] text-[#737b87]">{faq.answer}</p>}</div>; })}</div></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IndustryVBelt;
