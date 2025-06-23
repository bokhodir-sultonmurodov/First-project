import Carousel from '@/components/carusel/Carousel'
import Gallery from '@/components/gallery/Gallery'
import Hero from '@/components/hero/Hero'
import Products from '@/components/products/Products'
import Range from '@/components/range/Range'
import React from 'react'

const Home = () => {
  return (
    <div>
      {/* <h2>Home</h2> */}
      <Hero/>
      <Range/>
      <Products/>
      <Carousel/>
      {/* <Gallery/> */}
    </div>
  )
}

export default Home