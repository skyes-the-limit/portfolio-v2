import React, { useState } from 'react'
import cx from 'classnames'
import useEventListener from '@use-it/event-listener'

import { Project } from '../../data/projects'
import VimeoPlayer from '../VimeoPlayer/VimeoPlayer'

import './ProjectDetails.css'

type ProjectDetailsProps = {
  project: Project
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { imageSrcs = [], videos = [] } = project
  const [selectedIndex, setSelectedIndex] = useState(0)

  const incrementSelectedIndex = () => {
    const maxIndex = imageSrcs.length + videos.length - 1
    selectedIndex >= maxIndex
      ? setSelectedIndex(0)
      : setSelectedIndex(selectedIndex + 1)
  }

  const decrementSelectedIndex = () => {
    const maxIndex = imageSrcs.length + videos.length - 1
    selectedIndex <= 0
      ? setSelectedIndex(maxIndex)
      : setSelectedIndex(selectedIndex - 1)
  }

  const keyUpHandler = ({ key }: KeyboardEvent): void => {
    switch (key) {
      case ' ':
      case 'ArrowRight':
        incrementSelectedIndex()
        break
      case 'ArrowLeft':
        decrementSelectedIndex()
        break
    }
  }
  useEventListener('keyup', keyUpHandler)

  return (
    <div>
      {imageSrcs?.length + videos?.length > 1 && (
        <div className='fixed z-20 w-screen h-screen top-0 left-0 pointer-events-none'>
          {/* TODO: Improve placement of controls and make interactive areas larger */}
          <label
            className='carouselControl carouselControl__forward'
            onClick={incrementSelectedIndex}
          />
          <label
            className='carouselControl carouselControl__backward'
            onClick={decrementSelectedIndex}
          />
        </div>
      )}

      {videos &&
        videos.map(({ vimeoId, loop }, index) => (
          <div
            key={`video-${index}`}
            className={cx({
              hidden: index !== selectedIndex
            })}
          >
            <VimeoPlayer
              id={vimeoId}
              loop={loop}
              autoplay={index === selectedIndex}
            />
          </div>
        ))}

      {imageSrcs &&
        imageSrcs.map((src, index) => {
          return (
            <img
              key={`image-${index}`}
              src={require(`../../assets/projects/${src}`)}
              className={cx({
                hidden: (index + videos?.length ?? 0 - 1) !== selectedIndex
              })}
              style={{ maxHeight: '70vh' }}
            />
          )
        })}
    </div>
  )
}

export default ProjectDetails
