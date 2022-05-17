import React from 'react'

export interface CardProps {
  title: string,
  description: string,
  imageSrc: string,
  seeMoreSrc?: string
}

const LargeCard = ({ title, description, imageSrc, seeMoreSrc }: CardProps) => {
  return (
    <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
      <div>
        <img src={imageSrc} className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 rounded-lg" />
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
        {seeMoreSrc && (
          // TODO: Make internal link
          <p className='text-center text-xs font-medium tracking-widest uppercase text-sky-400 mt-4'>See More</p>
        )}
      </div>
    </div>
  )
}

export default LargeCard
