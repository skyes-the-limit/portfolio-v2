export type Project = {
  date: string
  medium: string[]
  description: string
  coverImageSrc: string
  coverImagePosition?:
    | 'object-bottom'
    | 'object-center'
    | 'object-left'
    | 'object-left-bottom'
    | 'object-left-top'
    | 'object-right'
    | 'object-right-bottom'
    | 'object-right-top'
  images?: {
    src: string
    caption?: string
  }[]
  videos?: {
    vimeoId: string
    loop?: boolean
  }[]
}

export const general3d: Project[] = [
  {
    date: "Apr '22",
    medium: ['Houdini', 'Substance Painter', 'World Machine', 'UE4'],
    description:
      "Virtual environment inspired by Iceland's basalt columns. Columns procedurally generated with Houdini, textured in Substance Painter. Terrain generated in World Machine and textured with Quixel Megascans materials. Assembled and rendered in Unreal Engine 4.",
    coverImageSrc: 'IcelandicBasalt_cover.webp',
    images: [
      {
        src: 'IcelandicBasalt_HoudiniPreview.webp',
        caption: 'Houdini generation of column geometry.'
      },
      {
        src: 'IcelandicBasalt_WorldMachinePreview.webp',
        caption: 'World Machine terrain generation.'
      }
    ],
    videos: [{ vimeoId: '713927330' }]
  },
  {
    date: "Mar '22",
    medium: ['Maya', 'Substance Painter', 'World Machine', 'UE4'],
    description:
      'Geodesic tent modeled in Maya and textured with Substance Painter. Furnished with free assets from TurboSquid. Terrain generated in World Machine. Assembled in Unreal Engine 4 with Quixel Megascans materials and vegetation.',
    coverImageSrc: 'BorealAurora_cover.webp',
    coverImagePosition: 'object-left',
    images: [
      { src: 'BorealAurora_concept.webp' },
      { src: 'BorealAurora_process.webp' },
      {
        src: 'BorealAurora_terrainPreview.webp',
        caption: 'World Machine terrain generation.'
      }
    ],
    videos: [{ vimeoId: '713926631' }]
  },
  {
    date: "Dec '21",
    medium: ['Maya', 'Substance Painter', 'UE5'],
    description:
      "Virtual environment of a resort spaceship's lounge. Modeled in Maya, textured in Substance Painter, assembled and rendered in Unreal Engine 5.",
    coverImageSrc: 'SpaceshipLounge_cover.webp',
    videos: [{ vimeoId: '725470027' }]
  },
  {
    date: "Oct '21",
    medium: ['Houdini', 'Substance Painter', 'UE5'],
    description:
      'Bio-engineered vegetation for Martian colonization. Models generated in Houdini, textured in Substance Painter, assembled and rendered in Unreal Engine 5.',
    coverImageSrc: 'MartianVegetation_cover.webp',
    videos: [{ vimeoId: '726182601', loop: true }]
  },
  {
    date: "Sept '21",
    medium: ['Maya', 'Substance Painter', 'UE5'],
    description:
      'SciFi chair for neurologically simulated virtual reality. Modeled in Maya, textured in Substance Painter, assembled and rendered in Unreal Engine 5.',
    coverImageSrc: 'VRChair_cover.webp',
    videos: [{ vimeoId: '726300088', loop: true }]
  },
  {
    date: "Dec '20",
    medium: ['Maya', 'ZBrush', 'Substance Painter'],
    description:
      'The endangered Pangolin has developed an adaptation to protect it from poachers! Low-poly mesh modeled in Maya, details sculpted in ZBrush. Textured with substance painter, rigged, animated and composited in Maya.',
    coverImageSrc: 'Pangolin_cover.webp',
    videos: [{ vimeoId: '726303946', loop: true }, { vimeoId: '726302583' }]
  },
  {
    date: "Nov '19",
    medium: ['Maya'],
    description: 'Digital recreation of a small interior space.',
    coverImagePosition: 'object-center',
    coverImageSrc: '2019-11-05 Interior (1).webp',
    images: [
      { src: '2019-11-05 Interior (1).webp' },
      { src: '2019-11-05 Interior (2).webp' }
    ]
  },
  {
    date: "Dec '18",
    medium: ['Maya'],
    description: 'Talent show act of an animated and rigged character.',
    coverImageSrc: '2018-12-14 Talent Show.webp',
    coverImagePosition: 'object-center',
    videos: [{ vimeoId: '352084087' }]
  },
  {
    date: "Nov '16",
    medium: ['3DS Max'],
    description: 'Character model based on Castle Crashers.',
    coverImageSrc: '2016-11-18 Castle Crasher.webp',
    coverImagePosition: 'object-center',
    videos: [{ vimeoId: '353296476', loop: true }]
  }
]

