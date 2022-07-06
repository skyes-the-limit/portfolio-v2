import React from 'react'

type Event = {
  title: string
  date: string
  badges: string[]
  description: string
}

const events: Event[] = [
  {
    title: 'Toast',
    date: 'January 2021 - Present',
    badges: ['React', 'Figma'],
    description:
      'Software Engineer I on the Mobile Dining Solutions team, responsible for the Order and Pay at Table, Scan to Pay, and Digital Menus products. Primarily focused on frontend development, sometimes flexing towards design as well.'
  },
  {
    title: 'Cuseum',
    date: 'April 2020 - June 2020',
    badges: ['Flutter', 'Vue'],
    description:
      'Software developer internship focused on rapid prototyping for new ventures.'
  },
  {
    title: 'Toast',
    date: 'January 2020 - April 2020',
    badges: ['React', 'Swift', 'Kotlin'],
    description:
      'Software engineering co-op focused on new ventures within Digital Ordering, including Toast Outposts and first-party delivery.'
  },
  {
    title: 'Chewy',
    date: 'January 2019 - June 2019',
    badges: ['PostgreSQL', 'Java', 'Vue'],
    description:
      'Software engineering co-op with the Fulfillment Planning team. Worked independently to develop full-stack project from start to finish.'
  },
  {
    title: "CAMD's Makerspace",
    date: 'October 2018 - December 2020',
    badges: [],
    description:
      "Worked part-time as a Digital Fabrication Assistant for Northeastern's College of Arts, Media, and Design, assisting students with laser cutting and 3D printing projects."
  },
  {
    title: 'Northeastern University',
    date: 'September 2017 - May 2022',
    badges: [],
    description:
      'Bachelor of Science in Computer Science / Media Arts (Animation), graduated cum laude.'
  }
]

const Timeline = () => {
  return (
    <section className='text-left mx-auto'>
      <div className='container max-w-5xl pl-4 mx-auto'>
        <div className='relative col-span-12 pl-4 space-y-6 sm:col-span-9'>
          <div className='col-span-12 space-y-12 relative pl-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700'>
            {events &&
              events.map((event, index) => (
                <div
                  key={index}
                  className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-400'
                >
                  <div className='flex flex-row justify-between'>
                    <h3 className='text-2xl font-semibold tracking-wide font-serif'>
                      {event.title}
                    </h3>
                    <div className='flex space-x-4'>
                      {event.badges.map((badge, index) => (
                        <span
                          key={index}
                          className='flex items-center px-3 border rounded-md text-gray-100 text-xs font-medium tracking-wide'
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <time className='text-xs tracking-wide uppercase text-gray-400'>
                    {event.date}
                  </time>
                  <p className='mt-3'>{event.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
