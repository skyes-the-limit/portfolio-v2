import React from 'react'

export interface CardProps {
  title?: string,

}

const LargeCard = () => {
  return (
    <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
      <div>
        <img src="https://source.unsplash.com/random/400x600/" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 rounded-lg" />
        <h2 className="mb-1 text-xl font-semibold">Section Title</h2>
        <p className="text-sm text-gray-400">Section description. Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
        <p className='text-center text-xs font-medium tracking-widest uppercase text-sky-400 mt-4'>See More</p>
      </div>
    </div>
  )
}

export default LargeCard
