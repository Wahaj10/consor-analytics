import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

import img1 from "assets/img/icon/img1-1.png";
import img2 from "assets/img/icon/img2.png";
import img3 from "assets/img/icon/img3.png";

const CounterAreaFour = () => {
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div className="counter-area mg-top--100 banner">
        <div className="container">
          <div
            className="counter-4-area pt-5 border-radius-20"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6 ">
                <div className="single-counter-inner media">
                  <div className="media-left pe-2 banner-img">
                    <img src={img1} alt="img" />
                  </div>
                  <div
                    style={{ fontSize: "22px" }}
                    className="media-body align-self-center"
                  >
                    <h4 className="text-black mb-1 title">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter">
                              <CountUp delay={0} start={0} end={329} /> Million
                              TB+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h4>
                    <p className="text-black mb-0">Data Created Daily</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className="single-counter-inner media">
                  <div className="media-left pe-2 banner-img">
                    <img src={img2} alt="img" />
                  </div>
                  <div
                    style={{ fontSize: "22px" }}
                    className="media-body align-self-center"
                  >
                    <h4 className="text-black mb-1">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter">
                              <CountUp delay={0} start={0} end={100} />{" "}
                              Yotabytes+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h4>
                    <p className="text-black mb-0">Cloud Stored Data</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className="single-counter-inner media">
                  <div className="media-left pe-2 banner-img">
                    <img src={img3} alt="img" />
                  </div>
                  <div
                    style={{ fontSize: "22px" }}
                    className="media-body align-self-center"
                  >
                    <h4 className="text-black mb-1">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter">
                              <CountUp delay={0} start={0} end={25000000} /> +
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h4>
                    <p className="text-black mb-0">Daily Data Migrations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*{/*================= counter area end {/*=================*/}
    </>
  );
};

export default CounterAreaFour;
