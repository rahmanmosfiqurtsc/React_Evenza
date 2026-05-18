import React from 'react'
import Play from '../assets/Play.png'

const Videopart = () => {
  return (
    <div className='bg-[url(./assets/Figure.png)] bg-cover bg-no-repeat h-205.75'>
      <div className='bg-primary w-25 h-25 rounded-[50px] relative left-1/2 top-1/2 backdrop-opacity-60'>
      <a href='https://youtu.be/7r1gNhgpDFs?si=enNRuME48dfGUZZs'><img src={Play} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/></a>
        
      </div>
    </div>
  )
}

export default Videopart
