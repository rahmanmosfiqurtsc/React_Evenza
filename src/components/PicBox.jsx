import React from 'react'
import Overly from '../assets/overly.png'
import Pplimg from '../assets/pplimg.png'
import Yearsimg from '../assets/yearsimg.png'
import Dott from '../assets/dot.png'
import Cont1 from '../assets/Cont1.png'
import Cont2 from '../assets/Cont2.png'
import Cont3 from '../assets/Cont3.png'


const PicBox = () => {
  return (
    <div className='container pt-25 flex justify-between gap-[45px]'>
      <div className='w-[750px]'>
        <div className='flex relative'>
          <div >
            <img src={Pplimg} />
          </div>
          <div className='absolute ml-[352px] mt-[175px]'>
            <img src={Overly} />
          </div>
          <div className='absolute ml-[112.5px] mt-[460px]'>
            <div className='relative flex'>
              <img src={Yearsimg} />
              <div className='absolute bg-[#F6F6F7] rounded-[47px] mt-[53px] ml-[53px] w-[94px] h-[94px] justify-center items-center flex'>
                <h2 className='font-bold leading-9.25 text-[34px]'>25+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[750px]'>
        <div className='flex gap-[6px] items-center pb-2.5'>
          <img src={Dott} />
          <h6 className='font-semibold text-[14px]'>About Us</h6>
        </div>
        <h2 className='font-semibold text-[48px] leading-[52.8px] tracking-[-0.96px] pb-[17.8px]'>Uncover our mission & purpose behind this event</h2>
        <p className='leading-[25.6px] text-[#737681] text-justify'>Discover the vision that drives this event—a commitment to bringing together innovators, <br></br>leaders, and changemakers to share knowledge, spark inspiration, and create meaningful<br></br>connections.</p>
        <div className='flex gap-7.5 my-13'>
          <div className='bg-[#F6F6F7] hover:bg-[#FFFFFF] rounded-[10px] px-15.25 py-4.75 font-bold leading-5 text-center'>Our Mission</div>
          <div className='bg-[#F6F6F7] hover:bg-[#FFFFFF] rounded-[10px] px-15.25 py-4.75 font-bold leading-5 text-center'>Our Vision</div>
          <div className='bg-[#F6F6F7] hover:bg-[#FFFFFF] rounded-[10px] px-15.25 py-4.75 font-bold leading-5 text-center'>Our Goal</div>
        </div>
        <div>
          <p className='leading-[25.6px] text-[#737681] text-justify'>Our vision is to build a global community where collaboration fuels innovation we aim encourage fresh thinking, spark inspiring dialogues, and create a space.</p>
          <div className='flex gap-[30px] my-[42px]'>
            <img src={Cont1} />
            <img src={Cont2} />
          </div>
          <div>
            <img src={Cont3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PicBox
