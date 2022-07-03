import React from 'react'
import { Link } from 'react-router-dom'
import { Category } from '../../data/categories'
import Grid, { Variant } from '../Grid/Grid'
import ProjectDetails from '../ProjectDetails/ProjectDetails'

type CategoryProps = {
  category: Category
}

const CategoryPage = ({ category }: CategoryProps) => {
  const { title, content } = category
  const cards = content.map(project => {
    // TODO: Append links from the project after the description
    return {
      header: '',
      subheader: project.date,
      overline: project.medium,
      description: project.description,
      imageSrc: require(`../../assets/${project.coverImageSrc}`),
      imageObjectPos: project.coverImagePosition,
      seeMoreSrc: '',
      details: <ProjectDetails project={project} />
    }
  })

  return (
    <div className='container pt-16 px-6 mx-auto' style={{ minHeight: 'calc(100vh - 136px)' }}>
      <h1 className='text-3xl font-semibold tracking-wide text-center py-6'>{title}</h1>
      <Grid variant={Variant.Large} cards={cards} />
      <Link to={'/'}>
        <p className='text-center text-s font-medium tracking-widest uppercase text-sky-400 mt-16'>
          Back
        </p>
      </Link>
      {/* TODO: Nav back to HomePage at correct scroll height */}
    </div>
  )
}

export default CategoryPage
