import React from 'react'
import { CardProps } from '../LargeCard/LargeCard'

const SmallCard = ({ title, description, imageSrc, seeMoreSrc }: CardProps) => {
  return (
    <div className="rounded-md shadow-md bg-gray-900 text-gray-100">
      <img src={imageSrc} alt="" className="object-cover object-center w-full rounded-t-md h-48 bg-gray-500" />
      <div className="flex flex-col justify-between p-6 space-y-4">
        <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
        <p className="text-gray-100">{description}</p>
        {seeMoreSrc && (
          <p className='text-center text-xs font-medium tracking-widest uppercase text-sky-400'>See More</p>
        )}
      </div>
    </div>
  )
}

export default SmallCard
