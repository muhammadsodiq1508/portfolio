import React from 'react'
import "./Footer.css"
import { FaAngleDown } from "react-icons/fa";
import { RiMessageLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='footer1'>
        <div className="footer-title">
            <h2>FAQ</h2>
            <h1>Frequently asked questions</h1>
        </div>
        <div className="footer">
            <div className="footer-table1">
            <div className="down">
            <h1>What type of projects do you take on?</h1>
                <p><FaAngleDown /></p>
            </div>
            <div className="down1">
            <h1>What is your hourly rate?</h1>
                <p><FaAngleDown /></p>
            </div>
            <div className="down2">
            <h1>What time-zone do you work in?</h1>
                <p><FaAngleDown /></p>
            </div>
            <div className="down3">
            <h1>WWhat is the typical timeline for a project?</h1>
                <p><FaAngleDown /></p>
            </div>
            </div>
            <div className="footer-table2">
            <div className="down4">
            <h1>How do you charge for projects ?</h1>
                <p><FaAngleDown /></p>
            </div>

            <div className="down5">
            <h1>What does your design process look like?</h1>
                <p><FaAngleDown /></p>
            </div>

            <div className="down6">
            <h1>What metrics do you use to measure success?</h1>
                <p><FaAngleDown /></p>
            </div>

            <div className="down7">
            <h1>What if I need help after the project is complete?</h1>
                <p><FaAngleDown /></p>
            </div>
            </div>
        </div>

        <div className="ready">
            <h1>Ready to make something kickass?  <br /><span>Let's get on a call.</span></h1>

            <div className="about">
                <div className="about2">
                    <h2>Portfolio Creator</h2>
                    <p>4353 Delaware Avenue, San Francisco, USA</p>
                    <div className="sab">
                        <p><RiMessageLine /> hi@thefolio.com</p>
                    </div>
                </div>

                <div className="dripple">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3>Dribbble</h3>
                </div>

                <div className="instagram">
                    <h3>Services</h3>
                    <h3>Blog</h3>
                    <h3>Instagram</h3>
                </div>

                <div className="experience">
                    <h3>Experience</h3>
                    <h3>Projects</h3>
                    <h3>Twitter</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer