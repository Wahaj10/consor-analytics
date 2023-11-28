import React from "react";

import img3 from "assets/img/bg/3.png";

const FaqAreaOne = () => {
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className="faq-area bg-cover pd-top-90 pd-bottom-110 mg-negative"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="container">
          <div className="row ">
            <div
              className="col-xl-5 col-lg-6 col-md-8 order-lg-last"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner pt-lg-3">
                <img
                  className="main-img"
                  src={
                    "https://elements-cover-images-0.imgix.net/48e90523-f697-49b0-9567-af138f5d47ff?auto=compress%2Cformat&fit=max&w=2740&s=0d2e400ef23c9af918a1de7fa3e16237"
                  }
                  alt="img"
                />
                {/* <img
                  className="animate-img-bottom-right top_image_bounce"
                  src={img2}
                  alt="img"
                /> */}
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 mt-4 mt-lg-0">
                <h6 className="sub-title">SOME FAQ'S</h6>
                <h2 className="title">
                  Creating <span>Digital</span> Masterpieces
                </h2>
                {/* <p className="content">
                  It is a long established fact that a reader will be distr
                  acted bioiiy the end gail designa readable content of a page
                  when looking.
                </p> */}
              </div>
              <div
                className="accordion accordion-inner style-2 accordion-icon-left mt-3"
                id="accordionExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What services does your data analytics company offer?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We offer a comprehensive range of data analytics services,
                      including data interpretation, predictive modeling,
                      machine learning, and customized solutions to meet your
                      specific business needs.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How can data analytics benefit my business?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Data analytics can provide valuable insights into your
                      business operations, customer behavior, and market trends,
                      helping you make informed decisions, optimize processes,
                      and gain a competitive edge.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What industries do you specialize in?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Our expertise spans across various industries, including
                      but not limited to finance, healthcare, retail, and
                      manufacturing. We tailor our solutions to suit the unique
                      challenges of each sector.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How do you ensure the security and confidentiality of our
                      data?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Security is paramount to us. We employ state-of-the-art
                      encryption, access controls, and other measures to
                      safeguard your data. Our practices comply with industry
                      standards and regulations.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can you integrate with existing systems and platforms?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Absolutely. Our team is experienced in seamless
                      integrations with various systems and platforms to ensure
                      a smooth transition and continued compatibility.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      How long does it take to see results from data analytics?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The timeline for results varies based on the complexity of
                      your project. We work efficiently to deliver actionable
                      insights promptly, but the duration can depend on the
                      scope and objectives of the analysis.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      Do I need to have a large amount of data for analytics to
                      be effective?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Not necessarily. While more data can enhance the depth of
                      insights, we can work with varying data volumes. Our team
                      can assess your specific needs and tailor solutions
                      accordingly.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      What level of support do you provide after implementation?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Our support extends beyond implementation. We offer
                      ongoing assistance, training, and regular reviews to
                      ensure the continued success of our solutions and adapt
                      them to your evolving needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaOne;