export const techArt: Project[] = [
  // TODO: "Hello!" Particles - July 2022
  // TODO: Finished SPL - April 2022
  {
    date: "Dec '21",
    medium: ['Houdini'],
    description: 'Experiment with vellum and combining Mixamo animations.',
    coverImageSrc: 'VellumDance_cover.webp',
    videos: [{ vimeoId: '726342593' }]
  }
]

export const softwareDev: Project[] = [
  {
    date: "Apr '22",
    medium: ['MongoDB', 'Node.js', 'React.js'],
    description:
      'Fullstack web application for writing parodies of songs. Integrates with Genius API.',
    coverImageSrc: 'ParodyParty_home.webp',
    images: [
      { src: 'ParodyParty_home.webp' },
      { src: 'ParodyParty_search.webp' },
      { src: 'ParodyParty_result.webp' },
      { src: 'ParodyParty_login.webp' },
      { src: 'ParodyParty_account.webp' }
    ]
  },
  {
    date: "Dec '21",
    medium: ['C++'],
    description:
      'Application for collaborative painting. Private Github repo available on request with professor approval.',
    coverImageSrc: 'CollaborativeDrawing_cover.webp',
    videos: [{ vimeoId: '726526677' }]
  },
  {
    date: "Dec '19",
    medium: ['NativeScript.js'],
    description: 'Prototype for a social event planning app.',
    coverImageSrc: '2019-12-14 You In (1).webp',
    images: [
      { src: '2019-12-14 You In (1).webp' },
      { src: '2019-12-14 You In (2).webp' },
      { src: '2019-12-14 You In (3).webp' },
      { src: '2019-12-14 You In (4).webp' },
      { src: '2019-12-14 You In (5).webp' },
      { src: '2019-12-14 You In (6).webp' },
      { src: '2019-12-14 You In (7).webp' },
      { src: '2019-12-14 You In (8).webp' },
      { src: '2019-12-14 You In (9).webp' }
    ]
  },
  {
    date: "Dec '18",
    medium: ['Java'],
    description: 'A simplified animation editing interface.',
    coverImageSrc: '2018-12-13 Animator.webp',
    images: [{ src: '2018-12-13 Animator.webp' }]
  },
  {
    date: "Mar '18",
    medium: ['Java'],
    description: 'A recreation of the Microsoft classic Minesweeper',
    coverImageSrc: '2018-03-27 Minesweeper.webp',
    images: [{ src: '2018-03-27 Minesweeper.webp' }]
  }
]

