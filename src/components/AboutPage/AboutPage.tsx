import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import LinkFarm from '../LinkFarm/LinkFarm'
import Resume from '../Resume/Resume'
import Timeline from '../Timeline/Timeline'

const AboutPage = () => {
  const footerHeight = '104px'

  return (
    <div>
      <div
        className='container flex flex-col space-y-12 items-center pt-24 pb-4 px-6 mx-auto'
        style={{ minHeight: `calc(100vh - ${footerHeight})` }}
      >
        <LinkFarm />
        <Timeline />
        <Resume />
        <ContactForm />
      </div>
    </div>
  )
}

export default AboutPage
