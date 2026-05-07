import React from 'react'
import Icon1 from '../assets/icon-asterisk.png'

const Scroller = () => {
  return (
    <div className=' bg-primary max-w-478.25 max-h-20.25'>
     
          <div className='flex justify-center gap-7.5 items-center py-6'>
            <img src={Icon1} />
            <h5 className='font-bold text-7.5 leading-8 text-white'><a href="#" className='cursor-pointer'>Latest Updates</a></h5>
            <img src={Icon1} />
            <h5 className='font-bold text-7.5 leading-8 text-white'><a href="#" className='cursor-pointer'>New Announcements</a></h5>
            <img src={Icon1} />
            <h5 className='font-bold text-7.5 leading-8 text-white'><a href="#" className='cursor-pointer'>Workshop Alerts</a></h5>
            <img src={Icon1} />
            <h5 className='font-bold text-7.5 leading-8 text-white'><a href="#" className='cursor-pointer'>Live Notices</a></h5>
            <img src={Icon1} />
            <h5 className='font-bold text-7.5 leading-8 text-white'><a href="#" className='cursor-pointer'>Event Countdown</a></h5>
            <img src={Icon1} />
            <h5 className='font-bold text-7.5 leading-8 text-white'><a href="#" className='cursor-pointer'>Workshop Alerts</a></h5>
          </div>
        
    </div>

  )
}

export default Scroller
