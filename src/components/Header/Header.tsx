import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed flex justify-between h-16 w-screen p-4 bg-gray-900 bg-opacity-80 z-10'>
      <NavLink
        to='/'
        aria-label='Back to homepage'
        className='flex items-center p-2'
      >
        <img
          src={'logo.svg'}
          alt='logo'
          style={{ width: '225px', height: '2rem' }}
        />
      </NavLink>
      <NavLink
        to='/about'
        aria-label='About'
        className='flex items-center px-4 -mb-1 border-b-2 border-transparent'
      >
        About
      </NavLink>
    </header>
  )
}

export default Header
