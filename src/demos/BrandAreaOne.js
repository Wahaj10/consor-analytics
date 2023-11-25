import React from "react";
import Marquee from "react-fast-marquee";

import img1 from "assets/img/client/gcp.svg";
import img2 from "assets/img/client/azure.svg";
import img3 from "assets/img/client/aws.svg";
import img4 from "assets/img/client/snow.svg";
import img5 from "assets/img/client/tableau.svg";
import img6 from "assets/img/client/aws.svg";

const BrandAreaOne = () => {
  return (
    <div className="about-area bg-gray pt-5 pb-5 mg-negative">
      <div className="container">
        <div className="client-slider">
          <Marquee gradient={false}>
            <div className="thumb">
              <img src={img1} alt="img" />
            </div>
            <div className="thumb">
              <img src={img2} alt="img" />
            </div>
            <div className="thumb">
              <img src={img3} alt="img" />
            </div>
            <div className="thumb">
              <img src={img4} alt="img" />
            </div>
            <div className="thumb">
              <img src={img1} alt="img" />
            </div>
            <div className="thumb">
              <img src={img5} alt="img" />
            </div>
            <div className="thumb">
              <img src={img6} alt="img" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandAreaOne;
