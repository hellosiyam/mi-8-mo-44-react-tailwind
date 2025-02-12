import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/Daisy nav/DaisyNav'
import NavBar from './components/Nav Bar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl text-white bg-blue-800'>Vite + React + Tailwind</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
