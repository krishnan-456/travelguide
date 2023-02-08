import React from 'react'
import Attractioncard from './Attractioncard'
import Footer from './Footer'
import Loader from './Loader'
import Navbar from './Navbar'
import Slideup from './Slideup'

const AttractionsList = ({attractions, loading}) => {
    return (
        <div>
            <Navbar/>
            {loading ? (<Loader />) : (
                <>
                    <div className='flex items-center justify-center mt-10'>
                        <div className='grid xl:grid-cols-3 xl:gap-10 sm:grid-cols-2 sm:gap-8 grid-cols-1 gap-6'>
                            {attractions?.map((attracts, k) => (
                                <div item key={k}>
                                    <Attractioncard attracts={attracts} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <Slideup/>
                </>
            )}
            <Footer/>
        </div>
    )
}

export default AttractionsList