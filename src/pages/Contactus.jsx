import { Mail, MapPin, Phone } from "lucide-react";
import Footer from "../Components/Common/Footer";
import Hero from "../Components/Hero";
import CountryCodeSelect from "../Components/Common/CountryCodeSelect";
import contactCardBg from "../assets/Contactcard.png";
import { containerClass } from "../utils/tailwindClasses";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import FormStatusToast from "../Components/Common/FormStatusToast";
import { inquiryOptions } from "../config/inquiryOptions";
import {
  EMAIL_PATTERN,
  normalizePhone,
} from "../utils/formValidation";

const contactItems = [
  {
    icon: Mail,
    titleKey: "cards.email",
    value: "Info@ahplexports.com",
  },
  {
    icon: Phone,
    titleKey: "cards.phone",
    value: "+918920279982 , +91 7710771081" , 
  },
  {
    icon: MapPin,
    titleKey: "cards.address",
    valueKey: "addressValue",
  },
];

const inputClass =
  "h-[54px] w-full rounded-full border-0 bg-white px-[26px] text-[14px] text-[#183255] outline-none placeholder:text-[#8b8b8b] focus:shadow-[0_0_0_3px_rgba(48,200,187,0.2)]";

const initialForm = {
  name: "",
  countryCode: "+91",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const Contactus = () => {
  const { t } = useTranslation(["contact", "common"]);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const updateField = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitContactInquiry = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    const { countryCode, ...submissionForm } = form;

    try {
      const response = await fetch("/api/contact-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          ...submissionForm,
          phone: normalizePhone(`${countryCode}${form.phone}`),
        }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || "Contact inquiry submission failed.");
      }

      setForm(initialForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Hero title={t("pageTitle")} />

      <main className="bg-white py-[60px] max-md:py-10">
        <section
          className={`${containerClass} grid grid-cols-3 gap-4 max-md:grid-cols-1`}
        >
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="relative min-h-[230px] overflow-hidden rounded-[8px] bg-cover bg-center px-10 py-8 text-white max-lg:px-7"
                key={item.titleKey}
                style={{ backgroundImage: `url("${contactCardBg}")` }}
              >
                <div className="absolute inset-0 bg-[#0f2a52]/70" />
                <div className="relative z-10 flex h-full flex-col justify-center">
                  <span className="mb-5 grid size-[60px] place-items-center rounded-full bg-[#30c8bb] text-white">
                    <Icon size={26} strokeWidth={3} />
                  </span>
                  <h2 className="text-[24px] font-bold leading-tight">
                    {t(item.titleKey)}
                  </h2>
                  <p className="mt-2 text-[17px] font-medium leading-[1.45] text-white/90">
                    {item.valueKey ? t(item.valueKey) : item.value}
                  </p>
                </div>
              </article>
            );
          })}
        </section>

        <section
          className={`${containerClass} mt-[60px] rounded-[16px] bg-[#eeeeee] px-[34px] py-11 max-md:mt-10 max-md:px-5`}
        >
          <div className="max-w-[610px]">
            <h2 className="text-[42px] font-bold leading-tight text-[#183255] max-md:text-[34px]">
              {t("form.title")}
            </h2>
            <p className="mt-5 text-[17px] font-medium leading-[1.25] text-[#777]">
              {t("form.description")}
            </p>
          </div>

          <form
            className="relative mt-8 grid grid-cols-2 gap-x-[18px] gap-y-[22px] rounded-[12px] max-md:grid-cols-1"
            onSubmit={submitContactInquiry}
          >
            <input
              className={inputClass}
              type="text"
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder={t("form.placeholders.name")}
              autoComplete="name"
              required
              maxLength="100"
            />
            <div className="flex h-[54px] rounded-full bg-white focus-within:shadow-[0_0_0_3px_rgba(48,200,187,0.2)]">
              <CountryCodeSelect
                className="h-full shrink-0"
                value={form.countryCode}
                onChange={(countryCode) =>
                  setForm((current) => ({ ...current, countryCode }))
                }
              />
              <input
                className="min-w-0 flex-1 border-0 bg-transparent px-[18px] text-[14px] text-[#183255] outline-none placeholder:text-[#8b8b8b]"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="Enter the no."
                autoComplete="tel-national"
                inputMode="numeric"
                required
                maxLength="15"
                pattern="[0-9]{7,15}"
                title="Enter a phone number containing 7 to 15 digits"
              />
            </div>
            <input
              className={inputClass}
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              placeholder={t("form.placeholders.email")}
              autoComplete="email"
              required
              maxLength="254"
              pattern={EMAIL_PATTERN}
              title="Enter a valid email address ending in .com"
            />
            <select
              className={`${inputClass} appearance-auto`}
              name="service"
              value={form.service}
              onChange={updateField}
              aria-label={t("form.placeholders.service")}
              required
            >
              <option value="" disabled>
                Select a product
              </option>
              {inquiryOptions.map(({ value, labelKey }) => (
                <option value={value} key={value}>
                  {t(labelKey, { ns: "common" })}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
            <textarea
              className="col-span-2 h-[155px] w-full resize-none rounded-[8px] border-0 bg-white px-[26px] py-5 text-[14px] text-[#183255] outline-none placeholder:text-[#8b8b8b] focus:shadow-[0_0_0_3px_rgba(48,200,187,0.2)] max-md:col-span-1"
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder={t("form.placeholders.message")}
              required
              maxLength="2000"
            />
            <div className="col-span-2 flex justify-center pt-3 max-md:col-span-1">
              <button
                className="min-h-[45px] rounded-[8px] border-0 bg-[#30c8bb] px-6 text-[16px] font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(48,200,187,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={status === "submitting"}
              >
                {status === "submitting"
                  ? "Sending..."
                  : t("buttons.sendMessage", { ns: "common" })}
              </button>
            </div>

            <FormStatusToast
              status={status}
              successMessage="We’ve received your message and will get back to you shortly."
              errorMessage="We could not send your message. Please try again."
              onDismiss={() => setStatus("idle")}
            />
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contactus;
