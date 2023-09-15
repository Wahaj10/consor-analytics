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
      <section class="service-style-two">
        <div
          class="pattern-layer wow slideInRight animated animated"
          data-wow-delay="500ms"
          data-wow-duration="1500ms"
          style={{ backgroundImage: "url(assets/images/shape/pattern-10.png)" }}
        ></div>
        <div class="auto-container">
          <div class="sec-title text-center">
            <p>Best Services</p>
            <h2>Explore Our Data Services</h2>
          </div>
          <div class="tabs-box">
            <div class="tab-btn-box">
              <ul class="tab-btns tab-buttons clearfix">
                <li class="tab-btn active-btn" data-tab="#tab-1">
                  <div class="btn-inner">
                    <div class="icon-box">
                      <i class="flaticon-file"></i>
                    </div>
                    <h4>Big Data Consulting</h4>
                  </div>
                </li>
                <li class="tab-btn" data-tab="#tab-2">
                  <div class="btn-inner">
                    <div class="icon-box">
                      <i class="flaticon-robot"></i>
                    </div>
                    <h4>Artificial Intelligence</h4>
                  </div>
                </li>
                <li class="tab-btn" data-tab="#tab-3">
                  <div class="btn-inner">
                    <div class="icon-box">
                      <i class="flaticon-data-analytics"></i>
                    </div>
                    <h4>Data Analytics</h4>
                  </div>
                </li>
                <li class="tab-btn" data-tab="#tab-4">
                  <div class="btn-inner">
                    <div class="icon-box">
                      <i class="flaticon-machine-learning"></i>
                    </div>
                    <h4>Data Monetization</h4>
                  </div>
                </li>
              </ul>
            </div>
            <div class="inner-content">
              <div class="tabs-content">
                <div class="tab active-tab" id="tab-1">
                  <div class="row align-items-center clearfix">
                    <div class="col-lg-6 col-md-6 col-sm-12 content-column">
                      <div class="content-box">
                        <h3>Acquire New Customers More Efficiently</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat duis aute irure.
                        </p>
                        <ul class="list-item">
                          <li>Various Analysis Options</li>
                          <li>
                            Page Load Details (time, size, number of requests)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure class="image-box js-tilt">
                        <img
                          src="assets/images/resource/illustration-1.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="tab" id="tab-2">
                  <div class="row align-items-center clearfix">
                    <div class="col-lg-6 col-md-6 col-sm-12 content-column">
                      <div class="content-box">
                        <h3>Acquire New Customers More Efficiently</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat duis aute irure.
                        </p>
                        <ul class="list-item">
                          <li>Various Analysis Options</li>
                          <li>
                            Page Load Details (time, size, number of requests)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure class="image-box js-tilt">
                        <img
                          src="assets/images/resource/illustration-1.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="tab" id="tab-3">
                  <div class="row align-items-center clearfix">
                    <div class="col-lg-6 col-md-6 col-sm-12 content-column">
                      <div class="content-box">
                        <h3>Acquire New Customers More Efficiently</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat duis aute irure.
                        </p>
                        <ul class="list-item">
                          <li>Various Analysis Options</li>
                          <li>
                            Page Load Details (time, size, number of requests)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure class="image-box js-tilt">
                        <img
                          src="assets/images/resource/illustration-1.png"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="tab" id="tab-4">
                  <div class="row align-items-center clearfix">
                    <div class="col-lg-6 col-md-6 col-sm-12 content-column">
                      <div class="content-box">
                        <h3>Acquire New Customers More Efficiently</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit sed eiusmod tempor incididunt ut labore et dolore
                          magna aliqua.enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat duis aute irure.
                        </p>
                        <ul class="list-item">
                          <li>Various Analysis Options</li>
                          <li>
                            Page Load Details (time, size, number of requests)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 image-column">
                      <figure class="image-box js-tilt">
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
