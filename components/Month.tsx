'use client'

import { useRef } from 'react'
import type { ArcMonth, BoundingBox, Centroid } from '@/types'
import { useSvgContext } from '@/hooks/useSvgContext'

interface MonthProps {
  month: ArcMonth
}

export function Month({ month }: MonthProps) {
  const pathRef = useRef<SVGPathElement>(null)
  const { setCentroid } = useSvgContext()

  const handleClick = () => {
    if (pathRef.current) {
      const boundingBox = pathRef.current.getBoundingClientRect()
      const centroid = {
        x: boundingBox.x + boundingBox.width / 2,
        y: boundingBox.y + boundingBox.height / 2,
      }

      setCentroid(centroid)
    }
  }

  return (
    <path
      ref={pathRef}
      d={month.arc}
      fill="transparent"
      stroke="black"
      className="cursor-pointer transition-colors hover:fill-amber-400"
      onClick={handleClick}
    />
  )
}
