import { Mail, MapPin, Phone } from 'lucide-react'
import Footer from '../Components/Common/Footer'
import Hero from '../Components/Hero'
import contactCardBg from '../assets/Contactcard.png'
import { containerClass } from '../utils/tailwindClasses'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const contactItems = [
  {
    icon: Mail,
    titleKey: 'cards.email',
    value: 'Info@ahplexports.com',
  },
  {
    icon: Phone,
    titleKey: 'cards.phone',
    value: '+918920279982',
  },
  {
    icon: MapPin,
    titleKey: 'cards.address',
    valueKey: 'addressValue',
  },
]

const inputClass =
  'h-[54px] w-full rounded-full border-0 bg-white px-[26px] text-[14px] text-[#183255] outline-none placeholder:text-[#8b8b8b] focus:shadow-[0_0_0_3px_rgba(48,200,187,0.2)]'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

const Contactus = () => {
  const { t } = useTranslation(['contact', 'common'])
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const updateField = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }))
  }

  const submitContactInquiry = async (event) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(form),
      })
      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || 'Contact inquiry submission failed.')
      }

      setForm(initialForm)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Hero title={t('pageTitle')} />

      <main className="bg-white py-[60px] max-md:py-10">
        <section className={`${containerClass} grid grid-cols-3 gap-4 max-md:grid-cols-1`}>
          {contactItems.map((item) => {
            const Icon = item.icon

            return (
              <article
                className="relative min-h-[230px] overflow-hidden rounded-[8px] bg-cover bg-center px-10 py-8 text-white max-lg:px-7"
                key={item.titleKey}
                style={{ backgroundImage: `url("${contactCardBg}")` }}
              >
                <div className="absolute inset-0 bg-[#0f2a52]/70" />
                <div className="relative z-10 flex h-full flex-col justify-center">
                  <span className="mb-5 grid size-[60px] place-items-center rounded-full bg-[#30c8bb] text-white">
                    <Icon size={26} strokeWidth={3} />
                  </span>
                  <h2 className="text-[24px] font-bold leading-tight">{t(item.titleKey)}</h2>
                  <p className="mt-2 text-[17px] font-medium leading-[1.45] text-white/90">
                    {item.valueKey ? t(item.valueKey) : item.value}
                  </p>
                </div>
              </article>
            )
          })}
        </section>

        <section className={`${containerClass} mt-[60px] rounded-[16px] bg-[#eeeeee] px-[34px] py-11 max-md:mt-10 max-md:px-5`}>
          <div className="max-w-[610px]">
            <h2 className="text-[42px] font-bold leading-tight text-[#183255] max-md:text-[34px]">
              {t('form.title')}
            </h2>
            <p className="mt-5 text-[17px] font-medium leading-[1.25] text-[#777]">
              {t('form.description')}
            </p>
          </div>

          <form
            className="mt-8 grid grid-cols-2 gap-x-[18px] gap-y-[22px] max-md:grid-cols-1"
            onSubmit={submitContactInquiry}
          >
            <input className={inputClass} type="text" name="name" value={form.name} onChange={updateField} placeholder={t('form.placeholders.name')} autoComplete="name" required maxLength="100" />
            <input className={inputClass} type="tel" name="phone" value={form.phone} onChange={updateField} placeholder={t('form.placeholders.phone')} autoComplete="tel" required minLength="7" maxLength="20" />
            <input className={inputClass} type="email" name="email" value={form.email} onChange={updateField} placeholder={t('form.placeholders.email')} autoComplete="email" required maxLength="254" />
            <input className={inputClass} type="text" name="service" value={form.service} onChange={updateField} placeholder={t('form.placeholders.service')} required maxLength="150" />
            <textarea
              className="col-span-2 h-[155px] w-full resize-none rounded-[8px] border-0 bg-white px-[26px] py-5 text-[14px] text-[#183255] outline-none placeholder:text-[#8b8b8b] focus:shadow-[0_0_0_3px_rgba(48,200,187,0.2)] max-md:col-span-1"
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder={t('form.placeholders.message')}
              required
              maxLength="2000"
            />
            <div className="col-span-2 flex justify-center pt-3 max-md:col-span-1">
              <button
                className="min-h-[45px] rounded-[8px] border-0 bg-[#30c8bb] px-6 text-[16px] font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(48,200,187,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : t('buttons.sendMessage', { ns: 'common' })}
              </button>
            </div>
            <div aria-live="polite" className="col-span-2 min-h-5 text-center text-sm font-medium max-md:col-span-1">
              {status === 'success' && <p className="text-[#168477]">Thank you. Your message has been sent successfully.</p>}
              {status === 'error' && <p className="text-red-700">We could not send your message. Please try again.</p>}
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Contactus
