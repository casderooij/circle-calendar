import * as d3 from 'd3'
import { useMemo } from 'react'

export function YearCircle() {
  const width = 500
  const height = 500
  const MARGIN = 40

  const radius = Math.min(width, height) / 2 - MARGIN

  const arc = useMemo(() => {
    return d3.arc()({
      innerRadius: radius - 50,
      outerRadius: radius,
      startAngle: 0,
      endAngle: 360,
    }) as string
  }, [])

  return (
    <svg width="500" height="500" className="inline-block">
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        <path d={arc} fill="#d0d0d0" />
      </g>
    </svg>
  )
}
