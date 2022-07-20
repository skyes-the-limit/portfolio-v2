import React from 'react'

type VimeoPlayerProps = {
  id: string
  loop?: boolean
  autoplay?: boolean
}

// TODO: Dynamically accept non-16:9 ratios
const VimeoPlayer = ({
  id,
  loop = false,
  autoplay = false
}: VimeoPlayerProps) => {
  const src = `https://player.vimeo.com/video/${id}?h=865e6c60d8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=${
    autoplay ? 1 : 0
  }&loop=${loop ? 1 : 0}`
  return (
    <div className='w-[calc(100vw-4rem)] xs:w-[calc(100vw-6rem)] sm:w-[calc(100vw-8rem)] md:w-[calc(100vw-10rem)] lg:w-[calc(100vw-12rem)]'>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src={src}
          frameBorder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          allowFullScreen
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%'
          }}
        ></iframe>
      </div>
      <script src='https://player.vimeo.com/api/player.js' />
    </div>
  )
}

export default VimeoPlayer
