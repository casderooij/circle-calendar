import { Months } from './components/Months'
import { SvgContainer } from './components/svgContainer'
import { YearCircle } from './components/yearCircle'
import { YearLines } from './components/yearLines'

function App() {
  return (
    <main className="grid min-h-screen w-screen place-content-center">
      <SvgContainer>
        <YearCircle />
        <YearLines />
        <Months />
      </SvgContainer>
    </main>
  )
}

export default App
