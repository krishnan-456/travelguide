import React from 'react'
import animationData from '../loader.json';
import { Player } from '@lottiefiles/react-lottie-player';

const Loader = () => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice"
    //     }
    //   };
    
    return (
      <div className='w-full h-[80vh] flex items-center justify-center'>
        <Player
        autoplay
        loop
        src={animationData}
        className="w-[180px] h-[180px]"
        ></Player>
      </div>
    );
  
}

export default Loader