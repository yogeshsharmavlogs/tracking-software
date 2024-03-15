import React from "react";

//Motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
const Home = () => {
  const variant = {
    hiddens: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
      y: "100%",
    },
    shows: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.25,
      },
    },
  };

  const rotationVariants = {
    hidden: { rotate: 0 },
    visible: { rotate: 360 },
  };

  const zoomVariants = {
    hidden: { scale: 1 },
    visible: { scale: 1.5 },
  };
  return (
    <>
      <div className="hero-section">
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="hero-single"
          style={{ backgroundImage: "url(assets/img/slider/slider-1.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-6">
                <motion.div
                  variants={rotationVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="hero-content"
                >
                  <h6
                    className="hero-sub-title"
                    data-animation="fadeInUp"
                    data-delay=".25s"
                  >
                    Welcome To INGENIOUS HITECH!
                  </h6>
                  <h1
                    className="hero-title"
                    data-animation="fadeInRight"
                    data-delay=".50s"
                  >
                    Best Way To Find Your <span>Dream</span> Project
                  </h1>
                  <p data-animation="fadeInLeft" data-delay=".75s">
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some form by
                    injected humour.
                  </p>
                  <div
                    className="hero-btn"
                    data-animation="fadeInUp"
                    data-delay="1s"
                  >
                    <motion.a
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                      href="#"
                      className="theme-btn"
                    >
                      About More<i className="fas fa-arrow-right-long"></i>
                    </motion.a>
                    <motion.a
                      whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                      href="#"
                      className="theme-btn theme-btn2"
                    >
                      Learn More<i className="fas fa-arrow-right-long"></i>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="hero-right">
                  <div className="hero-img">
                    <img
                      src="assets/img/slider/hero-1.jpg"
                      alt=""
                      data-animation="fadeInRight"
                      data-delay=".25s"
                      style={{ marginLeft: "180px", height: "470px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
                  <img
                    src="assets/img/about/01.svg"
                    style={{ height: "480px" }}
                  />
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
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="col-lg-6"
            >
              <div
                className="about-right wow fadeInRight"
                data-wow-delay=".25s"
              >
                <div className="site-heading mb-3">
                  <span className="site-title-tagline justify-content-start">
                    <i className="flaticon-drive"></i> About Us
                  </span>
                  <h2 className="site-title">
                    Software Company in India <span>Quality of Service</span>{" "}
                    Business Strategy.
                  </h2>
                </div>
                <p className="about-text">
                  Ingenious Hi Tech” is an IT company, working in all areas of
                  web, application, Marketing, Testing and Maintenance. We have
                  been working with alot of companies of USA, Canada, UK,
                  Australia, UAE and other countries to enhance their business
                  opportunities digitally. We provide SEO consultant services in
                  USA .
                </p>
                <div className="about-list-wrapper">
                  <ul className="about-list list-unstyled">
                    <li>At vero eos et accusamus et iusto odio.</li>
                    <li>Established fact that a reader will be distracted.</li>
                    <li>Sed ut perspiciatis unde omnis iste natus sit.</li>
                  </ul>
                </div>
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                  href="/about"
                  className="theme-btn mt-4"
                >
                  Discover More<i className="fas fa-arrow-right-long"></i>
                </motion.a>
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
      <br />

      <div className="choose-area py-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-content">
                <motion.div
                  variants={fadeIn("down", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="site-heading wow fadeInDown"
                  data-wow-delay=".25s"
                >
                  <span className="site-title-tagline text-white justify-content-start">
                    <i className="flaticon-drive"></i> Why Choose Us
                  </span>
                  <h2 className="site-title text-white mb-10">
                    We are dedicated <span>to provide</span> quality service
                  </h2>
                  <p className="text-white">
                    There are many variations of passages available but the
                    majority have suffered alteration in some form going to use
                    a passage by injected humour randomised words which don't
                    look even slightly believable.
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="choose-img wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <img src="assets/img/choose/software.jpg" />
                </motion.div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="choose-content-wrapper wow fadeInRight"
                data-wow-delay=".25s"
              >
                <div className="row">
                  <div className="col-md-6 col-lg-6 mt-lg-5">
                    <motion.div
                      variants={fadeIn("up", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                      className="choose-item"
                    >
                      <span className="choose-count">01</span>
                      <div className="choose-item-icon">
                        <i className="flaticon-car"></i>
                      </div>
                      <div className="choose-item-info">
                        <h3>Best Quality Software</h3>
                        <p>
                          There are many variations of the passages available
                          but the majo have suffered fact that reader will be
                          dist alteration.
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={fadeIn("up", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                      className="choose-item mb-lg-0"
                    >
                      <span className="choose-count">03</span>
                      <div className="choose-item-icon">
                        <i className="flaticon-drive-thru"></i>
                      </div>
                      <div className="choose-item-info">
                        <h3>Popular Brands</h3>
                        <p>
                          There are many variations of the passages available
                          but the majo have suffered fact that reader will be
                          dist alteration.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="col-md-6 col-lg-6"
                  >
                    <div className="choose-item">
                      <span className="choose-count">02</span>
                      <div className="choose-item-icon">
                        <i className="flaticon-chauffeur"></i>
                      </div>
                      <div className="choose-item-info">
                        <h3>Certified Mechanics</h3>
                        <p>
                          There are many variations of the passages available
                          but the majo have suffered fact that reader will be
                          dist alteration.
                        </p>
                      </div>
                    </div>
                    <motion.div
                      variants={fadeIn("down", 0.3)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
                      className="choose-item mb-lg-0"
                    >
                      <span className="choose-count">04</span>
                      <div className="choose-item-icon">
                        <i className="flaticon-online-payment"></i>
                      </div>
                      <div className="choose-item-info">
                        <h3>Reasonable Price</h3>
                        <p>
                          There are many variations of the passages available
                          but the majo have suffered fact that reader will be
                          dist alteration.
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="review"
        style={{ height: "700px", backgroundColor: "darkblue" }}
      >
        {/* <h1 style={{ color: "white", textAlign: "center", padding: "25px" }}>
        
          Read what our customers say
        </h1> */}
        {/* <div

          style={{
            display: "flex",
            gap: "50px",
            alignItems: "center",
            marginLeft: "350px",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "215px",
              borderRadius: "20px",
              backgroundColor: "red",
            }}
          >
            <img src=""></img>
          </div>
          <div
            style={{
              width: "400px",
              height: "215px",
              borderRadius: "20px",
              backgroundColor: "green",
            }}
          >
            two
          </div>
        </div> */}

        <div class="contact-wrapper" style={{ marginBottom: "500px" }}>
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="contact-img">
                <img src="assets/img/contact/01.jpg" alt />
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div class="contact-form">
                <div class="contact-form-header">
                  <h2>Give Your Review</h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page randomised
                    words which don't look even slightly when looking at its
                    layout.
                  </p>
                </div>
                <form
                  method="post"
                  action="https://live.themewild.com/motex/assets/php/contact.php"
                  id="contact-form"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      placeholder="Review Topic"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="5"
                      class="form-control"
                      placeholder="Write Your Review"
                    ></textarea>
                  </div>
                  <button type="submit" class="theme-btn">
                    Send Review <i class="far fa-paper-plane"></i>
                  </button>
                  <div class="col-md-12 mt-3">
                    <div class="form-messege text-success"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
    </>
  );
};

export default Home;
