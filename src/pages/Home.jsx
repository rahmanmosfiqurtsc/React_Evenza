import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/Banner'
import Scroller from '../components/Scroller'
import Sliders from '../components/Sliders'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Scroller />
      <Sliders />
    </div>
  )
}

export default Home