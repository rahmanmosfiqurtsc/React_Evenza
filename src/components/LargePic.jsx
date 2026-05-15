import React from 'react'
import Dot from '../assets/dot.png'
import Arrow from '../assets/arrow.png'
import Lrgpicbox from './Lrgpicbox'

const LargePic = () => {
  return (
    <div className='bg-[url(./assets/bg-lg-pic.png)] h-202.5 bg-no-repeat bg-cover text-white flex justify-center'>

      <Lrgpicbox Topp="Panels"
      Headingg="Interactive Panel Discussions" />
      <Lrgpicbox Topp="Panels"
      Headingg="Interactive Panel Discussions" />
      <Lrgpicbox Topp="Panels"
      Headingg="Interactive Panel Discussions" />
      <Lrgpicbox Topp="Panels"
      Headingg="Interactive Panel Discussions" />

    </div>
  )
}

export default LargePic
