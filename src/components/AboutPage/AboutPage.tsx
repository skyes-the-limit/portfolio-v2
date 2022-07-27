import React, { lazy, Suspense } from 'react'
import { FullScreenLoader } from '../Loader/Loader'

const ContactForm = lazy(() => import('../ContactForm/ContactForm'))
const LinkFarm = lazy(() => import('../LinkFarm/LinkFarm'))
const Resume = lazy(() => import('../Resume/Resume'))
const Timeline = lazy(() => import('../Timeline/Timeline'))

const AboutPage = () => {
  const footerHeight = '104px'

  return (
    <Suspense fallback={<FullScreenLoader />}>
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
    </Suspense>
  )
}

export default AboutPage
