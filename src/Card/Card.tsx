import React from 'react'
import cx from 'classnames'

import { Variant } from '../Grid/Grid'

export type CardInfo = {
  header: string,
  subheader?: string,
  description: string,
  imageSrc: string,
  seeMoreSrc?: string
}

export type CardProps = {
  variant: Variant,
  card: CardInfo
}

const Card = ({ variant, card }: CardProps) => {
  const { header, subheader, description, imageSrc, seeMoreSrc } = card
  const imgClassNames = () => {
    switch (variant) {
      case Variant.Small:
        return 'h-48'
      case Variant.Medium:
        return 'h-72'
      case Variant.Large:
        return 'h-96'
    }
  }

  return (
    <div className='rounded-md shadow-md bg-gray-900 text-gray-100'>
      <img src={imageSrc} alt='' className={cx('object-cover object-center w-full rounded-t-md bg-gray-500', imgClassNames())} />
      <div className='flex flex-col justify-between p-6 space-y-2'>
        {subheader && (
          <p className='block text-xs font-medium tracking-widest uppercase text-sky-400 -mb-2'>Subheader</p>
        )}
        <h2 className='text-xl font-semibold tracking-wide'>{header}</h2>
        <p className='text-sm text-gray-400'>{description}</p>
        {seeMoreSrc && (
          <p className='text-center text-xs font-medium tracking-widest uppercase text-sky-400'>See More</p>
        )}
      </div>
    </div>
  )
}

export default Card
