import React, { useState } from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import { Variant } from '../Grid/Grid'
import Modal from '../Model/Modal'

export type CardInfo = {
  header: string,
  subheader?: string,
  overline?: string,
  description: string,
  imageSrc: string,
  seeMoreSrc?: string,
  details?: React.ReactElement // TODO: If onClick truthy, add a hover effect to the image. Place details within Modal.
}

export type CardProps = {
  variant: Variant,
  card: CardInfo
}

const Card = ({ variant, card }: CardProps) => {
  const [showModal, setShowModal] = useState(false)
  const { header, subheader, overline, description, imageSrc, seeMoreSrc, details } = card
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
    <>
      {showModal && (
        <Modal title={'Title'} setShowModal={setShowModal}>
          {details}
        </Modal>
      )}

      <div
        className='rounded-md shadow-md bg-gray-900 text-gray-100 flex flex-col justify-between pb-4'
        onClick={() => setShowModal(true)}
      >
        <div className='flex flex-col space-y-6'>
          <img src={imageSrc} alt='' className={cx('object-cover object-center w-full rounded-t-md bg-gray-500', imgClassNames())} />
          <div className='flex flex-col justify-between px-6'>
            {overline && (
              <p className='flex justify-between text-xs font-medium tracking-widest uppercase'>
                <span className='text-sky-400'>{overline}</span>
                {subheader && (
                  <span className='text-gray-400'>{subheader}</span>
                )}
              </p>
            )}
            <h2 className='text-xl font-semibold tracking-wide'>{header}</h2>
            <p className='text-sm text-gray-400'>{description}</p>
          </div>
        </div>
        {seeMoreSrc && (
          <p className='text-center text-xs font-medium tracking-widest uppercase text-sky-400 pt-4'>
            <Link to={seeMoreSrc}>See More</Link>
          </p>
        )}
      </div>
    </>
  )
}

export default Card
