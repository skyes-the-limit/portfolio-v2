import {
  Project,
  general3d,
  techArt,
  softwareDev,
  creativeCoding,
  motionGraphics,
  illustration,
  videography
} from './projects'

export type Category = {
  path: string
  title: string
  description: string
  coverImageSrc: string
  coverImagePosition?: 'object-center' | 'object-bottom'
  content: Project[]
}

export const primaryCategories: Category[] = [
  {
    path: '/general-3d',
    title: 'General 3D',
    description:
      'General 3D modeling projects, often with a focus on environment design.',
    coverImageSrc: 'BorealAurora_cover.png',
    content: general3d
  },
  {
    path: '/tech-art',
    title: 'Technical Art',
    description: 'Generative assets and special effects work.',
    coverImageSrc: 'VellumDance_cover.png',
    content: techArt
  },
  {
    path: '/software-dev',
    title: 'Software Development',
    description:
      'Programming work, mostly front-end web with a smattering of full-stack and mobile.',
    coverImageSrc: 'ParodyParty_home.png',
    content: softwareDev
  }
]

export const secondaryCategories: Category[] = [
  {
    path: '/creative-coding',
    title: 'Creative Coding',
    description: '',
    coverImageSrc: '2019-07-14 Generative Tessellations Preview.png',
    content: creativeCoding
  },
  {
    path: '/illustration',
    title: 'Illustration',
    description: '',
    coverImageSrc: '2017-11-20 Patterns Preview.png',
    coverImagePosition: 'object-center',
    content: illustration
  },
  {
    path: '/videography',
    title: 'Videography',
    description: '',
    coverImageSrc: 'GetFunky_Cover.png',
    content: videography
  },
  {
    path: '/motion-graphics',
    title: 'Motion Graphics',
    description: '',
    coverImageSrc: '2018-11-07 Edutainment Preview.png',
    coverImagePosition: 'object-bottom',
    content: motionGraphics
  }
]
