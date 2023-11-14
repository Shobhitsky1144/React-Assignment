import React from "react";
// image import
import chartImg from "../assest/Cohorts 1.png";
import eyeIcon from "../assest/Eye.png";
import footerlogo from "../assest/Vector.png";
import bellIcon from "../assest/Bell1.png";

// component import
import AutoRotatingCarousel from "../components/AutoRotatingCarousel";
import Form from "../components/Form";

// Import data from the separate file
import { notificationCards, testimonialCards } from "../data/data";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12  col-md-12 col-lg-8 parent-section  pt-5">
          <div className="row">
            {/* notification section  */}

            <div className="col-12 col-lg-12 col-xl-6">
              <div className="first-section-left pt-1 pl-3">
                <img src={bellIcon} />
                <h3 className="pt-3">
                  Get notified when a <br />
                  highly correlated <br />
                  whale makes a move
                </h3>
                <p>
                  Find out when a certain whale moves <br />
                  more than any preset amount on-chain or <br />
                  when a dormant whale you care about <br />
                  becomes active.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-12 col-xl-6">
              <div className="first-section -right">
                <AutoRotatingCarousel cards={notificationCards} />
              </div>
            </div>

            {/* second section  */}

            <div className="col-12 col-sm-12 col-md-6 col-lg-6   second-section-left mt-5">
              <div className="img-parent">
                <img src={chartImg} alt="cohorts" className="chartImg" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6  mt-5 eye-section">
              <div className=" second-section-right text-right mt-3">
                <img src={eyeIcon} />
                <h2 className="pt-2">
                  Watch what the <br /> whales are doing
                </h2>
                <p>
                  All whales are not equal. Know exactly <br />
                  what the whales impacting YOUR <br /> portfolio are doing.
                </p>
              </div>
            </div>

            {/* testimonial section */}

            <div className="col-12 col-sm-12 col-md-12 col-lg-12 testimonials mb-4 pl-5 mt-5 order-2 order-sm-2">
              <h4 className="text-right py-3">Testimonials</h4>
              <div className="row">
                <div className="col-2 col-sm-1 col-md-1 col-lg-1">
                  <div className="footerlogo ">
                    <img src={footerlogo} />
                  </div>
                </div>
                <div className="col-10 col-sm-11 col-md-11 col-lg-11 my-4 testimonials-carousel">
                  <AutoRotatingCarousel
                    cards={testimonialCards}
                    footer={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-4 form-container text-center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
