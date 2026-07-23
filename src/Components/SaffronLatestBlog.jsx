import { ArrowRight } from "lucide-react";
import "@fontsource/poppins/600.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import emergingMarketsImage from "../assets/export_business_blog.png";
import exportDocumentationImage from "../assets/exprt_doc_blog.png";
import globalSourcingImage from "../assets/global-sourcing_blog.png";

const postImages = [
  exportDocumentationImage,
  emergingMarketsImage,
  globalSourcingImage,
];

const SaffronLatestBlog = () => {
  const { t } = useTranslation("common");
  const posts = t("saffron.blog.posts", { returnObjects: true });

  return (
    <section className="bg-white pb-[84px] pt-27 max-md:pb-14 max-md:pt-14">
      <div className="mx-auto w-[calc(100%_-_32px)] max-w-[1166px] max-md:w-[calc(100%_-_24px)]">
        <header className="text-center">
          <span className="inline-flex rounded-full border border-[#27c3b7] px-[20px] py-[12px] text-[13px] font-bold leading-none text-[#20b8ac]">
            {t("saffron.blog.eyebrow")}
          </span>

          <h2 className="mx-auto mt-6 max-w-[700px] font-['Poppins',sans-serif] text-[clamp(32px,3.7vw,48px)] font-semibold leading-[1.28] tracking-[-0.01em] text-[#172B50] opacity-100">
            {t("saffron.blog.titleLine1")}
            <br />
            {t("saffron.blog.titleLine2")}{" "}
            <span className="text-[#30C8BB] opacity-100">
              {t("saffron.blog.titleHighlight1")}{" "}
              {t("saffron.blog.titleHighlight2")}
            </span>
          </h2>
        </header>

        <div className="mt-[38px] grid grid-cols-3 gap-[18px] text-left max-lg:grid-cols-2 max-md:grid-cols-1">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="flex min-h-[425px] flex-col rounded-[15px] border border-[#d0d0d0] bg-white p-[14px]"
            >
              <img
                src={postImages[index]}
                alt={post.title}
                className={`h-[169px] w-full rounded-[9px] object-cover ${
                  index === 0 ? "object-bottom" : "object-center"
                }`}
              />

              <h3 className="mt-2 text-[24px] font-medium leading-[1.13] tracking-[-0.02em] text-[#10233d]">
                {post.title}
              </h3>

              <p className="mt-[18px] text-[18px] leading-[1.18] tracking-[-0.01em] text-[#10233d]">
                {post.short}
              </p>

              <Link
                to="/blog"
                aria-label={`${t("saffron.blog.viewMore")}: ${post.title}`}
                className="mt-auto inline-flex w-fit items-center gap-3 pt-4 text-[17px] font-medium text-[#20bfb3] no-underline transition-colors hover:text-[#159d94]"
              >
                {t("saffron.blog.viewMore")}
                <ArrowRight aria-hidden="true" size={19} strokeWidth={2} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaffronLatestBlog;
