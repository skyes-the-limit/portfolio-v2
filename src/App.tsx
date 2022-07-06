import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import CategoryPage from './components/CategoryPage/CategoryPage'
import AboutPage from './components/AboutPage/AboutPage'
import { primaryCategories, secondaryCategories } from './data/categories'

import './input.css'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const categories = [...primaryCategories, ...secondaryCategories]

  return (
    <Router>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          backgroundColor: 'rgba(56, 189, 248, 0.9)',
          color: 'rgba(24, 24, 27, 0.9)'
        }}
      />

      <div className='bg-gray-800 text-gray-100 font-sans'>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          {categories &&
            categories.map((category) => (
              <Route
                key={category.path}
                path={category.path}
                element={<CategoryPage category={category} />}
              />
            ))}
          <Route path='about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
