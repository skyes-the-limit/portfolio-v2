import React from 'react'

type Link = {
  logoSrcs: string[],
  logoHeight: string,
  paddingY: string,
  buttonColor: string,
  href: string
}

const links: Link[] = [
  {
    logoSrcs: ['ArtStation-logo-horizontal-dark.svg'],
    logoHeight: 'h-16',
    paddingY: 'py-2',
    buttonColor: '#171717',
    href: 'https://www.artstation.com/skyes-the-limit'
  },
  {
    logoSrcs: ['Gumroad_logo.svg'],
    logoHeight: 'h-6',
    paddingY: 'py-7',
    buttonColor: '#ff90e8',
    href: 'https://skyesthelimit.gumroad.com/'
  },
  {
    logoSrcs: ['Instagram_Glyph_Gradient_RGB.svg', 'Instagram_wordmark.svg'],
    logoHeight: 'h-12',
    paddingY: 'py-4',
    buttonColor: '#ffffff',
    href: 'https://www.instagram.com/skye.makes.cgi/'
  },
  {
    logoSrcs: ['vimeo_logo_blue.svg'],
    logoHeight: 'h-10',
    paddingY: 'py-5',
    buttonColor: '#1ab7ea',
    href: 'https://vimeo.com/user101521186'
  },
  {
    logoSrcs: ['LI-Logo.png'],
    logoHeight: 'h-10',
    paddingY: 'py-5',
    buttonColor: '#ffffff',
    href: 'https://www.linkedin.com/in/skye-bishop-854212172/'
  }
]

const LinkFarm = () => {
  return (
    <ul className='flex flex-col space-y-4'>
      {links && links.map(link => (
        <li key={link.href} className='flex justify-center'>
          <a href={link.href} target='_blank' rel='noreferrer'>
            <button
              type='button'
              className={`flex justify-center w-60 px-8 ${link.paddingY} space-x-2 font-semibold text-lg rounded-md`}
              style={{ backgroundColor: link.buttonColor }}
            >
              {link.logoSrcs.map(src => (
                <img
                  key={src}
                  src={require(`../../assets/icons/${src}`)}
                  className={`inline-block ${link.logoHeight}`}
                />
              ))}
            </button>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default LinkFarm
