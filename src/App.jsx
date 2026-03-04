import React from 'react'
import Navbar from './assets/Component/Navbar'
import Hero from './assets/Component/Hero'
import Features from './assets/Component/Features'
import Pricing from './assets/Component/Pricing'
import Testimonials from './assets/Component/Testimonials'
import Footer from './assets/Component/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-900 text-white  overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonials/>
      <Footer/>





    </div>
  )
}

export default App