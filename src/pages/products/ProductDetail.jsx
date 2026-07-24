import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../../Components/Common/Footer";
import { containerClass } from "../../utils/tailwindClasses";
import { getProduct } from "../../data/productCatalog";
import { useTranslation } from "react-i18next";

const ProductDetail = () => {
  const { t } = useTranslation("products");
  const { categorySlug, productSlug } = useParams();
  const result = getProduct(categorySlug, productSlug);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);

  if (!result) return <Navigate to="/product" replace />;

  const { category, product } = result;
  const index = category.products.findIndex((item) => item.slug === product.slug);
  const complementary = Array.from({ length: 5 }, (_, offset) => category.products[(index + offset + 1) % category.products.length]);
  const features = t("productDetail.features", { returnObjects: true, material: category.material.split(",")[0] });
  const intro = product.shortDescription ?? t("productDetail.intro", { name: product.name, category: category.title.toLowerCase() });
  const descriptionOne = product.description ?? t("productDetail.descriptionOne", { name: product.name, category: category.title.toLowerCase() });
  const descriptionTwo = product.descriptionTwo ?? t("productDetail.descriptionTwo");

  return (
    <>
      <main key={`${categorySlug}-${productSlug}`} className="bg-white py-14 text-[#1b3156] max-md:py-8">
        <section className={`${containerClass} grid max-w-[1460px] grid-cols-[1.03fr_1fr] gap-16 max-lg:grid-cols-1 max-lg:gap-9`}>
          <div>
            <div className="aspect-square overflow-hidden bg-[#f4f1eb]">
              <img
                className="h-full w-full object-contain transition-opacity duration-300"
                src={
                  product.images?.[selectedImage] ||
                  product.image
                }
                alt={t("productDetail.imageView", { name: product.name, number: selectedImage + 1 })}
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-4">
              {(product.images || [product.image]).map(
                (image, imageIndex) => (
                  <button
                    className={`aspect-square w-28 overflow-hidden border-2 bg-[#f4f1eb] transition ${selectedImage === imageIndex
                      ? "border-[#30c8bb]"
                      : "border-transparent hover:border-[#30c8bb]/50"
                      }`}
                    type="button"
                    onClick={() =>
                      setSelectedImage(imageIndex)
                    }
                    key={`${product.slug}-${imageIndex}`}
                    aria-label={t("productDetail.showImage", { name: product.name, number: imageIndex + 1 })}
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={image}
                      alt={t("productDetail.thumbnail", { name: product.name, number: imageIndex + 1 })}
                    />
                  </button>
                )
              )}
            </div>
          </div>

          <div className="pt-2">
            <h1 className="text-[clamp(38px,4.4vw,62px)] font-bold leading-[1.05] tracking-[-0.025em]">{product.name}</h1>
            <h2 className="mt-3 max-w-[690px] text-[clamp(22px,2.2vw,31px)] font-bold leading-[1.25] text-[#30c8bb]">{product.subtitle ?? category.subtitle}</h2>
            <p className="mt-6 text-[15px] font-bold text-[#6b5a25]"><span className="tracking-[-2px] text-[#b58a16]">★★★★★</span> <span className="ml-2 text-[#676767]">{t("productDetail.rating")}</span></p>
            <p className="mt-6 max-w-[690px] text-[18px] leading-[1.65] text-[#727272]">{intro}</p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 max-sm:grid-cols-1">{features.map((feature) => <div className="flex items-start gap-3 text-[14px] font-bold text-[#414141]" key={feature}><CheckCircle2 className="mt-0.5 size-5 flex-none text-[#30c8bb]" />{feature}</div>)}</div>
            <Link className="mt-10 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#30c8bb] px-7 font-bold text-white no-underline transition hover:-translate-y-0.5 hover:bg-[#28b9ad]" to="/contact-us">{t("productDetail.requestQuote")} <span className="grid size-7 place-items-center rounded-full bg-white text-[#30c8bb]"><ArrowUpRight size={16} /></span></Link>
          </div>
        </section>

        <section className={`${containerClass} mt-20 max-w-[1460px] max-md:mt-12`}>
          <div className="flex gap-8 border-b border-[#d7dce2]">
            {["description", "specifications"].map((tab) => <button className={`border-b-2 px-8 py-4 text-[18px] font-bold capitalize transition ${activeTab === tab ? "border-[#30c8bb] text-[#30c8bb]" : "border-transparent text-[#1b3156]"}`} type="button" onClick={() => setActiveTab(tab)} key={tab}>{t(`productDetail.tabs.${tab}`)}</button>)}
          </div>
          {activeTab === "description" ? (
            <div className="grid grid-cols-[1.45fr_0.75fr] gap-16 py-10 max-lg:grid-cols-1">
              <div><h2 className="text-[32px] font-bold">{t("productDetail.heritage")}</h2><p className="mt-5 text-[17px] leading-[1.55] text-[#686868]">{descriptionOne}</p><p className="mt-5 text-[17px] leading-[1.55] text-[#686868]">{descriptionTwo}</p></div>
              <img className="aspect-[1.18/1] h-full max-h-[390px] w-full rounded-[14px] object-cover" src={product.image} alt={`${product.name} detail`} />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-10 py-10 max-md:grid-cols-1">{[[t("productDetail.specLabels.category"), category.title], [t("productDetail.specLabels.material"), category.material], [t("productDetail.specLabels.finish"), category.finish], [t("productDetail.specLabels.style"), t("productDetail.style")], [t("productDetail.specLabels.application"), t("productDetail.application")], [t("productDetail.specLabels.origin"), t("details.india")]].map(([label, value]) => <div className="grid grid-cols-[0.7fr_1fr] border-b border-[#dfe4e8] py-5" key={label}><strong>{label}</strong><span className="text-[#6c7480]">{value}</span></div>)}</div>
          )}
        </section>

        <section className={`${containerClass} mt-5 max-w-[1600px]`}>
          <div className="mb-8 flex items-end justify-between"><h2 className="text-[clamp(32px,4vw,48px)] font-bold">{t("productDetail.complementary")} <span className="text-[#30c8bb]">{t("productDetail.complementaryHighlight")}</span></h2><div className="flex gap-3"><span className="grid size-11 place-items-center rounded-full border-2 border-[#1b3156]"><ArrowLeft size={20} /></span><span className="grid size-11 place-items-center rounded-full border-2 border-[#1b3156]"><ArrowRight size={20} /></span></div></div>
          <div className="grid grid-cols-5 gap-6 max-lg:grid-cols-3 max-sm:grid-cols-2">{complementary.map((item) => <Link className="group text-[#333] no-underline" to={`/product/${category.slug}/${item.slug}`} key={item.slug}><div className="aspect-square overflow-hidden bg-[#f3f1ed]"><img className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src={item.image} alt={item.name} /></div><h3 className="mt-4 text-[16px] font-semibold">{item.name}</h3></Link>)}</div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
