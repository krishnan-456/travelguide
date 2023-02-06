import React, { useEffect, useState } from 'react'
import { SlPencil } from 'react-icons/sl'
import { AiOutlineHeart } from 'react-icons/ai'
// import { BiSearch } from 'react-icons/bi'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import userlogo from '../assets/customer2.png'
import { IoIosArrowDown } from "react-icons/io"
const Navbar = () => {
    const navigate = useNavigate();
    const [nav, setNav] = useState(false);
    // const [click, setClick] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    // const handleclick = () => {
    //     setClick(!click);
    // }
    const { user } = useUserAuth();
    function setCookie(cname, cvalue, minutes) {
        var d = new Date();
        d.setTime(d.getTime() + (minutes * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    const getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
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
                        <Link to='/form'>
                            <li className='mr-8  font-semibold text-slate-900 flex items-center justify-center gap-2 cursor-pointer'>
                                <div className='lg:hover:bg-transparent md:hover:bg-gray-200 rounded-full p-2 duration-150 ease-in'><SlPencil size={18} /></div>
                                <div className='lg:flex hidden'>Feedback</div>
                            </li>
                        </Link>
                        {getCookie("user") ? (
                            <div class="dropdown">
                                <div className=' flex items-center justify-center gap-3 dropbtn'>
                                    <img src={userlogo} alt="userprofileimage" className='w-9 h-9' />
                                    <div>
                                        <IoIosArrowDown />
                                    </div>
                                </div>
                                <div class="dropdown-content">
                                <li className='font-semibold text-slate-900 mb-3'>{user.email}</li>
                                    <li className='bg-slate-900 text-white  font-semibold px-10 py-2 cursor-pointer rounded-full text-center' onClick={function handleRemove() {
                                        setCookie("user", null, 0)
                                        navigate("/")
                                    }}>Logout</li>
                                </div>
                            </div>
                        //     <div>
                        //         <div className=' flex items-center justify-center gap-3'>
                        //             <img src={userlogo} alt="userprofileimage" className='w-9 h-9' />
                        //             <div>
                        //                 <IoIosArrowDown />
                        //             </div>
                        //         </div>
                        //         <div className=''>
                        //             <li className='font-semibold text-slate-900 underline'>{user.email}</li>
                        //             <li className='bg-slate-900 text-white  font-semibold px-10 py-2 cursor-pointer rounded-full' onClick={function handleRemove() {
                        //                 setCookie("user", null, 0)
                        //                 navigate("/")
                        //             }}>Logout</li>
                        //             <Dropdown
                        //             label=""
                        //             inline={true}
                        //         >
                        //             <Dropdown.Item>
                        //                 <div className=''>
                        //                     <li className='font-semibold text-slate-900 mx-2'>{user.email}</li>
                        //                 </div>
                        //             </Dropdown.Item>
                        //             <Dropdown.Item>
                        //                 <li className='bg-slate-900 text-white font-semibold px-10 py-2 cursor-pointer rounded-full mx-5' onClick={function handleRemove() {
                        //                     setCookie("user", null, 0)
                        //                     navigate("/")
                        //                 }}>Logout</li>
                        //             </Dropdown.Item>
                        //         </Dropdown>
                        //         <li><img src={userlogo} alt="userprofileimage" className='w-9 h-9' /></li>
                        //         <div className={click ? "bg-white p-4" : "bg-none"}>
                        //             <li className='font-semibold text-slate-900 underline'>{user.email}</li>
                        //             <li className='bg-slate-900 text-white  font-semibold px-10 py-2 cursor-pointer rounded-full' onClick={function handleRemove() {
                        //                 setCookie("user", null, 0)
                        //                 navigate("/")
                        //             }}>Logout</li>
                        //         </div>
                        //         </div>
                        // </div>
                        ) : (<Link to='/signin'>
                            <li className='bg-slate-900 text-white  font-semibold px-10 py-2 cursor-pointer rounded-full'>Login</li>
                        </Link>)}
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
                        {getCookie("user") ? (
                            <div className='flex flex-col items-start justify-center gap-3 px-5 mb-10'>
                                <img src={userlogo} alt="userprofileimage" className='w-12 h-12' />
                                <ul>
                                    <li className='font-semibold text-slate-900 underline'>{user.email}</li>
                                </ul>
                            </div>
                        ) : (null)}
                        <ul className='flex flex-col items-start justify-center px-5'>
                            <li className='mr-10  font-semibold text-slate-900 flex items-center justify-center gap-2 cursor-pointer mb-5' onClick={handleNav}>
                                <div><AiOutlineHeart size={23} /></div>
                                <div>Destinations</div>
                            </li>
                            <Link to='/form'>
                                <li className='mr-10  font-semibold text-slate-900 flex items-center justify-center gap-2 cursor-pointer mb-10' onClick={handleNav}>
                                    <div><SlPencil size={18} /></div>
                                    <div>Feedback</div>
                                </li>
                            </Link>
                            {getCookie("user") ? (
                                <li className='bg-slate-900 text-white  font-semibold py-2 cursor-pointer w-[200px] text-center rounded-full' onClick={function handleRemove() {
                                    setCookie("user", null, 0)
                                    navigate("/")
                                }}>Logout</li>
                            ) : (<Link to='/signin'>
                                <li className='bg-slate-900 text-white  font-semibold py-2 cursor-pointer w-[200px] text-center rounded-full' onClick={handleNav}>Login</li>
                            </Link>)}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar