import { useEffect, useState } from 'react'

export function useWindowSize() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [size, setSize] = useState(0)

  useEffect(() => {
    function checkWindowSize() {
      const width = window.innerWidth
      const height = window.innerHeight

      setWidth(width)
      setHeight(height)
      setSize(Math.min(width, height))
    }

    checkWindowSize()
    window.addEventListener('resize', () => checkWindowSize())

    return () => window.removeEventListener('resize', () => checkWindowSize())
  }, [])

  return { width, height, size }
}
