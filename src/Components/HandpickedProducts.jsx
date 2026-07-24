import { useCallback, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { productCatalog } from "../data/productCatalog";
import {
  buttonIconClass,
  pillButtonClass,
} from "../utils/tailwindClasses";

const handpickedCategories = productCatalog.filter(
  (category) =>
    category.slug !== "marble-decor" && category.slug !== "wooden-decor",
);

const handpickedItems = Array.from({ length: 3 }, (_, productIndex) =>
  handpickedCategories.map((category) => {
    const product = category.handpickedProducts[productIndex];

    return {
      name: product.name,
      to: `/product/${category.slug}/${product.slug}`,
      image: product.image,
    };
  }),
).flat();

const HandpickedProducts = () => {
  const { t } = useTranslation("common");
  const carouselRef = useRef(null);
  const swipeStartX = useRef(null);
  const didSwipe = useRef(false);
  const isAutoPlayPaused = useRef(false);

  const moveCarousel = useCallback((direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const isAtEnd =
      carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 4;
    const isAtStart = carousel.scrollLeft <= 4;
    const firstCard = carousel.firstElementChild;
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const distance = firstCard
      ? firstCard.getBoundingClientRect().width + gap
      : carousel.clientWidth;

    carousel.scrollTo({
      left:
        direction === "next"
          ? isAtEnd
            ? 0
            : carousel.scrollLeft + distance
          : isAtStart
            ? carousel.scrollWidth - carousel.clientWidth
            : carousel.scrollLeft - distance,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!isAutoPlayPaused.current) moveCarousel("next");
    }, 2000);

    return () => window.clearInterval(interval);
  }, [moveCarousel]);

  const handleSwipeStart = (event) => {
    swipeStartX.current = event.clientX;
    didSwipe.current = false;
    isAutoPlayPaused.current = true;
  };

  const handleSwipeEnd = (event) => {
    if (swipeStartX.current === null) return;

    const distance = event.clientX - swipeStartX.current;
    swipeStartX.current = null;
    isAutoPlayPaused.current = false;

    if (Math.abs(distance) < 45) return;
    didSwipe.current = true;
    moveCarousel(distance < 0 ? "next" : "previous");
  };

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

        {/* Swipeable Products Carousel */}
        <div
          ref={carouselRef}
          className="flex touch-pan-y snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onPointerDown={handleSwipeStart}
          onPointerUp={handleSwipeEnd}
          onPointerCancel={() => {
            swipeStartX.current = null;
            isAutoPlayPaused.current = false;
          }}
          onMouseEnter={() => {
            isAutoPlayPaused.current = true;
          }}
          onMouseLeave={() => {
            isAutoPlayPaused.current = false;
          }}
          onFocusCapture={() => {
            isAutoPlayPaused.current = true;
          }}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              isAutoPlayPaused.current = false;
            }
          }}
          onClickCapture={(event) => {
            if (!didSwipe.current) return;
            event.preventDefault();
            event.stopPropagation();
            didSwipe.current = false;
          }}
        >
          {handpickedItems.map((item) => (
            <div
              key={item.to}
              className="flex min-w-[calc((100%_-_96px)/5)] snap-start flex-col max-xl:min-w-[calc((100%_-_48px)/3)] max-md:min-w-[calc((100%_-_24px)/2)] max-sm:min-w-full"
            >
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

        <div className="relative mt-5 flex min-h-12 items-center justify-center max-sm:flex-col max-sm:gap-5">
          <Link className={pillButtonClass} to="/contact-us">
            {t("buttons.getBrochure")}
            <span className={buttonIconClass}>
              <ArrowUpRight size={15} />
            </span>
          </Link>

          <div className="absolute right-0 flex gap-3 max-sm:static">
            <button
              type="button"
              onClick={() => moveCarousel("previous")}
              aria-label={t("accessibility.previousSlide")}
              className="grid size-12 place-items-center rounded-full border-0 bg-[#172b50] text-white shadow-sm transition hover:bg-[#30c8bb]"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => moveCarousel("next")}
              aria-label={t("accessibility.nextSlide")}
              className="grid size-12 place-items-center rounded-full border-0 bg-[#172b50] text-white shadow-sm transition hover:bg-[#30c8bb]"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandpickedProducts;
