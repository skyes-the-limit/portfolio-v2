import React from 'react'

const MediumCard = () => {
  return (
    <div className="p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
      <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
      <h2 className="text-xl font-semibold tracking-wide mt-6 mb-2">Nam maximus purus</h2>
      <p className="text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
      <p className='text-center text-xs font-medium tracking-widest uppercase text-sky-400 mt-4'>See More</p>
    </div>
  )
}

export default MediumCard
