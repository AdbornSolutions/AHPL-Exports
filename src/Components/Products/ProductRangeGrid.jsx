import { Link } from "react-router-dom";
import { slugify } from "../../data/productCatalog";

const ProductRangeGrid = ({ products, categorySlug }) => (
  <div className="mt-9 grid grid-cols-5 gap-x-5 gap-y-9 text-left max-xl:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-x-3 max-sm:gap-y-7">
    {products.map((product) => (
      <Link
        className="group overflow-hidden rounded-2xl border border-[#1b3156]/10 bg-white text-center text-inherit no-underline shadow-[0_10px_30px_rgba(27,49,86,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(27,49,86,0.12)]"
        to={`/product/${categorySlug}/${slugify(product.name)}`}
        key={product.name}
      >
        <div className="aspect-square overflow-hidden bg-[#f4f0e9]">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="p-4 max-sm:p-3">
          <h3 className="text-[15px] font-bold leading-snug text-[#1b3156] max-sm:text-[13px]">
            {product.name}
          </h3>
        </div>
      </Link>
    ))}
  </div>
);

export default ProductRangeGrid;
