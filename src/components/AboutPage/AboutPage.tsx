import React from 'react'
import LinkFarm from '../LinkFarm/LinkFarm'

const AboutPage = () => {
  return (
    <div className='container pt-16 px-6 mx-auto' style={{ minHeight: 'calc(100vh - 136px)' }}>
      <h1>About</h1>
      <h2>Timeline (include relevant coursework here)</h2>
      <LinkFarm />
      <h2>Resume?</h2>
      <h2>Artist&apos;s Statement</h2>
    </div>
  )
}

export default AboutPage
