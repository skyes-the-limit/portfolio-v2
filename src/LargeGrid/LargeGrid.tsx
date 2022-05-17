import React from 'react'
import LargeCard from '../LargeCard/LargeCard'

const LargeGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <LargeCard />
      <LargeCard />
    </div>
  )
}

export default LargeGrid
