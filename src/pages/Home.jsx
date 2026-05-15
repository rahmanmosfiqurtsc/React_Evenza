import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/Banner'
import Scroller from '../components/Scroller'
import Sliders from '../components/Sliders'
import PicBox from '../components/PicBox'
import Feature from '../components/Feature'
import Benifits from '../components/Benifits'
import Eventschedule from '../components/Eventschedule'
import DayOne from '../components/DayOne'
import Speakers from '../components/Speakers'
import LargePic from '../components/LargePic'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Sliders />
      <PicBox />
      <Feature />
      < Benifits />
      <Eventschedule />
      <Speakers />
      <LargePic />
    </div>
  )
}

export default Home