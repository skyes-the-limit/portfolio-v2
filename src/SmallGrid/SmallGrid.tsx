import React from 'react'
import SmallCard from '../SmallCard/SmallCard'

const SmallGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </div>
  )
}

export default SmallGrid
