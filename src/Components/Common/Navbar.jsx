import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/navlogo.png";
import { buttonIconClass, containerClass, pillButtonClass } from "../../utils/tailwindClasses";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Products", to: "/product", hasDropdown: true },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact-us" },
];

const productDropdownGroups = [
  {
    label: "Handicraft",
    links: [
      { label: "Metal Table Decor", to: "/product/metal-table-decor" },
      { label: "Metal Wall Decor", to: "/product/metal-wall-decor" },
      { label: "Polyresin Decor", to: "/product/polyresin-decor" },
      { label: "Marble Decor", to: "/product/marble-decor" },
      { label: "Lifestyle & Utility", to: "/product/lifestyle-utility" },
      { label: "Wooden Decor", to: "/product/wooden-decor" },
    ],
  },
  {
    label: "Industry - V-Belt",
    links: [{ label: "Industrial V-Belts", to: "/product#industries" }],
  },
  {
    label: "Saffron ",
    links: [{ label: "Saffron", to: "/product#industries" }],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-[#0d2d51]/5 bg-[#f1f6f8]/95 backdrop-blur-[14px] max-[850px]:h-[66px]">
      <div className={`${containerClass} flex h-full items-center justify-between gap-7`}>
        <Link className="flex h-[52px] w-[150px] items-center overflow-hidden max-[850px]:w-32" to="/" aria-label="AHPL home">
          <img className="h-24 w-[146px] object-cover object-center mix-blend-multiply max-[850px]:w-[125px]" src={navLogo} alt="AHPL Global Trade Partner" />
        </Link>

        <nav
          className={`flex items-center gap-[30px] max-[850px]:absolute max-[850px]:left-3.5 max-[850px]:right-3.5 max-[850px]:top-[66px] max-[850px]:grid max-[850px]:gap-1 max-[850px]:rounded-b-[18px] max-[850px]:bg-[#f5f9fa] max-[850px]:p-3.5 max-[850px]:shadow-[0_18px_30px_rgba(12,39,74,0.12)] max-[850px]:transition max-[850px]:duration-200 ${
            open ? "max-[850px]:translate-y-0 max-[850px]:opacity-100" : "max-[850px]:pointer-events-none max-[850px]:-translate-y-2.5 max-[850px]:opacity-0"
          }`}
          aria-label="Main navigation"
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
                  {link.label}
                  <ChevronDown className="transition duration-200 group-hover:rotate-180 group-focus-within:rotate-180 max-[850px]:rotate-0" size={14} />
                </NavLink>

                <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[250px] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 max-[850px]:pointer-events-auto max-[850px]:static max-[850px]:w-full max-[850px]:translate-x-0 max-[850px]:pt-0 max-[850px]:opacity-100">
                  <div className="grid rounded-[8px] border border-[#d8e3e8] bg-white py-2 shadow-[0_18px_34px_rgba(13,45,81,0.14)] max-[850px]:ml-3 max-[850px]:border-l-2 max-[850px]:border-r-0 max-[850px]:border-y-0 max-[850px]:border-[#28bdb2]/35 max-[850px]:bg-transparent max-[850px]:py-0 max-[850px]:shadow-none">
                    {productDropdownGroups.map((category, categoryIndex) => (
                      <div
                        className={categoryIndex > 0 ? "mt-2 border-t border-[#d8e3e8] pt-2 max-[850px]:border-[#183255]/10" : ""}
                        key={category.label}
                      >
                        <p className="px-4 pb-1 pt-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#28bdb2] max-[850px]:px-3">
                          {category.label}
                        </p>
                        {category.links.map((product) => (
                          <Link
                            className="block px-4 py-1.5 text-[16px] font-medium leading-[1.25] text-[#183255] no-underline transition hover:bg-[#eef8f8] hover:text-[#28bdb2] focus-visible:bg-[#eef8f8] focus-visible:text-[#28bdb2] focus-visible:outline-none max-[850px]:px-3 max-[850px]:py-2 max-[850px]:text-[14px]"
                            to={product.to}
                            onClick={() => setOpen(false)}
                            key={product.label}
                          >
                            {product.label}
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
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <Link className={`${pillButtonClass} max-[850px]:hidden`} to="/contact-us">
          Get a Quote <span className={buttonIconClass}><ArrowUpRight size={15} /></span>
        </Link>

        <button
          className="hidden cursor-pointer place-items-center border-0 bg-transparent text-[#172b50] max-[850px]:grid"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
