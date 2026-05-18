import React from 'react'
import Faqp from '../assets/Faqp.png'
import PhoneW from '../assets/PhoneWh.png'
import DOtt from '../assets/dot.png'
import AccordionUsage from './AccordionUsage'



const Faq = () => {
  return (
    <div className='container flex gap-11.25 py-25'>
      <div className='relative w-148.75'>
        <div >
          <img src={Faqp} />
        </div>
        <div className='p-3.75 rounded-tl-[20px] absolute bg-white bottom-0 right-0'>
          <div className='bg-primary p-6.25 w-55 h-58 text-white rounded-[10px]'>
            <h4 className='font-bold text-[20px] leading-6.5'>Your Questions, Clearly Answer</h4>
            <img className='pt-12.75 pb-4.25' src={PhoneW} />
            <p>+00 123 456 789</p>
          </div>

        </div>
      </div>
      <div className='w-207.5'>
        <div className='flex gap-2.25 items-center'>
        <img src={DOtt} />
        <h4>FAQ's</h4>
        </div>
        <h2>What our customers say about their experience</h2>
        <AccordionUsage/>
      </div>
    </div>
  )
}

export default Faq
