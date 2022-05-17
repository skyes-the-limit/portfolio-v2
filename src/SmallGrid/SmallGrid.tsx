import React from 'react'
import SmallCard from '../SmallCard/SmallCard'
import { CardGridProps } from '../LargeGrid/LargeGrid'

const SmallGrid = ({ cardGridProps }: CardGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {cardGridProps && cardGridProps.map((card, index) => (
        <SmallCard
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

export default SmallGrid
