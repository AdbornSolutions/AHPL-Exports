import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/footer.png";
import footerLogo from "../../assets/footerlogo.png";
import { containerClass } from "../../utils/tailwindClasses";

const footerLinkClass =
  "my-2 block text-xs leading-[1.55] text-[#becbe0] no-underline transition hover:text-[#30c8bb]";

const footerTextClass = "my-2.5 flex items-start gap-2 text-xs leading-[1.55] text-[#becbe0]";
const socialLinkClass =
  "grid size-5 place-items-center rounded-full text-[10px] font-bold text-white no-underline transition hover:-translate-y-0.5 hover:opacity-90 [&_svg]:size-3";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Products", to: "/product" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact-us" },
];

const productLinks = [
  { label: "Industrial V-Belts", to: "/product/industrial-v-belts" },
  { label: "Metal Table Decor", to: "/product/metal-table-decor" },
  { label: "Metal Wall Decor", to: "/product/metal-wall-decor" },
  { label: "Polyresin Decor", to: "/product/polyresin-decor" },
  { label: "Marble Decor", to: "/product/marble-decor" },
  { label: "Lifestyle & Utility", to: "/product/lifestyle-utility" },
  { label: "Wooden Decor", to: "/product/wooden-decor" },
];

const Footer = () => (
  <footer className="pb-6">
    <div
      className={`${containerClass} overflow-hidden rounded-[28px] bg-cover bg-center px-12 pb-[22px] pt-12 text-white max-md:px-6 max-md:pb-5 max-md:pt-[38px]`}
      style={{ backgroundImage: `url("${footerBg}")` }}
    >
      <div className="grid grid-cols-[1.5fr_0.65fr_1fr_1.15fr] gap-[42px] max-[980px]:grid-cols-[1.5fr_1fr_1fr] max-md:grid-cols-2 max-md:gap-x-5 max-md:gap-y-[30px] max-[430px]:grid-cols-1">
        <div className="max-md:col-span-full max-[430px]:col-span-1">
          <Link className="mb-6 block w-fit" to="/" aria-label="AHPL home">
            <img className="w-[170px]" src={footerLogo} alt="AHPL Global Trade Partner" />
          </Link>
          <h3 className="mb-4 text-[15px] font-bold">About Company.</h3>
          <p className="text-xs leading-[1.55] text-[#becbe0]">
            AHPL is a trusted export company connecting businesses worldwide through reliable
            sourcing, quality products, efficient logistics, and seamless trade solutions.
          </p>
          <div className="mt-4 flex gap-1.5 text-white">
            <a className={`${socialLinkClass} bg-[#1877f2]`} href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="AHPL on Facebook">f</a>
            <a className={`${socialLinkClass} bg-[#ff4d7d]`} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="AHPL on Instagram">ig</a>
            <a className={`${socialLinkClass} bg-[#0a66c2]`} href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="AHPL on LinkedIn">in</a>
            <a className={`${socialLinkClass} bg-black`} href="mailto:info@ahpl.com?subject=AHPL%20export%20enquiry" aria-label="Share AHPL by email"><Share2 /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[15px] font-bold">Quick Links</h3>
          {quickLinks.map((link) => (
            <Link className={footerLinkClass} to={link.to} key={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <div>
          <h3 className="mb-4 text-[15px] font-bold">Product Categories</h3>
          {productLinks.map((link) => (
            <Link className={footerLinkClass} to={link.to} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="max-[980px]:col-span-full max-md:col-span-full max-[430px]:col-span-1">
          <h3 className="mb-4 text-[15px] font-bold">Contact</h3>
          <h4 className="mb-4 text-xs font-bold text-[#dce5f5]">Operational Address:</h4>
          <p className={footerTextClass}>
            <MapPin className="mt-0.5 size-[15px] flex-none text-[#30c8bb]" />
            <a
              className="text-[#becbe0] no-underline transition hover:text-[#30c8bb]"
              href="https://www.google.com/maps/search/?api=1&query=47%2C%20Kotwal%20Nagar%2C%20Khamla%2C%20Nagpur%2C%20Maharashtra%20440022%2C%20India"
              target="_blank"
              rel="noreferrer"
            >
             1st floor, Lajwanti Complex, 10/2, Central Ave, Sut Market, Itwari, Nagpur, Maharashtra 440002
            </a>
          </p>
          <p className={footerTextClass}>
            <Phone className="mt-0.5 size-[15px] flex-none text-[#30c8bb]" />
            <a className="text-[#becbe0] no-underline transition hover:text-[#30c8bb]" href="tel:+911234567890">
             8920279982
            </a>
          </p>
          <p className={footerTextClass}>
            <Mail className="mt-0.5 size-[15px] flex-none text-[#30c8bb]" />
            <a className="text-[#becbe0] no-underline transition hover:text-[#30c8bb]" href="mailto:info@ahpl.com">
             Info@ahplexports.com
            </a>
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-between gap-6 border-t border-white/15 pt-[22px] text-[10px] text-[#91a1b9] max-md:flex-col">
        <span className="flex flex-wrap gap-x-5 gap-y-2">
          <Link className="text-[#91a1b9] no-underline transition hover:text-[#30c8bb]" to="/contact-us">
            Privacy Policy
          </Link>
          <Link className="text-[#91a1b9] no-underline transition hover:text-[#30c8bb]" to="/contact-us">
            Terms & Conditions
          </Link>
        </span>
        <span>&copy; 2026 AHPL. All Rights Reserved. Site Design and Maintained by AdBorn Solutions.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
