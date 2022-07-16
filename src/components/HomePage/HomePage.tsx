import React, { useEffect } from 'react'

import Feature from '../Feature/Feature'
import Grid, { Variant } from '../Grid/Grid'
import Hero from '../Hero/Hero'
import { CardInfo } from '../Card/Card'
import { primaryCategories, secondaryCategories } from '../../data/categories'
import { useLocation } from 'react-router'

const primaryCards: CardInfo[] = primaryCategories.map((category) => {
  return {
    ...category,
    header: category.title,
    imageSrc: require(`../../assets/projects/${category.coverImageSrc}`),
    imageObjectPos: category.coverImagePosition,
    link: {
      displayText: 'See More',
      href: category.path
    }
  }
})

const secondaryCards: CardInfo[] = secondaryCategories.map((category) => {
  return {
    ...category,
    header: category.title,
    imageSrc: require(`../../assets/projects/${category.coverImageSrc}`),
    imageObjectPos: category.coverImagePosition,
    link: {
      displayText: 'See More',
      href: category.path
    }
  }
})

const HomePage = () => {
  const location: any = useLocation()

  useEffect(() => {
    console.log(location)
    const targetId = location?.state?.targetId
    console.log(targetId)
    const el = document.getElementById(targetId)
    console.log(el)
    if (el) {
      // TODO: Define 64px as a globally accessibly "header-height" var
      const y = el.getBoundingClientRect().top + window.pageYOffset - 64 - 24
      window.scrollTo({ top: y })
    }
  })

  return (
    <div className='pt-16'>
      <Hero />
      <div className='container mx-auto my-12 max-w-6xl px-6 space-y-6 sm:space-y-12'>
        <Feature />
        <div id='project-work' />
        <Grid variant={Variant.Medium} cards={primaryCards} />
        <Grid variant={Variant.Small} cards={secondaryCards} />
      </div>
    </div>
  )
}

export default HomePage
