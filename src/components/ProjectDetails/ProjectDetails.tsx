import React from 'react'
import { Project } from '../../data/projects'

type ProjectDetailsProps = {
  project: Project
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { date, medium, description, coverImageSrc, imageSrcs, videoSrcs, github, collab } = project

  return (
    <div>
      <h1>Project Details</h1>
      <p>{date}</p>
      <p>{medium}</p>
      <p>{description}</p>
      <p>{coverImageSrc}</p>
      <p>{github}</p>
      <p>{collab}</p>

      {imageSrcs && imageSrcs.map(src => {
        return (
          <p key={src}>{src}</p>
        )
      })}

      {videoSrcs && videoSrcs.map(src => {
        return (
          <p key={src}>{src}</p>
        )
      })}
    </div>
  )
}

export default ProjectDetails
