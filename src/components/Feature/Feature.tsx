import React from 'react'

type FeatureProps = {
  message?: string
}

// TODO: Copy + photo here deserves polish
const Feature = ({ message }: FeatureProps) => {
  return (
    <a
      rel='noopener noreferrer'
      href='/about'
      className='block rounded-lg hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900'
    >
      <img
        src={require('../../assets/Profile.png')}
        alt='Website Design System'
        className='object-cover w-full h-64 rounded-t lg:rounded-tr-none lg:rounded-l sm:h-96 lg:col-span-7 bg-gray-500'
      />
      <div className='p-6 space-y-2 lg:col-span-5'>
        <h3 className='text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline'>
          Skye Bishop
        </h3>
        <span className='text-xs text-gray-400'>
          Software Engineering | Human-Computer Interaction | Technical Art
        </span>
        <p>
          {message ||
            'This will be a brief introductory about section, linking to the full about page. Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.'}
        </p>
      </div>
    </a>
  )
}

export default Feature
