'use client'

import { useSvgContext } from '@/hooks/useSvgContext'
import { getCssTransform } from '@/utils'
import { type ReactNode } from 'react'

interface SvgZoomProps {
  children: ReactNode
}

export function SvgZoom({ children }: SvgZoomProps) {
  const { svgRef, centroid } = useSvgContext()

  return (
    <g
      style={{ transform: getCssTransform(svgRef.current, centroid) }}
      className="transition-transform duration-700"
    >
      {children}
    </g>
  )
}
