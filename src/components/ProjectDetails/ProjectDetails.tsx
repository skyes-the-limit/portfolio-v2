import React, { useState } from 'react'

import { Project } from '../../data/projects'
import VimeoPlayer from '../VimeoPlayer/VimeoPlayer'

import './ProjectDetails.css'

type ProjectDetailsProps = {
  project: Project
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { imageSrcs = [], videoSrcs = [] } = project
  const [selectedIndex, setSelectedIndex] = useState(0)
  // TODO: Videos should come first

  return (
    <div>
      {imageSrcs?.length + videoSrcs?.length > 1 && (
        <div className='fixed z-20 w-screen h-screen top-0 left-0 pointer-events-none'>
          <label
            className='carouselControl carouselControl__backward'
            onClick={() => {
              selectedIndex <= 0
                ? setSelectedIndex(imageSrcs.length + videoSrcs.length - 1)
                : setSelectedIndex(selectedIndex - 1)
            }}
          />
          <label
            className='carouselControl carouselControl__forward'
            onClick={() => {
              selectedIndex >= imageSrcs.length + videoSrcs.length - 1
                ? setSelectedIndex(0)
                : setSelectedIndex(selectedIndex + 1)
            }}
          />
        </div>
      )}

      {imageSrcs &&
        imageSrcs.map((src, index) => {
          return (
            <img
              key={`image-${index}`}
              src={require(`../../assets/projects/${src}`)}
              className={index === selectedIndex ? '' : 'hidden'}
              style={{ maxHeight: '70vh' }}
            />
          )
        })}

      {selectedIndex > imageSrcs.length - 1 && (
        <VimeoPlayer
          key={`video-${selectedIndex}`}
          id={videoSrcs[selectedIndex - imageSrcs.length]}
        />
      )}
    </div>
  )
}

export default ProjectDetails
