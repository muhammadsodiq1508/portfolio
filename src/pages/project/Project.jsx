import React from "react";
import "./Project.css";
import Yellow from "../../assets/yellow.png";
import Red from "../../assets/red.png";

const Project = () => {
  return (
    <>
    <div className="project">
      <div className="project-text">
        <h2>PROJECTS</h2>
        <h1>
          I bring results. <br />
          My clients are proof.
        </h1>
        <button>View all projects</button>
      </div>
    </div>


      <div className="cart">
        <div className="cart-img">
          <img src={Yellow} alt="" />
          <img src={Red} alt="" />
          <img src={Yellow} alt="" />
          <h3>Branding</h3>
          <h3>Product Design</h3>
          <h3>Web Design</h3>
           <h1>Soulful Rebrand</h1>
           <h1>Datadash Product design</h1>
           <h1>Maize Website Design</h1>
           <h2>View Project →</h2>
           <h2>View Project →</h2>
           <h2>View Project →</h2>
        </div>
      </div>

</>
  );
};

export default Project;
