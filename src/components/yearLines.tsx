import { useMemo } from 'react'
import { useSvgContext } from '../hooks/useSvgContext'
import { calculateRadius } from '../utils'

export function YearLines() {
  const { size } = useSvgContext()
  const radius = calculateRadius(size)

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
    <>
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
    </>
  )
}
