import React, { useState } from 'react'

import { Project } from '../../data/projects'
import VimeoPlayer from '../VimeoPlayer/VimeoPlayer'

import './ProjectDetails.module.css'

type ProjectDetailsProps = {
  project: Project
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { imageSrcs = [], videoSrcs = [], github, collab } = project
  const [selectedIndex] = useState(0)
  // setSelectedindex(0) // TODO

  return (
    <div>
      {imageSrcs?.length + videoSrcs?.length > 1 && (
        <div className='fixed z-10 w-screen h-screen top-0 left-0 pointer-events-none'>
          <label
            className='carouselControl carouselControl__backward'
            onClick={() => { /* selectedIndex-- */ }}
          />
          <label
            className='carouselControl carouselControl__forward'
            onClick={() => { /* selectedIndex++ */ }}
          />
        </div>
      )}

      {github && (
        <p>Github: {github}</p>
      )}

      {collab && (
        <p>Made in collaboration with {collab}</p>
      )}

      {imageSrcs && imageSrcs.map((src, index) => {
        return (
          <img
            key={`image-${index}`}
            src={require(`../../assets/${src}`)}
            className={index === selectedIndex ? '' : 'hidden'}
            style={{ maxHeight: '70vh' }}
          />
          // <p key={src}>{src}</p>
        )
      })}

      {videoSrcs && videoSrcs.map((src, index) => {
        return (
          <VimeoPlayer key={`video-${index}`} id={src} />
        )
      })}

    </div>
  )
}

export default ProjectDetails
