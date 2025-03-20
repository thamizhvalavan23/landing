import React from 'react'
import './Background.css'
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const Background = ({herocount,playstatus}) => {
 if (playstatus) {
  return(
    <div>
      <video className='background' autoPlay loop muted>
        <source src={video1} type='video/mp4' />
      </video>
    </div>
  )
}
else if(herocount === 0){
      return<img className ="background fade"src={image1} alt='image1'/>
      
}
else if(herocount === 1){
      return <img className ="background fade"src={image2} alt='image2'/>
}
else if(herocount === 2){
      return <img className ="background fade " src={image3} alt='image3'/>
}
}

export default Background
