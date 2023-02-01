import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { Rating } from '@mui/material'

const Hotelcards = ({ hotel }) => {
    return (
        <div className=''>
            <div className=' lg:w-96 lg:h-[435px] md:w-80 md:h-[450px] w-72 h-[470px] bg-white shadow-2xl'>
                <div className='relative flex items-start justify-end'>
                    {hotel.open_now_text ? <p className='text-xs font-semibold absolute mt-2 mr-4 bg-white p-1  text-slate-800'>{hotel.open_now_text}</p> : <p className='hidden'></p>}
                    <img src={hotel.photo ? hotel.photo.images.large.url : "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="restaurantImage" className='w-full h-44 object-cover object-center' />
                </div>
                <div className='mt-4 px-4'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-lg font-bold text-slate-800'>{hotel.ranking_position}. {hotel.name}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-start'>
                            <p className='text-sm font-semibold text-slate-800 mt-[3px]'>Class</p>
                            <p className='text-sm font-semibold text-slate-800 mt-[3px] ml-3'> {Number(hotel.hotel_class)}</p>
                        </div>
                        <p className='text-sm font-semibold text-slate-800 mt-[3px]'>{hotel.price}</p>
                    </div>
                    <div className='flex items-center  justify-between mt-2'>
                        <div className='flex items-center justify-center'>
                            <div className='flex items-center text-slate-800'>
                                <div><AiFillEye /></div>
                                <p className='text-sm font-semibold ml-1'>{hotel.num_reviews}</p>
                            </div>
                        </div>
                        <div className='mt-1'>
                            <Rating size="small" value={Number(hotel.rating)} readOnly />
                        </div>
                    </div>
                    <div className='pr-6'>
                        {/* <p className='text-sm font-semibold mt-2 text-slate-800'>Address</p> */}
                        <p className='text-sm font-semibold mt-2 text-slate-800'>{hotel.ranking}</p>
                    </div>
                    <div className='pr-6'>
                        <p className='text-sm font-semibold mt-2 text-slate-800'>{hotel.location_string}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotelcards