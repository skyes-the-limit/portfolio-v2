import React from 'react'

type Link = {
  logoSrc: string
  logoHeight: string
  paddingY: string
  buttonColor: string
  href: string
}

// TODO: Update content on ArtStation, Gumroad, and Instagram and uncomment
const links: Link[] = [
  // {
  //   logoSrc: 'ArtStation-logo-horizontal-dark.svg',
  //   logoHeight: 'h-16',
  //   paddingY: 'py-2',
  //   buttonColor: '#171717',
  //   href: 'https://www.artstation.com/skyes-the-limit'
  // },
  // {
  //   logoSrc: 'Gumroad_logo.svg',
  //   logoHeight: 'h-6',
  //   paddingY: 'py-7',
  //   buttonColor: '#ff90e8',
  //   href: 'https://skyesthelimit.gumroad.com/'
  // },
  {
    logoSrc: 'vimeo_logo_blue.svg',
    logoHeight: 'h-10',
    paddingY: 'py-5',
    buttonColor: '#1ab7ea',
    href: 'https://vimeo.com/user101521186'
  },
  // {
  //   logoSrc: 'Instagram_wordmark.svg',
  //   logoHeight: 'h-12',
  //   paddingY: 'py-4',
  //   buttonColor: '#ffffff',
  //   href: 'https://www.instagram.com/skye.makes.cgi/'
  // },
  {
    logoSrc: 'LI-Logo.webp',
    logoHeight: 'h-10',
    paddingY: 'py-5',
    buttonColor: '#ffffff',
    href: 'https://www.linkedin.com/in/skye-bishop-854212172/'
  },
  {
    logoSrc: 'github_logo_black.svg',
    logoHeight: 'h-10',
    paddingY: 'py-5',
    buttonColor: '#ffffff',
    href: 'https://github.com/skyes-the-limit'
  }
]

const LinkFarm = () => {
  return (
    <div className='mx-auto w-fit'>
      <div className='container grid gap-6 auto-cols-min-content mx-auto grid-cols-1 xs:grid-cols-2 md:grid-cols-3'>
        {links &&
          links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='w-fit'
            >
              <button
                type='button'
                className={`flex justify-center w-60 xs:w-[204px] w-60 px-6 sm:px-8 ${link.paddingY} space-x-2 font-semibold text-lg rounded-md`}
                style={{ backgroundColor: link.buttonColor }}
              >
                <img
                  key={link.logoSrc}
                  src={require(`../../assets/icons/${link.logoSrc}`)}
                  className={`inline-block ${link.logoHeight} w-[140px]`}
                />
              </button>
            </a>
          ))}
      </div>
    </div>
  )
}

export default LinkFarm
