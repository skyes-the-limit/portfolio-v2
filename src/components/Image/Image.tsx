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
        srcSet={`https://skye-bishop-portfolio-static.s3.us-west-2.amazonaws.com/${src}-xs.webp`}
        media='(max-width: 639px)'
        type='image/webp'
      />
      <source
        srcSet={`https://skye-bishop-portfolio-static.s3.us-west-2.amazonaws.com/${src}-sm.webp`}
        media='(max-width: 767px)'
        type='image/webp'
      />
      <source
        srcSet={`https://skye-bishop-portfolio-static.s3.us-west-2.amazonaws.com/${src}-md.webp`}
        media='(max-width: 1023px)'
        type='image/webp'
      />
      <source
        srcSet={`https://skye-bishop-portfolio-static.s3.us-west-2.amazonaws.com/${src}-lg.webp`}
        media='(max-width: 1279px)'
        type='image/webp'
      />
      <source
        srcSet={`https://skye-bishop-portfolio-static.s3.us-west-2.amazonaws.com/${src}-xl.webp`}
        media='(max-width: 1535px)'
        type='image/webp'
      />
      <source
        srcSet={`https://skye-bishop-portfolio-static.s3.us-west-2.amazonaws.com/${src}-2xl.webp`}
        type='image/webp'
      />

      <img
        src={`https://skye-bishop-portfolio-static.s3.us-west-2.amazonaws.com/${src}.webp`}
        alt={alt}
        className={className}
        style={style}
      />
    </picture>
  )
}

export default Image
