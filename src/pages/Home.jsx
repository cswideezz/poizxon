// import React from 'react'

import Faq from "../components/layout/Faq/Faq"
import Hero from "../components/layout/Hero/Hero"
import Income from "../components/layout/Income/Income"
import Mix from "../components/layout/Mix/Mix"
import Price from "../components/layout/Price/Price"


const Home = () => {
  return (
    <>
      <Hero />
      <Mix />
      <Income />
      {/* <Faq /> */}
      <Price />
    </>
  )
}

export default Home