export type Project = {
  date: string
  medium: string[]
  description: string
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
  images?: {
    src: string
    caption?: string
    alt?: string
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
    coverImage: {
      src: 'IcelandicBasalt_cover',
      alt: 'Canyon of basalt columns looking up from the sea level.'
    },
    images: [
      {
        src: 'IcelandicBasalt_HoudiniPreview',
        caption: 'Houdini generation of column geometry.',
        alt: 'Screenshot of base mesh created in Houdini'
      },
      {
        src: 'IcelandicBasalt_WorldMachinePreview',
        caption: 'World Machine terrain generation.',
        alt: 'Screenshot of terrain heightmaps and material alpha maps.'
      }
    ],
    videos: [{ vimeoId: '713927330' }]
  },
  {
    date: "Mar '22",
    medium: ['Maya', 'Substance Painter', 'World Machine', 'UE4'],
    description:
      'Geodesic tent modeled in Maya and textured with Substance Painter. Furnished with free assets from TurboSquid. Terrain generated in World Machine. Assembled in Unreal Engine 4 with Quixel Megascans materials and vegetation.',
    coverImage: {
      src: 'BorealAurora_cover',
      objectPosition: 'object-left',
      alt: 'Boreal forest valley with tent in foreground and mountain in background.'
    },
    images: [
      {
        src: 'BorealAurora_concept',
        alt: 'Collage of reference and inspirational images.'
      },
      {
        src: 'BorealAurora_process',
        alt: 'Breakdown of the creation process for the tent "hero object".'
      },
      {
        src: 'BorealAurora_terrainPreview',
        caption: 'World Machine terrain generation.',
        alt: 'Screenshot of terrain heightmaps and material alpha maps.'
      }
    ],
    videos: [{ vimeoId: '713926631' }]
  },
  {
    date: "Dec '21",
    medium: ['Maya', 'Substance Painter', 'UE5'],
    description:
      "Virtual environment of a resort spaceship's lounge. Modeled in Maya, textured in Substance Painter, assembled and rendered in Unreal Engine 5.",
    coverImage: {
      src: 'SpaceshipLounge_cover',
      alt: 'Lower floor of the lounge from the base of the stairs.'
    },
    videos: [{ vimeoId: '725470027' }]
  },
  {
    date: "Oct '21",
    medium: ['Houdini', 'Substance Painter', 'UE5'],
    description:
      'Bio-engineered vegetation for Martian colonization. Models generated in Houdini, textured in Substance Painter, assembled and rendered in Unreal Engine 5.',
    coverImage: {
      src: 'MartianVegetation_cover',
      alt: 'Sympodial tree surrounded by rocks on a red landscape.'
    },
    videos: [{ vimeoId: '726182601', loop: true }]
  },
  {
    date: "Sept '21",
    medium: ['Maya', 'Substance Painter', 'UE5'],
    description:
      'SciFi chair for neurologically simulated virtual reality. Modeled in Maya, textured in Substance Painter, assembled and rendered in Unreal Engine 5.',
    coverImage: {
      src: 'VRChair_cover',
      alt: 'Contemporary style chair with a glowing visor at head height and wiring running along the underside.'
    },
    videos: [{ vimeoId: '726300088', loop: true }]
  },
  {
    date: "Dec '20",
    medium: ['Maya', 'ZBrush', 'Substance Painter'],
    description:
      'The endangered Pangolin has developed an adaptation to protect it from poachers! Low-poly mesh modeled in Maya, details sculpted in ZBrush. Textured with substance painter, rigged, animated and composited in Maya.',
    coverImage: {
      src: 'Pangolin_cover',
      alt: 'Realistically-styled pangolin composited over a Saharan photo.'
    },
    videos: [{ vimeoId: '726303946', loop: true }, { vimeoId: '726302583' }]
  },
  {
    date: "Nov '19",
    medium: ['Maya'],
    description: 'Digital recreation of a small dorm bedroom.',
    coverImage: {
      src: '2019-11-05_Interior_(1)',
      objectPosition: 'object-center'
    },
    images: [
      { src: '2019-11-05_Interior_(1)' },
      { src: '2019-11-05_Interior_(2)' }
    ]
  },
  {
    date: "Dec '18",
    medium: ['Maya'],
    description: 'Talent show act of an animated and rigged character.',
    coverImage: {
      src: '2018-12-14_Talent_Show',
      objectPosition: 'object-center',
      alt: 'Skunk character on stage spraying sparkles.'
    },
    videos: [{ vimeoId: '352084087' }]
  },
  {
    date: "Nov '16",
    medium: ['3DS Max'],
    description: 'Character model based on Castle Crashers.',
    coverImage: {
      src: '2016-11-18_Castle_Crasher',
      objectPosition: 'object-center'
    },
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
    coverImage: {
      src: 'VellumDance_cover',
      alt: 'Dancer made of colorful ribbons.'
    },
    videos: [{ vimeoId: '726342593' }]
  }
]

