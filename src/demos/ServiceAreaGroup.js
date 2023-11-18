import React from "react";
import { Link } from "react-router-dom";
import serviceList from "../scripts/serviceList";

import img from "assets/img/icon/4.png";
import img1 from "assets/img/service-icon/1.png";
import img2 from "assets/img/service-icon/2.png";
import img3 from "assets/img/service-icon/3.png";
import img4 from "assets/img/service-icon/2.png";
import img5 from "assets/img/service-icon/1.png";
import img6 from "assets/img/service-icon/3.png";

const ServiceAreaGroup = () => {
  const imagesList = [img1, img2, img3, img4, img5, img6];

  return (
    <>
      {/*=================== service area start ===================*/}
      <div className="service-area bg-relative pd-top-100 ">
        {/* <img
          className="position-bottom-left top_image_bounce"
          src={img}
          alt="bulb icon"
        /> */}
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">CREATIVE SERVICES</h6>
            <h2 className="title">
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          <div className="row">
            {serviceList.map((data, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-service-inner text-center">
                  <div className="thumb">
                    <img src={imagesList[index]} alt="img" />
                  </div>
                  <div className="details">
                    <h5>
                      <Link to="#services">
                        <span className="service-number">
                          {index + 1 + ". "}
                        </span>
                        {data.title}
                      </Link>
                    </h5>
                    <p>{data.des}</p>
                    {/* <Link className="btn btn-border-base" to="/service-details">
                      Touch More <FaPlus />
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaGroup;
