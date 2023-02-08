import React from 'react'
import Footer from './Footer'
import Hotelcards from './Hotelcards'
import Loader from './Loader'
import Navbar from './Navbar'
import Slideup from './Slideup'

const HotelList = ({ hotels, loading }) => {
    return (
        <div>
            <Navbar />
            {loading ? (<Loader />) : (
                <>
                    <div className='flex items-center justify-center mt-10'>
                        <div className='grid xl:grid-cols-3 xl:gap-10 sm:grid-cols-2 sm:gap-8 grid-cols-1 gap-6'>
                            {hotels?.map((hotel, j) => (
                                <div item key={j}>
                                    <Hotelcards hotel={hotel} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <Slideup/>
                </>
            )}
            <Footer />
        </div>
    )
}

export default HotelList