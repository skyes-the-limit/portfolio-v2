import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'
import CategoryPage from './CategoryPage/CategoryPage'
import AboutPage from './AboutPage/AboutPage'
import { primaryCategories, secondaryCategories } from './data/categories'

import './input.css'

const App = () => {
  const categories = [...primaryCategories, ...secondaryCategories]

  return (
    <Router>
      <div className='bg-gray-800 text-gray-100'>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          {categories && categories.map(category => (
            <Route key={category.path} path={category.path} element={<CategoryPage category={category} />} />
          ))}
          <Route path='about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
