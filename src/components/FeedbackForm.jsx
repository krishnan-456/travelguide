import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


function FeedbackForm() {
    const navigate = useNavigate();
    return (
        <div className="w-full h-full">
            <Navbar />
            <div className="mt-10 flex items-center justify-center">
                <div className="w-[880px] h-[640px] lg:shadow-2xl flex items-center lg:justify-between justify-center bg-white rounded-xl">
                    <div className="lg:flex hidden">
                        <img src="https://wallpapercrafter.com/desktop/35868-Pfeiffer-Beach-4K-4k-wallpaper-Big-Sur-California-USA-Best-Beaches-in-the-World-travel-tourism-Sunset.jpg" alt="sunshine" className='rounded-xl w-[420px] h-[640px] object-cover' />
                    </div>
                    <div className="lg:pr-20 lg:mt-0 mt-10">
                        <form className="flex flex-col lg:items-start item-center justify-center" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScvi3T-3wrpLi5L0VQEHRDTqjMpw2v_fIQBznyvRFG5xjUeDA/formResponse">
                            <p className="text-2xl font-bold mb-6">Share your feedback!</p>
                            <div className='flex flex-col mb-4'>
                                <label className='  font-medium'>Name</label>
                                <input type="text" placeholder="Enter your name" name="entry.2005620554" className='border-2 border-slate-300 px-4 py-2 outline-none sm:w-[320px] w-[260px] ' required />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label className='  font-medium'>Email</label>
                                <input type="email" placeholder="Enter your email" name="entry.1045781291" className='border-2 border-slate-300 px-4 py-2 outline-none sm:w-[320px] w-[260px] ' required />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label className='  font-medium'>Destination</label>
                                <input type="text" placeholder="Enter your favorite destinations" name="entry.1065046570" className='border-2 border-slate-300 px-4 py-2 outline-none sm:w-[320px] w-[260px] ' required />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label className='  font-medium'>Feedback</label>
                                <textarea name="entry.1166974658" cols="60" rows="5" placeholder='Any Suggestion ?' className=' px-4 py-4 border-2 border-slate-300 sm:w-[320px] w-[260px] outline-none' required></textarea>
                            </div>
                            {/* <input type="text" placeholder="Enter your name" name="entry.2005620554" />
                        <input type="text" placeholder="Enter your email" name="entry.1045781291" />
                        <input type="text" placeholder="Enter your favorite destinations" name="entry.1065046570" />
                        <input type="text" placeholder="Any Suggestion" name="entry.1166974658" /> */}
                            <button type="submit" className='border-2 border-black bg-black text-white px-4 py-2 mb-3 sm:w-[320px] w-[260px] font-medium'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FeedbackForm