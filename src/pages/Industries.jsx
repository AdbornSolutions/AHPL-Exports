/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Components/Hero'
import Products from '../Components/Products'
import Testimonials from '../Components/Testimonials'
import WhyChoose from '../Components/WhyChoose'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Common/Footer'
import { useTranslation } from 'react-i18next'

const Industries = () => {
  const { t } = useTranslation('products')
  return (
    <>
      <Hero title={t('pageTitle')} />
      <section className="bg-white py-[60px] max-md:py-10" />
      <Products />
      <Testimonials />
      <WhyChoose />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Industries
