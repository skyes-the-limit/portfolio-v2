import React from 'react'
import cx from 'classnames'

import Card, { CardInfo } from '../Card/Card'

export enum Variant {
  // eslint-disable-next-line no-unused-vars
  Small, Medium, Large
}

export interface GridProps {
  variant: Variant,
  cards: CardInfo[]
}

const Grid = ({ variant, cards }: GridProps) => {
  const gridClassNames = () => {
    switch (variant) {
      case Variant.Small:
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      case Variant.Medium:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      case Variant.Large:
        return 'grid-cols-1 lg:grid-cols-2'
    }
  }

  return (
    <div className={cx('grid gap-8', gridClassNames())}>
      {cards && cards.map((card, index) => (
        <Card
          key={index}
          variant={variant}
          card={card}
        />
      ))}
    </div>
  )
}

export default Grid
