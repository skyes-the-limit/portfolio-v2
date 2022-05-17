import React from 'react'

import Feature from '../Feature/Feature'
import Hero from '../Hero/Hero'
import { CardProps } from '../LargeCard/LargeCard'
import LargeGrid from '../LargeGrid/LargeGrid'
import MediumGrid from '../MediumGrid/MediumGrid'
import SmallGrid from '../SmallGrid/SmallGrid'

const largeCards: CardProps[] = Array(2).fill({
  title: 'Section Title',
  description: 'Section description. Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...',
  imageSrc: 'https://source.unsplash.com/random/400x600/',
  seeMoreSrc: '/about'
})

const mediumCards: CardProps[] = Array(3).fill({
  title: 'Section Title',
  description: 'Section description. Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian',
  imageSrc: 'https://source.unsplash.com/random/300x300/',
  seeMoreSrc: '/about'
})

const smallCards: CardProps[] = Array(4).fill({
  title: 'Section Title',
  description: 'Section description. Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri.',
  imageSrc: 'https://source.unsplash.com/random/200x300/',
  seeMoreSrc: '/about'
})

const HomePage = () => {
  return (
    <div className='pt-16'>
      <Hero />
      <div className='container mx-auto my-12 max-w-6xl px-6 space-y-6 sm:space-y-12'>
        <Feature />
        <LargeGrid cardGridProps={largeCards} />
        <MediumGrid cardGridProps={mediumCards} />
        <SmallGrid cardGridProps={smallCards} />
      </div>
    </div>
  )
}

export default HomePage
