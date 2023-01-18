import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Category } from '../../data/categories'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import { FullScreenLoader } from '../Loader/Loader'

const Grid = lazy(() => import('../Grid/Grid'))
const ProjectDetails = lazy(() => import('../ProjectDetails/ProjectDetails'))

type CategoryProps = {
  category: Category
}

const CategoryPage = ({ category }: CategoryProps) => {
  const { title, content } = category
  useDocumentTitle(`Skye Bishop - ${title}`)
  const footerHeight = '104px'
  const cards = content.map((project) => {
    return {
      header: project.date,
      badges: project.medium,
      description: project.description,
      coverImage: {
        src: project.coverImage.src,
        objectPosition: project.coverImage.objectPosition,
        alt: project.coverImage.alt
      },
      details: <ProjectDetails project={project} />
    }
  })

  return (
    <Suspense fallback={<FullScreenLoader />}>
      <div
        className='container pt-16 px-6 mx-auto'
        style={{ minHeight: `calc(100vh - ${footerHeight})` }}
      >
        <h1 className='text-3xl font-semibold tracking-wide text-center py-6'>
          {title}
        </h1>
        <Grid variant={'large'} cards={cards} />
        <Link to={'/'} state={{ targetId: 'project-work' }}>
          <p className='text-center text-s font-medium tracking-widest uppercase text-sky-400 mt-16'>
            Back
          </p>
        </Link>
      </div>
    </Suspense>
  )
}

export default CategoryPage
