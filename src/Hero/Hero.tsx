import React from 'react'

// Consider looping-video background a la https://y.co/
const Hero = () => {
  return (
    <section className='w-full'>
      <video
        autoPlay
        loop
        muted
        preload='auto'
        playsInline
        webkit-playsinline=''
        className='block object-cover w-full'
        style={{ height: 'calc(100vh - 8rem)' }}
        src='https://player.vimeo.com/progressive_redirect/playback/680369099/rendition/720p?loc=external&amp;oauth2_token_id=1269526533&amp;signature=e0c3bf273805e4a68e61735631c8878c848a519e176de423e3708b835d55a2b6'
      ></video>
    </section>
  )
}

export default Hero
