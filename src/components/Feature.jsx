import React from 'react'
import Headed from './headed'
import ContentBox from './ContentBox'
import SSS from '../assets/ssss.png'
import CCSS from '../assets/iccn.png'
import CCSS1 from '../assets/iccn2.png'
import CCSS2 from '../assets/iccn3.png'
import CCSS3 from '../assets/iccn4.png'
import STAR from '../assets/star.png'

const Feature = () => {
  return (
    <div className='bg-[url(./assets/ssss.png)] pt-25'>
      <div className='text-white'>
      <Headed
        para="Core Feature"
        heading="Core features that power our
        exceptional services"
      />
      </div>

      <div className='container flex gap-7.5'>
        <ContentBox
          imah={CCSS}
          parap="Deliver seamless virtual experience with high-quality streaming and interactive tools."
          heaad="Event Planning Manage"
        />
        <ContentBox
          imah={CCSS1}
          parap="Deliver seamless virtual experience with high-quality streaming and interactive tools."
          heaad="Conference Coordination"
        />
        <ContentBox
          imah={CCSS2}
          parap="Deliver seamless virtual experience with high-quality streaming and interactive tools."
          heaad="Venue Booking & Setup"
        />
        <ContentBox
          imah={CCSS3}
          parap="Deliver seamless virtual experience with high-quality streaming and interactive tools."
          heaad="Post-Event Analytics"
        />

      </div>
      <h5 className='text-white mt-15.5 text-center mx-auto'>Join our team and help weave innovation, quality, and success together worldwide.</h5>
      <div className='text-white mt-5.75 text-center mx-auto flex items-center justify-center gap-3.25 pb-25'>
        <p className='font-bold text-[20px]'>4.9/5</p>
        <div className='flex'>
        <img src={STAR} />
        <img src={STAR} />
        <img src={STAR} />
        <img src={STAR} />
        <img src={STAR} />
        </div>
        <p className='font-bold text-[20px]'> Our 4200 Review</p>

      </div>

    </div>
  )
}

export default Feature
