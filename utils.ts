import { Centroid } from '@/types'

export function calculateRadius(size: number, margin: number) {
  return size / 2 - margin
}

export function getCssTransform(
  svgElement: SVGSVGElement | null,
  centroid: Centroid | null,
) {
  if (!svgElement) {
    return ``
  }

  if (!centroid) {
    return 'translate(0px, 0px) scale(1)'
  }

  const { x: svgX, y: svgY, width, height } = svgElement.getBoundingClientRect()
  console.log({ svgX, svgY, width, height })

  const scale = 2

  const x = -svgX + scale * (svgX + width / 2 - centroid.x)
  const y = -svgY + scale * (svgY + height / 2 - centroid.y)

  return `translate(${x}px, ${y}px) scale(${scale})`
}
