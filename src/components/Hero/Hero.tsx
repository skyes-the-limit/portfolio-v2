import React from 'react'
import cx from 'classnames'

const Feature = () => {
  return (
    <div className='flex flex-row h-[calc(100vh-12rem)]'>
      <div className='object-cover w-full h-full pt-6 px-6 border-4 border-gray-200 border-double rounded-lg overflow-hidden'>
        <img
          src={require('../../assets/Profile.webp')}
          alt='Website Design System'
          className={cx(
            'object-contain object-left-bottom h-full',
            'w-96 sm:w-[60%] lg:w-full',
            'mt-2 xs:mt-[4.5rem] sm:mt-0'
          )}
          style={{
            filter: 'drop-shadow(5px 15px 10px rgba(0,0,0,0.8))',
            WebkitFilter: 'drop-shadow(5px 5px 5px #222)'
          }}
        />
      </div>
      <div
        className={cx(
          'absolute rounded-lg p-6 space-y-2 bg-gray-900',
          'w-[calc(100vw-4rem)] sm:w-[32rem] md:w-[37rem]',
          'h-fit sm:h-[18rem] md:h-[17rem]',
          'mt-8 lg:mt-8 xl:mt-16 2xl:mt-16 2xl:right-24',
          'right-2 lg:right-2 xl:right-16',
          'text-sm xs:text-base'
        )}
      >
        <a
          rel='noopener noreferrer'
          href='/about'
          className='rounded-lg hover:no-underline focus:no-underline'
        >
          <h3
            className={cx(
              'font-semibold group-hover:underline group-focus:underline',
              'text-xl xs:text-4xl'
            )}
          >
            Skye Bishop
            <span className={cx('font-light ml-2', 'text-xs xs:text-lg')}>
              (they/them)
            </span>
          </h3>
          <span className='text-xs italic text-gray-400'>
            &#34;I trick computers into making pretty things&#34;
          </span>
          <p>
            Welcome to my site! I enjoy creating visually stunning experiences
            via various technical mediums. I currently work full-time as a React
            developer and work on CGI projects in my free time. I am Seattle
            based, though I strive to travel as far and frequently as possible.
            <br />
            <br />
            Check out my work below!
          </p>
        </a>
      </div>
      <div
        className={cx(
          'absolute rounded-lg p-6 space-y-2 bg-sky-400/75',
          'w-28 sm:w-48',
          'h-28 sm:h-48',
          'xs:mt-[18rem] md:mt-60 xl:mt-72',
          'xs:right-16 md:right-20 xl:right-28 2xl:right-36',
          'hidden xs:block'
        )}
      />
      <div
        className={cx(
          'absolute rounded-lg p-6 space-y-2 bg-gray-200/75',
          'h-8 sm:h-24',
          'w-8 sm:w-24',
          'mt-80 xs:mt-[21.5rem] sm:mt-[21rem] md:mt-80 xl:mt-[23rem]',
          'right-40 sm:right-[13rem] md:right-[15rem] xl:right-[17rem] 2xl:right-[19rem]',
          'hidden xs:block'
        )}
      />
    </div>
  )
}

export default Feature
