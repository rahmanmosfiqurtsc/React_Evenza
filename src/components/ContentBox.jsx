import React from 'react'
import Arow from '../assets/arrow.png'
import CCSS from '../assets/ccss.png'

const ContentBox = ({ heaad, parap,imah }) => {
  return (
    <div className='w-86.25 h-105 bg-[#ffffff28] hover:bg-primary rounded-[20px] p-10 group'>
      <img src={imah} className='group-hover:bg-white/80 bg-primary p-[13px] rounded-[10px]' />
      <h4 className='pt-25 pb-3 font-bold text-[20px] text-white leading-5.5'>{heaad}</h4>
      <p className=' text-white leading-[25.6px]'>{parap}</p>
      <div className='text-white flex gap-[9.67px] border-t border-white/10 mt-[33px] pt-[31px]'>
        <a href='#'>Read More</a>
        <img src={Arow} />
      </div>
    </div>
  )
}

export default ContentBox
