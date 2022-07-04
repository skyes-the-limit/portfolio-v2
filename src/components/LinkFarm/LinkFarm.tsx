import React from 'react'

type Link = {
  logoSrcs: string[]
  logoHeight: string
  paddingY: string
  buttonColor: string
  href: string
}

// TODO: Add Github here and to the footer as well
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
    logoSrcs: ['vimeo_logo_blue.svg'],
    logoHeight: 'h-10',
    paddingY: 'py-5',
    buttonColor: '#1ab7ea',
    href: 'https://vimeo.com/user101521186'
  },
  {
    logoSrcs: ['Instagram_Glyph_Gradient_RGB.svg', 'Instagram_wordmark.svg'],
    logoHeight: 'h-12',
    paddingY: 'py-4',
    buttonColor: '#ffffff',
    href: 'https://www.instagram.com/skye.makes.cgi/'
  },
  {
    logoSrcs: ['LI-Logo.png'],
    logoHeight: 'h-10',
    paddingY: 'py-5',
    buttonColor: '#ffffff',
    href: 'https://www.linkedin.com/in/skye-bishop-854212172/'
  },
  {
    logoSrcs: ['github_mark_black.svg', 'github_logo_black.svg'],
    logoHeight: 'h-10',
    paddingY: 'py-5',
    buttonColor: '#ffffff',
    href: 'https://github.com/skyes-the-limit'
  }
]

const LinkFarm = () => {
  return (
    // TODO: Figure out why w-fit isn't recognized by tailwind
    <div className='mx-auto' style={{ width: 'fit-content' }}>
      <div className='container grid gap-6 auto-cols-min-content mx-auto grid-cols-2 md:grid-cols-3'>
        {links &&
          links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              style={{ width: 'fit-content' }}
            >
              <button
                type='button'
                className={`flex justify-center w-60 px-8 ${link.paddingY} space-x-2 font-semibold text-lg rounded-md`}
                style={{ backgroundColor: link.buttonColor }}
              >
                {link.logoSrcs.map((src) => (
                  <img
                    key={src}
                    src={require(`../../assets/icons/${src}`)}
                    className={`inline-block ${link.logoHeight}`}
                  />
                ))}
              </button>
            </a>
          ))}
      </div>
    </div>
  )
}

export default LinkFarm