export const creativeCoding: Project[] = [
  {
    date: "Dec '20",
    medium: ['Three.js'],
    description:
      'Web-based graphics project utilizing IBM Watson Tone Analyzer API.',
    coverImageSrc: 'EmotionVisualizer_cover.webp',
    images: [
      { src: 'EmotionVisualizer_form.webp' },
      { src: 'EmotionVisualizer_explanation.webp' }
    ]
  },
  {
    date: "Jul '19",
    medium: ['Processing'],
    description:
      'Using google image search as an input, render images via various shapes.',
    coverImageSrc: '2019-07-29 Simple Image Processing (1).webp',
    images: [
      { src: '2019-07-29 Simple Image Processing (1).webp' },
      { src: '2019-07-29 Simple Image Processing (2).webp' },
      { src: '2019-07-29 Simple Image Processing (3).webp' },
      { src: '2019-07-29 Simple Image Processing (4).webp' },
      { src: '2019-07-29 Simple Image Processing (5).webp' },
      { src: '2019-07-29 Simple Image Processing (6).webp' }
    ]
  },
  {
    date: "Jul '19",
    medium: ['Processing'],
    description:
      'Made in processing and then used to control the LED facade on the Ars Electronica Center in Linz, Austria.',
    coverImageSrc: '2019-07-26 Austauschstadt (1).webp',
    images: [
      { src: '2019-07-26 Austauschstadt (1).webp' },
      { src: '2019-07-26 Austauschstadt (2).webp' },
      { src: '2019-07-26 Austauschstadt (3).webp' },
      { src: '2019-07-26 Austauschstadt (4).webp' },
      { src: '2019-07-26 Austauschstadt (5).webp' },
      { src: '2019-07-26 Austauschstadt (6).webp' },
      { src: '2019-07-26 Austauschstadt (7).webp' }
    ],
    videos: [{ vimeoId: '353297101' }, { vimeoId: '355991818' }]
  },
  {
    date: "Jul '19",
    medium: ['Processing'],
    description: 'Tessellating hexagons based on Perlin Noise.',
    coverImageSrc: '2019-07-14 Generative Tessellations (1).webp',
    images: [
      { src: '2019-07-14 Generative Tessellations (1).webp' },
      { src: '2019-07-14 Generative Tessellations (2).webp' },
      { src: '2019-07-14 Generative Tessellations (3).webp' },
      { src: '2019-07-14 Generative Tessellations (4).webp' },
      { src: '2019-07-14 Generative Tessellations (5).webp' },
      { src: '2019-07-14 Generative Tessellations (6).webp' }
    ],
    videos: [{ vimeoId: '353274180' }]
  },
  {
    date: "Jul '19",
    medium: ['Processing'],
    description: 'Allows users to draw with complex polygons.',
    coverImageSrc: '2019-07-06 Drawing Machine (1).webp',
    images: [
      { src: '2019-07-06 Drawing Machine (1).webp' },
      { src: '2019-07-06 Drawing Machine (2).webp' },
      { src: '2019-07-06 Drawing Machine (3).webp' },
      { src: '2019-07-06 Drawing Machine (4).webp' },
      { src: '2019-07-06 Drawing Machine (5).webp' },
      { src: '2019-07-06 Drawing Machine (6).webp' },
      { src: '2019-07-06 Drawing Machine (7).webp' },
      { src: '2019-07-06 Drawing Machine (8).webp' },
      { src: '2019-07-06 Drawing Machine (9).webp' },
      { src: '2019-07-06 Drawing Machine (10).webp' },
      { src: '2019-07-06 Drawing Machine (11).webp' },
      { src: '2019-07-06 Drawing Machine (12).webp' },
      { src: '2019-07-06 Drawing Machine (13).webp' }
    ],
    videos: [{ vimeoId: '356239943' }]
  }
]

export const motionGraphics: Project[] = [
  {
    date: "Nov '18",
    medium: ['Photoshop', 'AfterEffects'],
    description:
      "An educational video on different culture's 'Halloween-esque' holidays.",
    coverImageSrc: '2018-11-07 Edutainment.webp',
    coverImagePosition: 'object-bottom',
    videos: [{ vimeoId: '354709668' }]
  },
  {
    date: "Mar '19",
    medium: ['AfterEffects'],
    description:
      'Lyric video focusing on transforming audio into visual representations.',
    coverImageSrc: '2018-03-20 Lyrics.webp',
    coverImagePosition: 'object-center',
    videos: [{ vimeoId: '352082622' }]
  }
]

