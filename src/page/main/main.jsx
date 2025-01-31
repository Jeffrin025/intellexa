import Home from '../home/Home'
import Card from '../../component/card/Card'
import About from '../about/about'
import { Events } from '../../component/events'
import { Footer } from '../../component/footer'

function Main() {

  return (
    <div className='min-h-screen w-screen max-w-screen-2xl'>
      <Home />
      <About />
      <Events />
      <Footer />
      {/* <About />
      <Card /> */}
    </div>
  )
}

export default Main;
