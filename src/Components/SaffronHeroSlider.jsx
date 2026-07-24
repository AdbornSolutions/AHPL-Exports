import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import saffronHeroOne from "../assets/image.png";
import saffronHeroTwo from "../assets/image2.png";
import saffronHeroThree from "../assets/image3.png";
import saffronHeroFour from "../assets/image4.png";

const banners = [
  saffronHeroOne,
  saffronHeroTwo,
  saffronHeroThree,
  saffronHeroFour,
];

const SaffronHeroSlider = () => {
  const { t } = useTranslation("common");
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index) => {
    sliderRef.current?.scrollTo({
      left: sliderRef.current.clientWidth * index,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setTimeout(() => {
      goToSlide((activeSlide + 1) % banners.length);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [activeSlide, goToSlide, isPaused]);

  const handleScroll = (event) => {
    const slider = event.currentTarget;
    const nextSlide = Math.round(slider.scrollLeft / slider.clientWidth);

    if (nextSlide !== activeSlide) {
      setActiveSlide(nextSlide);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-[#eadcc7]"
      aria-label={t("navigation.saffron")}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div
        ref={sliderRef}
        className="flex touch-pan-y snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={handleScroll}
      >
        {banners.map((banner, index) => (
          <div
            className="aspect-[241/102] min-w-full snap-center"
            key={banner}
          >
            <img
              className="size-full object-cover object-center max-md:object-contain"
              src={banner}
              alt={`${t("navigation.saffron")} ${index + 1}`}
              draggable="false"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-[#d79a43]/80 bg-[#fff8e9]/90 text-[#6b3d12] shadow-[0_6px_20px_rgba(83,46,10,0.22)] backdrop-blur-sm transition duration-200 hover:scale-105 hover:border-[#30c8bb] hover:bg-white hover:text-[#183255] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30c8bb] max-sm:left-2 max-sm:size-9"
        aria-label={t("accessibility.previousSlide")}
        onClick={() =>
          goToSlide((activeSlide - 1 + banners.length) % banners.length)
        }
      >
        <ChevronLeft className="size-6 max-sm:size-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-[#d79a43]/80 bg-[#fff8e9]/90 text-[#6b3d12] shadow-[0_6px_20px_rgba(83,46,10,0.22)] backdrop-blur-sm transition duration-200 hover:scale-105 hover:border-[#30c8bb] hover:bg-white hover:text-[#183255] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#30c8bb] max-sm:right-2 max-sm:size-9"
        aria-label={t("accessibility.nextSlide")}
        onClick={() => goToSlide((activeSlide + 1) % banners.length)}
      >
        <ChevronRight className="size-6 max-sm:size-5" aria-hidden="true" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-[#172b50]/35 px-3 py-2 backdrop-blur-sm max-sm:bottom-2">
        {banners.map((banner, index) => (
          <button
            type="button"
            className={`size-2.5 rounded-full border border-white transition ${
              activeSlide === index
                ? "bg-white"
                : "bg-white/35 hover:bg-white/70"
            }`}
            key={banner}
            aria-label={`${t("navigation.saffron")} ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default SaffronHeroSlider;
