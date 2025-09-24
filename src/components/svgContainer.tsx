import { type ReactNode, type RefObject } from 'react'
import { svgContext } from '../hooks/useSvgContext'
import { useWindowSize } from '../hooks/useMinWindowSize'

interface SvgContainerProps {
  children: ReactNode
  svgRef: RefObject<SVGSVGElement>
  size: number
}

export function SvgContainer({ children, svgRef, size }: SvgContainerProps) {
  const { width, height } = useWindowSize()
  return (
    <svgContext.Provider value={{ size, svgRef }}>
      <svg ref={svgRef} width="100%" height="100%" className="block">
        <g transform={`translate(${width / 2}, ${height / 2})`}>{children}</g>
      </svg>
    </svgContext.Provider>
  )
}
