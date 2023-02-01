import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Topdestination = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                navigation={{ clickable: true }}
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
                        <img src="https://www.travelandleisure.com/thmb/kE0VT0AyS1br0BJ66DqAimmDthI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg" alt="Topspots" className='relative cursor-pointer mix-blend-overlay' />
                    </div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4 text-left'>Saud Beach, Philippines</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                        <img src="https://www.travelandleisure.com/thmb/BOJpACg5JRb4XGbqHKy3QX8OSG4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/elafonissi-beach-crete-greece-WRLDBEACH0421-50fd96fe8e5e45448d154ae43b38b855.jpg" alt="Topspots" className='relative cursor-pointer mix-blend-overlay' /></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4 text-left'>Elafonissi Beach, Greece</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                        <img src="https://www.travelandleisure.com/thmb/92Ethj37l6Mp9KuQroXEhQyqedw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hanalei-bay-kauai-hawaii-WRLDBEACH0421-02a0c8c3ed7748db843758f13c61b61b.jpg" alt="Topspots" className='relative cursor-pointer mix-blend-overlay' /></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4 text-left'>Hanalei Bay, Hawaii</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                        <img src="https://www.travelandleisure.com/thmb/tBx3Qp5-0E0tyq_LryHo0hcrGy8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/clearwater-beach-florida-WRLDBEACH0421-e18701076fff43f0a22905a50ff5b688.jpg" alt="Topspots" className='relative cursor-pointer mix-blend-overlay' /></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4 text-left'>Clearwater Beach, Florida</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                        <img src="https://www.travelandleisure.com/thmb/y1Hf_NLgN5ogD3vZFzK4mbeQXnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/anse-source-dagent-digue-island-seychelles-WRLDBEACH0421-767c8865b88f49c38afae6cf856ca976.jpg" alt="Topspots" className='relative cursor-pointer mix-blend-overlay' /></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4 text-left'>La Digue Island, Seychelles</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                        <img src="https://www.travelandleisure.com/thmb/GVSK_LoKDqMrCqv7X4sJoffs4OA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/whitehaven-beach-whitsunday-island-WRLDBEACH0421-4e898c789f0d4cd1a4b875bda16733f3.jpg" alt="Topspots" className='relative cursor-pointer mix-blend-overlay' /></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4 text-left'>Whitsundays Island, Australia</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                        <img src="https://www.travelandleisure.com/thmb/o6xLGzStiUYf9PgLJH2Vf3ji7do=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/le-morne-mauritius-WRLDBEACH0421-1b9260e4ab2a4973839c6c0d6c3e7cf4.jpg" alt="Topspots" className='relative cursor-pointer mix-blend-overlay' /></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4 text-left'>Le Morne, Mauritius</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                        <img src="https://lp-cms-production.imgix.net/2022-03/GettyRF_200403223-001.jpg?auto=format&q=75&w=1024" alt="Topspots" className='relative cursor-pointer mix-blend-overlay' /></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4 text-left'>Thottada & Bekal, Kerala</p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'>
                        <img src="https://www.travelandleisure.com/thmb/IkJ2LUuN-5P2zUjeMJcAaAsQLNc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/railay-west-krabi-thailand-WRLDBEACH0421-2de3b103a857436596e3e4cab4d7a59a.jpg" alt="Topspots" className='relative cursor-pointer mix-blend-overlay' /></div>
                    <p className='text-white lg:text-2xl md:text-xl text-lg font-semibold absolute px-4 bottom-4 text-left'>Railay West, Thailand</p>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Topdestination