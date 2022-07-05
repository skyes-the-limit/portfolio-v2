import React from 'react'

// TODO: Use as navigation between sections in About
const Sidebar = () => {
  return (
    <section className='fixed top-24 left-8 text-gray-100'>
      <div className='flex flex-col container'>
        <a className='px-2 border-l-2 py-3 border-gray-300 text-gray-400'>
          Link Hub
        </a>
        <a className='px-2 border-l-2 py-3 border-sky-400 text-gray-50'>
          Timeline
        </a>
        <a className='px-2 border-l-2 py-3 border-gray-300 text-gray-400'>
          Resume
        </a>
        <a className='px-2 border-l-2 py-3 border-gray-300 text-gray-400'>
          Artist&#39;s Statement
        </a>
      </div>
    </section>
  )
}

export default Sidebar
