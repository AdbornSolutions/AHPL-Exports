import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import footerBg from "../../assets/footer.png";
import footerLogo from "../../assets/footerlogo.png";
import { containerClass } from "../../utils/tailwindClasses";

const footerLinkClass =
  "my-2 block text-xs leading-[1.55] text-[#becbe0] no-underline transition hover:text-[#30c8bb]";

const footerTextClass = "my-2.5 flex items-start gap-2 text-xs leading-[1.55] text-[#becbe0]";
const socialLinkClass =
  "grid size-5 place-items-center rounded-full text-[10px] font-bold text-white no-underline transition hover:-translate-y-0.5 hover:opacity-90 [&_svg]:size-3";

const quickLinks = [
  { labelKey: "navigation.home", to: "/" }, { labelKey: "navigation.about", to: "/about-us" },
  { labelKey: "navigation.products", to: "/product" }, { labelKey: "navigation.saffron", to: "/saffron" },
  { labelKey: "navigation.blog", to: "/blog" },
  { labelKey: "navigation.contact", to: "/contact-us" },
];

const productLinks = [
  { labelKey: "productCategories.belts", to: "/product/industrial-v-belts" }, { labelKey: "productCategories.metalTable", to: "/product/metal-table-decor" },
  { labelKey: "productCategories.metalWall", to: "/product/metal-wall-decor" }, { labelKey: "productCategories.polyresin", to: "/product/polyresin-decor" },
  { labelKey: "productCategories.marble", to: "/product/marble-decor" }, { labelKey: "productCategories.lifestyle", to: "/product/lifestyle-utility" },
  { labelKey: "productCategories.wooden", to: "/product/wooden-decor" },
];

const Footer = () => {
  const { t } = useTranslation(["footer", "common"]);
  return (
  <footer className="pb-6">
    <div
      className={`${containerClass} overflow-hidden rounded-[28px] bg-cover bg-center px-12 pb-[22px] pt-12 text-white max-md:px-6 max-md:pb-5 max-md:pt-[38px]`}
      style={{ backgroundImage: `url("${footerBg}")` }}
    >
      <div className="grid grid-cols-[1.5fr_0.65fr_1fr_1.15fr] gap-[42px] max-[980px]:grid-cols-[1.5fr_1fr_1fr] max-md:grid-cols-2 max-md:gap-x-5 max-md:gap-y-[30px] max-[430px]:grid-cols-1">
        <div className="max-md:col-span-full max-[430px]:col-span-1">
          <Link className="mb-6 block w-fit" to="/" aria-label={t("accessibility.home", { ns: "common" })}>
            <img className="w-[170px]" src={footerLogo} alt={t("accessibility.logo", { ns: "common" })} />
          </Link>
          <h3 className="mb-4 text-[15px] font-bold">{t("aboutTitle")}</h3>
          <p className="text-xs leading-[1.55] text-[#becbe0]">
            {t("description")}
          </p>
          <div className="mt-4 flex gap-1.5 text-white">
            <a className={`${socialLinkClass} bg-[#1877f2]`} href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label={t("accessibility.facebook", { ns: "common" })}>f</a>
            <a className={`${socialLinkClass} bg-[#ff4d7d]`} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label={t("accessibility.instagram", { ns: "common" })}>ig</a>
            <a className={`${socialLinkClass} bg-[#0a66c2]`} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label={t("accessibility.linkedin", { ns: "common" })}>in</a>
            <a className={`${socialLinkClass} bg-black`} href="mailto:Info@ahplexports.com?subject=AHPL%20export%20enquiry" aria-label={t("accessibility.shareEmail", { ns: "common" })}><Share2 /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[15px] font-bold">{t("quickLinks")}</h3>
          {quickLinks.map((link) => (
            <Link className={footerLinkClass} to={link.to} key={link.to}>
              {t(link.labelKey, { ns: "common" })}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="mb-4 text-[15px] font-bold">{t("products")}</h3>
          {productLinks.map((link) => (
            <Link className={footerLinkClass} to={link.to} key={link.labelKey}>
              {t(link.labelKey, { ns: "common" })}
            </Link>
          ))}
        </div>

        <div className="max-[980px]:col-span-full max-md:col-span-full max-[430px]:col-span-1">
          <h3 className="mb-4 text-[15px] font-bold">{t("contact")}</h3>
          <h4 className="mb-4 text-xs font-bold text-[#dce5f5]">{t("operationalAddress")}</h4>
          <p className={footerTextClass}>
            <MapPin className="mt-0.5 size-[15px] flex-none text-[#30c8bb]" />
            <a
              className="text-[#becbe0] no-underline transition hover:text-[#30c8bb]"
              href="https://www.google.com/maps/search/1st+floor,+Lajwanti+Complex,+10%2F2,+Central+Ave,+Sut+Market,+Itwari,+Nagpur,+Maharashtra+440002/@21.1163552,79.0595834,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
             {t("address")}
            </a>
          </p>
          <p className={footerTextClass}>
            <Phone className="mt-0.5 size-[15px] flex-none text-[#30c8bb]" />
            <a className="text-[#becbe0] no-underline transition hover:text-[#30c8bb]" href="tel:+918920279982">
             +91 8920279982 
            </a>
            <a className="text-[#becbe0] no-underline transition hover:text-[#30c8bb]" href="tel:+918920279982">
             +91 7710771081
            </a>
          </p>
          <p className={footerTextClass}>
            <Mail className="mt-0.5 size-[15px] flex-none text-[#30c8bb]" />
            <a className="text-[#becbe0] no-underline transition hover:text-[#30c8bb]" href="mailto:Info@ahplexports.com">
             Info@ahplexports.com
            </a>
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-between gap-6 border-t border-white/15 pt-[22px] text-[10px] text-[#91a1b9] max-md:flex-col">
        <span className="flex flex-wrap gap-x-5 gap-y-2">
          <Link className="text-[#91a1b9] no-underline transition hover:text-[#30c8bb]" to="/privacy-policy">
            {t("privacy")}
          </Link>
          <Link className="text-[#91a1b9] no-underline transition hover:text-[#30c8bb]" to="/terms-and-conditions">
            {t("terms")}
          </Link>
        </span>
        <span>{t("copyright")} <a className="text-[#fff] no-underline transition hover:text-[#30c8bb]" href="https://www.adbornsolutions.com/" target="_blank" rel="noreferrer"> {t("agency")}</a></span>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
