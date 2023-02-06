import React from 'react'
import { FaTwitterSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className=''>
      <div className='w-full h-full bg-slate-900 font-medium px-10 py-10 mt-20'>
        <div className='flex flex-col items-center justify-center sm:gap-4 gap-8'>
          <div className='flex items-center justify-between text-white sm:gap-6 gap-4 sm:flex-row flex-col'>
            <div className='hover:underline duration-150 cursor-pointer'>Features</div>
            <div className='hover:underline duration-150 cursor-pointer'>Feedback</div>
            <div className='hover:underline duration-150 cursor-pointer'>About</div>
            <div className='hover:underline duration-150 cursor-pointer'>Company</div>
            <div className='hover:underline duration-150 cursor-pointer'>Destination</div>
          </div>
          <div className='flex items-center justify-between text-white gap-2'>
            <div><FaTwitterSquare size={23} /></div>
            <div><FaFacebookSquare size={23} /></div>
            <div><FaLinkedin size={23} /></div>
          </div>
          <div className='text-white sm:text-left text-center'><p>©️ 2023 Travelguide . All rights reserved</p></div>
        </div>
      </div>
    </div>
  )
}

export default Footer