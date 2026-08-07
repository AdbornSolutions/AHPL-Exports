/* eslint-disable no-unused-vars */
import React from 'react'
import { ArrowRight } from 'lucide-react'
import Hero from '../Components/Hero'
import Footer from '../Components/Common/Footer'
import blogOne from '../assets/blog1.png'
import blogTwo from '../assets/blog2.png'
import blogThree from '../assets/blog3.png'
import { containerClass } from '../utils/tailwindClasses'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import latestBlogImage from '../assets/Blogs/B1-1.png'
import handicraftsExporterBlogImage from '../assets/Blogs/B2-1.png'
import decorativeItemsExporterBlogImage from '../assets/Blogs/B3-1.png'
import metalWallDecorBlogImage from '../assets/Blogs/B4-1.jpeg'

const postImages = [blogOne, blogTwo, blogThree]

const Blog = () => {
  const { t } = useTranslation(['blogs', 'common'])
  const blogPosts = t('posts', { returnObjects: true }).map((post, index) => ({ ...post, image: postImages[index] }))
  const posts = [
    {
      title: 'How African Importers Can Find a Trusted Metal Wall Decor Manufacturer',
      description: 'Discover how African importers can choose a trusted Metal Wall Decor Manufacturer for premium quality, reliable exports, and long-term business success.',
      image: metalWallDecorBlogImage,
      to: '/metal-wall-decor-manufacturer',
    },
    {
      title: 'What Makes a Home Decor Manufacturer India Stand Out in Global Markets?',
      description: 'Discover why global buyers choose Indian home decor manufacturers for premium craftsmanship, private label solutions, and reliable worldwide exports.',
      image: latestBlogImage,
      to: '/home-decor-manufacturer-india-stand-out-global-markets',
    },
    {
      title: 'How to Choose the Best Indian Handicrafts Exporter for Your Business',
      description: 'Discover the key factors global buyers should consider when choosing a reliable Indian handicrafts exporter for quality, customization, and long-term growth.',
      image: handicraftsExporterBlogImage,
      to: '/how-to-choose-the-best-indian-handicrafts-exporter',
    },
    {
      title: 'How Decorative Items Exporter Companies Ensure Global Quality Standards',
      description: 'Discover how a trusted Decorative Items Exporter ensures global quality standards through premium craftsmanship, quality control, and reliable exports.',
      image: decorativeItemsExporterBlogImage,
      to: '/how-decorative-items-exporter-ensure-global-quality-standards',
    },
    ...blogPosts,
  ]
  return (
    <>
      <Hero title={t('pageTitle')} />

      <main className="bg-white py-[60px] max-md:py-10">
        <div className={`${containerClass} grid grid-cols-3 gap-x-4 gap-y-[18px] max-lg:grid-cols-2 max-md:grid-cols-1`}>
          {posts.map((post, index) => (
            <article
              className="rounded-[13px] border border-[#d8dce1] bg-white p-3 transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(19,48,84,0.1)]"
              key={`${post.title}-${index}`}
            >
              <div className="h-[160px] overflow-hidden rounded-[7px] bg-[#eaf1f4] max-md:h-[210px] max-[480px]:h-[180px]">
                <img className="h-full w-full object-cover" src={post.image} alt={post.title} />
              </div>

              <div className="pt-3">
                <h2 className="min-h-[60px] text-[22px] font-semibold leading-[1.08] tracking-normal text-[#183255] max-md:min-h-0">
                  {post.title}
                </h2>

                <p className="mt-[18px] min-h-[82px] text-[16px] font-medium leading-[1.12] text-[#183255] max-md:min-h-0">
                  {post.description}
                </p>

                <Link
                  className="mt-5 inline-flex items-center gap-3 text-[16px] font-medium text-[#30c8bb] no-underline"
                  to={post.to || '/blog'}
                  aria-label={t('viewMoreAbout', { title: post.title })}
                >
                  {t('buttons.viewMore', { ns: 'common' })} <ArrowRight size={18} strokeWidth={2} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Blog
