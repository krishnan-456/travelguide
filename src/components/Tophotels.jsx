import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@mui/material';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Tophotels = ({ hotels, loading }) => {

    const filterplaces = hotels.filter((hotels) => hotels.rating > "3.0");

    return (
        <div>
            <>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    navigation={{ clickable: true }}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        350: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        }
                    }}
                >
                    {loading ? (
                        <>
                            <div className='flex items-center justify-evenly'>
                                <div className='mx-2'>
                                    <Skeleton width={280} height={280} />
                                    <Skeleton width={220} />
                                    <Skeleton width={180} />
                                </div>
                                <div className='mx-2'>
                                    <Skeleton width={280} height={280} />
                                    <Skeleton width={220} />
                                    <Skeleton width={180} />
                                </div>
                                <div className='mx-2'>
                                    <Skeleton width={280} height={280} />
                                    <Skeleton width={220} />
                                    <Skeleton width={180} />
                                </div>
                                <div className='mx-2'>
                                    <Skeleton width={280} height={280} />
                                    <Skeleton width={220} />
                                    <Skeleton width={180} />
                                </div>
                                <div className='mx-2'>
                                    <Skeleton width={280} height={280} />
                                    <Skeleton width={220} />
                                    <Skeleton width={180} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {filterplaces?.map((hotel, j) => (
                                <div item key={j}>
                                    <SwiperSlide>
                                        <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                                            <div className='relative'>
                                                <img src={hotel.photo ? hotel.photo.images.large.url : "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt='restaurants near you' className='mix-blend-overlay' />
                                            </div>
                                            <div className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute bottom-12 px-4 text-left'>
                                                <p>{hotel.name}</p>
                                            </div>
                                            <div className='absolute px-4 bottom-4 text-left'>
                                                <Rating size="small" value={Number(hotel.rating)} readOnly />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))}
                        </>
                    )}
                </Swiper>
            </>
        </div>
    )
}

export default Tophotels