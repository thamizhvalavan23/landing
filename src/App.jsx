import React, { useEffect, useState } from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
const App = () => {
  let herodata = [
    {text1:"Dive into",text2:"What you love"},
    {text1:"indulge" , text2 :"Your passions"},
    {text1 : "Give into",text2:"Your passions"}
  ]
  const [herocount ,setHerocount] = useState(0);
  const [playstatus, setPlaystatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHerocount((count)=>{ return count===2?0:count+1})

    },4000)

  },[])
  return (
    <div className='App'>
      <Background herocount = {herocount} playstatus={playstatus} />
      <Navbar />
      <Hero
      herocount={herocount}
      setHerocount={setHerocount}
      playstatus={playstatus}
      setPlaystatus={setPlaystatus}
      herodata={herodata[herocount]}
       />
    </div>
  )
}

export default App
