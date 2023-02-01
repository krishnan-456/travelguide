import React, { useState } from 'react'
import { SlPencil } from 'react-icons/sl'
import { AiOutlineHeart } from 'react-icons/ai'
// import { BiSearch } from 'react-icons/bi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () =>
    {
        setNav(!nav);
    }
    return (
        <div className='w-full h-20 bg-white sticky top-0 z-50'>
            <div className='w-full h-full flex items-center justify-between px-10'>
                <div>
                    <p className='text-xl text-slate-900 font-bold'><Link to='/'>Travel</Link></p>
                </div>
                <div className='md:flex hidden'>
                    <ul className='flex items-center justify-center'>
                        <li className='mr-8  font-semibold text-slate-900 flex items-center justify-center gap-2 cursor-pointer'>
                            <div className='lg:hover:bg-transparent md:hover:bg-gray-200 rounded-full p-2 duration-150 ease-in'><AiOutlineHeart size={23} /></div>
                            <div className='lg:flex hidden'>Destinations</div>
                        </li>
                        <li className='mr-8  font-semibold text-slate-900 flex items-center justify-center gap-2 cursor-pointer'>
                            <div className='lg:hover:bg-transparent md:hover:bg-gray-200 rounded-full p-2 duration-150 ease-in'><SlPencil size={18} /></div>
                            <div className='lg:flex hidden'>Feedback</div>
                        </li>
                        <li className='bg-slate-900 text-white  font-semibold px-10 py-2 cursor-pointer rounded-full'>Login</li>
                    </ul>
                </div>
                <div className='md:hidden' onClick={handleNav}>
                    <HiOutlineMenuAlt4 size={25} className="text-slate-800 cursor-pointer" />
                </div>
            </div>
            <div>
                <div className={nav ? "w-full h-screen bg-black opacity-70 absolute top-0 left-0 z-50 duration-75 ease-in " : "w-full h-screen bg-black opacity-70 absolute top-0 left-[-9999px] z-50 duration-75 ease-in"}></div>
                <div className={nav ? "w-60 h-screen bg-white absolute z-50 top-0  left-0 duration-75 ease-in " : "w-60 h-screen bg-white absolute z-50 top-0 left-[-9999px] duration-75 ease-in"}>

                    <div className='flex items-center justify-between px-5 py-7'>
                        <div><p className='text-xl text-slate-900 font-bold'>Travel</p></div>
                        <div onClick={handleNav} className="cursor-pointer text-slate-900"><RiCloseFill size={25} /></div>
                    </div>
                    <div className='mt-10'>
                        <ul className='flex flex-col items-start justify-center px-5'>
                            <li className='mr-10  font-semibold text-slate-900 flex items-center justify-center gap-2 cursor-pointer mb-10'>
                                <div><AiOutlineHeart size={23} /></div>
                                <div>Destinations</div>
                            </li>
                            <li className='mr-10  font-semibold text-slate-900 flex items-center justify-center gap-2 cursor-pointer mb-10'>
                                <div><SlPencil size={18} /></div>
                                <div>Feedback</div>
                            </li>
                            <li className='bg-slate-900 text-white  font-semibold py-2 cursor-pointer w-full text-center rounded-full'>Login</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar