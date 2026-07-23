import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { containerClass } from "../utils/tailwindClasses";
import client1 from "../assets/testimonials/indian-client-1.png";
import client2 from "../assets/testimonials/indian-client-2.png";
import client3 from "../assets/testimonials/indian-client-3.png";
import client4 from "../assets/testimonials/indian-client-4.png";
import client5 from "../assets/testimonials/indian-client-5.png";
import client6 from "../assets/testimonials/indian-client-6.png";
import client7 from "../assets/testimonials/indian-client-7.png";
import client8 from "../assets/testimonials/indian-client-8.png";
import { useTranslation } from "react-i18next";
const clientImages = [client1, client2, client3, client4, client5, client6, client7, client8];

const Testimonials = () => {
  const { t } = useTranslation(["home", "common"]);
  const testimonials = t("testimonials.items", { returnObjects: true }).map((item, index) => ({ ...item, image: clientImages[index] }));
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];
  const showPrevious = () => setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % testimonials.length);

  return (
    <section className="bg-white py-[82px] text-center max-md:py-[62px]">
      <div className={containerClass}>
        <span className="inline-flex rounded-full border border-[#2EC4B6] px-6 py-2.5 text-[11px] font-bold text-[#2EC4B6]">{t("testimonials.eyebrow")}</span>
        <h2 className="mt-7 text-[clamp(34px,4vw,48px)] font-bold leading-tight text-[#172b50]">{t("testimonials.title")}</h2>

        <div className="mx-auto mt-11 flex max-w-[760px] items-center justify-start gap-4 overflow-x-auto px-2 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center">
          {testimonials.map((person, index) => (
            <button className={`shrink-0 rounded-[17px] p-1 transition duration-300 ${index === activeIndex ? "border border-[#2EC4B6]" : "border border-transparent opacity-70 hover:opacity-100"}`} key={person.name} onClick={() => setActiveIndex(index)} type="button" aria-label={t("accessibility.viewTestimonial", { ns: "common", name: person.name })}>
              <img className={`rounded-[13px] object-cover transition-all ${index === activeIndex ? "size-[82px] max-sm:size-[66px]" : "size-[64px] max-sm:size-[54px]"}`} src={person.image} alt={person.name} loading="lazy" />
            </button>
          ))}
        </div>

        <div className="relative mx-auto mt-[62px] max-w-[920px]">
          <button className="absolute left-0 top-[72px] grid size-[34px] place-items-center rounded-full border border-[#2EC4B6] bg-white text-[#2EC4B6] transition hover:bg-[#2EC4B6] hover:text-white max-md:static max-md:mb-7 max-md:inline-grid" type="button" aria-label={t("accessibility.previousTestimonial", { ns: "common" })} onClick={showPrevious}><ArrowLeft size={17} /></button>
          <div className="mx-auto max-w-[610px]" aria-live="polite">
            <span className="mx-auto grid size-[46px] place-items-center rounded-full bg-[#2EC4B6] text-white"><Quote className="size-6 fill-white" /></span>
            <p className="mx-auto mt-9 min-h-[54px] max-w-[560px] text-[15px] leading-[1.4] text-black max-md:text-sm">{active.quote}</p>
            <span className="relative mx-auto mt-5 block h-[58px] w-px bg-[#2EC4B6] after:absolute after:bottom-0 after:left-[-4px] after:size-2 after:rotate-45 after:border-b after:border-r after:border-[#2EC4B6]" />
            <strong className="mt-4 block text-[15px] font-semibold leading-none text-black">{active.name}</strong>
            <small className="mt-1 block text-[9px] leading-none text-black">{active.role}</small>
          </div>
          <button className="absolute right-0 top-[72px] grid size-[34px] place-items-center rounded-full border border-[#2EC4B6] bg-white text-[#2EC4B6] transition hover:bg-[#2EC4B6] hover:text-white max-md:static max-md:mt-7 max-md:inline-grid" type="button" aria-label={t("accessibility.nextTestimonial", { ns: "common" })} onClick={showNext}><ArrowRight size={17} /></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
