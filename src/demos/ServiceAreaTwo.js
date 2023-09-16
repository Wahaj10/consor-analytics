import React from "react";
import { Link } from "react-router-dom";
import img1 from "assets/img/service/4.png";
import img2 from "assets/img/service/8.png";
import img3 from "assets/img/service/5.png";
import img4 from "assets/img/service/9.png";
import img5 from "assets/img/service/6.png";
import img6 from "assets/img/service/10.png";

const ServiceAreaTwo = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className="service-area mg-negative bg-gray bg-relative pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h6 className="sub-title">Why Consor</h6>
                <h2 className="title">
                  Optimize Your <span tw="text-primary-500">Performance</span>{" "}
                  With Data Analytics
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-2 text-center">
                <div className="thumb">
                  <img src={img1} alt="img" />
                </div>
                <div className="details">
                  <div className="icon mb-3">
                    <img src={img2} alt="img" />
                  </div>
                  <h5>
                    <Link to="/service-details">
                      Provide actionable insights
                    </Link>
                  </h5>
                  <p>Insights derived from comprehensive data analysis</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-2 text-center">
                <div className="thumb">
                  <img src={img3} alt="img" />
                </div>
                <div className="details">
                  <div className="icon mb-3">
                    <img src={img4} alt="img" />
                  </div>
                  <h5>
                    <Link to="/service-details">
                      Bespoke analytics solutions
                    </Link>
                  </h5>
                  <p>Solutions tailored to your needs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-inner-2 text-center">
                <div className="thumb">
                  <img src={img5} alt="img" />
                </div>
                <div className="details">
                  <div className="icon mb-3">
                    <img src={img6} alt="img" />
                  </div>
                  <h5>
                    <Link to="/service-details">Predictive Analytics</Link>
                  </h5>
                  <p>Uncover hidden patterns and trends in their data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaTwo;
