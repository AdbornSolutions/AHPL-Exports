import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Footer from "../Components/Common/Footer";
import { getSpaceCollection } from "../data/spaceCollections";

const SpaceProducts = () => {
  const { spaceSlug } = useParams();
  const { t } = useTranslation("common");
  const collection = getSpaceCollection(spaceSlug);

  if (!collection) return <Navigate to="/saffron" replace />;

  return (
    <>
      <main className="min-h-screen bg-white text-[#172b50]">
        <section className="bg-[#f4f8f7] py-16 max-md:py-10">
          <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1240px] max-md:w-[calc(100%_-_24px)]">
            <Link
              to="/saffron"
              className="inline-flex items-center gap-2 font-semibold text-[#172b50] no-underline transition-colors hover:text-[#30c8bb]"
            >
              <ArrowLeft size={18} /> Back to Saffron
            </Link>
            <p className="mt-9 text-sm font-bold uppercase tracking-[0.18em] text-[#30c8bb]">
              Shop the collection
            </p>
            <h1 className="mt-2 text-[clamp(38px,5vw,64px)] font-bold leading-tight">
              {t(collection.nameKey)}
            </h1>
            <p className="mt-5 max-w-[720px] text-[17px] leading-relaxed text-[#687382]">
              {collection.description}
            </p>
          </div>
        </section>

        <section className="py-16 max-md:py-10">
          <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1240px] max-md:w-[calc(100%_-_24px)]">
            <div className="mb-8 flex items-end justify-between gap-4">
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold">
                Related <span className="text-[#30c8bb]">Products</span>
              </h2>
              <span className="text-sm font-semibold text-[#7a8490]">
                {collection.products.length} products
              </span>
            </div>

            <div className="grid grid-cols-4 gap-x-6 gap-y-9 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
              {collection.products.map(({ category, product }) => (
                <Link
                  key={`${category.slug}-${product.slug}`}
                  to={`/product/${category.slug}/${product.slug}`}
                  className="group text-inherit no-underline"
                >
                  <div className="aspect-square overflow-hidden rounded-[20px] bg-[#f5f5f2] shadow-sm transition-shadow group-hover:shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#30c8bb]">
                    {category.title}
                  </p>
                  <h3 className="mt-1 text-[17px] font-semibold leading-snug transition-colors group-hover:text-[#30c8bb]">
                    {product.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SpaceProducts;
