import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import livingRoomImg from "../assets/shop1.png";
import diningSpaceImg from "../assets/shop2.png";
import entrywayImg from "../assets/shop3.jpg";
import prayerRoomImg from "../assets/shop4.png";
import workDeskImg from "../assets/shop5.png";
import { spaceCollections } from "../data/spaceCollections";

const spaceImages = {
  "festive-decor": livingRoomImg,
  "corporate-gifting": diningSpaceImg,
  "office-study-decor": entrywayImg,
  "living-room-decor": prayerRoomImg,
  "divine-decor": workDeskImg,
};

const ShopBySpace = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white py-[60px] max-md:py-10">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1240px] max-md:w-[calc(100%_-_24px)]">
        <div className="mb-10 text-center">
          <h2 className="text-[clamp(32px,3.8vw,48px)] font-bold tracking-tight text-[#172b50]">
            {t("saffron.spaceTitle")} {" "}
            <span className="text-[#30c8bb]">{t("saffron.spaceHighlight")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {spaceCollections.map((space) => (
            <div key={space.slug} className="flex flex-col">
              <Link
                to={`/shop-by-space/${space.slug}`}
                className="group block aspect-square overflow-hidden rounded-[24px] bg-[#f5f5f2] shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <img
                  src={spaceImages[space.slug]}
                  alt={t(space.nameKey)}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <Link
                to={`/shop-by-space/${space.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-[16px] font-semibold text-[#172b50] no-underline transition-colors duration-200 hover:text-[#30c8bb]"
              >
                {t(space.nameKey)} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopBySpace;
