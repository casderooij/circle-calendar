import { useEffect, useState } from 'react'

export function useMinWindowSize() {
  const [size, setSize] = useState(0)

  useEffect(() => {
    function checkWindowSize() {
      const width = window.innerWidth
      const height = window.innerHeight

      setSize(Math.min(width, height))
    }

    checkWindowSize()
    window.addEventListener('resize', () => checkWindowSize())

    return () => window.removeEventListener('resize', () => checkWindowSize())
  }, [])

  return size
}
