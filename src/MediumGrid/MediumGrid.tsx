import React from 'react'
import MediumCard from '../MediumCard/MediumCard'
import { CardGridProps } from '../LargeGrid/LargeGrid'

const MediumGrid = ({ cardGridProps }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardGridProps && cardGridProps.map((card, index) => (
        <MediumCard
          key={index}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc + `?${index}`}
          seeMoreSrc={card.seeMoreSrc}
        />
      ))}
    </div>
  )
}

export default MediumGrid
