import logoOne from "../assets/logo1.png";
import logoTwo from "../assets/logo2.png";
import logoThree from "../assets/logo3.png";
import { containerClass, eyebrowClass } from "../utils/tailwindClasses";
import { useTranslation } from "react-i18next";

const certifications = [
  { image: logoOne, nameIndex: 0 }, { image: logoTwo, nameIndex: 1 }, { image: logoThree, nameIndex: 2 },
];

const Certifications = () => {
  const { t } = useTranslation("home");
  return (
  <section className="bg-white py-[82px] text-center max-md:py-[62px]">
    <div className={containerClass}>
      <span className={`${eyebrowClass} bg-white px-6 text-[11px] text-[#2EC4B6]`}>
        {t("certifications.eyebrow")}
      </span>

      <h2 className="mx-auto mt-6 max-w-[720px] text-[clamp(34px,4.2vw,52px)] font-bold leading-[1.18] tracking-normal text-[#172b50]">
        {t("certifications.title")} {" "}
        <span className="text-[#2EC4B6]">
          {t("certifications.titleHighlight")}
        </span>
      </h2>

      <div className="mx-auto mt-16 flex flex-nowrap items-center justify-center gap-3 sm:gap-16 md:gap-24">
        {certifications.map(({ image, nameIndex }) => {
          const name = t(`certifications.items.${nameIndex}`);
          return (
          <div className="flex h-24 min-w-0 flex-1 items-center justify-center sm:h-28 sm:w-44 sm:flex-none md:h-36 md:w-60" key={name}>
            <img
              className="max-h-full max-w-full object-contain transition duration-300 hover:scale-105"
              src={image}
              alt={name}
            />
          </div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default Certifications;
