import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Destinations from './Components/Destinations'
import Search from './Components/Search'
import Selects from './Components/Selects'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
  <Navbar/>
  <Hero/>
  <Destinations/>
  <Search/>
    <Selects/>
    <Carousel/>
    <Footer/>
    </div>
  )
}

export default App