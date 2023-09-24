import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

import img1 from "assets/img/icon/33.svg";
import img2 from "assets/img/icon/34.svg";
import img3 from "assets/img/icon/35.svg";

const CounterAreaFour = () => {
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div className="counter-area mg-top--100">
        <div className="container pd-bottom-90">
          <div
            className="counter-4-area pt-5 border-radius-20"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6 ">
                <div className="single-counter-inner media">
                  <div className="thumb media-left pe-2">
                    <img src={img1} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h4 className="text-black mb-1">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter">
                              <CountUp delay={0} start={0} end={10} /> k+
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h4>
                    <p className="text-black mb-0">Team member</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className="single-counter-inner media">
                  <div className="thumb media-left pe-2">
                    <img src={img2} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h4 className="text-black mb-1">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter">
                              <CountUp delay={0} start={0} end={200} /> +
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h4>
                    <p className="text-black mb-0">Team member</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className="single-counter-inner media">
                  <div className="thumb media-left pe-2">
                    <img src={img3} alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h4 className="text-black mb-1">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="counter">
                              <CountUp delay={0} start={0} end={250} /> +
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </h4>
                    <p className="text-black mb-0">Team member</p>
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
