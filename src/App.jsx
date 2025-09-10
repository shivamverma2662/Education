import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/hero/Hero'
import Program from './Components/programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Program/>
        <About/>
        <Title subTitle='Gallary' title='Campus Photos'/>
        <Campus/>
         <Title subTitle='TESTIMONIAL' title='What Student Says'/>
         <Testimonial/>
      </div>
    </div>
  )
}
export default App