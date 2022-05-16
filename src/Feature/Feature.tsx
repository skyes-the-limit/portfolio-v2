import React from 'react'

const Feature = () => {
  return (
    <a rel='noopener noreferrer' href='#' className='block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900'>
      <img src='https://source.unsplash.com/random/480x360' alt='Website Design System' className='object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500' />
      <div className='p-6 space-y-2 lg:col-span-5'>
        <h3 className='text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline'>Skye Bishop</h3>
        <span className='text-xs dark:text-gray-400'>Software Engineer?</span>
        <p>This will be a brief introductory about section, linking to the full about page. Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
      </div>
    </a>
  )
}

export default Feature
