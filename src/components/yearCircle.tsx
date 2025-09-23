import * as d3 from 'd3'
import { useMemo } from 'react'
import { useMinWindowSize } from '../hooks/useMinWindowSize'

const MARGIN = 20

export function YearCircle() {
  const size = useMinWindowSize()
  const radius = size / 2 - MARGIN

  const arc = useMemo(() => {
    return d3.arc()({
      innerRadius: radius - 50,
      outerRadius: radius,
      startAngle: 0,
      endAngle: Math.PI * 2,
    }) as string
  }, [size])

  return (
    <svg width={size} height={size} className="inline-block">
      <g transform={`translate(${size / 2}, ${size / 2})`}>
        <path d={arc} fill="#d0d0d0" />
      </g>
    </svg>
  )
}
