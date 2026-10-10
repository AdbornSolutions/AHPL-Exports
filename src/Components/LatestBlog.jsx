import cottonBlog from '../data/cottonToteBagBlog.json';
import cottonBlogImage from '../assets/Blogs/B11-1.jpeg';
import { ArrowRight } from "lucide-react";
import industrialBlog from "../data/industrialVBeltBlog.json";
import industrialBlogImage from "../assets/Blogs/B10-1.png";
import luxuryBlog from "../data/luxuryHomeDecorBlog.json";
import luxuryBlogImage from "../assets/Blogs/B9-1.png";
import { containerClass, eyebrowClass, sectionClass, sectionTitleClass } from "../utils/tailwindClasses";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LatestBlog = () => {
  const { t } = useTranslation(["blogs", "common"]);
  const posts = [
    { title: cottonBlog.title, short: cottonBlog.description, image: cottonBlogImage, to: cottonBlog.path },
    { title: industrialBlog.title, short: industrialBlog.description, image: industrialBlogImage, to: industrialBlog.path },
    { title: luxuryBlog.title, short: luxuryBlog.description, image: luxuryBlogImage, to: luxuryBlog.path },
  ];
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
              <Link className="inline-flex items-center gap-1.5 text-xs font-bold text-[#30c8bb] no-underline" to={post.to}>{t("buttons.viewMore", { ns: "common" })} <ArrowRight size={15} /></Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default LatestBlog;
