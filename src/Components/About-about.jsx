import { useState } from "react";
import { useTranslation } from "react-i18next";
import aboutImg from "../assets/About-about.png";

const tabKeys = ["about", "vision", "mission"];

export default function Aboutabout() {
  const { t } = useTranslation("about");
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div><img src={aboutImg} alt={t("imageAlt")} className="w-full -mt-24" /></div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#21345B] leading-tight">
              {t("heading")} <span className="text-[#36C5BE]">{t("headingHighlight")}</span>
            </h2>
            <div className="inline-flex rounded-full bg-[#F1F1F1] overflow-hidden mt-8 shadow-sm">
              {tabKeys.map((key) => (
                <button key={key} onClick={() => setActiveTab(key)} className={`px-7 py-3 text-lg transition-all duration-300 ${activeTab === key ? "bg-[#36C5BE] text-white" : "text-gray-800 hover:bg-gray-200"}`}>
                  {t(`tabs.${key}.title`)}
                </button>
              ))}
            </div>
            <div className="mt-8">
              {t(`tabs.${activeTab}.paragraphs`, { returnObjects: true }).map((paragraph, index, paragraphs) => (
                <p className={`${index < paragraphs.length - 1 ? "mb-6 " : ""}text-gray-600 leading-8`} key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
