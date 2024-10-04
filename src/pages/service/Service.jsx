import React from 'react'
import "./Service.css"
import Fester from "../../assets/fester.png"
import Need from "../../assets/need.png"
import Excent from "../../assets/excent.png"

const Service = () => {
  return (
    <div className='service'>
        <div className="service-text">
            <h3>Services</h3>
            <h1 className='service-title'>Design that solves problems, <br /><span> one product at a time.</span></h1>
        </div>

        <div className="service-img">
            <img src={Fester} alt="" />
            <img src={Need} alt="" />
            <img src={Excent} alt="" />
           <h1>What I can do for you</h1>
            <h1>Applications I'm fluent in</h1>
            <h1>What you can expect</h1>
            <p>Faster, better products that your <br /> users love. Here's all the services I <br /> provide:</p>
            <p>Every designer needs the right <br /> tools to do the perfect job. <br /> Thankfully, I'm multilingual.</p>
            <p>I design products that are more <br /> than pretty. I make them shippable <br /> and usable.</p>
           <ul>
              <li>
                <a href="/">Design Strategy</a>
              </li>
            </ul>
            <ul>
              <li>
                  <a href="/">Sketch</a>
              </li>
            </ul>

            <ul>
              <li>
                  <a href="/">Clean and functional</a>
              </li>
            </ul>

            <ul>
              <li>
                  <a href="/">Web and Mobile App Design</a>
              </li>
            </ul>

            <ul>
              <li>
                  <a href="/">Webflow</a>
              </li>
            </ul>

            <ul>
              <li>
                  <a href="/">Device and user friendly</a>
              </li>
            </ul>

            <ul>
              <li>
                  <a href="/">Front-end Development</a>
              </li>
            </ul>

            <ul>
              <li>
                  <a href="/">Figma</a>
              </li>
            </ul>

            <ul>
              <li>
                  <a href="/">Efficient and maintainable</a>
              </li>
            </ul>
           </div>
        </div>
  )
}

export default Service