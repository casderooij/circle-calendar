import { type ReactNode } from 'react'
import { useMinWindowSize } from '../hooks/useMinWindowSize'
import { svgContext } from '../hooks/useSvgContext'

interface SvgContainerProps {
  children: ReactNode
}

export function SvgContainer({ children }: SvgContainerProps) {
  const size = useMinWindowSize()

  return (
    <svgContext.Provider value={{ size }}>
      <svg width={size} height={size} className="inline-block">
        <g transform={`translate(${size / 2}, ${size / 2})`}>{children}</g>
      </svg>
    </svgContext.Provider>
  )
}
