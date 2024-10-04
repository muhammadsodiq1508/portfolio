import React from 'react'
import "./Testemonial.css"
import Jingalak from "../../assets/jingalak.png"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Tutiq from "../../assets/tutiq.png"

const Testemonial = () => {
  return (
    <div className='testemonial'>
        <div className="testemonial-img">
            <h2>Testimonials</h2>
            <h1>Word on the street</h1>
            <img src={Jingalak} alt="" />
        </div>

        <div className="testemonial-text">
        <img src={Tutiq} alt="" />
            <p>Jade helped us build a software so <br /> intuitive that it didn't need a <br /> walkthrough. He solved complex <br /> problems with brilliant design.</p>

            <h2>John Frankin</h2>
            <h3>Founder, Double Bunch</h3>
           <div className="buttons-right">
           <button className='button1'><FaChevronLeft/></button>
            <button className="button2"><FaChevronRight/></button>
           </div>
        </div>
    </div>
  )
}

export default Testemonial