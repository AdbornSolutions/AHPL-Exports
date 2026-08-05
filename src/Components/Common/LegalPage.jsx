import { useEffect } from 'react'
import Footer from './Footer'
import Hero from '../Hero'
import { containerClass } from '../../utils/tailwindClasses'

const LegalPage = ({ title, description, sections }) => {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} | AHPL Exports`

    return () => {
      document.title = previousTitle
    }
  }, [title])

  return (
    <>
      <Hero title={title} />

      <main className="bg-[#f7fafc] py-16 max-md:py-10">
        <article className={`${containerClass} max-w-4xl rounded-3xl border border-[#dce5eb] bg-white px-10 py-12 shadow-[0_18px_50px_rgba(19,48,84,0.07)] max-md:px-5 max-md:py-8`}>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#30a99f]">Last updated: August 5, 2026</p>
          <p className="mt-5 text-base leading-7 text-[#5f6f82]">{description}</p>

          <div className="mt-10 space-y-9">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold leading-tight text-[#183255] max-md:text-xl">{section.title}</h2>
                <div className="mt-3 space-y-3 text-[15px] leading-7 text-[#5f6f82]">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.items && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}

export default LegalPage
