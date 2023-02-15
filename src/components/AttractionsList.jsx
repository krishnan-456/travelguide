import React,{useState} from 'react'
import Attractioncard from './Attractioncard'
import Filter from './Filter'
import Footer from './Footer'
import Loader from './Loader'
import Navbar from './Navbar'
import Slideup from './Slideup'

const AttractionsList = ({ attractions, loading }) => {
    const [list, setList] = useState(attractions);
    return (
        <div>
            <Navbar />
            {loading ? (<Loader />) : (
                <>
                    <Filter data={attractions} setData={setList} />
                    <div className='flex items-center justify-center mt-10'>
                        <div className='grid xl:grid-cols-3 xl:gap-10 sm:grid-cols-2 sm:gap-8 grid-cols-1 gap-6'>
                            {list?.map((attracts, k) => (
                                <div item key={k}>
                                    <Attractioncard attracts={attracts} />
                                </div>
                            ))}
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

export default AttractionsList