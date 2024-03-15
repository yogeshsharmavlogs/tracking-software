import React from "react";

const Contact = () => {
  return (
    <>
      <div
        class="site-breadcrumb"
        style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
      >
        <div class="container">
          <h2 class="breadcrumb-title">Contact Us</h2>
          <ul class="breadcrumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li class="active">Contact Us</li>
          </ul>
        </div>
      </div>

      <div class="contact-area py-120">
        <div class="container">
          <div class="contact-content">
            <div class="row">
              <div class="col-md-3">
                <div class="contact-info">
                  <div class="contact-info-icon">
                    <i class="fal fa-map-location-dot"></i>
                  </div>
                  <div class="contact-info-content">
                    <h5>Office Address</h5>
                    <p>25/B Milford, New York, USA</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="contact-info">
                  <div class="contact-info-icon">
                    <i class="fal fa-phone-volume"></i>
                  </div>
                  <div class="contact-info-content">
                    <h5>Call Us</h5>
                    <p>+2 123 4565 789</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="contact-info">
                  <div class="contact-info-icon">
                    <i class="fal fa-envelopes"></i>
                  </div>
                  <div class="contact-info-content">
                    <h5>Email Us</h5>
                    <p>
                      <a
                        href="https://live.themewild.com/cdn-cgi/l/email-protection"
                        class="__cf_email__"
                        data-cfemail="6f060109002f0a170e021f030a410c0002"
                      >
                        [email&#160;protected]
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="contact-info">
                  <div class="contact-info-icon">
                    <i class="fal fa-alarm-clock"></i>
                  </div>
                  <div class="contact-info-content">
                    <h5>Open Time</h5>
                    <p>Mon - Sat (10.00AM - 05.30PM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-wrapper">
            <div class="row">
              <div class="col-lg-6 align-self-center">
                <div class="contact-img">
                  <img src="assets/img/contact/01.jpg" alt />
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div class="contact-form">
                  <div class="contact-form-header">
                    <h2>Get In Touch</h2>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page randomised
                      words which don't look even slightly when looking at its
                      layout.{" "}
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
                        placeholder="Your Subject"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        name="message"
                        cols="30"
                        rows="5"
                        class="form-control"
                        placeholder="Write Your Message"
                      ></textarea>
                    </div>
                    <button type="submit" class="theme-btn">
                      Send Message <i class="far fa-paper-plane"></i>
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
      </div>
    </>
  );
};

export default Contact;
