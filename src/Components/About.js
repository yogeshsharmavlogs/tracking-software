import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  return (
    <div>
      <div
        className="site-breadcrumb"
        style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
      >
        <div className="container">
          <h2 className="breadcrumb-title">About Us</h2>
          <ul className="breadcrumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">About Us</li>
          </ul>
        </div>
      </div>

      <div className="about-area py-120">
        <div className="container">
          <div className="row align-items-center">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="col-lg-6"
            >
              <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
                <div className="about-img">
                  <img src="assets/img/about/01.svg" />
                </div>
                <div className="about-experience">
                  <div className="about-experience-icon">
                    <i className="flaticon-car"></i>
                  </div>
                  <b>
                    30 Years Of <br /> Quality Service
                  </b>
                </div>
              </div>
            </motion.div>
            <motion.div className="col-lg-6" style={{}}>
              <div
                className="about-right wow fadeInRight"
                data-wow-delay=".25s"
              >
                <div className="site-heading mb-3">
                  <span className="site-title-tagline justify-content-start">
                    <i className="flaticon-drive"></i> About Us
                  </span>
                  <h2 className="site-title">
                    World Largest <span>Car Dealer</span> Marketplace.
                  </h2>
                </div>
                <p className="about-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
                <div className="about-list-wrapper">
                  <ul className="about-list list-unstyled">
                    <li>At vero eos et accusamus et iusto odio.</li>
                    <li>Established fact that a reader will be distracted.</li>
                    <li>Sed ut perspiciatis unde omnis iste natus sit.</li>
                  </ul>
                </div>
                <a href="about.html" className="theme-btn mt-4">
                  Discover More<i className="fas fa-arrow-right-long"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="counter-area pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="icon"
                >
                  <i className="flaticon-car-rental"></i>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <span
                    className="counter"
                    data-count="+"
                    data-to="500"
                    data-speed="3000"
                  >
                    500
                  </span>
                  <h6 className="title">+ Available Cars </h6>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="icon"
                >
                  <i className="flaticon-car-key"></i>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <span
                    className="counter"
                    data-count="+"
                    data-to="900"
                    data-speed="3000"
                  >
                    900
                  </span>
                  <h6 className="title">+ Happy Clients</h6>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="icon"
                >
                  <i className="flaticon-screwdriver"></i>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <span
                    className="counter"
                    data-count="+"
                    data-to="1500"
                    data-speed="3000"
                  >
                    1500
                  </span>
                  <h6 className="title">+ Team Workers</h6>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-box">
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="icon"
                >
                  <i className="flaticon-review"></i>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <span
                    className="counter"
                    data-count="+"
                    data-to="30"
                    data-speed="3000"
                  >
                    30
                  </span>
                  <h6 className="title">+ Years Of Experience</h6>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center">
                <span className="site-title-tagline">Team</span>
                <h2 className="site-title">
                  Meet With Our <span>Team</span>
                </h2>
                <div className="heading-divider"></div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                <div className="team-img">
                  <img src="assets/img/team/01.jpg" alt="thumb" />
                </div>
                <div className="team-social">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5>
                      <a href="#">Chad Smith</a>
                    </h5>
                    <span>HR Manager</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".50s">
                <div className="team-img">
                  <img src="assets/img/team/02.jpg" alt="thumb" />
                </div>
                <div className="team-social">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5>
                      <a href="#">Malissa Fie</a>
                    </h5>
                    <span>Technician</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay=".75s">
                <div className="team-img">
                  <img src="assets/img/team/03.jpg" alt="thumb" />
                </div>
                <div className="team-social">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5>
                      <a href="#">Arron Rodri</a>
                    </h5>
                    <span>CEO & Founder</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="team-item wow fadeInUp" data-wow-delay="1s">
                <div className="team-img">
                  <img src="assets/img/team/04.jpg" alt="thumb" />
                </div>
                <div className="team-social">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
                <div className="team-content">
                  <div className="team-bio">
                    <h5>
                      <a href="#">Tony Pinto</a>
                    </h5>
                    <span>Mechanical Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
