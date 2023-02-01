import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Topspot = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={{clickable: true}}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    320: {
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
                    },
                }}
            >
                <SwiperSlide>
                <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                    <img src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZGl2ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Topspots" className='relative cursor-pointer mix-blend-overlay' /></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4'>Maldives</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                    <img src="https://tourismteacher.com/wp-content/uploads/2020/09/pexels-photo-460672.jpeg?ezimgfmt=ng:webp/ngcb4" alt="Topspots" className='relative cursor-pointer mix-blend-overlay'/></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4'>Rio de Janeiro</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                    <img src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHRvcCUyMHNwb3RzJTIwdHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Topspots" className='relative cursor-pointer mix-blend-overlay'/></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4'>Sydney</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                    <img src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlcGhhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Topspots" className='relative cursor-pointer mix-blend-overlay'/></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4'>Sri Lanka</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                    <img src="https://images.unsplash.com/photo-1570037851347-a5e607feb6be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fE1hdWklMkMlMjBIYXdhaWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Topspots" className='relative cursor-pointer mix-blend-overlay'/></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4'>Maui, Hawaii</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                    <img src="https://images.unsplash.com/photo-1673257223810-d08036235fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fEFuZ2tvciUyMFdhdCUyQyUyMENhbWJvZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Topspots" className='relative cursor-pointer mix-blend-overlay'/></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4'>Angkor Wat</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                    <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Um9tZSUyQyUyMEl0YWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Topspots" className='relative cursor-pointer mix-blend-overlay'/></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4'>Rome</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                    <img src="https://images.unsplash.com/photo-1602083337579-2d33797f8e69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZnJhbmNpc2NvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Topspots" className='relative cursor-pointer mix-blend-overlay'/></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4'>San Francisco</p>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                    <img src="https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGdvYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Topspots" className='relative cursor-pointer mix-blend-overlay'/></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4'>Goa, India</p>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Topspot