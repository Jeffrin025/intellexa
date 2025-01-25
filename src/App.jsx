import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BG from './bg'
import Home from './Home'
import Book from './book'
import B from './b'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Book/>
    <B/>
    </>
  )
}

export default App
