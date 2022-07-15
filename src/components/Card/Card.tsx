import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import { Variant } from '../Grid/Grid'
import Modal from '../Modal/Modal'

import './Card.css'

export type CardInfo = {
  header: string
  subheader?: string
  overline?: string
  description: string
  imageSrc: string
  imageObjectPos?: string
  seeMoreHref?: string
  details?: React.ReactElement // TODO: If onClick OR seeMoreHref truthy, add a hover effect to the image. Place details within Modal.
}

export type CardProps = {
  variant: Variant
  card: CardInfo
}

const CardInner = ({ variant, card }: CardProps) => {
  const {
    header,
    subheader,
    overline,
    description,
    imageSrc,
    imageObjectPos,
    seeMoreHref,
    details
  } = card
  const imgHeight = () => {
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
    <div className='flex flex-col space-y-6'>
      <div className={cx('overflow-hidden bg-white rounded-t-md')}>
        <img
          src={imageSrc}
          className={cx(
            'object-cover w-full',
            imageObjectPos || 'object-top',
            imgHeight(),
            { overlay: seeMoreHref || details }
          )}
        />
      </div>
      <div className='flex flex-col justify-between px-6 pb-4'>
        {overline && (
          <p className='flex justify-between text-xs font-medium tracking-widest uppercase'>
            {/* TODO: Restyle as badges */}
            <span className='text-sky-400'>{overline}</span>
            {subheader && (
              <span className='text-gray-400 whitespace-nowrap'>
                {subheader}
              </span>
            )}
          </p>
        )}
        <h2 className='text-xl font-semibold tracking-wide'>{header}</h2>
        <p className='text-sm text-gray-400'>{description}</p>
        {/* TODO: Stretch "See More" to sit at the bottom */}
        {seeMoreHref && (
          <p className='text-center text-xs font-medium tracking-widest uppercase text-sky-400 pt-4'>
            See More
          </p>
        )}
      </div>
    </div>
  )
}

const Card = ({ variant, card }: CardProps) => {
  const [showModal, setShowModal] = useState(false)
  const { header, details, seeMoreHref } = card

  return (
    <>
      {showModal && (
        <Modal title={header} setShowModal={setShowModal}>
          {details}
        </Modal>
      )}

      <div
        className={cx(
          'rounded-md shadow-md bg-gray-900 text-gray-100 flex flex-col justify-between overflow-hidden',
          details ? 'cursor-pointer' : ''
        )}
        onClick={() => (details ? setShowModal(true) : undefined)}
      >
        {/* TODO: Navigate to top of new page */}
        {seeMoreHref ? (
          <Link to={seeMoreHref}>
            <CardInner variant={variant} card={card} />
          </Link>
        ) : (
          <CardInner variant={variant} card={card} />
        )}
      </div>
    </>
  )
}

export default Card
