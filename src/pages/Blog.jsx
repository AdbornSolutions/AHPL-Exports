/* eslint-disable no-unused-vars */
import React from 'react'
import { ArrowRight } from 'lucide-react'
import Hero from '../Components/Hero'
import Footer from '../Components/Common/Footer'
import blogOne from '../assets/blog1.png'
import blogTwo from '../assets/blog2.png'
import blogThree from '../assets/blog3.png'
import { containerClass } from '../utils/tailwindClasses'

const blogPosts = [
  {
    image: blogOne,
    title: 'A Complete Guide to Export Documentation',
    description:
      'Understanding essential trade documents such as commercial invoices, bills of lading, certificates of origin, and customs paperwork for smooth international transactions.',
  },
  {
    image: blogTwo,
    title: 'Top Emerging Markets for Export Businesses in 2026',
    description:
      'Discover high-growth international markets and new opportunities for businesses looking to expand their global footprint.',
  },
  {
    image: blogThree,
    title: 'How to Choose the Right Global Sourcing Partner',
    description:
      'Learn the key factors to consider when selecting reliable suppliers and sourcing partners for long-term business success.',
  },
]

const posts = [...blogPosts, ...blogPosts]

const Blog = () => {
  return (
    <>
      <Hero title="Blog" />

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

                <a
                  className="mt-5 inline-flex items-center gap-3 text-[16px] font-medium text-[#30c8bb] no-underline"
                  href="#"
                  aria-label={`View more about ${post.title}`}
                >
                  View More <ArrowRight size={18} strokeWidth={2} />
                </a>
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
