import type { ArcMonth } from '../types'

interface MonthProps {
  month: ArcMonth
}

export function Month({ month }: MonthProps) {
  function handleClick() {
    console.log(`check out ${month.name}`)
  }
  return (
    <path
      d={month.arc}
      fill="transparent"
      stroke="black"
      className="cursor-pointer transition-colors hover:fill-amber-400"
      onClick={handleClick}
    />
  )
}
