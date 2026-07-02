/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Components/Hero'
import Footer from '../Components/Common/Footer'
import WhyChoose from '../Components/WhyChoose'
import Certifications from '../Components/Certifications'
import Testimonials from '../Components/Testimonials'
import ContactForm from '../Components/ContactForm'
import Aboutabout from '../Components/About-about'

const About = () => {
  return (
    <>
      <Hero title="About Us" />  
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
