import React, { useEffect } from 'react'

import Feature from '../Hero/Hero'
import Grid from '../Grid/Grid'
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
    const headerHeight = 64
    const topPadding = 24
    const targetId = location?.state?.targetId
    const scrollBehavior = location?.state?.scrollBehavior || 'auto'
    const el = document.getElementById(targetId)
    if (el) {
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight -
        topPadding
      window.scrollTo({ top: y, behavior: scrollBehavior })
    }
  })

  return (
    <div className='pt-16'>
      <div className='container mx-auto my-12 max-w-6xl px-6 space-y-6 sm:space-y-12'>
        <Feature />
        <div id='project-work' />
        <Grid variant={'medium'} cards={primaryCards} />
        <Grid variant={'small'} cards={secondaryCards} />
      </div>
    </div>
  )
}

export default HomePage
