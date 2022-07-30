import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import Modal from '../Modal/Modal'

import './Card.css'
import Badges from '../Badges/Badges'
import Image from '../Image/Image'

export type CardInfo = {
  header: string
  badges?: string[]
  description?: string
  coverImage: {
    src: string
    objectPosition?:
      | 'object-bottom'
      | 'object-center'
      | 'object-left'
      | 'object-left-bottom'
      | 'object-left-top'
      | 'object-right'
      | 'object-right-bottom'
      | 'object-right-top'
    alt?: string
  }
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
  const { header, badges, description, coverImage, link } = card
  const imgHeight = () => {
    switch (variant) {
      case 'small':
        return 'h-40'
      case 'medium':
        return 'h-72'
      case 'large':
        return 'h-96'
    }
  }

  const textClasses = () => {
    switch (variant) {
      case 'small':
        return 'px-2 xs:px-6'
      case 'medium':
        return 'px-6'
      case 'large':
        return 'px-6'
    }
  }

  return (
    <div className='flex flex-col space-y-6'>
      <div className='overflow-hidden bg-white rounded-t-md bg-clip-text'>
        <Image
          src={coverImage.src}
          className={cx(
            'object-cover w-full',
            coverImage.objectPosition || 'object-top',
            imgHeight()
          )}
        />
      </div>
      <div className={cx('flex flex-col justify-between pb-4', textClasses())}>
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
          <h2
            className={cx('text-base xs:text-xl font-semibold tracking-wide', {
              'whitespace-nowrap': badges
            })}
          >
            {header}
          </h2>
          {badges && <Badges badges={badges} />}
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
