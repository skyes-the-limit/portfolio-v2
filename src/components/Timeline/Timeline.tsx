import React from 'react'
import Badges from '../Badges/Badges'

type Event = {
  title: string
  date: string
  badges: string[]
  description: string
}

const events: Event[] = [
  {
    title: 'Tinuiti',
    date: 'March 2024 - Present',
    badges: ['React', 'Node', 'PostgreSQL'],
    description: 'Full-stack development on the product team.'
  },
  {
    title: 'Glowforge',
    date: 'April 2023 - February 2024',
    badges: ['React', 'Node'],
    description: 'Frontend development on the app team.'
  },
  {
    title: 'Toast',
    date: 'January 2020 - March 2023',
    badges: ['React', 'Node'],
    description: 'Frontend development on the Digital Ordering team.'
  },
  {
    title: 'Chewy',
    date: 'January 2019 - June 2019',
    badges: ['PostgreSQL', 'Java', 'Vue'],
    description: 'Full-stack development on the Fulfillment Planning team.'
  }
]

const Timeline = () => {
  return (
    <section className='text-left mx-auto pl-4 w-full max-w-5xl'>
      <h2 className='w-0 h-0 overflow-hidden'>Timeline</h2>
      <div className='container w-full'>
        <div className='relative col-span-12 sm:pl-4 space-y-6 sm:col-span-9'>
          <div className='col-span-12 space-y-12 relative pl-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700'>
            {events &&
              events.map((event, index) => (
                <div
                  key={index}
                  className='flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-sky-400'
                >
                  <div className='flex flex-row justify-between items-center'>
                    <h3 className='text-2xl font-semibold tracking-wide pr-2'>
                      {event.title}
                    </h3>
                    <Badges badges={event.badges} />
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
