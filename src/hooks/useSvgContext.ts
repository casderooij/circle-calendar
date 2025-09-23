import { createContext, useContext } from 'react'

export const svgContext = createContext({ size: 0 })

export const useSvgContext = () => useContext(svgContext)
