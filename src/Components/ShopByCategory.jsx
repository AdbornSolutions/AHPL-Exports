import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import metalTableSaffron from "../assets/metal_table_saffron.png";
import metalWallSaffron from "../assets/metal_wall_saffron.png";
import polyResinSaffron from "../assets/poly_resin_Decor.png";
import lifestylesSaffron from "../assets/lifetsyles_utility_saffron.png";

const categories = [
  {
    nameKey: "productCategories.metalTable",
    to: "/product/metal-table-decor",
    image: metalTableSaffron,
    altKey: "productCategories.metalTable",
  },
  {
    nameKey: "productCategories.metalWall",
    to: "/product/metal-wall-decor",
    image: metalWallSaffron,
    altKey: "productCategories.metalWall",
  },
  {
    nameKey: "productCategories.polyresin",
    to: "/product/polyresin-decor",
    image: polyResinSaffron,
    altKey: "productCategories.polyresin",
  },
  {
    nameKey: "productCategories.lifestyle",
    to: "/product/lifestyle-utility",
    image: lifestylesSaffron,
    altKey: "productCategories.lifestyle",
  },
];

const ShopByCategory = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white py-[60px] max-md:py-10">
      {/* Centered container with decreased max-width for generous left/right margins */}
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1240px] max-md:w-[calc(100%_-_24px)]">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[clamp(32px,3.8vw,48px)] font-bold tracking-tight text-[#172b50]">
            {t("saffron.shopBy")}{" "}
            <span className="text-[#30c8bb]">{t("saffron.category")}</span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {categories.map((category) => (
            <div key={category.to} className="flex flex-col">
              {/* Image Container with Hover Effect */}
              <Link
                to={category.to}
                className="overflow-hidden rounded-[24px] bg-[#f5f5f2] aspect-square block shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={category.image}
                  alt={t(category.altKey)}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
              {/* Title / Link */}
              <Link
                to={category.to}
                className="mt-4 text-[16px] font-semibold text-[#172b50] hover:text-[#30c8bb] transition-colors duration-200 inline-flex items-center gap-1.5 no-underline"
              >
                {t(category.nameKey)} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
