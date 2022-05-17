import React from 'react'
import { CardProps } from '../LargeCard/LargeCard'

const MediumCard = ({ title, description, imageSrc, seeMoreSrc }: CardProps) => {
  return (
    <div className="p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
      <img src={imageSrc} className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
      <h2 className="text-xl font-semibold tracking-wide mt-6 mb-2">{title}</h2>
      <p className="text-gray-100">{description}</p>
      {seeMoreSrc && (
        // TODO: Make internal link
        <p className='text-center text-xs font-medium tracking-widest uppercase text-sky-400 mt-4'>See More</p>
      )}
    </div>
  )
}

export default MediumCard
