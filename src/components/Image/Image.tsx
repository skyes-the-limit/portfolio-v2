import React from 'react'

type ImageProps = {
  src: string
  className?: string
  alt?: string
}

const Image = ({ src, className = '', alt = '' }: ImageProps) => {
  return (
    <picture>
      <source
        srcSet={`/img/${src}-sm.webp`}
        media='(max-width: 640px)'
        type='image/webp'
      />
      <source
        srcSet={`/img/${src}-md.webp`}
        media='(max-width: 768px)'
        type='image/webp'
      />
      <source
        srcSet={`/img/${src}-lg.webp`}
        media='(max-width: 1024px)'
        type='image/webp'
      />
      <source
        srcSet={`/img/${src}-xl.webp`}
        media='(max-width: 1280px)'
        type='image/webp'
      />
      <source srcSet={`/img/${src}-2xl.webp`} type='image/webp' />

      <img src={`/img/${src}.webp`} className={className} alt={alt} />
    </picture>
  )
}

export default Image
