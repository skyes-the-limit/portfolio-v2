import React, { lazy, Suspense } from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { FullScreenLoader } from '../Loader/Loader'

const ContactForm = lazy(() => import('../ContactForm/ContactForm'))
const LinkFarm = lazy(() => import('../LinkFarm/LinkFarm'))
const Resume = lazy(() => import('../Resume/Resume'))
const Timeline = lazy(() => import('../Timeline/Timeline'))

const FOOTER_HEIGHT = '104px'

const AboutPage = () => {
  useDocumentTitle('Skye Bishop - About')

  return (
    <Suspense fallback={<FullScreenLoader />}>
      <div>
        <div
          className='container flex flex-col space-y-12 items-center pt-24 pb-4 px-6 mx-auto'
          style={{ minHeight: `calc(100vh - ${FOOTER_HEIGHT})` }}
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
