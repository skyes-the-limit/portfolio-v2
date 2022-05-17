import React from 'react'

import Feature from '../Feature/Feature'
import Grid, { Variant } from '../Grid/Grid'
import Hero from '../Hero/Hero'
import { CardInfo } from '../Card/Card'

const largeCards: CardInfo[] = Array(2).fill({
  header: 'Section header',
  subheader: 'Subheader',
  description: 'Section description. Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...',
  imageSrc: 'https://source.unsplash.com/random/400x600/',
  seeMoreSrc: '/about'
})

const mediumCards: CardInfo[] = Array(3).fill({
  header: 'Section header',
  subheader: 'Subheader',
  description: 'Section description. Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian',
  imageSrc: 'https://source.unsplash.com/random/300x300/',
  seeMoreSrc: '/about'
})

const smallCards: CardInfo[] = Array(4).fill({
  header: 'Section header',
  subheader: 'Subheader',
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
        <Grid variant={Variant.Large} cards={largeCards} />
        <Grid variant={Variant.Medium} cards={mediumCards} />
        <Grid variant={Variant.Small} cards={smallCards} />
      </div>
    </div>
  )
}

export default HomePage
