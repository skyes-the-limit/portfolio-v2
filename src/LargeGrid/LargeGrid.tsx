import React from 'react'
import LargeCard, { CardProps } from '../LargeCard/LargeCard'

export interface CardGridProps {
  cardGridProps: CardProps[]
}

const LargeGrid = ({ cardGridProps }: CardGridProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {cardGridProps && cardGridProps.map((card, index) => (
        <LargeCard
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

export default LargeGrid
