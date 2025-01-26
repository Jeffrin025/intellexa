import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BG from './component/bg/bg'
import Home from './page/home/Home'
import Event from './page/event/Event'
import B from './b'
import Card from './component/card/Card'
import About from './page/about/about'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <About/>
    {/* <Card/> */}
    {/* <Event/> */}
    <B/>
    </>
  )
}

export default App
