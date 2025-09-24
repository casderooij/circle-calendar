import { useRef, useState } from 'react'
import { Months } from './components/Months'
import { SvgContainer } from './components/svgContainer'
import { YearCircle } from './components/yearCircle'
import { YearLines } from './components/yearLines'
import { useWindowSize } from './hooks/useMinWindowSize'
import type { BoundingBox, Centroid } from './types'

function App() {
  const [transform, setTransform] = useState('')
  const [transformOrigin, setTransformOrigin] = useState('')
  const { width, height, minSize } = useWindowSize()
  const svgRef = useRef<SVGSVGElement>(null)

  const handleMonthClick = (boundingBox: BoundingBox, centroid: Centroid) => {
    if (!svgRef.current) return

    const svgRect = svgRef.current.getBoundingClientRect()
    const scale =
      Math.min(width / boundingBox.width, height / boundingBox.height) * 0.8

    const originX = centroid.x - svgRect.x - width / 2
    const originY = centroid.y - svgRect.y - height / 2

    const translateX = width / 2 - centroid.x
    const translateY = height / 2 - centroid.y

    setTransformOrigin(`${originX}px ${originY}px`)
    setTransform(`translate(${translateX}px, ${translateY}px) scale(${scale})`)
  }

  const resetZoom = () => {
    setTransform('')
    setTransformOrigin('')
  }

  return (
    <main className="relative h-screen w-full">
      <SvgContainer svgRef={svgRef} size={minSize}>
        <g
          style={{
            transform,
            transformOrigin,
            transition: 'transform 0.5s',
          }}
        >
          <YearCircle />
          <YearLines />
          <Months onMonthClick={handleMonthClick} />
        </g>
      </SvgContainer>
      {transform && (
        <button
          onClick={resetZoom}
          className="absolute top-4 right-4 rounded-md bg-white px-4 py-2 shadow-md"
        >
          Reset Zoom
        </button>
      )}
    </main>
  )
}

export default App
