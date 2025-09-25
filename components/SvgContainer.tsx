'use client'

import { useRef, useState, type ReactNode } from 'react'
import { useWindowSize } from '@/hooks/useWindowSize'
import { svgContext } from '@/contexts/svgContext'
import { Centroid } from '@/types'

interface SvgContainerProps {
  children: ReactNode
}

export function SvgContainer({ children }: SvgContainerProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const { width, height, size } = useWindowSize()
  const [centroid, setCentroid] = useState<Centroid | null>(null)

  return (
    <svgContext.Provider value={{ svgRef, size, centroid, setCentroid }}>
      <svg ref={svgRef} width="100%" height="100%" className="block">
        <g transform={`translate(${width / 2}, ${height / 2})`}>{children}</g>
      </svg>
    </svgContext.Provider>
  )
}
