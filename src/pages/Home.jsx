import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/Banner'
import Scroller from '../components/Scroller'
import Sliders from '../components/Sliders'
import PicBox from '../components/PicBox'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Sliders />
      <PicBox />
    </div>
  )
}

export default Home