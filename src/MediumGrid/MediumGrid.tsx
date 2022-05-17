import React from 'react'
import MediumCard from '../MediumCard/MediumCard'

const MediumGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <MediumCard />
      <MediumCard />
      <MediumCard />
    </div>
  )
}

export default MediumGrid
