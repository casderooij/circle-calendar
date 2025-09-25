import { Months } from '@/components/Months'
import { SvgContainer } from '@/components/SvgContainer'
import { SvgZoom } from '@/components/SvgZoom'
import { Year } from '@/components/Year'

export default function Home() {
  return (
    <main className="relative h-screen w-full">
      <SvgContainer>
        <SvgZoom>
          <Year />
          <Months />
        </SvgZoom>
      </SvgContainer>
    </main>
  )
}
