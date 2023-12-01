import React from "react";
import img1 from "assets/img/service/da6.png";
import img2 from "assets/img/service/8.png";
import img3 from "assets/img/service/da.png";
import img4 from "assets/img/service/9.png";
import img5 from "assets/img/service/ml.png";
import img6 from "assets/img/service/10.png";

const ServiceAreaTwo = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className="service-area mg-negative bg-gray bg-relative pd-top-60 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                {/* <h6 className="sub-title">Why Consor</h6> */}
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
                    <img className="m-auto" src={img2} alt="img" />
                  </div>
                  {/* <h5>
                    <Link to="/service-details">
                      Provide actionable insights
                    </Link>
                  </h5> */}
                  <h5>
                    Companies leveraging data analytics for decision-making
                    experience a 25% increase in overall decision accuracy.
                  </h5>
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
                    <img className="m-auto" src={img4} alt="img" />
                  </div>
                  {/* <h5>
                    <Link to="/service-details">
                      Bespoke analytics solutions
                    </Link>
                  </h5> */}
                  <h5>
                    Businesses employing data-driven decision-making strategies
                    achieve, on average, a 15% increase in annual revenue.
                  </h5>
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
                    <img className="m-auto" src={img6} alt="img" />
                  </div>
                  {/* <h5>
                    <Link to="/service-details">Predictive Analytics</Link>
                  </h5> */}
                  <h5>
                    Organizations actively leveraging data analytics are 2.5
                    times more likely to be leaders in their industry.
                  </h5>
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
