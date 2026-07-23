import React from "react";
import { useTranslation } from "react-i18next";
import craftedHandImage from "../assets/crafted_hand_image.png";

const SaffronLegacy = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white pb-20 max-md:pb-12">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1240px] max-md:w-[calc(100%_-_24px)]">
        {/* Banner Container - using 0.78fr / 1.22fr split (~39% image width) to show more of the image side detail and match screenshot proportions */}
        <div className="bg-[#182c4f] rounded-[26px] overflow-hidden grid grid-cols-[0.78fr_1.22fr] max-lg:grid-cols-1 shadow-[0_20px_40px_rgba(24,44,79,0.12)]">
          {/* Left Column - Image (Rendered natively inside the flex container to prevent cropping main subject) */}
          <div className="w-full h-full flex">
            <img
              src={craftedHandImage}
              alt={t("saffron.legacy.titleLine1")}
              className="w-full h-full object-cover object-center block"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="py-14 px-12 lg:px-16 max-md:py-8 max-md:px-6 flex flex-col justify-center text-white">
            {/* Eyebrow - matches exact font style */}
            <span className="text-[13px] font-semibold tracking-[0.2em] text-white mb-4 block uppercase">
              {t("saffron.legacy.eyebrow")}
            </span>

            {/* Heading - changed to font-semibold to match exact font weight */}
            <h2 className="text-[clamp(32px,3.8vw,44px)] font-semibold leading-[1.2] mb-6">
              {t("saffron.legacy.titleLine1")}
              <br />
              {t("saffron.legacy.titleLine2")}
            </h2>

            {/* Description - styled for exact line-height and font weight */}
            <p className="text-[16px] leading-[1.65] text-white font-normal mb-8">
              {t("saffron.legacy.description")}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              {/* Stat 1 */}
              <div>
                <div className="text-[42px] font-semibold text-white tracking-tight leading-none mb-2">
                  {t("saffron.legacy.stat1Number")}
                </div>
                <div className="text-[14px] font-medium text-white">
                  {t("saffron.legacy.stat1Label")}
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-[42px] font-semibold text-white tracking-tight leading-none mb-2">
                  {t("saffron.legacy.stat2Number")}
                </div>
                <div className="text-[14px] font-medium text-white">
                  {t("saffron.legacy.stat2Label")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaffronLegacy;
