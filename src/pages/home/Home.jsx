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
    </div>
  )
}

export default Home