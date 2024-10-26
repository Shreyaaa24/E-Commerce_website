import React from 'react'
import './Hero.css'
import chairs from '../Assets/chairs.jpeg'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVAL</h2>
        <div>
            <div classname="hero-hand-icon">
                <p>New</p>
               <img src={hand_icon}/>
</div>
<p>Collections</p>
<p>for your home</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon}/>
        </div>
        </div>
        <div className="hero-right">
<img src={chairs}/>
       
       </div>
    </div>
  )
}

export default Hero
