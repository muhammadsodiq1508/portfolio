import React from 'react'
import "./About.css"
import logo from "../../assets/logo.png"
import ipsum from "../../assets/ipsum.png"
import logoipsum from "../../assets/logoipsum.png"
import logoip from "../../assets/logoip.png"

const About = () => {
  return (
    <div className='about'>
        <h1>Trusted by</h1>
        <div className="about-img">
        <img src={logo} alt="" />
        <img src={ipsum} alt="" />
        <img src={logoipsum} alt="" />
        <img src={logoip} alt="" />
        </div>
    </div>
  )
}

export default About