import React from 'react'
import Attractioncard from './Attractioncard'
import Loader from './Loader'

const AttractionsList = ({attractions, loading}) => {
    return (
        <div>
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
                </>
            )}
        </div>
    )
}

export default AttractionsList