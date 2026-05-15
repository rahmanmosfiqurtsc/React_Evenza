import React from 'react'
import Headed from './headed'
import SpeakerBox from './SpeakerBox'
import Link1 from '../assets/Link1.png'
import Link2 from '../assets/Link2.png'
import Link3 from '../assets/Link3.png'
import Phone from '../assets/phone.png'
import Auth11 from '../assets/Auth11.png'

const Speakers = () => {
  return (
    <div className='text-black py-25' >
      <div >
        <Headed heading="Introducing the expert speakers joining our event"
          para="Our Speakers" />
      </div>
      <div className='flex container'>
        <SpeakerBox
          immh={Link1}
          sphd="Sophia Rodrigues"
          spp="Global Marketing Director" />
        <SpeakerBox
          immh={Link2}
          sphd="Sophia Rodrigues"
          spp="Global Marketing Director" />
        <SpeakerBox
          immh={Link3}
          sphd="Sophia Rodrigues"
          spp="Global Marketing Director" />
      </div>
      <div className='flex gap-5.5 items-center justify-center mt-16.25 text-[#737681] '>
        <div className='flex items-center justify-center '>
          <img className='relative' src={Auth11} />
          <img className='absolute ml-6' src={Phone} />
        </div>
        <p>Join our speaker and help weave innovation, quality, and success together worldwide.</p>

      </div>

    </div>
  )
}

export default Speakers
