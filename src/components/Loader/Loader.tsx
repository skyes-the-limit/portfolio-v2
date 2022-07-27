import React from 'react'

export const FullScreenLoader = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Loader />
    </div>
  )
}

const Loader = () => {
  return (
    <div className='flex items-center justify-center space-x-2 h-7'>
      <div className='w-4 h-4 rounded-full animate-pulse bg-gray-700'></div>
      <div className='w-4 h-4 rounded-full animate-pulse bg-gray-700'></div>
      <div className='w-4 h-4 rounded-full animate-pulse bg-gray-700'></div>
    </div>
  )
}

export default Loader
