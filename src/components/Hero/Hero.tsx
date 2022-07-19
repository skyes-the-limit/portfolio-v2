import React from 'react'

// TODO: Pause / slow playback speed / stop looping after passing a certain scroll %
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
        tabIndex={-1}
        className='block w-full'
        style={{ height: 'calc(100vh - 8rem)' }}
        src={require('../../assets/HelloParticles.webm')}
      ></video>
    </section>
  )
}

export default Hero
