import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import navLogo from "../../assets/navlogo.png";
import { buttonIconClass, containerClass, pillButtonClass } from "../../utils/tailwindClasses";

const links = ["Home", "About Us", "Industries", "Blog", "Contact Us"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-[#0d2d51]/5 bg-[#f1f6f8]/95 backdrop-blur-[14px] max-[850px]:h-[66px]">
      <div className={`${containerClass} flex h-full items-center justify-between gap-7`}>
        <a className="flex h-[52px] w-[150px] items-center overflow-hidden max-[850px]:w-32" href="#home" aria-label="AHPL home">
          <img className="h-24 w-[146px] object-cover object-center mix-blend-multiply max-[850px]:w-[125px]" src={navLogo} alt="AHPL Global Trade Partner" />
        </a>

        <nav
          className={`flex items-center gap-[30px] max-[850px]:absolute max-[850px]:left-3.5 max-[850px]:right-3.5 max-[850px]:top-[66px] max-[850px]:grid max-[850px]:gap-1 max-[850px]:rounded-b-[18px] max-[850px]:bg-[#f5f9fa] max-[850px]:p-3.5 max-[850px]:shadow-[0_18px_30px_rgba(12,39,74,0.12)] max-[850px]:transition max-[850px]:duration-200 ${
            open ? "max-[850px]:translate-y-0 max-[850px]:opacity-100" : "max-[850px]:pointer-events-none max-[850px]:-translate-y-2.5 max-[850px]:opacity-0"
          }`}
          aria-label="Main navigation"
        >
          {links.map((link, index) => (
            <a
              key={link}
              className={`flex items-center gap-1 text-[13px] font-semibold no-underline transition hover:text-[#28bdb2] max-[850px]:p-3 ${
                index === 0 ? "text-[#28bdb2]" : "text-[#183255]"
              }`}
              href={index === 0 ? "#home" : `#${link.toLowerCase().replaceAll(" ", "-")}`}
              onClick={() => setOpen(false)}
            >
              {link}
              {link === "Industries" && <ChevronDown size={14} />}
            </a>
          ))}
        </nav>

        <a className={`${pillButtonClass} max-[850px]:hidden`} href="#contact-us">
          Get a Quote <span className={buttonIconClass}><ArrowUpRight size={15} /></span>
        </a>

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
