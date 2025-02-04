import Home from '../home/Home'
import About from '../../component/about'
import { Events } from '../../component/events'
import { Footer } from '../../component/footer'
import FAQ from '../faq/faq'

function Main() {

  return (
    <div className='min-h-screen w-screen max-w-screen-2xl'>
      <Home />
      <About />
      <Events />
      <FAQ/>
      <Footer />
    </div>
  )
}

export default Main;
