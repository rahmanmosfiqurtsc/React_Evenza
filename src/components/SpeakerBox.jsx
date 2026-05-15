import React from 'react'
import ShareIcon from '../assets/shareicon.png'



const SpeakerBox = ({ immh, sphd, spp }) => {
  return (
    <div className='w-117.5 h-159 bg-[#F6F6F7] rounded-[20px]'>
      <img src={immh} />
      <div className='mt-7 flex justify-between px-10'>
        <div >
          <h4 className='font-bold text-[20px] leading-5.5'>{sphd}</h4>
          <p className='text-[#737681] leading-[25.6px]'>{spp}</p>
        </div>
        <div className='bg-primary rounded-[20px] h-10 w-10 p-2.5'>
          <img src={ShareIcon} />
        </div>
      </div>
      
    </div>
  )
}

export default SpeakerBox
