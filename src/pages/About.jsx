/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Components/Hero'
import Footer from '../Components/Common/Footer'
import WhyChoose from '../Components/WhyChoose'
import Certifications from '../Components/Certifications'
import Testimonials from '../Components/Testimonials'
import ContactForm from '../Components/ContactForm'
import Aboutabout from '../Components/About-about'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation('about')
  return (
    <>
      <Hero title={t('pageTitle')} />  
      <Aboutabout />
      <WhyChoose />
      <Certifications />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}

export default About
