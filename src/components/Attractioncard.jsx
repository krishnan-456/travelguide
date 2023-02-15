import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai'
import { Rating } from '@mui/material'

const Attractioncard = ({attracts}) => {
    
    return (
        <div className=''>
            <div className=' lg:w-96 lg:h-[435px] md:w-80 md:h-[450px] w-72 h-[470px] bg-white shadow-2xl rounded-md'>
                <div className='relative flex items-start justify-end'>
                    {attracts.open_now_text ? <p className='text-xs font-semibold absolute mt-2 mr-4 bg-white p-1  text-slate-800'>{attracts.open_now_text}</p> : <p className='hidden'></p>}
                    <img src={attracts.photo ? attracts.photo.images.large.url : "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="restaurantImage" className='w-full h-44 object-cover object-center' />
                </div>
                <div className='mt-4 px-4'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-lg font-bold text-slate-800'>{attracts.name}</p>
                        </div>
                        <div>
                            <p className='text-sm font-semibold text-slate-800 mt-[3px]'>{attracts.price_level}</p>
                        </div>
                    </div>
                    <div className='flex items-center  justify-between mt-2'>
                        <div className='flex items-center justify-center'>
                            <div className='flex items-center text-slate-800'>
                                <div><MdLocationOn /></div>
                                <p className='text-sm font-semibold ml-1'>{attracts.distance_string}</p>
                            </div>
                            <div className='flex items-center text-slate-800 mx-4'>
                                <div><AiFillEye /></div>
                                <p className='text-sm font-semibold ml-1'>{attracts.num_reviews}</p>
                            </div>
                        </div>
                        <div className='mt-1'>
                            <Rating size="small" value={Number(attracts.rating)} readOnly />
                        </div>
                    </div>
                    <div>
                        <p className='text-sm font-semibold mt-2 text-slate-800'>Address</p>
                        <p className='text-sm font-semibold mt-2 text-slate-800'>{attracts.address}</p>
                    </div>
                    <div>
                        <p className='text-sm font-semibold mt-2 text-slate-800'>Phone</p>
                        <p className='text-sm font-semibold mt-2 text-slate-800'>{attracts.phone ? attracts.phone : '144 232684'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attractioncard