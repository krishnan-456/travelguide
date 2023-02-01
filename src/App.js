import React, { useEffect, useState } from 'react'
import getPlaces from './api/index.js'
import getHotels from './api/hotel.js'
import getAttractions from './api/attractions.js'
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import List from './components/List.jsx';
import HotelList from './components/HotelList.jsx';
import AttractionsList from './components/AttractionsList.jsx';
import Footer from './components/Footer.jsx';

const App = () => {

  const [coordinates, setCoordinates] = useState({});
  const [places, setPlaces] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [loading,setLoading] = useState(false);
  // const [type,setType] = useState('restaurants')
  // const [rating,setRating] = useState ("4.0");
  // const [filterplaces,setFilterplaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, []);

  useEffect(() => {
    setLoading(true);
    getPlaces(coordinates.lat, coordinates.lng)
      .then((data) => {
        setPlaces(data.filter((places) => places.name && places.rating));
        // setFilterplaces([]);
        console.log(data);
        setLoading(false);
      })
  }, [coordinates]);
  
  useEffect(() => {
    setLoading(true);
    getHotels(coordinates.lat, coordinates.lng)
      .then((data) => {
        setHotels(data.filter((hotels) => hotels.name && hotels.rating));
        // setFilterplaces([]);
        console.log(data);
        setLoading(false);
      })
  }, [coordinates]);
  useEffect(() => {
    setLoading(true);
    getAttractions(coordinates.lat, coordinates.lng)
      .then((data) => {
        setAttractions(data.filter((attractions) => attractions.name && attractions.rating));
        // setFilterplaces([]);
        console.log(data);
        setLoading(false);
      })
  }, [coordinates]);

  // useEffect(()=>{
  //     const filterplaces = places.filter((place)=>place.rating > rating);
  //     setFilterplaces(filterplaces);
  // },[rating])

  // console.log(rating)

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home places={places} loading={loading} attractions={attractions} /> } />
          <Route path='/restaurants' element={<List places={places} loading={loading}/>} />
          <Route path='/hotels' element={<HotelList hotels={hotels} loading={loading}/>} />
          <Route path='/attractions' element={<AttractionsList attractions={attractions} loading={loading}/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App