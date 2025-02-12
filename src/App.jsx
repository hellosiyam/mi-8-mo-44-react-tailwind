import './App.css'
import DaisyNav from './components/Daisy nav/DaisyNav'
import NavBar from './components/Nav Bar/NavBar'

function App() {

  return (
    <>
      <DaisyNav></DaisyNav>
      <h1 className='text-7xl text-white bg-blue-800'>Vite + React + Tailwind</h1>
      <NavBar></NavBar>
    </>
  )
}

export default App
