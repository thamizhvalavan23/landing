import React from 'react'
import './Hero.css';
import arrow from '../../assets/arrow_btn.png';
import pause from "../../assets/pause_icon.png";
import play from "../../assets/play_icon.png";

const Hero = ({playstatus,setPlaystatus,herocount,setHerocount,herodata}) => {
  return (
    <div>
      <div className="hero-data">
        <div className="hero-text">
          <p>{herodata.text1}</p>
          <p>{herodata.text2}</p>
        </div>
        <div className="hero-button">
          <p>Explore The future</p>
          <img src={arrow} alt='navbar-logo' />
        </div>
        <div className="hero-dot">
          <ul>
            <li onClick={()=>setHerocount(0)} className={herocount === 0 ? "hero-dot-data orange" : "hero-dot-data"}></li>
            <li onClick={()=>setHerocount(1)}className={herocount === 1 ? "hero-dot-data orange" : "hero-dot-data"}></li>
            <li onClick={()=>setHerocount(2)}className={herocount === 2 ? "hero-dot-data orange" : "hero-dot-data"}></li>
          </ul>
        </div>
        <div className="hero-video">
         {
          (playstatus) ?<div className='video'>
             <img onClick={()=>setPlaystatus(false)} className='play-logo' src={pause} alt='video-pause' />
             <p>Stop</p>
             </div>
             :
             <div className='video'> 
             <img onClick={()=>setPlaystatus(true)} className = "play-logo"src={play} alt='video-pay' />
             <p>Resume video</p>
             </div>
         }
        </div>
      </div>
      
    </div>
  )
}

export default Hero
