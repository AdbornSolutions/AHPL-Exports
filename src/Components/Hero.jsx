import heroImg from "../assets/hero.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = ({ title = "About Us", breadcrumb = title, bgImage }) => {
  const { t } = useTranslation("common");
  return (
    <section className="relative h-[320px] md:h-[400px] overflow-hidden">
      <img
        src={bgImage || heroImg}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0F2A52]/70"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          {title}
        </h1>

        <div className="mt-6 flex items-center rounded-md bg-white/10 px-5 py-3 text-sm text-white backdrop-blur-sm">
          <Link to="/" className="cursor-pointer hover:text-blue-300">
            {t("navigation.home")}
          </Link>
          <span className="mx-3 text-gray-300">&gt;</span>
          <span>{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
