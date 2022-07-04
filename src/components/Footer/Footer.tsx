import React from 'react'

type Icon = {
  title: string,
  logoSrc: string,
  href: string
}

const icons: Icon[] = [
  {
    title: 'ArtStation',
    logoSrc: 'ArtStation-logomark-white.svg',
    href: 'https://www.artstation.com/skyes-the-limit'
  },
  {
    title: 'Gumroad',
    logoSrc: 'Gumroad_icon.svg',
    href: 'https://skyesthelimit.gumroad.com/'
  },
  {
    title: 'Instagram',
    logoSrc: 'Instagram_Glyph_White.svg',
    href: 'https://www.instagram.com/skye.makes.cgi/'
  },
  {
    title: 'Vimeo',
    logoSrc: 'vimeo_icon_white.svg',
    href: 'https://vimeo.com/user101521186'
  },
  {
    title: 'LinkedIn',
    logoSrc: 'LinkedIn_Icon_white.svg',
    href: 'https://www.linkedin.com/in/skye-bishop-854212172/'
  }
]

const IconLink = ({ title, logoSrc, href }: Icon) => {
  return (
    <a target='_blank' rel='noopener noreferrer' href={href} title={title} className='flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-900 hover:bg-gray-700'>
      <img
        className='w-4 h-4'
        src={logoSrc}
      />
    </a>
  )
}

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-50'>
      <div className='container flex justify-between items-center p-4 mx-auto md:p-8 lg:flex-row divide-gray-400'>
        <div className='text-gray-400'>
          © All rights reserved
        </div>
        <div className='flex flex-col justify-center pt-6 lg:pt-0'>
          <div className='flex justify-center space-x-4'>
            {icons.map(icon => (
              <IconLink key={icon.title} title={icon.title} logoSrc={require(`../../assets/icons/${icon.logoSrc}`)} href={icon.href} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
