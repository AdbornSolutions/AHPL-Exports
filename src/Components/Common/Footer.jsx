import { Globe2, Mail, MapPin, Phone, Share2 } from "lucide-react";
import footerBg from "../../assets/footer.png";
import footerLogo from "../../assets/footerlogo.png";
import { containerClass } from "../../utils/tailwindClasses";

const footerLinkClass =
  "my-2 block text-xs leading-[1.55] text-[#becbe0] no-underline transition hover:text-[#30c8bb]";

const footerTextClass = "my-2.5 flex items-start gap-2 text-xs leading-[1.55] text-[#becbe0]";

const Footer = () => (
  <footer className="pb-6">
    <div
      className={`${containerClass} overflow-hidden rounded-[28px] bg-cover bg-center px-12 pb-[22px] pt-12 text-white max-md:px-6 max-md:pb-5 max-md:pt-[38px]`}
      style={{ backgroundImage: `url("${footerBg}")` }}
    >
      <div className="grid grid-cols-[1.5fr_0.65fr_1fr_1.15fr] gap-[42px] max-[980px]:grid-cols-[1.5fr_1fr_1fr] max-md:grid-cols-2 max-md:gap-x-5 max-md:gap-y-[30px] max-[430px]:grid-cols-1">
        <div className="max-md:col-span-full max-[430px]:col-span-1">
          <img className="mb-6 w-[170px]" src={footerLogo} alt="AHPL Global Trade Partner" />
          <h3 className="mb-4 text-[15px] font-bold">About Company.</h3>
          <p className="text-xs leading-[1.55] text-[#becbe0]">
            AHPL is a trusted export company connecting businesses worldwide through reliable
            sourcing, quality products, efficient logistics, and seamless trade solutions.
          </p>
          <div className="mt-4 flex gap-2.5 text-[#30c8bb] [&_svg]:size-5">
            <Globe2 />
            <Share2 />
            <Mail />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-[15px] font-bold">Quick Links</h3>
          <a className={footerLinkClass} href="#home">Home</a>
          <a className={footerLinkClass} href="#about-us">About Us</a>
          <a className={footerLinkClass} href="#industries">Products</a>
          <a className={footerLinkClass} href="#blog">Blog</a>
          <a className={footerLinkClass} href="#contact-us">Contact Us</a>
        </div>

        <div>
          <h3 className="mb-4 text-[15px] font-bold">Product Categories</h3>
          <a className={footerLinkClass} href="#industries">Agricultural Products</a>
          <a className={footerLinkClass} href="#industries">Spices & Food Products</a>
          <a className={footerLinkClass} href="#industries">Textiles & Garments</a>
          <a className={footerLinkClass} href="#industries">Industrial Materials</a>
          <a className={footerLinkClass} href="#industries">Packaging Solutions</a>
        </div>

        <div className="max-[980px]:col-span-full max-md:col-span-full max-[430px]:col-span-1">
          <h3 className="mb-4 text-[15px] font-bold">Contact</h3>
          <p className={footerTextClass}>
            <MapPin className="mt-0.5 size-[15px] flex-none text-[#30c8bb]" />
            47, Kirtan Nagar, Khamla, Nagpur, Maharashtra 440022, India
          </p>
          <p className={footerTextClass}>
            <Phone className="mt-0.5 size-[15px] flex-none text-[#30c8bb]" />
            +91 1234567890
          </p>
          <p className={footerTextClass}>
            <Mail className="mt-0.5 size-[15px] flex-none text-[#30c8bb]" />
            info@ahpl.com
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-between gap-6 border-t border-white/15 pt-[22px] text-[10px] text-[#91a1b9] max-md:flex-col">
        <span>Privacy Policy &nbsp; Terms & Conditions</span>
        <span>© 2026 AHPL. All Rights Reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
