import React from 'react'

const Feature = () => {
  return (
    <div className='flex flex-row h-[calc(100vh-12rem)]'>
      <div className='object-cover w-full h-full pt-6 px-6 border-4 border-double rounded-lg'>
        <img
          src={require('../../assets/Profile.webp')}
          alt='Website Design System'
          className='object-contain object-left-bottom w-full h-full'
          style={{
            filter: 'drop-shadow(5px 15px 10px rgba(0,0,0,0.8))',
            WebkitFilter: 'drop-shadow(5px 5px 5px #222)'
          }}
        />
      </div>
      <div className='absolute h-[16rem] w-[37rem] mt-16 mr-24 right-0 rounded-lg p-6 space-y-2 bg-gray-900'>
        <a
          rel='noopener noreferrer'
          href='/about'
          className='rounded-lg hover:no-underline focus:no-underline'
        >
          <h3 className='text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline'>
            Skye Bishop
            <span className='text-lg font-light ml-2'>(they/them)</span>
          </h3>
          <span className='text-xs italic text-gray-400'>
            &#34;I trick computers into making pretty things&#34;
          </span>
          <p>
            Welcome to my site! I enjoy creating visually stunning experiences
            via various technical mediums. I currently work full-time as a React
            developer and work on CGI projects in my free time. I am Seattle
            based, though I strive to travel as far and frequently as possible.
            <span className='underline underline-offset-4'>
              {' '}
              Check out my work below!
            </span>
          </p>
        </a>
      </div>
      <div className='absolute h-[12rem] w-[12rem] mt-[18rem] mr-36 right-0 rounded-lg p-6 space-y-2 bg-sky-400' />
      <div className='absolute h-[8rem] w-[8rem] mt-[24rem] mr-72 right-0 rounded-lg p-6 space-y-2 bg-white' />
    </div>
  )
}

export default Feature
