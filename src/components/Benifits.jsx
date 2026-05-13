import React from 'react'
import Dott from '../assets/dot.png'
import Benefitimg1 from '../assets/benefits1.png'
import Benefitimg2 from '../assets/benefits2.png'
import Bnbg1 from '../assets/bnbg1.png'
import Bnbg2 from '../assets/bnbg2.png'
import Bnbg3 from '../assets/bfbg3.png'
import Bbfg1 from '../assets/bbfg1.png'
import Bbfg2 from '../assets/bbfg2.png'


const Benifits = () => {
  return (
    <div>
      <div className='container pt-25 flex justify-between gap-15'>
        <div className='pt-5 w-[705px]'>
          <div className='flex gap-1.5 items-center pb-2.5'>
            <img src={Dott} />
            <h6 className='font-semibold text-[14px]'>Key Benefits</h6>
          </div>
          <h2 className='font-semibold text-[48px] leading-[52.8px] tracking-[-0.96px] pb-[35.79px]'>Key advantages that ensure your events stand out</h2>
          <div className='border-t border-[#161A2D]/10'>
            <div className='flex justify-between gap-5 pt-10'>
              <img src={Bnbg2} className='pb-[23px]' />
              <div>
                <h6 className='font-bold text-[20px] leading-[22px] pb-[9px]'>Expert-Led Keynote Sessions</h6>
                <p className='leading-[25.6px] text-[#737681]'>Experience inspiring keynote sessions led by industry experts who share valuable insights, trends, and strategies to help you grow personally and professionally.</p>
              </div>
            </div>
            <div className='flex justify-between gap-5 pt-10'>
              <img src={Bnbg1} className='pb-[23px]' />
              <div>
                <h6 className='font-bold text-[20px] leading-[22px] pb-[9px]'>Advanced Event Technology</h6>
                <p className='leading-[25.6px] text-[#737681]'>Experience inspiring keynote sessions led by industry experts who share valuable insights, trends, and strategies to help you grow personally and professionally.</p>
              </div>
            </div>
          </div>
          <div className='pt-10 pb-30'>
            <img src={Bnbg3} />
          </div>
        </div>
        <div className='w-[705px]'>
          <div className='flex justify-start relative'>
            <img src={Benefitimg1} className='absolute hover:z-10'/>
            <img src={Benefitimg2} className='absolute left-[256px] top-[202px]' />
            <img src={Bbfg1} className='absolute left-[556px] top-[11px]' />
            <img src={Bbfg2} className='absolute left-[100px] top-[500px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benifits
