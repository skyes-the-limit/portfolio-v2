export type Project = {
  date: string,
  medium: string,
  description: string,
  coverImageSrc: string,
  coverImagePosition?: 'object-center' | 'object-bottom',
  imageSrcs?: string[],
  videoSrcs?: string[],
  github?: string,
  collab?: string
}

// TODO: convert animated .gifs to looping videos, and images to .webp
// TODO: re-crop project cover images from square ratio to landscape
export const general3d: Project[] = [
  {
    date: `Apr '22`,
    medium: 'Houdini, Substance Painter, World Machine, Unreal Engine 4',
    description: `Virtual environment inspired by Iceland's basalt columns. Columns procedurally generated with Houdini, textured in Substance Painter. Terrain generated in World Machine and textured with Quixel Megascans materials. Assembled and rendered in UE4.`,
    coverImageSrc: 'IcelandicBasalt_cover.png',
    imageSrcs: ['IcelandicBasalt_HoudiniPreview.png', 'IcelandicBasalt_WorldMachinePreview.png'],
    videoSrcs: ['713927330']
  },
  {
    date: `Mar '22`,
    medium: 'Maya, Substance Painter, World Machine, Unreal Engine 4',
    description: 'Geodesic tent modeled in Maya and textured with Substance Painter. Furnished with free assets from TurboSquid. Terrain generated in World Machine. Assembled in UE4 with Quixel Megascans materials and vegetation.',
    coverImageSrc: 'BorealAurora_cover.png',
    imageSrcs: ['BorealAurora_concept.png', 'BorealAurora_process.png', 'BorealAurora_terrainPreview.png'],
    videoSrcs: ['713926631']
  },
  {
    date: `Dec '21`,
    medium: 'Maya, Substance Painter, Unreal Engine 5',
    description: `Virtual environment of a resort spaceship's lounge. Modeled in Maya, textured in Substance Painter, assembled and rendered in UE5.`,
    coverImageSrc: 'SpaceshipLounge_cover.png',
    videoSrcs: ['725470027']
  },
  {
    date: `Oct '21`,
    medium: 'Houdini, Substance Painter, Unreal Engine 5',
    description: 'Bio-engineered vegetation for Martian colonization. Models generated in Houdini, textured in Substance Painter, assembled and rendered in UE5.',
    coverImageSrc: 'MartianVegetation_cover.png',
    videoSrcs: ['726182601']
  },
  {
    date: `Sept '21`,
    medium: 'Maya, Substance Painter, Unreal Engine 5',
    description: 'SciFi chair for neurologically simulated virtual reality. Modeled in Maya, textured in Substance Painter, assembled and rendered in UE5.',
    coverImageSrc: 'VRChair_cover.png',
    videoSrcs: ['726300088']
  },
  {
    date: `Dec '20`,
    medium: 'Maya, ZBrush, Substance Painter',
    description: 'The endangered Pangolin has developed an adaptation to protect it from poachers! Low-poly mesh modeled in Maya, details sculpted in ZBrush. Textured with substance painter, rigged, animated and composited in Maya.',
    coverImageSrc: 'Pangolin_cover.png',
    videoSrcs: ['726303946', '726302583']
  },
  // {
  //   date: `Dec '19`,
  //   medium: 'Maya',
  //   description: 'Self portrait model.',
  //   coverImageSrc: '2019-12-12 Self Portrait Preview.png',
  //   imageSrcs: [
  //     '2019-12-12 Self Portrait (1).gif',
  //     '2019-12-12 Self Portrait (2).gif'
  //   ]
  // },
  {
    date: `Nov '19`,
    medium: 'Maya',
    description: 'Digital recreation of a small interior space.',
    coverImagePosition: 'object-center',
    coverImageSrc: '2019-11-05 Interior Preview.png',
    imageSrcs: [
      '2019-11-05 Interior (1).png',
      '2019-11-05 Interior (2).png'
    ]
  },
  {
    date: `Dec '18`,
    medium: 'Maya',
    description: 'Talent show act of an animated and rigged character.',
    coverImageSrc: '2018-12-14 Talent Show Preview.png',
    coverImagePosition: 'object-center',
    videoSrcs: [
      '352084087'
    ]
  },
  {
    date: `Nov '16`,
    medium: '3DS Max',
    description: 'Character model based on Castle Crashers.',
    coverImageSrc: '2016-11-18 Castle Crasher Preview.png',
    coverImagePosition: 'object-center',
    videoSrcs: [
      '353296476'
    ]
  }
]

