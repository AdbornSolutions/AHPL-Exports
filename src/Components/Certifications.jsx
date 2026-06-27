import logoOne from "../assets/logo1.png";
import logoTwo from "../assets/logo2.png";
import logoThree from "../assets/logo3.png";
import logoFour from "../assets/logo4.png";
import logoFive from "../assets/logo5.png";
import logoSix from "../assets/logo6.png";
import { containerClass, eyebrowClass } from "../utils/tailwindClasses";

const certifications = [
  { image: logoOne, name: "Export Council" },
  { image: logoTwo, name: "Goods and Services Tax" },
  { image: logoThree, name: "APEDA" },
  { image: logoFour, name: "ISO 9001" },
  { image: logoFive, name: "MSME" },
  { image: logoSix, name: "FIEO" },
];

const Certifications = () => (
  <section className="bg-white py-[82px] text-center max-md:py-[62px]">
    <div className={containerClass}>
      <span className={`${eyebrowClass} bg-white px-6 text-[11px] text-[#2EC4B6]`}>
        Certifications & Membership
      </span>

      <h2 className="mx-auto mt-6 max-w-[720px] text-[clamp(34px,4.2vw,52px)] font-bold leading-[1.18] tracking-normal text-[#172b50]">
        Certified. Compliant.{" "}
        <span className="text-[#2EC4B6]">
          Trusted
          <br />
          Worldwide.
        </span>
      </h2>

      <div className="mt-14 grid grid-cols-6 items-center gap-9 max-lg:gap-6 max-md:grid-cols-3 max-md:gap-y-10 max-sm:grid-cols-2">
        {certifications.map(({ image, name }) => (
          <div className="flex min-h-[96px] items-center justify-center" key={name}>
            <img
              className="max-h-[92px] w-auto max-w-[138px] object-contain transition duration-300 hover:scale-105 max-lg:max-w-[120px] max-md:max-h-[78px] max-sm:max-w-[112px]"
              src={image}
              alt={name}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
