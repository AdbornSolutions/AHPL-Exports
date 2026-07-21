import { Mail, MapPin, Phone } from 'lucide-react'
import Footer from '../Components/Common/Footer'
import Hero from '../Components/Hero'
import contactCardBg from '../assets/Contactcard.png'
import { containerClass } from '../utils/tailwindClasses'

const contactItems = [
  {
    icon: Mail,
    title: 'Email Address',
    value: 'Info@ahplexports.com',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    value: '+918920279982',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '1st floor, Lajwanti Complex, 10/2, Central Ave, Sut Market, Itwari, Nagpur, Maharashtra 440002',
  },
]

const inputClass =
  'h-[54px] w-full rounded-full border-0 bg-white px-[26px] text-[14px] text-[#183255] outline-none placeholder:text-[#8b8b8b] focus:shadow-[0_0_0_3px_rgba(48,200,187,0.2)]'

const Contactus = () => {
  return (
    <>
      <Hero title="Contact Us" />

      <main className="bg-white py-[60px] max-md:py-10">
        <section className={`${containerClass} grid grid-cols-3 gap-4 max-md:grid-cols-1`}>
          {contactItems.map((item) => {
            const Icon = item.icon

            return (
              <article
                className="relative min-h-[230px] overflow-hidden rounded-[8px] bg-cover bg-center px-10 py-8 text-white max-lg:px-7"
                key={item.title}
                style={{ backgroundImage: `url("${contactCardBg}")` }}
              >
                <div className="absolute inset-0 bg-[#0f2a52]/70" />
                <div className="relative z-10 flex h-full flex-col justify-center">
                  <span className="mb-5 grid size-[60px] place-items-center rounded-full bg-[#30c8bb] text-white">
                    <Icon size={26} strokeWidth={3} />
                  </span>
                  <h2 className="text-[24px] font-bold leading-tight">{item.title}</h2>
                  <p className="mt-2 text-[17px] font-medium leading-[1.45] text-white/90">{item.value}</p>
                </div>
              </article>
            )
          })}
        </section>

        <section className={`${containerClass} mt-[60px] rounded-[16px] bg-[#eeeeee] px-[34px] py-11 max-md:mt-10 max-md:px-5`}>
          <div className="max-w-[610px]">
            <h2 className="text-[42px] font-bold leading-tight text-[#183255] max-md:text-[34px]">
              Send Us an Inquiry
            </h2>
            <p className="mt-5 text-[17px] font-medium leading-[1.25] text-[#777]">
              Looking for a trusted export partner? Fill out the form below, and our
              team will get back to you as soon as possible.
            </p>
          </div>

          <form
            className="mt-8 grid grid-cols-2 gap-x-[18px] gap-y-[22px] max-md:grid-cols-1"
            onSubmit={(event) => event.preventDefault()}
          >
            <input className={inputClass} type="text" placeholder="Fast name" />
            <input className={inputClass} type="tel" placeholder="Phone number" />
            <input className={inputClass} type="email" placeholder="Email address" />
            <input className={inputClass} type="text" placeholder="Write Service Type" />
            <textarea
              className="col-span-2 h-[155px] w-full resize-none rounded-[8px] border-0 bg-white px-[26px] py-5 text-[14px] text-[#183255] outline-none placeholder:text-[#8b8b8b] focus:shadow-[0_0_0_3px_rgba(48,200,187,0.2)] max-md:col-span-1"
              placeholder="Type your message..."
            />
            <div className="col-span-2 flex justify-center pt-3 max-md:col-span-1">
              <button
                className="min-h-[45px] rounded-[8px] border-0 bg-[#30c8bb] px-6 text-[16px] font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(48,200,187,0.28)]"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Contactus