export const techArt: Project[] = [
  // TODO: Finished SPL work
  {
    date: `Dec '21`,
    medium: 'Houdini',
    description: 'Experiment with vellum and combining Mixamo animations.',
    coverImageSrc: 'VellumDance_cover.png',
    videoSrcs: [
      '726342593'
    ]
  }
]

export const softwareDev: Project[] = [
  // Project work from graphics, software engineering, and web dev
  {
    date: `Apr '20`,
    medium: 'React.JS',
    description: 'Web tool for restaurants to manage their digital presence.',
    coverImageSrc: '2020-04-07 Toastweb Digital Presence Preview.png',
    imageSrcs: [
      '2020-04-07 Toastweb Digital Presence (1).png',
      '2020-04-07 Toastweb Digital Presence (2).png'
    ]
  },
  {
    date: `Mar '20`,
    medium: 'Swift',
    description: 'Contributions to the Toast Takeout iOS app, including contactless delivery, curbside pickup, confirmation screen order map, and delivery feedback.',
    coverImageSrc: '2020-03-20 Toast Takeout Preview.png',
    imageSrcs: [
      '2020-03-20 Toast Takeout (1).png',
      '2020-03-20 Toast Takeout (2).png',
      '2020-03-20 Toast Takeout (3).png',
      '2020-03-20 Toast Takeout (4).png',
      '2020-03-20 Toast Takeout (5).png'
    ]
  },
  {
    date: `Jan '20`,
    medium: 'React.JS',
    description: 'Web tool for configuring Toast Drop Points.',
    coverImageSrc: '2020-01-14 Outpost Config Admin Preview.png',
    imageSrcs: [
      '2020-01-14 Outpost Config Admin (1).png',
      '2020-01-14 Outpost Config Admin (2).png',
      '2020-01-14 Outpost Config Admin (3).png',
      '2020-01-14 Outpost Config Admin (4).png'
    ]
  },
  {
    date: `Dec '19`,
    medium: 'NativeScript.JS',
    description: 'Prototype for a social event planning app.',
    coverImageSrc: '2019-12-14 You In Preview.png',
    imageSrcs: [
      '2019-12-14 You In (1).jpg',
      '2019-12-14 You In (2).jpg',
      '2019-12-14 You In (3).jpg',
      '2019-12-14 You In (4).jpg',
      '2019-12-14 You In (5).jpg',
      '2019-12-14 You In (6).jpg',
      '2019-12-14 You In (7).jpg',
      '2019-12-14 You In (8).jpg',
      '2019-12-14 You In (9).jpg'
    ],
    collab: 'Shravya Raj, Clara Kim & Sunny Lee',
    github: 'you-in'
  },
  {
    date: `Jun '19`,
    medium: 'Java\u3000|\u3000Vue.JS',
    description: 'Internal tool designed and implemented during co-op at Chewy for managing their Ship Route data.',
    coverImageSrc: '2019-06-28 Ship Route Manager Preview.png',
    imageSrcs: [
      '2019-06-28 Ship Route Manager (1).png',
      '2019-06-28 Ship Route Manager (2).png',
      '2019-06-28 Ship Route Manager (3).png',
      '2019-06-28 Ship Route Manager (4).png',
      '2019-06-28 Ship Route Manager (5).png',
      '2019-06-28 Ship Route Manager (6).png',
      '2019-06-28 Ship Route Manager (7).png',
      '2019-06-28 Ship Route Manager (8).png',
      '2019-06-28 Ship Route Manager (9).png',
      '2019-06-28 Ship Route Manager (10).png',
      '2019-06-28 Ship Route Manager (11).png',
      '2019-06-28 Ship Route Manager (12).png',
      '2019-06-28 Ship Route Manager (13).png',
      '2019-06-28 Ship Route Manager (14).png',
      '2019-06-28 Ship Route Manager (15).png',
      '2019-06-28 Ship Route Manager (16).png',
      '2019-06-28 Ship Route Manager (17).png',
      '2019-06-28 Ship Route Manager (18).png'
    ]
  },
  {
    date: `Dec '18`,
    medium: 'Java',
    description: 'A simplified animation editing interface.',
    coverImageSrc: '2018-12-13 Animator Preview.png',
    imageSrcs: [
      '2018-12-13 Animator.png'
    ],
    github: 'animator'
  },
  {
    date: `Mar '18`,
    medium: 'Java',
    description: 'A recreation of the Microsoft classic Minesweeper',
    coverImageSrc: '2018-03-27 Minesweeper Preview.png',
    imageSrcs: [
      '2018-03-27 Minesweeper.png'
    ]
  }
]

