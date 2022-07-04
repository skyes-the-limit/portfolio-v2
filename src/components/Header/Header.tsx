import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/icons/logo.svg'

const Header = () => {
  return (
    <header className='fixed flex justify-between h-16 w-screen p-4 bg-gray-900 bg-opacity-80 z-10'>
      <NavLink
        to='/'
        aria-label='Back to homepage'
        className='flex items-center p-2'
      >
        <img src={Logo} alt='logo' style={{ width: '225px', height: '2rem' }} />
      </NavLink>
      <ul className='flex items-stretch space-x-3 pr-3'>
        <li className='flex'>
          <NavLink
            to='/about'
            aria-label='About'
            className='flex items-center px-4 -mb-1 border-b-2 border-transparent'
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
