import React,{useState} from 'react'
import Filter from './Filter'
import Footer from './Footer'
import Hotelcards from './Hotelcards'
import Loader from './Loader'
import Navbar from './Navbar'
import Slideup from './Slideup'

const HotelList = ({ hotels, loading }) => {

    const [list, setList] = useState(hotels);
    return (
        <div>
            <Navbar />
            {loading ? (<Loader />) : (
                <>
                    <Filter data={hotels} setData={setList} />
                    <div className='flex items-center justify-center mt-10'>
                        <div className='grid xl:grid-cols-3 xl:gap-10 sm:grid-cols-2 sm:gap-8 grid-cols-1 gap-6'>
                            {list?.map((hotel, j) => (
                                <div item key={j}>
                                    <Hotelcards hotel={hotel} />
                                </div>
                            ))
                            }
                        </div>
                        {(Number(list.length) > 0) ? (null) : (<div className='w-full h-[50vh] flex items-center justify-center'>
                            <p className='font-semibold lg:text-2xl sm:text-xl text-lg text-slate-900 '>No result found</p>
                        </div>)}
                    </div>
                    <Slideup />
                </>
            )}
            <Footer />
        </div>
    )
}

export default HotelList