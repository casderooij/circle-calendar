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

  const numLines = 12
  const lines = useMemo(() => {
    return Array.from({ length: numLines }, (_, i) => {
      const angle = (i / numLines) * Math.PI * 2
      const x1 = (radius - 50) * Math.cos(angle)
      const y1 = (radius - 50) * Math.sin(angle)
      const x2 = radius * Math.cos(angle)
      const y2 = radius * Math.sin(angle)
      return { x1, y1, x2, y2 }
    })
  }, [radius])

  return (
    <svg width={size} height={size} className="inline-block">
      <g transform={`translate(${size / 2}, ${size / 2})`}>
        <path d={arc} fill="#d0d0d0" />

        {lines.map((line, index) => (
          <line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#000"
            strokeWidth={1}
          />
        ))}
      </g>
    </svg>
  )
}
