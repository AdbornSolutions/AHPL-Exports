import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import navLogo from "../../assets/navlogo.png";
import { languages } from "../../config/languages";
import { buttonIconClass, containerClass, pillButtonClass } from "../../utils/tailwindClasses";

const links = [
  { labelKey: "navigation.home", to: "/" },
  { labelKey: "navigation.about", to: "/about-us" },
  { labelKey: "navigation.products", to: "/product", hasDropdown: true },
  { labelKey: "navigation.saffron", to: "/saffron" },
  { labelKey: "navigation.blog", to: "/blog" },
  { labelKey: "navigation.contact", to: "/contact-us" },
];

const productDropdownGroups = [
  {
    labelKey: "navigation.handicraft",
    links: [
      { labelKey: "productCategories.metalTable", to: "/product/metal-table-decor" },
      { labelKey: "productCategories.metalWall", to: "/product/metal-wall-decor" },
      { labelKey: "productCategories.polyresin", to: "/product/polyresin-decor" },
      { labelKey: "productCategories.marble", to: "/product/marble-decor" },
      { labelKey: "productCategories.lifestyle", to: "/product/lifestyle-utility" },
      { labelKey: "productCategories.wooden", to: "/product/wooden-decor" },
    ],
  },
  {
    labelKey: "navigation.industrialGoods",
    links: [{ labelKey: "productCategories.belts", to: "/product/industrial-v-belts" }],
  },
];

