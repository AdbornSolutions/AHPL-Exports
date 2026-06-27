import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { containerClass } from "../utils/tailwindClasses";

const people = [
  {
    name: "Amin Malik",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "Sara Khan",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "Ravi Zha",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=220&q=80",
    active: true,
  },
  {
    name: "David Thomas",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=220&q=80",
  },
  {
    name: "Nina James",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=220&q=80",
  },
];

const Testimonials = () => (
  <section className="bg-white py-[82px] text-center max-md:py-[62px]">
    <div className={containerClass}>
      <span className="inline-flex rounded-full border border-[#2EC4B6] px-6 py-2.5 text-[11px] font-bold text-[#2EC4B6]">
        Testimonial
      </span>

      <h2 className="mt-7 text-[clamp(34px,4vw,48px)] font-bold leading-tight tracking-normal text-[#172b50]">
        Clients Testimonial
      </h2>

      <div className="mx-auto mt-11 flex max-w-[680px] items-center justify-center gap-12 max-md:gap-6 max-sm:gap-3">
        {people.map((person) => (
          <div
            className={`rounded-[17px] p-1 transition duration-300 ${
              person.active ? "border border-[#2EC4B6]" : "border border-transparent"
            }`}
            key={person.name}
          >
            <img
              className={`rounded-[13px] object-cover ${
                person.active ? "size-[82px] max-sm:size-[66px]" : "size-[70px] max-sm:size-[54px]"
              }`}
              src={person.image}
              alt={person.name}
            />
          </div>
        ))}
      </div>

      <div className="relative mx-auto mt-[62px] max-w-[920px]">
        <button
          className="absolute left-0 top-[72px] grid size-[34px] place-items-center rounded-full border border-[#2EC4B6] bg-white text-[#2EC4B6] transition hover:bg-[#2EC4B6] hover:text-white max-md:static max-md:mb-7 max-md:inline-grid"
          type="button"
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={17} />
        </button>

        <div className="mx-auto max-w-[610px]">
          <span className="mx-auto grid size-[46px] place-items-center rounded-full bg-[#2EC4B6] text-white">
            <Quote className="size-6 fill-white" />
          </span>

          <p className="mx-auto mt-9 max-w-[560px] text-[15px] leading-[1.18] text-black max-md:text-sm">
            AHPL has been a dependable trade partner for our business. Their commitment to
            quality, timely shipments, and professional communication has helped us streamline our
            procurement process.
          </p>

          <span className="relative mx-auto mt-5 block h-[58px] w-px bg-[#2EC4B6] after:absolute after:bottom-0 after:left-[-4px] after:size-2 after:rotate-45 after:border-b after:border-r after:border-[#2EC4B6]" />

          <strong className="mt-4 block text-[15px] font-semibold leading-none text-black">
            Ravi Zha
          </strong>
          <small className="mt-1 block text-[8px] leading-none text-black">
            Business Owner, United Kingdom
          </small>
        </div>

        <button
          className="absolute right-0 top-[72px] grid size-[34px] place-items-center rounded-full border border-[#2EC4B6] bg-white text-[#2EC4B6] transition hover:bg-[#2EC4B6] hover:text-white max-md:static max-md:mt-7 max-md:inline-grid"
          type="button"
          aria-label="Next testimonial"
        >
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  </section>
);

export default Testimonials;
