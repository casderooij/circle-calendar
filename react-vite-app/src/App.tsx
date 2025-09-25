import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import { Months } from './components/Months'
import { SvgContainer } from './components/svgContainer'
import { YearCircle } from './components/yearCircle'
import { YearLines } from './components/yearLines'
import { useWindowSize } from './hooks/useWindowSize'
import type { BoundingBox, Centroid } from './types'

function App() {
  const [animate, setAnimate] = useState({ x: 0, y: 0, scale: 1 })
  const { width, height, minSize } = useWindowSize()
  const svgRef = useRef<SVGSVGElement>(null)

  const handleMonthClick = (boundingBox: BoundingBox, centroid: Centroid) => {
    if (!svgRef.current) return

    const svgRect = svgRef.current.getBoundingClientRect()
    const scale = 2
    // Math.min(width / boundingBox.width, height / boundingBox.height) * 0.8

    const x = -svgRect.x + scale * (svgRect.x + width / 2 - centroid.x)
    const y = -svgRect.y + scale * (svgRect.y + height / 2 - centroid.y)

    setAnimate({ x, y, scale })
  }

  const resetZoom = () => {
    setAnimate({ x: 0, y: 0, scale: 1 })
  }

  return (
    <main className="relative h-screen w-full">
      <SvgContainer svgRef={svgRef} size={minSize}>
        <motion.g animate={animate} transition={{ duration: 0.7 }}>
          <YearCircle />
          <YearLines />
          <Months onMonthClick={handleMonthClick} />
        </motion.g>
      </SvgContainer>
      {animate.scale !== 1 && (
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