const LanguageMenu = ({
  currentLanguage,
  currentLanguageLabel,
  onLanguageChange,
  t,
  className = "",
  mobileInline = false,
  isOpen = false,
  onToggle,
}) => (
  <div className={`group relative ${className}`}>
    <button
      className="flex items-center gap-1 border-0 bg-transparent text-[13px] font-semibold text-[#183255] transition hover:text-[#28bdb2] max-[850px]:p-3"
      type="button"
      aria-label={t("language.select")}
      aria-expanded={mobileInline ? isOpen : undefined}
      onClick={onToggle}
    >
      {t(currentLanguageLabel)}
      <ChevronDown className="transition duration-200 group-hover:rotate-180 group-focus-within:rotate-180" size={14} />
    </button>
    <div className={`pointer-events-none absolute right-0 top-full z-50 w-[165px] pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 ${mobileInline && isOpen ? "!pointer-events-auto !opacity-100" : ""} ${mobileInline ? "" : "max-[850px]:pointer-events-auto max-[850px]:static max-[850px]:w-full max-[850px]:pt-0 max-[850px]:opacity-100"}`}>
      <div className={`grid rounded-[8px] border border-[#d8e3e8] bg-white py-2 shadow-[0_18px_34px_rgba(13,45,81,0.14)] ${mobileInline ? "" : "max-[850px]:ml-3 max-[850px]:border-l-2 max-[850px]:border-r-0 max-[850px]:border-y-0 max-[850px]:border-[#28bdb2]/35 max-[850px]:bg-transparent max-[850px]:shadow-none"}`}>
        {languages.map((language) => (
          <button
            className={`px-4 py-2 text-left text-[14px] font-medium transition hover:bg-[#eef8f8] hover:text-[#28bdb2] ${currentLanguage === language.code ? "text-[#28bdb2]" : "text-[#183255]"}`}
            type="button"
            key={language.code}
            lang={language.code}
            onClick={() => onLanguageChange(language.code)}
          >
            {t(language.labelKey)}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const { t, i18n } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const currentLanguage =
    languages.find(({ code }) => code === i18n.resolvedLanguage)?.code ?? "en";
  const currentLanguageLabel =
    languages.find(({ code }) => code === currentLanguage)?.labelKey ??
    "language.english";

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
      languages.find(({ code }) => code === currentLanguage)?.direction ??
      "ltr";
  }, [currentLanguage]);

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-[#0d2d51]/5 bg-[#f1f6f8]/95 backdrop-blur-[14px] max-[850px]:h-[66px]">
      <div className={`${containerClass} grid h-full grid-cols-[150px_minmax(0,1fr)_auto] items-center gap-7 max-[850px]:flex max-[850px]:justify-between`}>
        <Link className="flex h-[52px] w-[150px] shrink-0 items-center max-[850px]:w-28 max-[480px]:w-24 max-[380px]:w-20" to="/" aria-label={t("accessibility.home")}>
          <img className="block h-auto w-full mix-blend-multiply" src={navLogo} alt={t("accessibility.logo")} />
        </Link>

        <div className="contents">
          <nav
            className={`flex items-center justify-self-center gap-[30px] max-[850px]:absolute max-[850px]:left-3.5 max-[850px]:right-3.5 max-[850px]:top-[66px] max-[850px]:grid max-[850px]:gap-1 max-[850px]:rounded-b-[18px] max-[850px]:bg-[#f5f9fa] max-[850px]:p-3.5 max-[850px]:shadow-[0_18px_30px_rgba(12,39,74,0.12)] max-[850px]:transition max-[850px]:duration-200 ${
              open ? "max-[850px]:translate-y-0 max-[850px]:opacity-100" : "max-[850px]:pointer-events-none max-[850px]:-translate-y-2.5 max-[850px]:opacity-0"
            }`}
            aria-label={t("accessibility.mainNavigation")}
          >
          {links.map((link) =>
            link.hasDropdown ? (
              <div className="group relative max-[850px]:grid" key={link.to}>
                <NavLink
                  className={({ isActive }) => `flex items-center gap-1 text-[13px] font-semibold no-underline transition hover:text-[#28bdb2] max-[850px]:p-3 ${
                    isActive ? "text-[#28bdb2]" : "text-[#183255]"
                  }`}
                  to={link.to}
                  onClick={() => setOpen(false)}
                >
                  {t(link.labelKey)}
                  <ChevronDown className="transition duration-200 group-hover:rotate-180 group-focus-within:rotate-180 max-[850px]:rotate-0" size={14} />
                </NavLink>

                <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[250px] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 max-[850px]:pointer-events-auto max-[850px]:static max-[850px]:w-full max-[850px]:translate-x-0 max-[850px]:pt-0 max-[850px]:opacity-100">
                  <div className="grid rounded-[8px] border border-[#d8e3e8] bg-white py-2 shadow-[0_18px_34px_rgba(13,45,81,0.14)] max-[850px]:ml-3 max-[850px]:border-l-2 max-[850px]:border-r-0 max-[850px]:border-y-0 max-[850px]:border-[#28bdb2]/35 max-[850px]:bg-transparent max-[850px]:py-0 max-[850px]:shadow-none">
                    {productDropdownGroups.map((category, categoryIndex) => (
                      <div
                        className={categoryIndex > 0 ? "mt-2 border-t border-[#d8e3e8] pt-2 max-[850px]:border-[#183255]/10" : ""}
                        key={category.labelKey}
                      >
                        <p className="px-4 pb-1 pt-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#28bdb2] max-[850px]:px-3">
                          {t(category.labelKey)}
                        </p>
                        {category.links.map((product) => (
                          <Link
                            className="block px-4 py-1.5 text-[16px] font-medium leading-[1.25] text-[#183255] no-underline transition hover:bg-[#eef8f8] hover:text-[#28bdb2] focus-visible:bg-[#eef8f8] focus-visible:text-[#28bdb2] focus-visible:outline-none max-[850px]:px-3 max-[850px]:py-2 max-[850px]:text-[14px]"
                            to={product.to}
                            onClick={() => setOpen(false)}
                            key={product.labelKey}
                          >
                            {t(product.labelKey)}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                className={({ isActive }) => `flex items-center gap-1 text-[13px] font-semibold no-underline transition hover:text-[#28bdb2] max-[850px]:p-3 ${
                  isActive ? "text-[#28bdb2]" : "text-[#183255]"
                }`}
                to={link.to}
                onClick={() => setOpen(false)}
              >
                {t(link.labelKey)}
              </NavLink>
            )
          )}

          </nav>

          <div className="flex items-center gap-5 max-[850px]:hidden">
            <LanguageMenu
              currentLanguage={currentLanguage}
              currentLanguageLabel={currentLanguageLabel}
              onLanguageChange={(code) => i18n.changeLanguage(code)}
              t={t}
            />

            <Link className={pillButtonClass} to="/contact-us">
              {t("buttons.getQuote")} <span className={buttonIconClass}><ArrowUpRight size={15} /></span>
            </Link>
          </div>
        </div>

        <div className="hidden items-center gap-2 max-[850px]:flex">
          <LanguageMenu
            className="max-[850px]:block"
            mobileInline
            currentLanguage={currentLanguage}
            currentLanguageLabel={currentLanguageLabel}
            onLanguageChange={(code) => {
              i18n.changeLanguage(code);
              setLanguageOpen(false);
              setOpen(false);
            }}
            isOpen={languageOpen}
            onToggle={() => setLanguageOpen((value) => !value)}
            t={t}
          />

          <Link
            className={`${pillButtonClass} min-h-10 shrink-0 whitespace-nowrap px-3.5 text-[clamp(9px,2.8vw,12px)] max-[480px]:px-2.5`}
            to="/contact-us"
            onClick={() => setOpen(false)}
            title={t("buttons.getQuote")}
          >
            <span>{t("buttons.getQuote")}</span>
            <span className={`${buttonIconClass} size-5 shrink-0 max-[500px]:hidden`}>
              <ArrowUpRight size={13} />
            </span>
          </Link>

          <button
            className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-full border-0 bg-transparent text-[#172b50] transition hover:bg-[#e4eff1] hover:text-[#28bdb2]"
            type="button"
            aria-label={t(open ? "accessibility.closeMenu" : "accessibility.openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
