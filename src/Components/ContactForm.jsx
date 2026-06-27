import contactBg from "../assets/form.png";
import { containerClass } from "../utils/tailwindClasses";

const fieldClass =
  "h-11 w-full rounded-[9px] border border-[#c8c8c8] bg-white/85 px-3 text-[13px] text-[#27344b] outline-none transition placeholder:text-[#707070] focus:border-[#2EC4B6] focus:bg-white focus:shadow-[0_0_0_3px_rgba(46,196,182,0.16)]";

const labelClass = "grid gap-2 text-left text-[16px] font-semibold text-black";

const ContactForm = () => (
  <section id="contact-us" className="pb-16 pt-5">
    <div
      className={`${containerClass} grid min-h-[690px] grid-cols-[1fr_420px] items-center gap-14 overflow-hidden rounded-[28px] bg-cover bg-center px-16 py-[34px] text-white max-lg:grid-cols-[1fr_390px] max-lg:px-10 max-md:grid-cols-1 max-md:px-5 max-md:py-10`}
      style={{ backgroundImage: `url("${contactBg}")` }}
    >
      <div className="max-w-[690px] max-md:pt-12">
        <span className="inline-flex rounded-full border border-[#2EC4B6] px-5 py-3 text-[14px] font-bold text-[#2EC4B6]">
          Let&apos;s get in Touch!
        </span>

        <h2 className="mt-7 text-[clamp(42px,5vw,58px)] font-bold leading-[1.18] tracking-normal text-white max-sm:text-[38px]">
          Optimize Your Logistics
          <br />
          Today With Our Expert
          <br />
          Solutions<span className="text-[#2EC4B6]">.</span>
        </h2>
      </div>

      <form
        className="relative grid gap-[18px] bg-white/90 px-[50px] pb-[30px] pt-10 text-[#172b50] shadow-[-10px_10px_0_rgba(255,255,255,0.22)] backdrop-blur-sm [clip-path:polygon(0_0,78%_0,100%_18%,100%_100%,0_100%)] max-lg:px-9 max-md:mx-auto max-md:w-full max-md:max-w-[460px] max-md:[clip-path:none] max-md:rounded-[28px] max-sm:px-5"
        onSubmit={(event) => event.preventDefault()}
      >
        <h3 className="text-[30px] font-bold leading-none text-[#172b50]">Get in Touch:</h3>
        <div className="h-px w-full bg-black/25" />

        <label className={labelClass}>
          Name
          <input className={fieldClass} type="text" placeholder="Enter your full name" />
        </label>

        <label className={labelClass}>
          Email
          <input className={fieldClass} type="email" placeholder="Enter your email" />
        </label>

        <label className={labelClass}>
          Phone
          <input className={fieldClass} type="tel" placeholder="Enter your phone number" />
        </label>

        <label className={labelClass}>
          Inquiry
          <select className={`${fieldClass} appearance-auto`} defaultValue="">
            <option value="" disabled>Product inquiry</option>
            <option>Agricultural Products</option>
            <option>Spices & Food Products</option>
            <option>General Inquiry</option>
          </select>
        </label>

        <label className={labelClass}>
          Comment
          <textarea
            className={`${fieldClass} h-20 resize-none py-3`}
            rows="3"
            placeholder="Write your message"
          />
        </label>

        <button
          className="mt-3 min-h-[50px] w-full rounded-[9px] border-0 bg-[#2EC4B6] px-5 text-[18px] font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(46,196,182,0.28)]"
          type="submit"
        >
          Request a Quote
        </button>
      </form>
    </div>
  </section>
);

export default ContactForm;
