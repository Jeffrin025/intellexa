import { useState } from 'react'

import Home from '../home/Home'
import Card from '../../component/card/Card'
import About from '../about/about'



function Main() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <About/>
    <Card/>
    </>
  )
}

export default Main;
