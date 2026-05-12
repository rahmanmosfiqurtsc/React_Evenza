import React, { useEffect, useState } from 'react'
import Backg from '../assets/Background.png'
import Btn from './Btn'
import imgg1 from '../assets/auth1.png'
import imgg2 from '../assets/auth2.png'
import imgg3 from '../assets/auth3.png'
import Link from '../assets/Link.png'

const CountDownBox = ({ number, text }) => {
  return (
    <div className='w-31.25 h-29.75 flex items-center justify-center flex-col bg-white/10 rounded-[20px]'>
      <strong className='font-bold text-[40px] text-white'>{number}</strong>
      <span className='text-white'>{text}</span>
    </div>

  )
}

const CountDown = ({ targetDate }) => {

  const tttimeLeft = () => {
    const difference = new Date(targetDate) - new Date()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / (1000 * 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),

      }
    }

    return {
      days: 0, hours: 0, minutes: 0, seconds: 0
    }

  }

  const [timeLeft, settimeLeft] = useState(tttimeLeft())


  useEffect(() => {
    const timer = setInterval(()=> {
      settimeLeft(tttimeLeft)
    }, 1000);
    return ()=> clearInterval(timer)
  }, [])

  return (
    <div className='flex justify-center gap-7.5 pb-37.5'>
      <CountDownBox number={timeLeft.days} text="Days" />
      <CountDownBox number={timeLeft.hours} text="Hours" />
      <CountDownBox number={timeLeft.minutes} text="Minutes" />
      <CountDownBox number={timeLeft.seconds} text="Seconds" />
    </div>
  )
}

const Banner = () => {
  return (
    <div className="bg-[url(./assets/Background.png)] bg-cover bg-centre bg-no-repeat pt-75">
      <div className='container'>
        <div className='flex text-white justify-center font-semibold text-[14px] bg-white/10 w-[242px] items-center mx-auto rounded-[100px] h-[43px]'>
          <img src={imgg1} />
          <img src={imgg2} />
          <img src={imgg3} />
          <h5>Ideas that spark change.</h5>
        </div>
        <div className='text-center text-white'>

          <h1 className='text-[76px] leading-20.75 font-extrabold tracking-[-1.52px] mt-2 mb-4'>Connecting Minds to Shape
            Tomorrow's Big Ideas</h1>
          <p className='leading-[25.6px] w-[733.5px] mx-auto'>Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—
            exchanging ideas that spark growth, innovation, and meaningful change.</p>
          <div className='pt-13.25 flex justify-center gap-10'>
            <Btn>Explore Schedule</Btn>
            <div className='flex justify-between w-[152.5px] items-center'>
              <img src={Link} />
              <p className='leading-[17.6px]  font-bold'>Watch Video</p>
            </div>

          </div>
          <div>
            <h2 className='text-5 leading-5.5 font-bold pt-15 pb-10'>Upcoming Speaker Reveal - Don't Miss Out</h2>
          </div>
          <CountDown targetDate={"2026-05-27T23:59:59"} />
        </div>
      </div>
    </div>
  )
}

export default Banner
