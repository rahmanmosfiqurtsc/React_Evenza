import React from 'react'
import Dottt from '../assets/dot.png'

const headed = ({para, heading}) => {
  return (
    <div className='text-center'>
      <div className='gap-2.25 flex items-center justify-center'>
        <img src={Dottt} />
        <h6 className='font-semibold text-[14px] text-white'>{para}</h6>
      </div>
      <div>
      <h1 className='font-semibold text-[48px] text-white leading-[52.8px] tracking-[-0.96px] w-[640px] mx-auto pt-3.5 pb-[84px]'>{heading}</h1>
      </div>
    </div>
  )
}

export default headed
