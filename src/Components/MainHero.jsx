import { ArrowUpRight } from "lucide-react";
import heroImage from "../assets/herobanner.png";
import mobileHeroImage from "../assets/mobileherobg.png";
import { buttonIconClass, containerClass, pillButtonClass } from "../utils/tailwindClasses";
import { useTranslation } from "react-i18next";

const MainHero = () => {
  const { t } = useTranslation(["home", "common"]);
  return (
  <section
    id="home"
    className="relative flex min-h-[555px] items-center overflow-hidden max-md:min-h-[600px]"
  >
    <div
      className="absolute inset-0 bg-cover bg-center max-md:hidden"
      style={{ backgroundImage: `url("${heroImage}")` }}
    />
    <img
      className="absolute inset-0 hidden h-full w-full object-cover object-[64%_center] max-md:block"
      src={mobileHeroImage}
      alt=""
      aria-hidden="true"
    />
    <div className={`${containerClass} relative pb-5`}>
      <span className="text-[13px] font-bold text-[#34d6c6]">{t("hero.eyebrow")}</span>
      <h1 className="my-[18px] mb-7 max-w-[690px] text-[clamp(40px,5vw,66px)] font-bold leading-[1.08] tracking-normal text-white max-md:text-[40px]">
        {t("hero.title")}<br />
        {t("hero.titleLine2")} <span className="text-[#30c8bb]">{t("hero.titleHighlight")}</span>
      </h1>
      <a className={pillButtonClass} href="/product">
        {t("buttons.exploreProducts", { ns: "common" })} <span className={buttonIconClass}><ArrowUpRight size={15} /></span>
      </a> 
    </div>
  </section>
  );
};

export default MainHero;
