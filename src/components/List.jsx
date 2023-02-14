import React from 'react'
import Card from './Card'
import Footer from './Footer'
import Loader from './Loader'
import Navbar from './Navbar'
import Slideup from './Slideup'
import Filter from './Filter'
import { useState } from 'react'
const List = ({ places, loading }) => {
  const [list, setList] = useState(places);
  return (
    <div>
      <Navbar />
      {loading ? (<Loader />) : (
        <>
          <Filter data={places} setData={setList} />
          <div className='flex items-center justify-center mt-10' id="rests">
            <div className='grid xl:grid-cols-3 xl:gap-10 sm:grid-cols-2 sm:gap-8 grid-cols-1 gap-6'>
              {list?.map((place, i) => (
                <div item key={i}>
                  <Card place={place} />
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

export default List