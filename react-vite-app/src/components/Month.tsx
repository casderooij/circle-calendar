import { useRef } from 'react'
import type { ArcMonth, BoundingBox, Centroid } from '../types'

interface MonthProps {
  month: ArcMonth
  onMonthClick: (boundingBox: BoundingBox, centroid: Centroid) => void
}

export function Month({ month, onMonthClick }: MonthProps) {
  const pathRef = useRef<SVGPathElement>(null)

  const handleClick = () => {
    if (pathRef.current) {
      const boundingBox = pathRef.current.getBoundingClientRect()
      const centroid = {
        x: boundingBox.x + boundingBox.width / 2,
        y: boundingBox.y + boundingBox.height / 2,
      }
      onMonthClick(boundingBox, centroid)
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
