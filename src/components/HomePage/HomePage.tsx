import React, { useState } from 'react'

import Feature from '../Feature/Feature'
import Grid, { Variant } from '../Grid/Grid'
import Hero from '../Hero/Hero'
import { CardInfo } from '../Card/Card'
import { primaryCategories, secondaryCategories } from '../../data/categories'
import Modal from '../Model/Modal'

const primaryCards: CardInfo[] = primaryCategories.map(category => {
  return { ...category, header: category.title, imageSrc: category.coverImageSrc, seeMoreSrc: category.path }
})

const secondaryCards: CardInfo[] = secondaryCategories.map(category => {
  return { ...category, header: category.title, imageSrc: category.coverImageSrc, seeMoreSrc: category.path }
})

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {showModal && (
        <Modal title={'Title'} setShowModal={setShowModal}>
          <p>Children go here!</p>
        </Modal>
      )}

      <div className='pt-16'>
        <Hero />
        <div className='container mx-auto my-12 max-w-6xl px-6 space-y-6 sm:space-y-12'>
          <Feature />
          <Grid variant={Variant.Medium} cards={primaryCards} />
          <Grid variant={Variant.Small} cards={secondaryCards} />

          <button
            type='button'
            className='px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100'
            onClick={() => setShowModal(true)}
          >
            Show Modal
          </button>
        </div>
      </div>
    </>
  )
}

export default HomePage
