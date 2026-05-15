import React, { useState } from 'react'
import SS from '../assets/bggs.png'
import Headed from './headed'
import DayOne from './DayOne'
import DayTwo from './DayTwo'
import DayThree from './DayThree'

const Eventschedule = () => {

  const [click, setClick] = useState("dayOne")

  const TabContent = () => {
    if (click == "dayOne")
    return(
        <DayOne />
      
    );
    if (click == "dayTwo")
    return(
        <DayTwo />
      
    );
    if (click == "dayThree")
    return(
        <DayThree />
      
    );

  }

  return (
    <div className='bg-[url(./assets/bggs.png)] py-25 h-[1020.5px]'>
      <div className='container'>
        <div className='text-white'>
        <Headed heading="Our Event Schedule"
          para="Explore the complete schedule for our event" />
        </div>
        <div className='flex justify-center mx-auto text-white bg-[#FFFFFF]/10 w-125 rounded-[100px]'>
          <div onClick={() => setClick("dayOne")} className=' w-35 rounded-[100px] text-center font-bold text-[20px] leading-4 py-4.25 hover:text-black hover:bg-white '>Day 01</div>
          <div onClick={() => setClick("dayTwo")} className=' w-35 rounded-[100px] text-center font-bold text-[20px] leading-4 py-4.25 hover:text-black hover:bg-white '>Day 02</div>
          <div onClick={() => setClick("dayThree")} className=' w-35 rounded-[100px] text-center font-bold text-[20px] leading-4 py-4.25 hover:text-black hover:bg-white '>Day 03</div>


        </div>
      <div> {
          TabContent()
        }</div>
      </div>

    </div>
  )
}

export default Eventschedule
