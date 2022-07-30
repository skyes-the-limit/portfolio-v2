import React from 'react'

type Icon = {
  title: string
  logoSrc: string
  logoAlt: string
  href: string
}

const icons: Icon[] = [
  {
    title: 'ArtStation',
    logoSrc: 'ArtStation-logomark-white.svg',
    logoAlt: 'ArtStation logo',
    href: 'https://www.artstation.com/skyes-the-limit'
  },
  {
    title: 'Gumroad',
    logoSrc: 'Gumroad_icon.svg',
    logoAlt: 'Gumroad logo',
    href: 'https://skyesthelimit.gumroad.com/'
  },
  {
    title: 'Vimeo',
    logoSrc: 'vimeo_icon_white.svg',
    logoAlt: 'Vimeo logo',
    href: 'https://vimeo.com/user101521186'
  },
  {
    title: 'Instagram',
    logoSrc: 'Instagram_Glyph_White.svg',
    logoAlt: 'Instagram logo',
    href: 'https://www.instagram.com/skye.makes.cgi/'
  },
  {
    title: 'LinkedIn',
    logoSrc: 'LinkedIn_Icon_white.svg',
    logoAlt: 'LinkedIn logo',
    href: 'https://www.linkedin.com/in/skye-bishop-854212172/'
  },
  {
    title: 'Github',
    logoSrc: 'github_mark_white.svg',
    logoAlt: 'Github logo',
    href: 'https://github.com/skyes-the-limit'
  }
]

const IconLink = ({ title, logoSrc, logoAlt, href }: Icon) => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      title={title}
      className='flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-900 hover:bg-gray-700'
    >
      <img className='w-4 h-4' src={logoSrc} alt={logoAlt} />
    </a>
  )
}

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-50 text-center'>
      <div className='container sm:flex justify-between items-center max-w-6xl mx-auto py-8 px-6 lg:flex-row divide-gray-400'>
        <div className='text-gray-400 text-base mb-4 sm:mb-0'>
          © All rights reserved
        </div>
        <div className='flex flex-col justify-center'>
          <div className='flex justify-center space-x-4'>
            {icons.map((icon) => (
              <IconLink
                key={icon.title}
                title={icon.title}
                logoSrc={require(`../../assets/icons/${icon.logoSrc}`)}
                logoAlt={icon.logoAlt}
                href={icon.href}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
