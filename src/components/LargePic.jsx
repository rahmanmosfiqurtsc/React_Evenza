import React from 'react'
import Dot from '../assets/dot.png'
import Arrow from '../assets/arrow.png'
import Lrgpicbox from './Lrgpicbox'

const LargePic = () => {
  return (
    <div className='bg-[url(./assets/bg-lg-pic.png)] h-202.5 bg-no-repeat bg-cover text-white flex justify-center bg-[#161A2D] backdrop-opacity-60'>

      <Lrgpicbox Topp="Panels"
      Headingg="Interactive Panel Discussions" />
      <Lrgpicbox Topp="Networking"
      Headingg="Connect With Top Professionals" />
      <Lrgpicbox Topp="Resources"
      Headingg="Exclusive Access Event Material" />
      <Lrgpicbox Topp="Updates"
      Headingg="Real-Time Event Announcement" />

    </div>
  )
}

export default LargePic
