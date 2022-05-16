import React from 'react'

import Header from './Header/Header'
import Hero from './Hero/Hero'
import Footer from './Footer/Footer'
import Feature from './Feature/Feature'

import './input.css'

const App = () => {
  return (
    <div className='bg-gray-800 text-gray-100'>
      <Header />
      <div className='pt-16'>
        <Hero />
      </div>
      <div className='container max-w-6xl p-6 space-y-6 sm:space-y-12'>
        <Feature />
      </div>
      <Footer />
    </div>
  )
}

export default App
