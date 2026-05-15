import React from 'react'
import Arrow from '../assets/arrow.png'
import Dot from '../assets/dot.png'

const Lrgpicbox = ({Topp,Headingg}) => {
  return (
    <div className='pt-171.25 px-15 hover:border-2 hover:border-blue-600 hover:pt-146.25 hover:pb-15 group'>
      <div className='flex gap-2.25 items-center'>
          <img src={Dot} />
          <p>{Topp}</p>
        </div>
        <h4>{Headingg}</h4>
        <div className='hidden group-hover:block'>
          <p>Build meaningful relationships with industry
            leaders, innovators.</p>
          <div className='flex gap-2.5'>
            <a href='#'>Read more</a>
            <img src={Arrow} />
          </div>

        </div>
      
    </div>
  )
}

export default Lrgpicbox
