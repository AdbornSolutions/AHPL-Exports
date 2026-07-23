import { ArrowRight } from "lucide-react";
import blogOne from "../assets/blog1.png";
import blogTwo from "../assets/blog2.png";
import blogThree from "../assets/blog3.png";
import { containerClass, eyebrowClass, sectionClass, sectionTitleClass } from "../utils/tailwindClasses";
import { useTranslation } from "react-i18next";

const postImages = [blogOne, blogTwo, blogThree];

const LatestBlog = () => {
  const { t } = useTranslation(["blogs", "common"]);
  const posts = t("posts", { returnObjects: true }).map((post, index) => ({ ...post, image: postImages[index] }));
  return (
  <section id="blog" className={`${sectionClass} text-center`}>
    <div className={containerClass}>
      <span className={eyebrowClass}>{t("latest")}</span>
      <h2 className={sectionTitleClass}>{t("heading")} <span className="text-[#30c8bb]">{t("headingHighlight")}</span></h2>
      <div className="mt-[38px] grid grid-cols-3 gap-6 text-left max-md:grid-cols-1">
        {posts.map((post) => (
          <article className="overflow-hidden rounded-2xl border border-[#dbe2e8] bg-white shadow-[0_10px_30px_rgba(13,44,76,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(13,44,76,0.1)]" key={post.title}>
            <div className="h-[190px] overflow-hidden bg-[#eaf1f4]"><img className="h-full w-full object-cover" src={post.image} alt="" /></div>
            <div className="p-5">
              <h3 className="mb-3 min-h-[50px] text-lg font-bold leading-[1.3] text-[#172b50] max-md:min-h-0">{post.title}</h3>
              <p className="mb-[18px] min-h-[84px] text-[13px] leading-[1.45] text-[#6d7889] max-md:min-h-0">{post.short}</p>
              <a className="inline-flex items-center gap-1.5 text-xs font-bold text-[#30c8bb] no-underline" href="/blog">{t("buttons.viewMore", { ns: "common" })} <ArrowRight size={15} /></a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default LatestBlog;
