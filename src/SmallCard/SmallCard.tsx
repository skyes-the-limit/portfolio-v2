import React from 'react'

const SmallCard = () => {
  return (
    <div className="rounded-md shadow-md bg-gray-900 text-gray-100">
      <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
      <div className="flex flex-col justify-between p-6 space-y-4">
        <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
        <p className="text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
        <p className='text-center text-xs font-medium tracking-widest uppercase text-sky-400'>See More</p>
      </div>
    </div>
  )
}

export default SmallCard
