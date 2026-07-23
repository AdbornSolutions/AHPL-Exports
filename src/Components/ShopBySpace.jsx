import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import livingRoomImg from "../assets/livingroom_shopbyspace.png";
import diningSpaceImg from "../assets/Dining_space_shopbyspace.png";
import entrywayImg from "../assets/Entryway_shopbyspace.png";
import prayerRoomImg from "../assets/PrayerRoom_shopbyspace.png";
import workDeskImg from "../assets/workdesk_shopbyspace.png";

const spaces = [
  {
    nameKey: "saffron.spaces.livingRoom",
    to: "/#",
    image: livingRoomImg,
  },
  {
    nameKey: "saffron.spaces.diningSpace",
    to: "/#",
    image: diningSpaceImg,
  },
  {
    nameKey: "saffron.spaces.entryway",
    to: "/#",
    image: entrywayImg,
  },
  {
    nameKey: "saffron.spaces.prayerRoom",
    to: "/#",
    image: prayerRoomImg,
  },
  {
    nameKey: "saffron.spaces.workDesk",
    to: "/#",
    image: workDeskImg,
  },
];

const ShopBySpace = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white py-[60px] max-md:py-10">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1240px] max-md:w-[calc(100%_-_24px)]">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[clamp(32px,3.8vw,48px)] font-bold tracking-tight text-[#172b50]">
            {t("saffron.spaceTitle")}{" "}
            <span className="text-[#30c8bb]">{t("saffron.spaceHighlight")}</span>
          </h2>
        </div>

        {/* Spaces Grid — 5 columns, matching ShopByCategory layout */}
        <div className="grid grid-cols-5 gap-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {spaces.map((space) => (
            <div key={space.nameKey} className="flex flex-col">
              {/* Image Card */}
              <Link
                to={space.to}
                className="overflow-hidden rounded-[24px] bg-[#f5f5f2] aspect-square block shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={space.image}
                  alt={t(space.nameKey)}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>

              {/* Label / Link */}
              <Link
                to={space.to}
                className="mt-4 text-[16px] font-semibold text-[#172b50] hover:text-[#30c8bb] transition-colors duration-200 inline-flex items-center gap-1.5 no-underline"
              >
                {t(space.nameKey)} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopBySpace;
