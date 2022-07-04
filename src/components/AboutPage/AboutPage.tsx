import React from 'react'
// import ArtistsStatement from '../ArtistsStatement/ArtistsStatement'
import LinkFarm from '../LinkFarm/LinkFarm'
import Resume from '../Resume/Resume'

const AboutPage = () => {
  return (
    <div
      className='flex flex-col space-y-24 container pt-24 pb-4 px-6 mx-auto text-center'
      style={{ minHeight: 'calc(100vh - 136px)' }}
    >
      <LinkFarm />
      <Resume />
      {/* <ArtistsStatement /> */}
    </div>
  )
}

export default AboutPage
