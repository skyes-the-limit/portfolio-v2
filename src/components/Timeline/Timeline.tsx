import React from 'react'

type Event = {
  title: string,
  date: string,
  description: string
}

const events: Event[] = [
  {
    title: 'Toast',
    date: 'January 2021 - Present',
    description: 'I currently work on Toast\'s "Mobile Dining Solutions" team, responsible for the Order and Pay at Table, Scan to Pay, and Digital Menus products. I primarily work as a React developer, though I sometimes take design projects on as well.'
  },
  {
    title: 'Cuseum',
    date: 'April 2020 - June 2020',
    description: 'TODO'
  },
  {
    title: 'Toast',
    date: 'January 2020 - April 2020',
    description: 'TODO'
  },
  {
    title: 'Chewy',
    date: 'January 2019 - June 2019',
    description: 'TODO'
  },
  {
    title: 'Digital Fabrication Assistant with CAMD',
    date: 'October 2018 - December 2020',
    description: 'This is also a cool thing that I did that feels maybe worthy'
  },
  {
    title: 'Undergraduate Study at Northeastern University',
    date: 'September 2017 - May 2022',
    description: 'Graduated with a BS in Computer Science / Media Arts (Animation). During this time I completed 3 software engineering co-ops for a total of 20 months of full-time experience, with an additional 8 months of part-time work.'
  }
]

const Timeline = () => {
  return (
    <section className='text-left'>
      <div className='container max-w-5xl px-4 py-12 mx-auto'>
        <div className='grid gap-4 mx-4 sm:grid-cols-12'>
          <div className='col-span-12 sm:col-span-3'>
            <div className='text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-sky-400'>
              <h3 className='text-3xl font-semibold'>Skye Bishop</h3>
              <span className='text-sm font-bold tracking-wider uppercase text-gray-400'>Timeline</span>
            </div>
          </div>
          <div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
            <div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700'>
              {events && events.map(event => (
                <div
                  key={event.title}
                  className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-sky-400'
                >
                  <h3 className='text-xl font-semibold tracking-wide'>{event.title}</h3>
                  <time className='text-xs tracking-wide uppercase text-gray-400'>{event.date}</time>
                  <p className='mt-3'>{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
