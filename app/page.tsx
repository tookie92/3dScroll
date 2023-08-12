import AboutUs from '@/components/AboutUs'
import BuyNow from '@/components/BuyNow'
import CanvasContainer from '@/components/CanvasContainer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'


export default function Home() {
  return (
    <div>
      <Header/>
      <div className='h-screen fixed w-full top-0'>
        <CanvasContainer/>
      </div>
     
      
      <Hero/>

      
      <AboutUs/>
     
      <BuyNow/>
    </div>
  )
}
