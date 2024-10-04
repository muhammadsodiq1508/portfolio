import React from "react";
import "./Education.css";
import { CgArrowTopRight } from "react-icons/cg";
import Raketa from "../../assets/raketa.png";
import Music from "../../assets/music.png";
import King from "../../assets/king.png";

const Education = () => {
  return (
    <div className="education">
      <div className="education-teble1">
        <h1>📚 Education</h1>

        <div className="university">
          <p>
            <span>Stanford University</span>
            <br /> MSc (Human Computer Interaction){" "}
            <span className="arrow">
              <CgArrowTopRight />
            </span>
          </p>
          <h3>• 2013-2015</h3>
          <h1>_________________________</h1>
        </div>

        <div className="school">
          <p>
            <span>MIT Summer School</span>
            <br /> UX Training Bootcamp{" "}
            <span className="arrow">
              <CgArrowTopRight />
            </span>
          </p>
          <h3>• 2013-2014</h3>
          <h1>_________________________</h1>
        </div>

        <div className="state">
          <p>
            <span>California State University</span>
            <br />
            <br /> BSc in Software Engineering{" "}
            <span className="arrow">
              <CgArrowTopRight />
            </span>
          </p>
          <h3>• 2009-2012</h3>
          <h1>_________________________</h1>
        </div>
      </div>



      <div className="education-teble2">
        <h1>💼 Work Experience</h1>

        <div className="fleet">
          <div className="img4">
          <img src={Raketa} alt="" />
          <p>
            <span>SpaceFleet</span> <br />
            Senior Product Designer{" "}
            <span className="top">
              <CgArrowTopRight />
            </span>
          </p>
          </div>
          <h3>•April 2019 - Current</h3>
          <h1>_________________________</h1>
        </div>

        <div className="mash">
          <div className="img5">
          <img src={Music} alt="" />
          <p>
            <span>MusicMash</span> <br /> information Architect{" "}
            <span className="top">
              <CgArrowTopRight />
            </span>
          </p>
          </div>
          <h3>•April 2016 - May 2017</h3>
          <h1>_________________________</h1>
        </div>

        <div className="king">
         <div className="img6">
         <img src={King} alt="" />
          <p><span>KingDom</span> <br /> Ul Design{" "}   
          <span className="top">
            <CgArrowTopRight />
          </span>
          </p>
         </div>
          <h3>•April 2016 - May 2017</h3>
          <h1>_________________________</h1>
        </div>
      </div>
    </div>
  );
};

export default Education;