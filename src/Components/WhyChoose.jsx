import { BadgeCheck } from "lucide-react";
import footerBg from "../assets/footer.png";
import experience from "../assets/Group 9.png";
import { containerClass } from "../utils/tailwindClasses";

const points = [
  "Global Trade Network",
  "Reliable Logistics Support",
  "Quality Assurance",
  "Competitive Pricing",
];

const WhyChoose = () => (
  <section id="why-ahpl" className="pb-[72px] max-md:pb-12">
    <div
      className={`${containerClass} overflow-hidden rounded-[28px] bg-cover bg-center px-10 py-[60px] text-white max-lg:px-8 max-lg:py-12 max-md:rounded-[22px] max-md:px-5 max-md:py-9`}
      style={{ backgroundImage: `url("${footerBg}")` }}
    >
      <div className="grid min-h-[430px] grid-cols-[1fr_0.98fr] items-center gap-10 max-lg:gap-7 max-md:min-h-0 max-md:grid-cols-1">
        <div className="relative z-10 max-w-[560px]">
          <span className="inline-flex rounded-full border border-white px-6 py-3 text-[15px] font-medium text-white max-sm:px-5 max-sm:py-2.5 max-sm:text-sm">
            Why Choose AHPL
          </span>

          <h2 className="mt-8 text-[clamp(38px,4.4vw,52px)] font-bold leading-[1.25] tracking-normal text-white max-md:mt-6">
            Why Businesses Trust
            <br />
            <span className="text-[#2EC4B6]">AHPL for Global Trade.</span>
          </h2>

          <p className="mt-8 max-w-[550px] text-[17px] leading-[1.42] text-white max-lg:text-base max-md:mt-6">
            At Ananta horizons pvt ltd, we go beyond buying and selling products. We build
            long-term partnerships by delivering reliable sourcing, quality assurance,
            transparent processes, and seamless international trade solutions that help businesses
            grow confidently across global markets
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-9 gap-y-5 text-[16px] font-medium text-white max-lg:gap-x-5 max-lg:text-[15px] max-sm:grid-cols-1">
            {points.map((point) => (
              <span className="flex items-center gap-3" key={point}>
                <span className="grid size-[26px] flex-none place-items-center rounded-full bg-[#2EC4B6] text-white">
                  <BadgeCheck className="size-[15px] fill-white/20" />
                </span>
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[365px] items-center justify-center max-md:min-h-0">
          <img
            className="w-full max-w-[620px] object-contain drop-shadow-[0_28px_46px_rgba(0,0,0,0.24)] max-md:max-w-[560px]"
            src={experience}
            alt="AHPL warehouse, logistics, and years of experience"
          />
        </div>
      </div>
    </div>
  </section>
);

export default WhyChoose;