export const softwareDev: Project[] = [
  {
    date: "Apr '22",
    medium: ['MongoDB', 'Node.js', 'React.js'],
    description:
      'Fullstack web application for writing parodies of songs. Integrates with Genius API.',
    coverImage: {
      src: 'ParodyParty_home',
      alt: 'Landing page of "Parody Party" web app.'
    },
    images: [
      {
        src: 'ParodyParty_home',
        alt: 'Landing page of "Parody Party" web app.'
      },
      {
        src: 'ParodyParty_search',
        alt: 'Search results of "Parody Party" web app.'
      },
      {
        src: 'ParodyParty_result',
        alt: 'Details page for a specific parody on "Parody Party" web app.'
      },
      {
        src: 'ParodyParty_login',
        alt: 'Login page of "Parody Party" web app.'
      },
      {
        src: 'ParodyParty_account',
        alt: 'Account page for signed in user on "Parody Party" web app.'
      }
    ]
  },
  {
    date: "Dec '21",
    medium: ['C++'],
    description:
      'Application for collaborative painting. Private Github repo available on request with professor approval.',
    coverImage: {
      src: 'CollaborativeDrawing_cover',
      alt: 'Screenshot of 2 side-by-side windows of the app.'
    },
    videos: [{ vimeoId: '726526677' }]
  },
  {
    date: "Dec '19",
    medium: ['NativeScript.js'],
    description: 'Prototype for a social event planning app.',
    coverImage: {
      src: '2019-12-14_You_In_(1)',
      alt: 'Landing page of "You In".'
    },
    images: [
      {
        src: '2019-12-14_You_In_(1)',
        alt: 'Explore page of "You In".'
      },
      {
        src: '2019-12-14_You_In_(2)',
        alt: 'Event details modal from "You In".'
      },
      {
        src: '2019-12-14_You_In_(3)',
        alt: 'Your hosted events page of "You In".'
      },
      { src: '2019-12-14_You_In_(4)', alt: 'New event modal from "You In".' },
      {
        src: '2019-12-14_You_In_(5)',
        alt: 'Friends list on "You In".'
      },
      {
        src: '2019-12-14_You_In_(6)',
        alt: 'List of your friends circle on "You In"'
      },
      {
        src: '2019-12-14_You_In_(7)',
        alt: 'New friend circle on "You In".'
      },
      {
        src: '2019-12-14_You_In_(8)',
        alt: 'Editing your existing friend circle on "You In".'
      }
    ]
  },
  {
    date: "Dec '18",
    medium: ['Java'],
    description: 'A simplified animation editing interface.',
    coverImage: { src: '2018-12-13_Animator' },
    images: [{ src: '2018-12-13_Animator' }]
  },
  {
    date: "Mar '18",
    medium: ['Java'],
    description: 'A recreation of the Microsoft classic Minesweeper',
    coverImage: { src: '2018-03-27_Minesweeper' },
    images: [{ src: '2018-03-27_Minesweeper' }]
  }
]

