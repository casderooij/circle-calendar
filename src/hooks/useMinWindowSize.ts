import { useEffect, useState } from 'react'

export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0, minSize: 0 })

  useEffect(() => {
    function checkWindowSize() {
      const width = window.innerWidth
      const height = window.innerHeight

      setSize({ width, height, minSize: Math.min(width, height) })
    }

    checkWindowSize()
    window.addEventListener('resize', () => checkWindowSize())

    return () => window.removeEventListener('resize', () => checkWindowSize())
  }, [])

  return size
}
