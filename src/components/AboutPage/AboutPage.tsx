import React from 'react'
// import ArtistsStatement from '../ArtistsStatement/ArtistsStatement'
import LinkFarm from '../LinkFarm/LinkFarm'
import Resume from '../Resume/Resume'
// import Sidebar from '../Sidebar/Sidebar'
import Timeline from '../Timeline/Timeline'

const AboutPage = () => {
  return (
    <div
      className='flex flex-col space-y-12 container pt-24 pb-4 mx-auto w-[768px]'
      style={{ minHeight: 'calc(100vh - 136px)' }}
    >
      <LinkFarm />
      <Timeline />
      <Resume />
      {/* <ArtistsStatement /> */}
      {/* <Sidebar /> */}
    </div>
  )
}

export default AboutPage
