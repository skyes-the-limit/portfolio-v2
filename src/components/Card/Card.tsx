import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import Modal from '../Modal/Modal'

import './Card.css'

export type CardInfo = {
  header: string
  badges?: string[]
  description?: string
  imageSrc: string
  imageObjectPos?: string
  // Link to route to onClick if there is no modal
  link?: {
    displayText: string
    href: string
  }
  // Additional content to display in a modal
  details?: React.ReactElement
}

export type CardProps = {
  variant: 'small' | 'medium' | 'large'
  card: CardInfo
}

const CardInner = ({ variant, card }: CardProps) => {
  const { header, badges, description, imageSrc, imageObjectPos, link } = card
  const imgHeight = () => {
    switch (variant) {
      case 'small':
        return 'h-48'
      case 'medium':
        return 'h-72'
      case 'large':
        return 'h-96'
    }
  }

  return (
    <div className='flex flex-col space-y-6'>
      <div className='overflow-hidden bg-white rounded-t-md bg-clip-text'>
        <img
          src={imageSrc}
          className={cx(
            'object-cover w-full',
            imageObjectPos || 'object-top',
            imgHeight()
          )}
        />
      </div>
      <div className='flex flex-col justify-between px-6 pb-4'>
        <div
          className={cx(
            'mb-2 w-full',
            {
              'flex flex-row justify-between items-center space-x-2 sm:space-x-4 ':
                badges
            },
            { 'text-center': !badges && !description }
          )}
        >
          <h2 className='text-xl font-semibold tracking-wide whitespace-nowrap'>
            {header}
          </h2>
          {badges && (
            <p className='flex space-x-2 text-xs font-medium uppercase'>
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className='h-6 flex items-center px-3 py-0.5 rounded-md text-gray-900 bg-sky-400 text-xs font-medium whitespace-nowrap'
                >
                  {badge}
                </span>
              ))}
            </p>
          )}
        </div>
        <p className='text-sm text-gray-400'>{description}</p>
        {/* TODO: Stretch "See More" to sit at the bottom */}
        {link && (
          <p className='text-center text-xs font-medium tracking-widest uppercase text-sky-400 pt-4'>
            {link.displayText}
          </p>
        )}
      </div>
    </div>
  )
}

const Card = ({ variant, card }: CardProps) => {
  const [showModal, setShowModal] = useState(false)
  const { header, details, link } = card

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
          { overlay: link || details }
        )}
        onClick={() => (details ? setShowModal(true) : undefined)}
      >
        {link ? (
          <Link to={link.href}>
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
