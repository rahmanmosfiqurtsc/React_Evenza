import React from 'react'
import Arrow from '../assets/arrow.png'
import Dot from '../assets/dot.png'

const Lrgpicbox = ({Topp,Headingg}) => {
  return (
    <div className='pt-171.25 px-15 hover:border-5 hover:border-primary hover:pt-146.25 hover:pb-15 group bg-[#FFFFFF]/10 hover:bg-[#FFFFFF]/20 w-119.5'>
      <div className='flex gap-2.25 items-center'>
          <img src={Dot} />
          <p className='font-semibold text-[14px] leading-[15.4px]'>{Topp}</p>
        </div>
        <h4 className='font-bold text-[20px] leading-5.5 pt-3.25 pb-2'>{Headingg}</h4>
        <div className='hidden group-hover:block'>
          <p className='leading-[25.6px]'>Build meaningful relationships with industry
            leaders, innovators.</p>
          <div className='flex gap-2.5 pt-7.5'>
            <a className='font-bold' href='#'>Read more</a>
            <img src={Arrow} />
          </div>

        </div>
      
    </div>
  )
}

export default Lrgpicbox