export const creativeCoding: Project[] = [
  // TODO: Graphics project
  {
    date: `Jul '19`,
    medium: 'Processing',
    description: 'Using google image search as an input, render images via various shapes.',
    coverImageSrc: '2019-07-29 Simple Image Processing Preview.png',
    imageSrcs: [
      '2019-07-29 Simple Image Processing (1).png',
      '2019-07-29 Simple Image Processing (2).png',
      '2019-07-29 Simple Image Processing (3).png',
      '2019-07-29 Simple Image Processing (4).png',
      '2019-07-29 Simple Image Processing (5).png',
      '2019-07-29 Simple Image Processing (6).png'
    ],
    github: 'creative-coding/tree/master/OutsideData'
  },
  {
    date: `Jul '19`,
    medium: 'Processing',
    description: 'Made in processing and then used to control the LED facade on the Ars Electronica Center in Linz, Austria.',
    coverImageSrc: '2019-07-26 Austauschstadt Preview.png',
    imageSrcs: [
      '2019-07-26 Austauschstadt (1).png',
      '2019-07-26 Austauschstadt (2).png',
      '2019-07-26 Austauschstadt (3).png',
      '2019-07-26 Austauschstadt (4).png',
      '2019-07-26 Austauschstadt (5).png',
      '2019-07-26 Austauschstadt (6).png',
      '2019-07-26 Austauschstadt (7).png'
    ],
    videoSrcs: [
      '353297101',
      '355991818'
    ],
    collab: 'Kriti Gurubacharya & Maggie Van Nortwick',
    github: 'creative-coding/tree/master/FacadePortal'
  },
  {
    date: `Jul '19`,
    medium: 'Processing',
    description: 'Tessellating hexagons based on Perlin Noise.',
    coverImageSrc: '2019-07-14 Generative Tessellations Preview.png',
    imageSrcs: [
      '2019-07-14 Generative Tessellations (1).png',
      '2019-07-14 Generative Tessellations (2).png',
      '2019-07-14 Generative Tessellations (3).png',
      '2019-07-14 Generative Tessellations (4).png',
      '2019-07-14 Generative Tessellations (5).png',
      '2019-07-14 Generative Tessellations (6).png'
    ],
    videoSrcs: [
      '353274180'
    ],
    github: 'creative-coding/tree/master/GenerativeDesign'
  },
  {
    date: `Jul '19`,
    medium: 'Processing',
    description: 'Allows users to draw with complex polygons.',
    coverImageSrc: '2019-07-06 Drawing Machine Preview.png',
    imageSrcs: [
      '2019-07-06 Drawing Machine (1).png',
      '2019-07-06 Drawing Machine (2).png',
      '2019-07-06 Drawing Machine (3).png',
      '2019-07-06 Drawing Machine (4).png',
      '2019-07-06 Drawing Machine (5).png',
      '2019-07-06 Drawing Machine (6).png',
      '2019-07-06 Drawing Machine (7).png',
      '2019-07-06 Drawing Machine (8).png',
      '2019-07-06 Drawing Machine (9).png',
      '2019-07-06 Drawing Machine (10).png',
      '2019-07-06 Drawing Machine (11).png',
      '2019-07-06 Drawing Machine (12).png',
      '2019-07-06 Drawing Machine (13).png'
    ],
    videoSrcs: [
      '356239943'
    ],
    github: 'creative-coding/tree/master/DrawingMachine'
  }
]

export const motionGraphics: Project[] = [
  {
    date: `Nov '18`,
    medium: 'Photoshop\u3000|\u3000AfterEffects',
    description: `An educational video on different culture's 'Halloween-esque' holidays.`,
    coverImageSrc: '2018-11-07 Edutainment Preview.png',
    coverImagePosition: 'object-bottom',
    videoSrcs: [
      '354709668'
    ],
    collab: 'Ryan Nuz & Raveena Jain'
  },
  {
    date: `Mar '19`,
    medium: 'AfterEffects',
    description: 'Lyric video focusing on transforming audio into visual representations.',
    coverImageSrc: '2018-03-20 Lyrics.png',
    coverImagePosition: 'object-center',
    videoSrcs: [
      '352082622'
    ]
  }
]

