import React from 'react'

import Feature from '../Feature/Feature'
import Hero from '../Hero/Hero'
import LargeGrid from '../LargeGrid/LargeGrid'
import MediumGrid from '../MediumGrid/MediumGrid'
import SmallGrid from '../SmallGrid/SmallGrid'

const HomePage = () => {
  return (
    <div className='pt-16'>
      <Hero />
      <div className='container mx-auto my-12 max-w-6xl px-6 space-y-6 sm:space-y-12'>
        <Feature />
        <LargeGrid />
        <MediumGrid />
        <SmallGrid />
      </div>
    </div>
  )
}

export default HomePage
