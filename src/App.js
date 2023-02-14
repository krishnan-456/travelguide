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
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import { UserAuthContextProvider } from './context/UserAuthContext.js';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import getLocations from './api/location.js'
import Allguide from './components/Allguide.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import PageNotFound from './components/PageNotFound.jsx';

const App = () => {

  const [coordinates, setCoordinates] = useState({});
  const [places, setPlaces] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [datas, setDatas] = useState({ lt: "", lg: "" });
  const [locationdetails, setLocationdetails] = useState([])
  // const [type,setType] = useState('restaurants')
  // const [rating,setRating] = useState ("4.0");
  // const [filterplaces,setFilterplaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, []);

  const nearby = () => {
    getPlaces(coordinates.lat, coordinates.lng)
      .then((data) => {
        setPlaces(data.filter((places) => places.name && places.rating));
        // setFilterplaces([]);
        console.log(data);
        setLoading(false);
      })
    getHotels(coordinates.lat, coordinates.lng)
      .then((data) => {
        setHotels(data.filter((hotels) => hotels.name && hotels.rating));
        // setFilterplaces([]);
        console.log(data);
        setLoading(false);
      })
    getAttractions(coordinates.lat, coordinates.lng)
      .then((data) => {
        setAttractions(data.filter((attractions) => attractions.name && attractions.rating));
        // setFilterplaces([]);
        console.log(data);
        setLoading(false);
      })
  }

  useEffect(() => {
    setLoading(true);
    getPlaces(datas.lt, datas.lg)
      .then((data) => {
        setPlaces(data.filter((places) => places.name && places.rating));
        // setFilterplaces([]);
        console.log(data);
        setLoading(false);
      })
  }, [datas]);

  useEffect(() => {
    setLoading(true);
    getHotels(datas.lt, datas.lg)
      .then((data) => {
        setHotels(data.filter((hotels) => hotels.name && hotels.rating));
        // setFilterplaces([]);
        console.log(data);
        setLoading(false);
      })
  }, [datas]);
  useEffect(() => {
    setLoading(true);
    getAttractions(datas.lt, datas.lg)
      .then((data) => {
        setAttractions(data.filter((attractions) => attractions.name && attractions.rating));
        // setFilterplaces([]);
        console.log(data);
        setLoading(false);
      })
  }, [datas]);
  useEffect(() => {
    getLocations(input)
      .then((data) => {
        setLocationdetails(data)
        data?.map((locations) => (
          locations.result_type == "geos" ? (
            setDatas({ lt: locations.result_object.latitude, lg: locations.result_object.longitude })
          ) : (null)
        ))
        console.log(data)
      })
  }, [input]);
  // console.log(locationdetails)

  // useEffect(()=>{
  //     const filterplaces = places.filter((place)=>place.rating > rating);
  //     setFilterplaces(filterplaces);
  // },[rating])

  // console.log(rating)
  return (
    <>
      <div>
        <UserAuthContextProvider>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path='/' element={<Home places={places} loading={loading} attractions={attractions} input={input} setInput={setInput} onGetCurrent={nearby} locationdetails={locationdetails} />} />
            <Route path='/restaurants' element={<ProtectedRoute><List places={places} loading={loading} /></ProtectedRoute>} />
            <Route path='/hotels' element={<ProtectedRoute><HotelList hotels={hotels} loading={loading} /></ProtectedRoute>} />
            <Route path='/attractions' element={<ProtectedRoute><AttractionsList attractions={attractions} loading={loading} /></ProtectedRoute>} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/guide' element={<ProtectedRoute><Allguide places={places} locationdetails={locationdetails} attractions={attractions} hotels={hotels} loading={loading} /></ProtectedRoute>} />
            <Route path='/form' element={<ProtectedRoute><FeedbackForm /></ProtectedRoute>} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </>
  )
}

export default App