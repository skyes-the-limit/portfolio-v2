import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <div className='flex flex-row h-[calc(100vh-12rem)]'>
      <div className='w-full h-full pt-6 px-6 border-b-2 xs:border-4 border-gray-700 xs:border-gray-200 xs:border-double xs:rounded-lg overflow-hidden'>
        <img
          src={require('../../assets/Profile.webp')}
          alt='Website Design System'
          className={cx(
            'object-contain object-left-bottom h-full',
            'w-96 sm:w-[65%] lg:w-full',
            'mt-0 xs:mt-[4.5rem] sm:mt-0'
          )}
          style={{
            filter: 'drop-shadow(5px 15px 10px rgba(0,0,0,0.8))',
            WebkitFilter: 'drop-shadow(5px 5px 5px #222)'
          }}
        />
      </div>
      <div
        className={cx(
          'absolute rounded-lg p-6 space-y-2 bg-gray-900 h-fit',
          'w-[calc(100vw-3rem)] xs:w-[calc(100vw-4rem)] sm:w-[32rem] md:w-[37rem]',
          'mt-0 xs:mt-8 lg:mt-8 xl:mt-16 2xl:mt-16 2xl:right-24',
          'xs:right-2 xl:right-16',
          'text-sm xs:text-base'
        )}
      >
        <h3 className={cx('font-semibold mb-4', 'text-xl xs:text-4xl')}>
          Skye Bishop
          <span className={cx('font-light ml-2', 'text-xs xs:text-lg')}>
            (they/them)
          </span>
        </h3>
        <p>
          Welcome to my site! I enjoy creating visually stunning experiences via
          various technical mediums. I currently work full-time as a React
          developer and work on CGI projects in my free time. I am Seattle
          based, though I strive to travel as far and frequently as possible.
          <Link
            to={'/'}
            state={{ targetId: 'project-work', scrollBehavior: 'smooth' }}
            className='block mt-4 underline underline-offset-4 cursor-pointer'
          >
            Check out my work below!
          </Link>
        </p>
      </div>
      <div
        className={cx(
          'absolute rounded-lg p-6 space-y-2 bg-sky-400/75',
          'w-28 sm:w-48',
          'h-28 sm:h-48',
          'xs:mt-[17rem] md:mt-60 xl:mt-[17rem]',
          'xs:right-16 md:right-20 xl:right-28 2xl:right-36',
          'hidden xs:block'
        )}
      />
      <div
        className={cx(
          'absolute rounded-lg p-6 space-y-2 bg-gray-200/75',
          'h-8 sm:h-24',
          'w-8 sm:w-24',
          'mt-80 xs:mt-80 sm:mt-[22rem] md:mt-80 xl:mt-[22rem]',
          'right-40 sm:right-[13rem] md:right-[15rem] xl:right-[17rem] 2xl:right-[19rem]',
          'hidden xs:block'
        )}
      />
    </div>
  )
}

export default Feature
