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
    coverImageSrc: 'IcelandicBasalt_cover',
    images: [
      {
        src: 'IcelandicBasalt_HoudiniPreview',
        caption: 'Houdini generation of column geometry.'
      },
      {
        src: 'IcelandicBasalt_WorldMachinePreview',
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
    coverImageSrc: 'BorealAurora_cover',
    coverImagePosition: 'object-left',
    images: [
      { src: 'BorealAurora_concept' },
      { src: 'BorealAurora_process' },
      {
        src: 'BorealAurora_terrainPreview',
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
    coverImageSrc: 'SpaceshipLounge_cover',
    videos: [{ vimeoId: '725470027' }]
  },
  {
    date: "Oct '21",
    medium: ['Houdini', 'Substance Painter', 'UE5'],
    description:
      'Bio-engineered vegetation for Martian colonization. Models generated in Houdini, textured in Substance Painter, assembled and rendered in Unreal Engine 5.',
    coverImageSrc: 'MartianVegetation_cover',
    videos: [{ vimeoId: '726182601', loop: true }]
  },
  {
    date: "Sept '21",
    medium: ['Maya', 'Substance Painter', 'UE5'],
    description:
      'SciFi chair for neurologically simulated virtual reality. Modeled in Maya, textured in Substance Painter, assembled and rendered in Unreal Engine 5.',
    coverImageSrc: 'VRChair_cover',
    videos: [{ vimeoId: '726300088', loop: true }]
  },
  {
    date: "Dec '20",
    medium: ['Maya', 'ZBrush', 'Substance Painter'],
    description:
      'The endangered Pangolin has developed an adaptation to protect it from poachers! Low-poly mesh modeled in Maya, details sculpted in ZBrush. Textured with substance painter, rigged, animated and composited in Maya.',
    coverImageSrc: 'Pangolin_cover',
    videos: [{ vimeoId: '726303946', loop: true }, { vimeoId: '726302583' }]
  },
  {
    date: "Nov '19",
    medium: ['Maya'],
    description: 'Digital recreation of a small interior space.',
    coverImagePosition: 'object-center',
    coverImageSrc: '2019-11-05_Interior_(1)',
    images: [
      { src: '2019-11-05_Interior_(1)' },
      { src: '2019-11-05_Interior_(2)' }
    ]
  },
  {
    date: "Dec '18",
    medium: ['Maya'],
    description: 'Talent show act of an animated and rigged character.',
    coverImageSrc: '2018-12-14_Talent_Show',
    coverImagePosition: 'object-center',
    videos: [{ vimeoId: '352084087' }]
  },
  {
    date: "Nov '16",
    medium: ['3DS Max'],
    description: 'Character model based on Castle Crashers.',
    coverImageSrc: '2016-11-18_Castle_Crasher',
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
    coverImageSrc: 'VellumDance_cover',
    videos: [{ vimeoId: '726342593' }]
  }
]

export const softwareDev: Project[] = [
  {
    date: "Apr '22",
    medium: ['MongoDB', 'Node.js', 'React.js'],
    description:
      'Fullstack web application for writing parodies of songs. Integrates with Genius API.',
    coverImageSrc: 'ParodyParty_home',
    images: [
      { src: 'ParodyParty_home' },
      { src: 'ParodyParty_search' },
      { src: 'ParodyParty_result' },
      { src: 'ParodyParty_login' },
      { src: 'ParodyParty_account' }
    ]
  },
  {
    date: "Dec '21",
    medium: ['C++'],
    description:
      'Application for collaborative painting. Private Github repo available on request with professor approval.',
    coverImageSrc: 'CollaborativeDrawing_cover',
    videos: [{ vimeoId: '726526677' }]
  },
  {
    date: "Dec '19",
    medium: ['NativeScript.js'],
    description: 'Prototype for a social event planning app.',
    coverImageSrc: '2019-12-14_You_In_(1)',
    images: [
      { src: '2019-12-14_You_In_(1)' },
      { src: '2019-12-14_You_In_(2)' },
      { src: '2019-12-14_You_In_(3)' },
      { src: '2019-12-14_You_In_(4)' },
      { src: '2019-12-14_You_In_(5)' },
      { src: '2019-12-14_You_In_(6)' },
      { src: '2019-12-14_You_In_(7)' },
      { src: '2019-12-14_You_In_(8)' },
      { src: '2019-12-14_You_In_(9)' }
    ]
  },
  {
    date: "Dec '18",
    medium: ['Java'],
    description: 'A simplified animation editing interface.',
    coverImageSrc: '2018-12-13_Animator',
    images: [{ src: '2018-12-13_Animator' }]
  },
  {
    date: "Mar '18",
    medium: ['Java'],
    description: 'A recreation of the Microsoft classic Minesweeper',
    coverImageSrc: '2018-03-27_Minesweeper',
    images: [{ src: '2018-03-27_Minesweeper' }]
  }
]

export const creativeCoding: Project[] = [
  {
    date: "Dec '20",
    medium: ['Three.js'],
    description:
      'Web-based graphics project utilizing IBM Watson Tone Analyzer API.',
    coverImageSrc: 'EmotionVisualizer_cover',
    images: [
      { src: 'EmotionVisualizer_form' },
      { src: 'EmotionVisualizer_explanation' }
    ]
  },
  {
    date: "Jul '19",
    medium: ['Processing'],
    description:
      'Using google image search as an input, render images via various shapes.',
    coverImageSrc: '2019-07-29_Simple_Image_Processing_(1)',
    images: [
      { src: '2019-07-29_Simple_Image_Processing_(1)' },
      { src: '2019-07-29_Simple_Image_Processing_(2)' },
      { src: '2019-07-29_Simple_Image_Processing_(3)' },
      { src: '2019-07-29_Simple_Image_Processing_(4)' },
      { src: '2019-07-29_Simple_Image_Processing_(5)' },
      { src: '2019-07-29_Simple_Image_Processing_(6)' }
    ]
  },
  {
    date: "Jul '19",
    medium: ['Processing'],
    description:
      'Made in processing and then used to control the LED facade on the Ars Electronica Center in Linz, Austria.',
    coverImageSrc: '2019-07-26_Austauschstadt_(1)',
    images: [
      { src: '2019-07-26_Austauschstadt_(1)' },
      { src: '2019-07-26_Austauschstadt_(2)' },
      { src: '2019-07-26_Austauschstadt_(3)' },
      { src: '2019-07-26_Austauschstadt_(4)' },
      { src: '2019-07-26_Austauschstadt_(5)' },
      { src: '2019-07-26_Austauschstadt_(6)' },
      { src: '2019-07-26_Austauschstadt_(7)' }
    ],
    videos: [{ vimeoId: '353297101' }, { vimeoId: '355991818' }]
  },
  {
    date: "Jul '19",
    medium: ['Processing'],
    description: 'Tessellating hexagons based on Perlin Noise.',
    coverImageSrc: '2019-07-14_Generative_Tessellations_(1)',
    images: [
      { src: '2019-07-14_Generative_Tessellations_(1)' },
      { src: '2019-07-14_Generative_Tessellations_(2)' },
      { src: '2019-07-14_Generative_Tessellations_(3)' },
      { src: '2019-07-14_Generative_Tessellations_(4)' },
      { src: '2019-07-14_Generative_Tessellations_(5)' },
      { src: '2019-07-14_Generative_Tessellations_(6)' }
    ],
    videos: [{ vimeoId: '353274180' }]
  },
  {
    date: "Jul '19",
    medium: ['Processing'],
    description: 'Allows users to draw with complex polygons.',
    coverImageSrc: '2019-07-06_Drawing_Machine_(1)',
    images: [
      { src: '2019-07-06_Drawing_Machine_(1)' },
      { src: '2019-07-06_Drawing_Machine_(2)' },
      { src: '2019-07-06_Drawing_Machine_(3)' },
      { src: '2019-07-06_Drawing_Machine_(4)' },
      { src: '2019-07-06_Drawing_Machine_(5)' },
      { src: '2019-07-06_Drawing_Machine_(6)' },
      { src: '2019-07-06_Drawing_Machine_(7)' },
      { src: '2019-07-06_Drawing_Machine_(8)' },
      { src: '2019-07-06_Drawing_Machine_(9)' },
      { src: '2019-07-06_Drawing_Machine_(10)' },
      { src: '2019-07-06_Drawing_Machine_(11)' },
      { src: '2019-07-06_Drawing_Machine_(12)' },
      { src: '2019-07-06_Drawing_Machine_(13)' }
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
    coverImageSrc: '2018-11-07_Edutainment',
    coverImagePosition: 'object-bottom',
    videos: [{ vimeoId: '354709668' }]
  },
  {
    date: "Mar '19",
    medium: ['AfterEffects'],
    description:
      'Lyric video focusing on transforming audio into visual representations.',
    coverImageSrc: '2018-03-20_Lyrics',
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
    coverImageSrc: '2019-11-15_Process_Portrait_(1)',
    coverImagePosition: 'object-center',
    images: [
      { src: '2019-11-15_Process_Portrait_(1)' },
      { src: '2019-11-15_Process_Portrait_(2)' },
      { src: '2019-11-15_Process_Portrait_(3)' },
      { src: '2019-11-15_Process_Portrait_(4)' },
      { src: '2019-11-15_Process_Portrait_(5)' },
      { src: '2019-11-15_Process_Portrait_(6)' },
      { src: '2019-11-15_Process_Portrait_(7)' },
      { src: '2019-11-15_Process_Portrait_(8)' },
      { src: '2019-11-15_Process_Portrait_(9)' },
      { src: '2019-11-15_Process_Portrait_(10)' },
      { src: '2019-11-15_Process_Portrait_(11)' },
      { src: '2019-11-15_Process_Portrait_(12)' },
      { src: '2019-11-15_Process_Portrait_(13)' },
      { src: '2019-11-15_Process_Portrait_(14)' }
    ]
  },
  {
    date: "Jul '19",
    medium: ['Screenprinted Fabric'],
    description:
      'Exploration of tagging and graffiti using publicly sited textiles.',
    coverImageSrc: '2019-07-22_Screenprint_(1)',
    coverImagePosition: 'object-center',
    images: [
      { src: '2019-07-22_Screenprint_(1)' },
      { src: '2019-07-22_Screenprint_(2)' },
      { src: '2019-07-22_Screenprint_(3)' },
      { src: '2019-07-22_Screenprint_(4)' },
      { src: '2019-07-22_Screenprint_(5)' },
      { src: '2019-07-22_Screenprint_(6)' }
    ]
  },
  {
    date: "Nov '17",
    medium: ['Illustrator'],
    description: 'Patterns generated from swatches of a plant drawing.',
    coverImageSrc: '2017-11-20_Patterns',
    coverImagePosition: 'object-center',
    images: [{ src: '2017-11-20_Patterns' }]
  },
  {
    date: "Oct '17",
    medium: ['Photoshop'],
    description: 'Study on different modes of drawing.',
    coverImagePosition: 'object-center',
    coverImageSrc: '2017-10-30_Modes',
    images: [{ src: '2017-10-30_Modes' }]
  },
  {
    date: "Sept '17",
    medium: ['Illustrator'],
    description: 'Composition of only squares.',
    coverImagePosition: 'object-center',
    coverImageSrc: '2017-09-25_Squares',
    images: [{ src: '2017-09-25_Squares' }]
  }
]

export const videography: Project[] = [
  {
    date: "Sept '21",
    medium: ['Premiere'],
    description:
      'Immersive short comedy featuring the Cha Cha Slide by DJ Casper',
    coverImageSrc: 'GetFunky_Cover',
    videos: [{ vimeoId: '713918755' }]
  },
  {
    date: "Sept '18",
    medium: ['Premiere'],
    description: "A variant on the 'chalk talk' style of stop motion.",
    coverImageSrc: '2018-09-25_Chalk_Talk',
    coverImagePosition: 'object-center',
    videos: [{ vimeoId: '352083851' }]
  },
  {
    date: "Sept '18",
    medium: ['Premiere'],
    description:
      'Claymation conceptualized by visualizing a predetermined cartoon soundtrack.',
    coverImageSrc: '2018-09-19_Claymation',
    coverImagePosition: 'object-center',
    videos: [{ vimeoId: '352083588' }]
  },
  {
    date: "Apr '18",
    medium: ['Premiere'],
    description: 'An impressionistic recollection of a season of dance.',
    coverImageSrc: '2018-04-23_Sum_Preview',
    coverImagePosition: 'object-center',
    videos: [{ vimeoId: '352082744' }]
  },
  {
    date: "Feb '18",
    medium: ['Premiere'],
    description: 'Short study on performance.',
    coverImagePosition: 'object-bottom',
    coverImageSrc: '2018-02-26_Twister',
    videos: [{ vimeoId: '352082020' }]
  }
]
