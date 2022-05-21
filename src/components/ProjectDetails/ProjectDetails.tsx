import React from 'react'
import { Project } from '../../data/projects'
import VimeoPlayer from '../VimeoPlayer/VimeoPlayer'

type ProjectDetailsProps = {
  project: Project
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { date, medium, description, imageSrcs, videoSrcs, github, collab } = project

  return (
    <div>
      <h1>Project Details</h1>
      <p>{date}</p>
      <p>{medium}</p>
      <p>{description}</p>
      {/* <p>{coverImageSrc}</p> */}
      <p>{github}</p>
      <p>{collab}</p>

      {imageSrcs && imageSrcs.map((src, index) => {
        return (
          <img key={`image-${index}`} src={`../../assets/${require(src)}`} />
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