export const illustration: Project[] = [
  {
    date: `Nov '19`,
    medium: 'Photoshop',
    description: 'Series of speed paint portraits based on references from /r/RedditGetsDrawn.',
    coverImageSrc: '2019-11-15 Process Portrait Preview.png',
    coverImagePosition: 'object-center',
    imageSrcs: [
      '2019-11-15 Process Portrait (1).png',
      '2019-11-15 Process Portrait (2).png',
      '2019-11-15 Process Portrait (3).png',
      '2019-11-15 Process Portrait (4).png',
      '2019-11-15 Process Portrait (5).png',
      '2019-11-15 Process Portrait (6).png',
      '2019-11-15 Process Portrait (7).png',
      '2019-11-15 Process Portrait (8).png',
      '2019-11-15 Process Portrait (9).png',
      '2019-11-15 Process Portrait (10).png',
      '2019-11-15 Process Portrait (11).png',
      '2019-11-15 Process Portrait (12).png',
      '2019-11-15 Process Portrait (13).png',
      '2019-11-15 Process Portrait (14).png'
    ]
  },
  {
    date: `Jul '19`,
    medium: 'Screenprinted Fabric',
    description: 'Exploration of tagging and graffiti using publicly sited textiles.',
    coverImageSrc: '2019-07-22 Screenprint Preview.png',
    coverImagePosition: 'object-center',
    imageSrcs: [
      '2019-07-22 Screenprint (1).jpg',
      '2019-07-22 Screenprint (2).jpg',
      '2019-07-22 Screenprint (3).jpg',
      '2019-07-22 Screenprint (4).jpg',
      '2019-07-22 Screenprint (5).jpg',
      '2019-07-22 Screenprint (6).jpg'
    ]
  },
  {
    date: `Nov '17`,
    medium: 'Illustrator',
    description: 'Patterns generated from swatches of a plant drawing.',
    coverImageSrc: '2017-11-20 Patterns Preview.png',
    coverImagePosition: 'object-center',
    imageSrcs: [
      '2017-11-20 Patterns.png'
    ]
  },
  {
    date: `Oct '17`,
    medium: 'Photoshop',
    description: 'Study on different modes of drawing.',
    coverImagePosition: 'object-center',
    coverImageSrc: '2017-10-30 Modes Preview.png',
    imageSrcs: [
      '2017-10-30 Modes.png'
    ]
  },
  {
    date: `Sept '17`,
    medium: 'Illustrator',
    description: 'Composition of only squares.',
    coverImagePosition: 'object-bottom',
    coverImageSrc: '2017-09-25 Squares Preview.png',
    imageSrcs: [
      '2017-09-25 Squares.png'
    ]
  }
]

export const videography: Project[] = [
  {
    date: `Sept '21`,
    medium: 'Premiere',
    description: `Immersive short comedy featuring the Cha Cha Slide by DJ Casper`,
    coverImageSrc: 'GetFunky_Cover.png',
    videoSrcs: [
      '713918755'
    ]
  },
  {
    date: `Sept '18`,
    medium: 'Premiere',
    description: `A variant on the 'chalk talk' style of stop motion.`,
    coverImageSrc: '2018-09-25 Chalk Talk Preview.png',
    coverImagePosition: 'object-center',
    videoSrcs: [
      '352083851'
    ],
    collab: 'Ryan Nuz & Raveena Jain'
  },
  {
    date: `Sept '18`,
    medium: 'Premiere',
    description: 'Claymation conceptualized by visualizing a predetermined cartoon soundtrack.',
    coverImageSrc: '2018-09-19 Claymation Preview.png',
    coverImagePosition: 'object-center',
    videoSrcs: [
      '352083588'
    ]
  },
  {
    date: `Apr '18`,
    medium: 'Premiere',
    description: 'An impressionistic recollection of a season of dance.',
    coverImageSrc: '2018-04-23 Sum Preview.png',
    coverImagePosition: 'object-center',
    videoSrcs: [
      '352082744'
    ]
  },
  {
    date: `Feb '18`,
    medium: 'Premiere',
    description: 'Short study on performance.',
    coverImagePosition: 'object-bottom',
    coverImageSrc: '2018-02-26 Twister Preview.png',
    videoSrcs: [
      '352082020'
    ]
  }
]
