import React from 'react'
import { useInView } from 'react-intersection-observer'

import './Badges.css'

type BadgesProps = {
  badges: string[]
}

const Badges = ({ badges }: BadgesProps) => {
  const { ref: firstIntersectionRef, inView: firstInView } = useInView({
    threshold: 0.98
  })

  const { ref: lastIntersectionRef, inView: lastInView } = useInView({
    threshold: 0.98
  })

  const getIntersection = (index: number) => {
    if (index === 0) {
      return firstIntersectionRef
    } else if (index === badges.length - 1) {
      return lastIntersectionRef
    } else {
      return undefined
    }
  }

  // TODO: Allow for horizontal drag-scrolling on desktop
  return (
    <div className='relative overflow-hidden'>
      {!firstInView && badges.length > 1 && (
        <div className='feather featherBeginning' />
      )}
      <p className='hideScrollbar flex space-x-2 text-xs font-medium uppercase overflow-auto'>
        {badges.map((badge, index) => (
          <span
            key={index}
            className='h-6 flex items-center px-3 py-0.5 rounded-md text-gray-900 bg-sky-400 text-xs font-medium whitespace-nowrap'
            ref={getIntersection(index)}
          >
            {badge}
          </span>
        ))}
      </p>
      {!lastInView && badges.length > 1 && (
        <div className='feather featherEnd' />
      )}
    </div>
  )
}

export default Badges
