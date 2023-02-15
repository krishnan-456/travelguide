import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineLocalHotel } from 'react-icons/md'
import { IoFastFoodOutline } from 'react-icons/io5'
import { TbMountain } from 'react-icons/tb'
import { FiMoreHorizontal } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Topspot from './Topspot'
import Toprestaurants from './Toprestaurants'
import Youmightlike from './Youmightlike'
import Topdestination from './Topdestination'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, } from "swiper";
import { MdOutlineMyLocation } from "react-icons/md"
import Navbar from './Navbar'
import Footer from './Footer'
// import Allguide from './Allguide.jsx'




const Home = ({ places, attractions, loading, setInput, onGetCurrent, locationdetails }) => {



    // const [location,setLocation]=useState('')
    // const [arr,setArr]=useState([
    //     "Chennai,TamilNadu",
    //     "Coimbatore,TamilNadu",
    //     "Bangalore,Karnataka",
    //     "Agra,Uttarapradesh",
    //     "Guwahathi,Assam"
    // ])
    // const [recent,setRecent]=useState([])
    // useEffect(()=>{
    //     console.log("hi")
    //     let temp=[]
    //     console.log(arr);
    //     arr.map((s)=>{
    //         console.log(s)
    //         if(s.includes(location))
    //            temp.push(s)
    //     })
    //     if(temp.length>0)
    //       setRecent(temp)
    //     console.log(temp)
    // },[location])
    const navigate = useNavigate();
    const [value, setValue] = useState("")
    const [rec, setRec] = useState(false)
    const [border, setBorder] = useState("rounded-xl")
    const handleClick = (e) => {
        e.preventDefault()
        console.log("submit")
        setInput(value)
        navigate('/guide')

    }
    // useEffect(()=>{
    //     if(!localStorage.getItem('user'))
    //     {
    //         navigate('/signin')
    //     }
    // },[])
    return (
        <div>
            <div className='w-full h-full' >
                <Navbar />
                <div className='relative flex items-center justify-center' >
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 10500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                        onClick={function handleRec() {
                            setRec(false)
                            setBorder("rounded-xl")
                        }}
                    >
                        <SwiperSlide className='slide'>
                            <img src="https://images.musement.com/cover/0062/26/thumb_6125859_cover_header.jpeg" alt="wallpaper" />
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <img src="https://wallpapercave.com/wp/wp5240533.jpg" alt="wallpaper" />
                        </SwiperSlide >
                        <SwiperSlide className='slide'>
                            <img src="https://wallpaperaccess.com/full/1431621.jpg" alt="wallpaper" />
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <img src="https://cdn.wallpapersafari.com/25/24/0QmUcC.jpg" alt="wallpaper" />
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <img src="https://cdn.wallpapersafari.com/59/54/v7nz0D.jpg" alt="wallpaper" />
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <img src="https://cutewallpaper.org/cdn-cgi/mirage/879d3f56044898301ccabab4a8a90586cd5663eca603a14193df05b49a03034b/1280/26/best-moraine-lake-wallpaper/134716571.jpg" alt="wallpaper" />
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <img src="https://wallpapershome.com/images/pages/pic_h/378.jpg" alt="wallpaper" />
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <img src="https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper-for-Desktop.jpg" alt="wallpaper" />
                        </SwiperSlide>
                        <SwiperSlide className='slide'>
                            <img src="https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?cs=srgb&dl=pexels-pixabay-258045.jpg&fm=jpg" alt="wallpaper" />
                        </SwiperSlide>
                    </Swiper>
                    <div className='absolute z-30'>
                        <div className="md:w-[620px] w-[320px] h-14 bg-white  flex items-center justify-center shadow-xl sm:px-10 px-1">
                            <form onSubmit={handleClick} className="flex items-center justify-between">
                                <input type="text" placeholder='Explore now ?' name='location' className='md:w-[520px] w-[180px] outline-none border-none' onChange={(e) => setValue(e.target.value)} onClick={
                                    function hanleRecomend() {
                                        setRec(true)
                                    }}
                                    onFocus={() => { setBorder("rounded-t-xl") }} required />
                                <button className='hover:bg-gray-200 rounded-full p-2 duration-150 ease-in' type='submit' onClick={handleClick} ><BiSearch size={20} /></button>
                            </form>
                            <div>
                            </div>
                        </div>
                        {
                            rec ? (
                                <div>
                                    <Link to="/restaurants">
                                        <button onClick={onGetCurrent} className="md:w-[620px] w-[320px] h-14 bg-white shadow-xl flex items-start  sm:px-8 px-2 border-t-2">
                                            <div className='flex items-center justify-center sm:pl-0 pl-10 mt-3'>
                                                <div className='mr-3'><MdOutlineMyLocation size={18} /></div>
                                                <div><p>Nearby</p></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            ) : (null)
                        }
                    </div>
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6'>
                        <Link to='/hotels'>
                            <button className='w-56 h-54   border-2 border-slate-900 py-6 flex items-center justify-between px-4 hover:bg-slate-900 hover:text-white  rounded-lg'>
                                <div><p className='sm:text-lg text-base font-medium'>Hotels</p></div>
                                <div><MdOutlineLocalHotel className='md:text-2xl text-2xl' /></div>
                            </button>
                        </Link>
                        <Link to='/restaurants'>
                            <button className='w-56 h-54   border-2 border-slate-900 py-6 flex items-center justify-between px-4 hover:bg-slate-900 hover:text-white rounded-lg'>
                                <div><p className='sm:text-lg text-base font-medium'>Restaurants</p></div>
                                <div><IoFastFoodOutline className='md:text-2xl text-2xl' /></div>
                            </button>
                        </Link>
                        <Link to='/attractions'>
                            <button className='w-56 h-54   border-2 border-slate-900 py-6 flex items-center justify-between px-4 hover:bg-slate-900 hover:text-white rounded-lg'>
                                <div><p className='sm:text-lg text-base font-medium'>Attractions</p></div>
                                <div><TbMountain className='md:text-2xl text-2xl' /></div>
                            </button>
                        </Link>
                        <Link to='/restaurants'>
                            <div className='w-56 h-54   border-2 border-slate-900 py-6 flex items-center justify-between px-4 hover:bg-slate-900 hover:text-white rounded-lg'>
                                <div><p className='sm:text-lg text-base font-medium'>More</p></div>
                                <div><FiMoreHorizontal className='md:text-2xl text-2xl' /></div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='w-full h-full mt-20 mb-20 sm:px-10 px-5'>
                    <div><p className='text-base text-slate-700 font-semibold pl-1'>Where to go, right now</p></div>
                    <div><p className='lg:text-3xl sm:text-2xl text-xl text-slate-900 font-semibold mb-16'>Top spot's for travellers</p></div>
                    <Topspot />
                </div>
                <div className='w-full h-full mt-20 mb-20 sm:px-10 px-5'>
                    <div>
                        <p className='lg:text-3xl sm:text-2xl text-xl text-slate-900 font-semibold mb-1'>Top restaurants for foodie's</p>
                        <p className='text-base text-slate-700 font-semibold mb-16 pl-1'>Top star rated restaurants</p>
                    </div>

                    <Toprestaurants places={places} loading={loading} />
                </div>
                <div className='sm:px-10 px-5'>
                    <div className='w-full h-full mt-20 mb-20 bg-slate-800 flex sm:flex-row flex-col items-center justify-between'>
                        <div className='py-10 px-10'>
                            <div className='mb-2'>
                                <p className='text-white font-semibold lg:text-3xl sm:text-2xl text-xl'>Choice of Best of the Best</p>
                                <p className='text-white text-base xl:pr-80 pr-6 sm:mt-2 mt-5'>Best of the Best tours, attractions & restaurants you won't want to miss.</p>
                            </div>
                            <div>
                                <Link to='/attractions'>
                                    <button className='bg-white text-slate-900 font-semibold text-base px-4 py-2 sm:mt-20 mt-5 rounded-full'>Explore now</button>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img src="https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper-HD-Free-download.jpg" alt="travel" className='w-[620px] xl:h-[320px] sm:h-[360px] h-[240px] object-cover ' />
                        </div>
                    </div>
                </div>
                <div className='w-full h-full mt-20 mb-20 sm:px-10 px-5'>
                    <div><p className='lg:text-3xl sm:text-2xl text-xl text-slate-900 font-semibold mb-1'>You might like these</p></div>
                    <div><p className='text-base text-slate-700 font-semibold mb-16 pl-1'>Rest and recharge at these relaxing destinations</p></div>
                    <Youmightlike attractions={attractions} loading={loading} />
                </div>
                <div className='w-full h-full mt-20 mb-20 sm:px-10 px-5'>
                    <div><p className='lg:text-3xl sm:text-2xl text-xl text-slate-900 font-semibold mb-1'>Top destinations for beach lovers</p></div>
                    <div><p className='text-base text-slate-700 font-semibold mb-16 pl-1'>Recommended based on your activity</p></div>
                    <Topdestination />
                </div>
                {/* <div className='w-full h-full mt-20 mb-20 sm:px-10 px-5'>
                    <Allguide locationdetails={locationdetails}/>
                </div> */}
                <Footer />
            </div>
        </div>
    )
}

export default Home
