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
  const cards = content.map((project) => {
    return {
      header: project.date,
      badges: project.medium,
      description: project.description,
      imageSrc: require(`../../assets/projects/${project.coverImageSrc}`),
      imageObjectPos: project.coverImagePosition,
      details: <ProjectDetails project={project} />
    }
  })

  return (
    <div
      className='container pt-16 px-6 mx-auto'
      // TODO: Define 104px as a globally accessibly "footer-height" var
      style={{ minHeight: 'calc(100vh - 104px)' }}
    >
      <h1 className='text-3xl font-semibold tracking-wide text-center py-6'>
        {title}
      </h1>
      <Grid variant={Variant.Large} cards={cards} />
      {/* TODO: Scroll to category section */}
      <Link to={'/'}>
        <p className='text-center text-s font-medium tracking-widest uppercase text-sky-400 mt-16'>
          Back
        </p>
      </Link>
    </div>
  )
}

export default CategoryPage
