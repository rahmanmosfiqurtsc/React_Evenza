import React from 'react'
import Headed from './headed'
import Bgg1 from '../assets/bgg1.png'
import Bgg2 from '../assets/bgg2.png'
import Bgg3 from '../assets/bgg3.png'
import List from '../assets/List.png'

const Pricing = () => {
  return (
    <div className='py-25 container'>
      <Headed heading="Discover our flexible pricing plans
for attendees"
        para="Pricing Plan" />
      <div className='flex gap-7.5 justify-center'>
       <a href='#'><img src={Bgg1} /></a> 
        <img src={Bgg2} />
        <img src={Bgg3} />
      </div>
      <img className='pt-15 items-center mx-auto' src={List}/>
    </div>
  )
}

export default Pricing
