import { Project, general3d, techArt, softwareDev, creativeCoding, motionGraphics, illustration, videography } from './projects'

export type Category = {
  path: string,
  title: string,
  description: string,
  coverImageSrc: string,
  content: Project[]
}

// TODO: Add real cover images
export const primaryCategories: Category[] = [
  {
    path: '/general-3d',
    title: 'General 3D',
    description: 'General 3D modeling projects, often with a focus on environment design. Typically using Maya, Substance Painter, UE4.',
    coverImageSrc: 'https://source.unsplash.com/random/300x300/?1',
    content: general3d
  },
  {
    path: '/tech-art',
    title: 'Technical Art',
    description: 'Generative assets and special effects work. Largely made with SideFX Houdini.',
    coverImageSrc: 'https://source.unsplash.com/random/300x300/?2',
    content: techArt
  },
  {
    path: '/software-dev',
    title: 'Software Development',
    description: 'Programming work, mostly front-end web with a smattering of full-stack and mobile.',
    coverImageSrc: 'https://source.unsplash.com/random/300x300/?3',
    content: softwareDev
  }
]

export const secondaryCategories: Category[] = [
  {
    path: '/creative-coding',
    title: 'Creative Coding',
    description: '',
    coverImageSrc: 'https://source.unsplash.com/random/200x300/?1',
    content: creativeCoding
  },
  {
    path: '/illustration',
    title: 'Illustration',
    description: '',
    coverImageSrc: 'https://source.unsplash.com/random/200x300/?3',
    content: illustration
  },
  {
    path: '/videography',
    title: 'Videography',
    description: '',
    coverImageSrc: 'https://source.unsplash.com/random/200x300/?4',
    content: videography
  },
  {
    path: '/motion-graphics',
    title: 'Motion Graphics',
    description: '',
    coverImageSrc: 'https://source.unsplash.com/random/200x300/?2',
    content: motionGraphics
  }
]
