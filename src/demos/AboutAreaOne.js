import React from "react";

import img2 from "assets/img/about/3.png";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className="about-area pd-top-90">
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
                {/* <h6 className="sub-title">ABOUT US</h6> */}
                <h2 className="title">
                  Our <span>Story</span>
                </h2>
                <br />
                <div>
                  Nestled in the dynamic landscape of Calgary, Canada, our
                  journey began in the summer of 2020 with a singular focus — to
                  be the catalyst for change in the realm of data analytics. As
                  a company deeply rooted in the ethos of innovation, we take
                  pride in our specialization in all things data. Our commitment
                  extends beyond the mere interpretation of data; we aim to be
                  the trusted companion on your journey to transformative
                  insights and operational excellence.
                  <br />
                  <br />
                  At the core of our mission is a genuine desire to help
                  companies not just decipher the complexities of data but to
                  leverage it as a strategic asset for growth. We understand
                  that in today's fast-paced business environment, being a
                  change-maker requires more than just numbers; it demands a
                  profound understanding of your unique challenges and
                  aspirations. Our team of dedicated professionals stands ready
                  to guide you through this transformative process, offering
                  tailored solutions that go beyond analytics — they provide a
                  roadmap to success.
                  <br />
                  <br />
                  We recognize the significance of trust in forging enduring
                  partnerships. From our inception, we've worked diligently to
                  foster a relationship built on transparency, reliability, and
                  a shared commitment to your success. We don't just analyze
                  data; we cultivate trust. Trust that the insights we unveil
                  are not just accurate but invaluable. Trust that our
                  collaboration is not just a service but a pathway to being the
                  best version of your business.
                  <br />
                  <br />
                  In a landscape where data is the linchpin of change, we aspire
                  to be the change-maker that propels your company to new
                  heights. Join us on this journey, where data transcends beyond
                  numbers to become a transformative force, and together, we
                  redefine what's possible.
                </div>
                {/* <div className="row">
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
                </div> */}
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
