import React from 'react'

import Feature from '../Feature/Feature'
import Grid, { Variant } from '../Grid/Grid'
import Hero from '../Hero/Hero'
import { CardInfo } from '../Card/Card'
import { primaryCategories, secondaryCategories } from '../../data/categories'

const primaryCards: CardInfo[] = primaryCategories.map(category => {
  return { ...category, header: category.title, imageSrc: require(`../../assets/projects/${category.coverImageSrc}`), imageObjectPos: category.coverImagePosition, seeMoreSrc: category.path }
})

const secondaryCards: CardInfo[] = secondaryCategories.map(category => {
  return { ...category, header: category.title, imageSrc: require(`../../assets/projects/${category.coverImageSrc}`), imageObjectPos: category.coverImagePosition, seeMoreSrc: category.path }
})

const HomePage = () => {
  return (
    <div className='pt-16'>
      <Hero />
      <div className='container mx-auto my-12 max-w-6xl px-6 space-y-6 sm:space-y-12'>
        <Feature />
        <Grid variant={Variant.Medium} cards={primaryCards} />
        <Grid variant={Variant.Small} cards={secondaryCards} />
      </div>
    </div>
  )
}

export default HomePage
