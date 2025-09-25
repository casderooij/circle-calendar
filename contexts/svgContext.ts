import { Centroid } from '@/types'
import { createContext, Dispatch, SetStateAction, type RefObject } from 'react'

export const svgContext = createContext<{
  svgRef: RefObject<SVGSVGElement | null>
  size: number
  centroid: Centroid | null
  setCentroid: Dispatch<SetStateAction<Centroid | null>>
}>({
  svgRef: { current: null },
  size: 0,
  centroid: null,
  setCentroid: () => {},
})
