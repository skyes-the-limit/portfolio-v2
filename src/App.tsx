import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'

import './input.css'

const App = () => {
  return (
    <Router>
      <div className='bg-gray-800 text-gray-100'>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
