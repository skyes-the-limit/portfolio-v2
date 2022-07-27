import React from 'react'

type ImageProps = {
  src: string
  className?: string
  alt?: string
  style?: object
}

const Image = ({ src, className = '', alt = '', style = {} }: ImageProps) => {
  return (
    <picture>
      <source
        srcSet={require(`../../assets/${src}-xs.webp`)}
        media='(max-width: 639px)'
        type='image/webp'
      />
      <source
        srcSet={require(`../../assets/${src}-sm.webp`)}
        media='(max-width: 767px)'
        type='image/webp'
      />
      <source
        srcSet={require(`../../assets/${src}-md.webp`)}
        media='(max-width: 1023px)'
        type='image/webp'
      />
      <source
        srcSet={require(`../../assets/${src}-lg.webp`)}
        media='(max-width: 1279px)'
        type='image/webp'
      />
      <source
        srcSet={require(`../../assets/${src}-xl.webp`)}
        media='(max-width: 1535px)'
        type='image/webp'
      />
      <source
        srcSet={require(`../../assets/${src}-2xl.webp`)}
        type='image/webp'
      />

      <img
        src={require(`../../assets/${src}.webp`)}
        alt={alt}
        className={className}
        style={style}
      />
    </picture>
  )
}

export default Image
