import React from "react";

// import img1 from "assets/img/about/2.png";
import img2 from "assets/img/about/3.png";
// import img3 from "assets/img/banner/5.svg";
// import img4 from "assets/img/about/1.png";
import img5 from "assets/img/icon/2.png";
import img6 from "assets/img/icon/3.png";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className="about-area pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-thumb-inner pe-xl-5 me-xl-5 "
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                {/* <img
                  className="animate-img-1 top_image_bounce"
                  src={img1}
                  alt="img"
                /> */}
                <img
                  className="animate-img-2 left_image_bounce"
                  src={img2}
                  alt="img"
                />
                {/* <img
                  className="animate-img-3 top_image_bounce"
                  src={img3}
                  alt="img"
                /> */}
                <img
                  className="main-img"
                  src={
                    "https://elements-cover-images-0.imgix.net/59cefca7-5f32-4b3e-b2ad-275887313cdf?auto=compress%2Cformat&fit=max&w=2740&s=f7501c0f7491da0ea928ecbce65ddef8"
                  }
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mt-5 mt-lg-0">
                <h6 className="sub-title">ABOUT US</h6>
                <h2 className="title">
                  Data is a Critical Component of <span>Modern</span> Businesses
                </h2>
                <p className="content mb-4 mb-xl-5">
                  Our journey began with a shared vision: to make the power of
                  data accessible to everyone.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src={img5} alt="img" />
                      </div>
                      <div className="details">
                        <h5>Our Ambition</h5>
                        <p>
                          We believe that data is not just a collection of
                          numbers and figures; it's a goldmine of opportunities
                          waiting to be discovered
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src={img6} alt="img" />
                      </div>
                      <div className="details">
                        <h5>Our approach</h5>
                        <p>
                          Our approach combines cutting-edge technology with
                          deep domain expertise to unlock the full potential of
                          your data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
