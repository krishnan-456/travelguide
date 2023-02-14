import React from "react";
import { useState, useEffect } from "react";
import Toprestaurants from "./Toprestaurants";
import { BsArrowRight } from "react-icons/bs"
import Youmightlike from "./Youmightlike";
import Tophotels from "./Tophotels";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
const Allguide = (props) => {
    const navigate = useNavigate();
    const [locImg, setLocImg] = useState({})
    // const [locHotels,setLocHotels] = useState({})
    const locationplaces = props.locationdetails;
    const rests = props.places;
    const hotels = props.hotels;
    const attractions = props.attractions;
    const loading = props.loading;
    // let filterData;
    useEffect(() => {
        locationplaces?.map((data) => (
            data.result_type === "geos" ? (setLocImg(data)) : (null)))
    }, [locationplaces])
    console.log(locImg)
    return (
        <>
            <Navbar />
            {loading ? (<Loader />) : (
                locImg && locImg.result_object &&
                <div className=" w-full h-full px-10">
                    <div className="mt-20 mb-20">
                        <p className="lg:text-4xl sm:text-2xl text-xl text-red-500 font-bold mb-10">Explore <span className="text-slate-900">{locImg.result_object.name}</span></p>
                        <div className="flex lg:flex-row flex-col items-start justify-between">
                            <img src={locImg.result_object.photo ? locImg.result_object.photo.images.large.url : "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="placephoto" className="w-full sm:h-[480px] h-[240px] object-cover object-center" />
                            <div className="lg:pl-10">
                                <p className="lg:text-4xl sm:text-2xl text-xl text-red-500 font-bold mt-10 mb-4">About  <span className="text-slate-900">{locImg.result_object.name}</span></p>
                                <p className="sm:text-lg text-base font-medium text-slate-800 xl:pr-20">{locImg.description ? locImg.description : (<p>{locImg.result_object.name}, a beautiful and historic destination located in {locImg.result_object.parent_display_name}. This magnificent site boasts cultural heritage, making it a must-visit destination for anyone interested in tourism.</p>)}</p>
                                {/* <p>Restaurants {Number(rests.length)}</p> */}
                                <div className="">
                                    <div className='w-56 h-54   border-2 border-slate-900 py-3 flex items-center justify-between px-4 rounded-lg mb-6 mt-10' onClick={() => navigate('/restaurants')}>
                                        <div><p className='sm:text-lg text-base font-medium'>Restaurants</p></div>
                                        <div className='sm:text-lg text-base'>{Number(rests.length)}</div>
                                    </div>
                                    <div className='w-56 h-54   border-2 border-slate-900 py-3 flex items-center justify-between px-4 rounded-lg mb-6' onClick={() => navigate('/hotels')}>
                                        <div><p className='sm:text-lg text-base font-medium'>Hotels</p></div>
                                        <div className='sm:text-lg text-base'>{Number(hotels.length)}</div>
                                    </div>
                                    <div className='w-56 h-54   border-2 border-slate-900 py-3 flex items-center justify-between px-4 rounded-lg' onClick={() => navigate('/attractions')}>
                                        <div><p className='sm:text-lg text-base font-medium'>Attractions</p></div>
                                        <div className='sm:text-lg text-base'>{Number(attractions.length)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 mb-20">
                        <div>
                            <div className="flex flex-col items-start mb-10">
                                <div className="lg:text-4xl sm:text-2xl text-xl text-red-500 font-bold mb-2">
                                    Do
                                </div>
                                <div className="sm:text-lg text-base font-medium text-slate-900">
                                    Places to see, ways to wander, and signature experiences.
                                </div>
                                <div className="sm:text-lg text-base font-medium text-slate-900">
                                    <button className="flex items-center justify-center gap-2 hover:text-red-500 duration-75" onClick={() => navigate('/attractions')} >
                                        <div className="underline">
                                            See detail
                                        </div>
                                        <div className="">
                                            <BsArrowRight size={20} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <Youmightlike attractions={attractions} loading={loading} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 mb-20">
                        <div>
                            <div className="flex flex-col items-start mb-10">
                                <div className="lg:text-4xl sm:text-2xl text-xl text-red-500 font-bold mb-2">
                                    Stay
                                </div>
                                <div className="sm:text-lg text-base font-medium text-slate-900">
                                    A mix of the charming, modern, and tried and true.
                                </div>
                                <div className="sm:text-lg text-base font-medium text-slate-900">
                                    <button className="flex items-center justify-center gap-2 hover:text-red-500 duration-75" onClick={() => navigate('/hotels')} >
                                        <div className="underline">
                                            See detail
                                        </div>
                                        <div className="">
                                            <BsArrowRight size={20} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <Tophotels hotels={hotels} loading={loading} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 mb-20">
                        <div>
                            <div className="flex flex-col items-start mb-10">
                                <div className="lg:text-4xl sm:text-2xl text-xl text-red-500 font-bold mb-2">
                                    Eat
                                </div>
                                <div className="sm:text-lg text-base font-medium text-slate-900">
                                    Can't-miss spots to dine, drink, and feast.
                                </div>
                                <div className="sm:text-lg text-base font-medium text-slate-900">
                                    <button className="flex items-center justify-center gap-2 hover:text-red-500 duration-75" onClick={() => navigate('/restaurants')} >
                                        <div className="underline">
                                            See detail
                                        </div>
                                        <div className="">
                                            <BsArrowRight size={20} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <Toprestaurants places={rests} loading={loading} />
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            <Footer />
        </>
    )
}

export default Allguide
// (
//     data.result_type == "geos" ?
//         (
//             <>
//                 <div>
//                     <p className="text-black">{data.result_object.name}</p>
//                     <img src={data.result_object.photo ? data.result_object.photo.images.large.url : "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="placeImage" className="w-full h-96" />
//                 </div>
//             </>
//         ) : (null)
// )