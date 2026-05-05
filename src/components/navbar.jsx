import React from 'react'
import Logo from '../assets/Logo.png'
import Btn from './Btn'
import { IoIosArrowDown } from "react-icons/io";





const navbar = () => {
  return (
    <>
      <nav>
        <div className="absolute top-0 left-0 w-full bg-[#ffffff26] backdrop-blur-lg">
          <div className='container py-6.25 flex justify-between items-center'>
            <div>
              <img src={Logo} alt=''></img>
            </div>
            <ul className='list-none flex gap-12.5 text-white'>
              <li className='flex items-center gap-2'>Home <IoIosArrowDown />
              </li>
              <li>About Us</li>
              <li>Schedule</li>
              <li>Blog</li>
              <li className='flex items-center gap-2'>Pages <IoIosArrowDown />
              </li>
              <li>Contact Us</li>

            </ul>
            <div>
              <Btn>Join the Conference</Btn>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default navbar
