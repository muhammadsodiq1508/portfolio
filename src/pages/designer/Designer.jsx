import React from "react";
import "./Designer.css";
import tell from "../../assets/tell.png"
import pupil from "../../assets/pupil.png"
import kompyuter from "../../assets/kompyuter.png"
import pupilss from "../../assets/pupil-girl.png"

const Designer = () => {
  return (
    <div className="designer">
      <div className="designer-text">
        <h1>
          <span>Product Designer</span> <br /> That's me!
        </h1>
        <p>
          Over the past 12 years, I've worked with a diverse range of <br />{" "}
          clients, from startups to Fortune 500 companies. I love crafting{" "}
          <br /> interfaces that delight users and help businesses grow.
        </p>
      </div>

      <div className="designer-img">
        <div className="img1">
            <img src={tell} alt="" />
        </div>

        <div className="img2">
            <img src={pupil} alt="" />
        </div>

        <div className="img3">
            <img src={kompyuter} alt="" />
            <br />
            <img src={pupilss} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Designer;
