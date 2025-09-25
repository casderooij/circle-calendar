import { createContext, useContext, type RefObject } from 'react'

export const svgContext = createContext<{
  size: number
  svgRef: RefObject<SVGSVGElement> | null
}>({ size: 0, svgRef: null })

export const useSvgContext = () => useContext(svgContext)