export const illustration: Project[] = [
  {
    date: "Nov '19",
    medium: ['Photoshop'],
    description:
      'Series of speed paint portraits based on references from /r/RedditGetsDrawn.',
    coverImageSrc: '2019-11-15 Process Portrait (1).webp',
    coverImagePosition: 'object-center',
    images: [
      { src: '2019-11-15 Process Portrait (1).webp' },
      { src: '2019-11-15 Process Portrait (2).webp' },
      { src: '2019-11-15 Process Portrait (3).webp' },
      { src: '2019-11-15 Process Portrait (4).webp' },
      { src: '2019-11-15 Process Portrait (5).webp' },
      { src: '2019-11-15 Process Portrait (6).webp' },
      { src: '2019-11-15 Process Portrait (7).webp' },
      { src: '2019-11-15 Process Portrait (8).webp' },
      { src: '2019-11-15 Process Portrait (9).webp' },
      { src: '2019-11-15 Process Portrait (10).webp' },
      { src: '2019-11-15 Process Portrait (11).webp' },
      { src: '2019-11-15 Process Portrait (12).webp' },
      { src: '2019-11-15 Process Portrait (13).webp' },
      { src: '2019-11-15 Process Portrait (14).webp' }
    ]
  },
  {
    date: "Jul '19",
    medium: ['Screenprinted Fabric'],
    description:
      'Exploration of tagging and graffiti using publicly sited textiles.',
    coverImageSrc: '2019-07-22 Screenprint (1).webp',
    coverImagePosition: 'object-center',
    images: [
      { src: '2019-07-22 Screenprint (1).webp' },
      { src: '2019-07-22 Screenprint (2).webp' },
      { src: '2019-07-22 Screenprint (3).webp' },
      { src: '2019-07-22 Screenprint (4).webp' },
      { src: '2019-07-22 Screenprint (5).webp' },
      { src: '2019-07-22 Screenprint (6).webp' }
    ]
  },
  {
    date: "Nov '17",
    medium: ['Illustrator'],
    description: 'Patterns generated from swatches of a plant drawing.',
    coverImageSrc: '2017-11-20 Patterns.webp',
    coverImagePosition: 'object-center',
    images: [{ src: '2017-11-20 Patterns.webp' }]
  },
  {
    date: "Oct '17",
    medium: ['Photoshop'],
    description: 'Study on different modes of drawing.',
    coverImagePosition: 'object-center',
    coverImageSrc: '2017-10-30 Modes.webp',
    images: [{ src: '2017-10-30 Modes.webp' }]
  },
  {
    date: "Sept '17",
    medium: ['Illustrator'],
    description: 'Composition of only squares.',
    coverImagePosition: 'object-center',
    coverImageSrc: '2017-09-25 Squares.webp',
    images: [{ src: '2017-09-25 Squares.webp' }]
  }
]

export const videography: Project[] = [
  {
    date: "Sept '21",
    medium: ['Premiere'],
    description:
      'Immersive short comedy featuring the Cha Cha Slide by DJ Casper',
    coverImageSrc: 'GetFunky_Cover.webp',
    videos: [{ vimeoId: '713918755' }]
  },
  {
    date: "Sept '18",
    medium: ['Premiere'],
    description: "A variant on the 'chalk talk' style of stop motion.",
    coverImageSrc: '2018-09-25 Chalk Talk.webp',
    coverImagePosition: 'object-center',
    videos: [{ vimeoId: '352083851' }]
  },
  {
    date: "Sept '18",
    medium: ['Premiere'],
    description:
      'Claymation conceptualized by visualizing a predetermined cartoon soundtrack.',
    coverImageSrc: '2018-09-19 Claymation.webp',
    coverImagePosition: 'object-center',
    videos: [{ vimeoId: '352083588' }]
  },
  {
    date: "Apr '18",
    medium: ['Premiere'],
    description: 'An impressionistic recollection of a season of dance.',
    coverImageSrc: '2018-04-23 Sum Preview.webp',
    coverImagePosition: 'object-center',
    videos: [{ vimeoId: '352082744' }]
  },
  {
    date: "Feb '18",
    medium: ['Premiere'],
    description: 'Short study on performance.',
    coverImagePosition: 'object-bottom',
    coverImageSrc: '2018-02-26 Twister.webp',
    videos: [{ vimeoId: '352082020' }]
  }
]
