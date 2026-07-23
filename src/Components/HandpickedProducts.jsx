import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import mangalJyotiImg from "../assets/products-images/Metal-table/1.png";

const handpickedItems = [
  {
    name: "Mangal- Jyoti(Black)",
    to: "/product/metal-table-decor/mangal-jyoti-black",
    image: mangalJyotiImg,
  },
  {
    name: "Mangal- Jyoti(Black)",
    to: "/product/metal-table-decor/mangal-jyoti-black",
    image: mangalJyotiImg,
  },
  {
    name: "Mangal- Jyoti(Black)",
    to: "/product/metal-table-decor/mangal-jyoti-black",
    image: mangalJyotiImg,
  },
  {
    name: "Mangal- Jyoti(Black)",
    to: "/product/metal-table-decor/mangal-jyoti-black",
    image: mangalJyotiImg,
  },
  {
    name: "Mangal- Jyoti(Black)",
    to: "/product/metal-table-decor/mangal-jyoti-black",
    image: mangalJyotiImg,
  },
];

const HandpickedProducts = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-white pb-20 pt-10 max-md:pb-12 max-md:pt-6">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1240px] max-md:w-[calc(100%_-_24px)]">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[clamp(32px,3.8vw,48px)] font-bold tracking-tight text-[#172b50]">
            {t("saffron.handpickedTitle")}{" "}
            <span className="text-[#30c8bb]">{t("saffron.handpickedHighlight")}</span>
          </h2>
          <p className="mt-0 text-[19px] font-medium text-gray-600 max-w-[600px] mx-auto leading-relaxed">
            {t("saffron.handpickedSubtitle")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-5 gap-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {handpickedItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Container with Hover Effect */}
              <Link
                to={item.to}
                className="overflow-hidden rounded-[24px] bg-[#f5f5f2] aspect-square block shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
              {/* Title / Link */}
              <Link
                to={item.to}
                className="mt-4 text-[15px] font-bold text-[#1b3156] hover:text-[#30c8bb] transition-colors duration-200 no-underline"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HandpickedProducts;
