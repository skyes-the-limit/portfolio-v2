import React from 'react'

// TODO: Replace with higher quality photo
const Feature = () => {
  return (
    <a
      rel='noopener noreferrer'
      href='/about'
      className='block rounded-lg hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900'
    >
      <img
        src={require('../../assets/Profile.webp')}
        alt='Website Design System'
        className='object-cover w-full h-64 rounded-t lg:rounded-tr-none lg:rounded-l sm:h-96 lg:col-span-7 bg-gray-500'
      />
      <div className='p-6 space-y-2 lg:col-span-5'>
        <h3 className='text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline'>
          Skye Bishop
          <span className='text-lg font-light ml-2'>(they/them)</span>
        </h3>
        <span className='text-xs italic text-gray-400'>
          &#34;I trick computers into making pretty things&#34;
        </span>
        <p>
          Welcome to my site! I enjoy creating visually stunning experiences via
          various technical mediums. I currently work full-time as a React
          developer and work on CGI projects in my free time. I am Seattle
          based, though I strive to travel as far and frequently as possible.
          Check out my work below!
        </p>
      </div>
    </a>
  )
}

export default Feature
