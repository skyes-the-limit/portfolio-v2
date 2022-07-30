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
  description?: string
  coverImage: {
    src: string
    objectPosition?:
      | 'object-bottom'
      | 'object-center'
      | 'object-left'
      | 'object-left-bottom'
      | 'object-left-top'
      | 'object-right'
      | 'object-right-bottom'
      | 'object-right-top'
    alt?: string
  }
  content: Project[]
}

export const primaryCategories: Category[] = [
  {
    path: '/general-3d',
    title: 'General 3D',
    description:
      'General 3D modeling projects, often with a focus on environment design.',
    coverImage: {
      src: 'BorealAurora_cover',
      alt: '3D rendering of a boreal forest.'
    },
    content: general3d
  },
  {
    path: '/tech-art',
    title: 'Technical Art',
    description: 'Generative assets and special effects work.',
    coverImage: {
      src: 'VellumDance_cover',
      alt: '3D rendering of a dancer made of colorful ribbons.'
    },
    content: techArt
  },
  {
    path: '/software-dev',
    title: 'Software Development',
    description:
      'Programming work, mostly front-end web with a smattering of full-stack and mobile.',
    coverImage: {
      src: 'ParodyParty_home',
      alt: "Screenshot of a website's landing page"
    },
    content: softwareDev
  }
]

export const secondaryCategories: Category[] = [
  {
    path: '/creative-coding',
    title: 'Creative Coding',
    coverImage: {
      src: '2019-07-14_Generative_Tessellations_(1)',
      alt: 'Screenshot of a procedurally generated grid of tesellating hexagons in various colors.'
    },
    content: creativeCoding
  },
  {
    path: '/illustration',
    title: 'Illustration',
    coverImage: {
      src: '2017-11-20_Patterns',
      objectPosition: 'object-center',
      alt: 'Illustration of various patterns.'
    },
    content: illustration
  },
  {
    path: '/videography',
    title: 'Videography',
    coverImage: { src: 'GetFunky_Cover', alt: 'Still from a 360 video.' },
    content: videography
  },
  {
    path: '/motion-graphics',
    title: 'Motion Graphics',
    coverImage: {
      src: '2018-11-07_Edutainment',
      objectPosition: 'object-bottom',
      alt: 'Still image from a 2D animated video.'
    },
    content: motionGraphics
  }
]
