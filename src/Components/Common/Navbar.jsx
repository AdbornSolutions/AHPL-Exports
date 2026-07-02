import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/navlogo.png";
import { buttonIconClass, containerClass, pillButtonClass } from "../../utils/tailwindClasses";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Products", to: "/product" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact-us" },
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
          {links.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) => `flex items-center gap-1 text-[13px] font-semibold no-underline transition hover:text-[#28bdb2] max-[850px]:p-3 ${
                isActive ? "text-[#28bdb2]" : "text-[#183255]"
              }`}
              to={link.to}
              onClick={() => setOpen(false)}
            >
              {link.label}
              {link.label === "Products" && <ChevronDown size={14} />}
            </NavLink>
          ))}
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
