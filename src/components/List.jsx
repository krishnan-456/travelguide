import React from 'react'
import Card from './Card'
import Loader from './Loader'


const List = ({ places, loading}) => {
  return (
    <div>
    {loading ? (<Loader/>) : (
    <>
    <div className='flex items-center justify-center mt-10'>
    <div className='grid xl:grid-cols-3 xl:gap-10 sm:grid-cols-2 sm:gap-8 grid-cols-1 gap-6'>
      {places?.map((place, i) => (
        <div item key={i}>
          <Card place={place} />
        </div>
      ))}
    </div>
  </div>
  </>
  )}
  </div>
  )
}

export default List