import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

export default () => {
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "https://use.typekit.net/foobar.js";
  //   script.async = true;

  //   document.body.appendChild(script);
  // });

  return (
    <>
      <section className="service-style-two">
        <div
          className="pattern-layer wow slideInRight animated animated"
          data-wow-delay="500ms"
          data-wow-duration="1500ms"
          style={{ backgroundImage: "url(assets/images/shape/pattern-10.png)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <p>Best Services</p>
            <h2>Explore Our Data Services</h2>
          </div>
          <div className="tabs-box">
            <div className="tab-btn-box">
              <ul className="tab-btns tab-buttons clearfix">
                <li className="tab-btn active-btn" data-tab="#tab-1">
                  <div className="btn-inner">
                    <div className="icon-box">
                      <i className="flaticon-file"></i>
                    </div>
                    <h4>Big Data Consulting</h4>
                  </div>
                </li>
                <li className="tab-btn" data-tab="#tab-2">
                  <div className="btn-inner">
                    <div className="icon-box">
                      <i className="flaticon-robot"></i>
                    </div>
                    <h4>Artificial Intelligence</h4>
                  </div>
                </li>
                <li className="tab-btn" data-tab="#tab-3">
                  <div className="btn-inner">
                    <div className="icon-box">
                      <i className="flaticon-data-analytics"></i>
                    </div>
                    <h4>Data Analytics</h4>
                  </div>
                </li>
                <li className="tab-btn" data-tab="#tab-4">
                  <div className="btn-inner">
                    <div className="icon-box">
                      <i className="flaticon-machine-learning"></i>
                    </div>
                    <h4>Data Monetization</h4>
                  </div>
                </li>
              </ul>
            </div>
            <div className="inner-content">
              <div className="tabs-content">
                <div className="tab active-tab" id="tab-1">
                  <div className="row align-items-center clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                      <div className="content-box">
                        <h3>Acquire New Customers More Efficiently</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat duis aute irure.
                        </p>
                        <ul className="list-item">
                          <li>Various Analysis Options</li>
                          <li>
                            Page Load Details (time, size, number of requests)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image-box js-tilt">
                        <img
                          src="assets/images/resource/illustration-1.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-2">
                  <div className="row align-items-center clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                      <div className="content-box">
                        <h3>Acquire New Customers More Efficiently</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat duis aute irure.
                        </p>
                        <ul className="list-item">
                          <li>Various Analysis Options</li>
                          <li>
                            Page Load Details (time, size, number of requests)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image-box js-tilt">
                        <img
                          src="assets/images/resource/illustration-1.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-3">
                  <div className="row align-items-center clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                      <div className="content-box">
                        <h3>Acquire New Customers More Efficiently</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat duis aute irure.
                        </p>
                        <ul className="list-item">
                          <li>Various Analysis Options</li>
                          <li>
                            Page Load Details (time, size, number of requests)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image-box js-tilt">
                        <img
                          src="assets/images/resource/illustration-1.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-4">
                  <div className="row align-items-center clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                      <div className="content-box">
                        <h3>Acquire New Customers More Efficiently</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat duis aute irure.
                        </p>
                        <ul className="list-item">
                          <li>Various Analysis Options</li>
                          <li>
                            Page Load Details (time, size, number of requests)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure className="image-box js-tilt">
                        <img
                          src="assets/images/resource/illustration-1.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
