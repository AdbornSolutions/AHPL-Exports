import { useState } from "react";
import aboutImg from "../assets/About-about.png";

const tabs = {
  about: {
    title: "About AHPL",
    content: (
      <>
        <p className="mb-6 text-gray-600 leading-8">
          Headquartered in Nagpur, India, AHPL was
          established with a clear vision to bridge the gap between India's
          diverse manufacturing landscape and the evolving demands of the global
          marketplace.
        </p>

        <p className="mb-6 text-gray-600 leading-8">
          As a merchant export company, we work closely with trusted
          manufacturers and artisans across India to source high-quality
          products that meet international standards. Our expertise extends
          beyond procurement, offering quality management, export compliance,
          logistics coordination, and dependable delivery to clients around the
          world.
        </p>

        <p className="text-gray-600 leading-8">
          At AHPL, we don't just export products—we build long-term partnerships
          by delivering reliability, transparency, and consistent value.
        </p>
      </>
    ),
  },

  vision: {
    title: "Our Vision",
    content: (
      <p className="text-gray-600 leading-8">
        We are committed to transforming the way international buyers source
        products from India. By combining India's rich manufacturing heritage
        with modern supply chain management and efficient export processes,
        AHPL serves as a dependable partner for retailers, wholesalers,
        distributors, and importers looking to expand their product offerings
        with premium Indian-origin goods.
      </p>
    ),
  },

  mission: {
    title: "Our Mission",
    content: (
      <p className="text-gray-600 leading-8">
        Our mission is to provide international buyers with seamless access to
        quality Indian products through ethical sourcing, stringent quality
        standards, transparent communication, and efficient export operations.
        We strive to create lasting value for our customers by ensuring every
        shipment reflects our commitment to excellence.
      </p>
    ),
  },
};

export default function Aboutabout() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div>
            <img
              src={aboutImg}
              alt="About AHPL"
              className="w-full -mt-24"
            />
          </div>

          {/* Right Content */}
          <div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#21345B] leading-tight">
              Your Reliable Export
              <br />
              Partner from{" "}
              <span className="text-[#36C5BE]">India</span>
            </h2>

            {/* Tabs */}
            <div className="inline-flex rounded-full bg-[#F1F1F1] overflow-hidden mt-8 shadow-sm">

              {Object.entries(tabs).map(([key, item]) => (

                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-7 py-3 text-lg transition-all duration-300 ${
                    activeTab === key
                      ? "bg-[#36C5BE] text-white"
                      : "text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {item.title}
                </button>

              ))}
            </div>

            {/* Content */}
            <div className="mt-8">
              {tabs[activeTab].content}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}