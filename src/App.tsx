import { useRef, useState } from 'react'
import { Months } from './components/Months'
import { SvgContainer } from './components/svgContainer'
import { YearCircle } from './components/yearCircle'
import { YearLines } from './components/yearLines'
import { useWindowSize } from './hooks/useMinWindowSize'
import type { BoundingBox, Centroid } from './types'

function App() {
  const [transform, setTransform] = useState('')
  const { width, height, minSize } = useWindowSize()
  const svgRef = useRef<SVGSVGElement>(null)

  const handleMonthClick = (boundingBox: BoundingBox, centroid: Centroid) => {
    if (!svgRef.current) return

    const svgRect = svgRef.current.getBoundingClientRect()
    const scale =
      Math.min(width / boundingBox.width, height / boundingBox.height) * 0.8

    const translateX =
      -svgRect.x + scale * (svgRect.x + width / 2 - centroid.x)
    const translateY =
      -svgRect.y + scale * (svgRect.y + height / 2 - centroid.y)

    setTransform(`translate(${translateX}px, ${translateY}px) scale(${scale})`)
  }

  const resetZoom = () => {
    setTransform('')
  }

  return (
    <main className="relative h-screen w-full">
      <SvgContainer svgRef={svgRef} size={minSize}>
        <g
          className="transition-transform duration-700"
          style={{
            transform,
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
