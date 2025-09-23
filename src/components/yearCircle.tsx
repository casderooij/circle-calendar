import * as d3 from 'd3'
import { useMemo } from 'react'
import { useSvgContext } from '../hooks/useSvgContext'
import { calculateRadius } from '../utils'

export function YearCircle() {
  const { size } = useSvgContext()
  const radius = calculateRadius(size)

  const arc = useMemo(() => {
    return d3.arc()({
      innerRadius: radius - 50,
      outerRadius: radius,
      startAngle: 0,
      endAngle: Math.PI * 2,
    }) as string
  }, [size])

  return <path d={arc} fill="#d0d0d0" />
}
