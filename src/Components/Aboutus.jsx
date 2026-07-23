import { ArrowUpRight } from "lucide-react";
import ship from "../assets/Subtract.png";
import truck from "../assets/Subtract (1).png";
import {
  buttonIconClass,
  containerClass,
  pillButtonClass,
  sectionClass,
  sectionCopyClass,
  sectionTitleClass,
} from "../utils/tailwindClasses";
import { useTranslation } from "react-i18next";

const Aboutus = () => {
  const { t } = useTranslation(["home", "common"]);
  const stats = t("about.stats", { returnObjects: true });
  return (
  <section id="about-us" className={sectionClass}>
    <div className={containerClass}>
      <div className="grid grid-cols-[245px_1fr_245px] items-center gap-8 max-[980px]:grid-cols-[160px_1fr_160px] max-[980px]:gap-5 max-md:grid-cols-2 max-[430px]:gap-2">
        <img className="max-h-[385px] w-full object-contain max-md:max-h-[260px]" src={ship} alt={t("about.shipAlt")} />
        <div className="text-center max-md:col-span-full max-md:row-start-1">

          <h2 className={sectionTitleClass}>{t("about.title")} <span className="text-[#30c8bb]">{t("about.titleHighlight")}</span></h2>
          <p className={sectionCopyClass}>
            {t("about.description")}
          </p>
          <a className={`${pillButtonClass} mt-6`} href="#why-ahpl">
            {t("buttons.moreAbout", { ns: "common" })} <span className={buttonIconClass}><ArrowUpRight size={15} /></span>
          </a>
        </div>
        <img className="max-h-[385px] w-full object-contain max-md:max-h-[260px]" src={truck} alt={t("about.truckAlt")} />
      </div>

      <div className="mt-[58px] grid grid-cols-4 gap-[18px] max-md:grid-cols-2 max-[430px]:gap-2.5">
        {stats.map(({ value, label }, index) => (
          <article
            className={`grid min-h-[140px] place-content-center rounded-[26px] text-center text-white [clip-path:polygon(11%_0,89%_0,100%_18%,100%_100%,0_100%,0_18%)] max-md:min-h-[120px] ${
              index % 2 === 0 ? "bg-[#164778]" : "bg-[#30c8bb]"
            }`}
            key={label}
          >
            <strong className="text-[44px] leading-none max-[430px]:text-[34px]">{value}</strong>
            <span className="mt-3 text-xs opacity-90">{label}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Aboutus;
