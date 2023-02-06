import React from "react";
import pagenot from "../assets/pagenotfound.gif"

function PageNotFound()
{
    return(
        <div className="w-full h-screen flex items-center justify-center">
                <img src={pagenot} alt="pagenotfound" className="w-[320px]"/>
        </div>
    )
}

export default PageNotFound