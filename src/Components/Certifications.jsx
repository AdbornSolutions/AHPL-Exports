import logoOne from "../assets/logo1.png";
import logoTwo from "../assets/logo2.png";
import logoThree from "../assets/logo3.png";
import { containerClass, eyebrowClass } from "../utils/tailwindClasses";

const certifications = [
  { image: logoOne, name: "Export Council" },
  { image: logoTwo, name: "Goods and Services Tax" },
  { image: logoThree, name: "DGFT" },
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

      <div className="mx-auto mt-16 flex flex-wrap items-center justify-center gap-12 sm:gap-16 md:gap-24">
        {certifications.map(({ image, name }) => (
          <div className="flex h-28 w-44 items-center justify-center md:h-36 md:w-60" key={name}>
            <img
              className="max-h-full max-w-full object-contain transition duration-300 hover:scale-105"
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
