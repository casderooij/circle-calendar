import * as d3 from 'd3'
import { useMemo } from 'react'
import { useSvgContext } from '../hooks/useSvgContext'
import type { ArcMonth, BoundingBox, Centroid } from '../types'
import { calculateRadius } from '../utils'
import { Month } from './Month'

const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 },
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 },
]

interface MonthsProps {
  onMonthClick: (boundingBox: BoundingBox, centroid: Centroid) => void
}

export function Months({ onMonthClick }: MonthsProps) {
  const { size } = useSvgContext()
  const radius = calculateRadius(size)

  const arcMonthList = useMemo<ArcMonth[]>(() => {
    const totalDays = 365
    let startAngle = 0

    return months.map((month) => {
      const endAngle = startAngle + (month.days / totalDays) * Math.PI * 2
      const arc = d3.arc()({
        innerRadius: radius - 50,
        outerRadius: radius,
        startAngle,
        endAngle,
      }) as string
      startAngle = endAngle
      return { ...month, arc }
    })
  }, [radius])

  return (
    <>
      {arcMonthList.map((month, index) => (
        <Month key={index} month={month} onMonthClick={onMonthClick} />
      ))}
    </>
  )
}
