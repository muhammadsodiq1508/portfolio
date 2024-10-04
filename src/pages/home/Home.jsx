import React from 'react'
import "./Home.css"
import Img from "../../assets/person.png"

const Home = () => {
  return (
    <div className='home'>
        <div className="home-text">
        <h1><span>I design products</span> <br />
        that delight and <br />
         inspire people.
        </h1>
         <p>Hi! I’m Jake, a product designer based in Berlin. I create <br /> user-friendly interfaces for fast-growing startups.</p>
        <div className="buttons">
        <button>Book a call</button>
        <a href="/">Download CV →</a>
        </div>
        </div>

        <div className="img">
        <img src={Img} alt="" />
        </div>
    </div>
  )
}

export default Home