import React from "react";
import { IoIosArrowUp } from 'react-icons/io'

function Slideup() {
    const toptoscroll=()=>
    {
        window.scrollTo({top:0, behavior:'smooth'});
    }
    return (
            <div className="fixed bottom-6 right-6" onClick={toptoscroll}>
                <div className="w-[40px] h-[40px] bg-slate-800 rounded-full relative flex items-center justify-center p-2 hover:bg-red-500">
                    <IoIosArrowUp size={23} className="absolute text-white" />
                </div>
            </div>
    )
}

export default Slideup