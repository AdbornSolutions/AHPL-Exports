import { ArrowUpRight } from "lucide-react";
import heroImage from "../assets/herobanner.png";
import { buttonIconClass, containerClass, pillButtonClass } from "../utils/tailwindClasses";

const MainHero = () => (
  <section
    id="home"
    className="relative flex min-h-[555px] items-center bg-cover bg-center max-md:min-h-[600px] max-md:bg-[64%_center] max-md:before:absolute max-md:before:inset-x-0 max-md:before:top-[66px] max-md:before:h-[600px] max-md:before:bg-gradient-to-r max-md:before:from-[#031e42]/85 max-md:before:to-[#031e42]/20"
    style={{ backgroundImage: `url("${heroImage}")` }}
  >
    <div className={`${containerClass} relative pb-5`}>
      <span className="text-[13px] font-bold text-[#34d6c6]">AHPL Company</span>
      <h1 className="my-[18px] mb-7 max-w-[690px] text-[clamp(40px,5vw,66px)] font-bold leading-[1.08] tracking-normal text-white max-md:text-[40px]">
        Global Trade. Trusted<br />
        Partnerships. <span className="text-[#30c8bb]">Limitless<br />Opportunities.</span>
      </h1>
      <a className={pillButtonClass} href="#contact-us">
        Get a Quote <span className={buttonIconClass}><ArrowUpRight size={15} /></span>
      </a>
    </div>
  </section>
);

export default MainHero;