export const creativeCoding: Project[] = [
  {
    date: "Dec '20",
    medium: ['Three.js'],
    description:
      'Web-based graphics project utilizing IBM Watson Tone Analyzer API.',
    coverImage: {
      src: 'EmotionVisualizer_cover',
      alt: 'Various objects floating around in a web interface'
    },
    images: [
      {
        src: 'EmotionVisualizer_form',
        alt: 'Input form for EmotionVisualizer.'
      },
      {
        src: 'EmotionVisualizer_explanation',
        alt: 'Objects of different types generated by input.'
      }
    ]
  },
  {
    date: "Jul '19",
    medium: ['Processing'],
    description:
      'Using google image search as an input, render images via various shapes.',
    coverImage: {
      src: '2019-07-29_Simple_Image_Processing_(1)',
      alt: 'The Great Wave of Kanagawa made of small diagonal rectangles.'
    },
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
    coverImage: {
      src: '2019-07-26_Austauschstadt_(1)',
      alt: 'Real life view of the facade lit up.'
    },
    images: [
      { src: '2019-07-26_Austauschstadt_(1)' },
      {
        src: '2019-07-26_Austauschstadt_(2)',
        alt: 'Console view of a city at night.'
      },
      {
        src: '2019-07-26_Austauschstadt_(3)',
        alt: 'Console view of a city in the day.'
      },
      {
        src: '2019-07-26_Austauschstadt_(4)',
        alt: 'Console view of a city at sunrise with wind and clouds.'
      },
      {
        src: '2019-07-26_Austauschstadt_(5)',
        alt: 'Console view of a city at sunset with wind and clouds.'
      },
      {
        src: '2019-07-26_Austauschstadt_(6)',
        alt: 'Console view of a city with smog.'
      }
    ],
    videos: [{ vimeoId: '353297101' }, { vimeoId: '355991818' }]
  },
  {
    date: "Jul '19",
    medium: ['Processing'],
    description: 'Tessellating hexagons based on Perlin Noise.',
    coverImage: {
      src: '2019-07-14_Generative_Tessellations_(1)',
      alt: 'Grid of hexagons in clumps of colors.'
    },
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
    coverImage: {
      src: '2019-07-06_Drawing_Machine_(1)',
      alt: 'Clumps of many translucent regular polygons on top of each other.'
    },
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
    coverImage: {
      src: '2018-11-07_Edutainment',
      objectPosition: 'object-bottom',
      alt: 'Drawing of a boy in front of an egged house.'
    },
    videos: [{ vimeoId: '354709668' }]
  },
  {
    date: "Mar '19",
    medium: ['AfterEffects'],
    description:
      'Lyric video focusing on transforming audio into visual representations.',
    coverImage: {
      src: '2018-03-20_Lyrics',
      objectPosition: 'object-center'
    },
    videos: [{ vimeoId: '352082622' }]
  }
]

export const illustration: Project[] = [
  {
    date: "Nov '19",
    medium: ['Photoshop'],
    description:
      'Series of speed paint portraits based on references from /r/RedditGetsDrawn.',
    coverImage: {
      src: '2019-11-15_Process_Portrait_(1)',
      objectPosition: 'object-center',
      alt: 'Rough digital painting in bright, high contrast colors.'
    },
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
    coverImage: {
      src: '2019-07-22_Screenprint_(1)',
      objectPosition: 'object-center',
      alt: 'Geometric screenprint placed amongst a wall of graffiti.'
    },
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
    coverImage: {
      src: '2017-11-20_Patterns',
      objectPosition: 'object-center'
    },
    images: [{ src: '2017-11-20_Patterns' }]
  },
  {
    date: "Oct '17",
    medium: ['Photoshop'],
    description: 'Study on different modes of drawing.',
    coverImage: {
      src: '2017-10-30_Modes',
      objectPosition: 'object-center',
      alt: 'A plant illustrated in 5 different styles.'
    },
    images: [
      {
        src: '2017-10-30_Modes'
      }
    ]
  },
  {
    date: "Sept '17",
    medium: ['Illustrator'],
    description: 'Composition of only squares.',
    coverImage: {
      src: '2017-09-25_Squares',
      objectPosition: 'object-center'
    },
    images: [{ src: '2017-09-25_Squares' }]
  }
]

export const videography: Project[] = [
  {
    date: "Sept '21",
    medium: ['Premiere'],
    description:
      'Immersive short comedy featuring the Cha Cha Slide by DJ Casper',
    coverImage: {
      src: 'GetFunky_Cover',
      alt: '"360 Video" icon seen through a set of goggles.'
    },
    videos: [{ vimeoId: '713918755' }]
  },
  {
    date: "Sept '18",
    medium: ['Premiere'],
    description: "A variant on the 'chalk talk' style of stop motion.",
    coverImage: {
      src: '2018-09-25_Chalk_Talk',
      objectPosition: 'object-center',
      alt: 'Woman in front of a whiteboard reacting to a drawn arrow behind her.'
    },
    videos: [{ vimeoId: '352083851' }]
  },
  {
    date: "Sept '18",
    medium: ['Premiere'],
    description:
      'Claymation conceptualized by visualizing a predetermined cartoon soundtrack.',
    coverImage: {
      src: '2018-09-19_Claymation',
      objectPosition: 'object-center',
      alt: 'Arrangement of clay balls.'
    },
    videos: [{ vimeoId: '352083588' }]
  },
  {
    date: "Apr '18",
    medium: ['Premiere'],
    description: 'An impressionistic recollection of a season of dance.',
    coverImage: {
      src: '2018-04-23_Sum_Preview',
      objectPosition: 'object-center',
      alt: 'Collage of performers in matching positions.'
    },
    videos: [{ vimeoId: '352082744' }]
  },
  {
    date: "Feb '18",
    medium: ['Premiere'],
    description: 'Short study on performance.',
    coverImage: {
      src: '2018-02-26_Twister',
      objectPosition: 'object-bottom',
      alt: 'Staircase with scattered sticky notes.'
    },
    videos: [{ vimeoId: '352082020' }]
  }
]
