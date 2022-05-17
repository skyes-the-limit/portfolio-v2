import React from 'react'
import { Category } from '../../data/categories'
import Grid, { Variant } from '../Grid/Grid'

type CategoryProps = {
  category: Category
}

const CategoryPage = ({ category }: CategoryProps) => {
  const { title, content } = category
  const cards = content.map(project => {
    return { header: '', subheader: '', description: '', imageSrc: '', seeMoreSrc: '' }
  })

  return (
    <div className='container pt-16 px-6 mx-auto' style={{ minHeight: 'calc(100vh - 136px)' }}>
      <h1>{title}</h1>
      <Grid variant={Variant.Large} cards={cards} />
    </div>
  )
}

export default CategoryPage
