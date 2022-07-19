import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import LinkFarm from '../LinkFarm/LinkFarm'
import Resume from '../Resume/Resume'
// import ArtistsStatement from '../ArtistsStatement/ArtistsStatement'
// import Sidebar from '../Sidebar/Sidebar'
import Timeline from '../Timeline/Timeline'

const AboutPage = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <div
        className='container flex flex-col space-y-12 container pt-24 pb-4 px-6 mx-auto'
        style={{ minHeight: 'calc(100vh - 104px)' }}
      >
        <LinkFarm />
        <Timeline />
        <Resume />
        <ContactForm />
        {/* <ArtistsStatement /> */}
      </div>
    </div>
  )
}

export default AboutPage
