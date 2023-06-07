import React, { useRef, useState } from 'react';
import './Intro.css';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants';
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef();

  const handleVideo = ()=>{
    setPlayVideo((preState)=>!preState)

    if(playVideo){
      vidRef.current.play();
    }else{
          vidRef.current.pause();
        }
  }

  return(
    <div className='app__video'>
    <video ref={vidRef} src={meal} type='video/mp4' loop controls={false} muted/>
    <div className='app__video-overlay flex__center'>
      <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
          {playVideo?<BsPauseFill color='#fff' fontSize={30}/>:<BsFillPlayFill color='#fff' fontSize={30}/>}
      </div>
    </div>
  </div>
  )
};

export default Intro;
