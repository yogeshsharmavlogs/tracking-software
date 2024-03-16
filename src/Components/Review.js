import React from "react";

export const Review = () => {
  return (
    <>
      <div
        class="site-breadcrumb"
        style={{ background: "url(assets/img/breadcrumb/01.jpg)" }}
      >
        <div class="container">
          <h2 class="breadcrumb-title">Review Us</h2>
          <ul class="breadcrumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li class="active">Review Us</li>
          </ul>
        </div>
      </div>
      <div class="contact-wrapper">
        <div class="row">
          <div class="col-lg-6 align-self-center">
            <div class="contact-img">
              <img src="assets/img/contact/01.jpg" />
            </div>
          </div>
          <div class="col-lg-6 align-self-center">
            <div class="contact-form">
              <div class="contact-form-header">
                <h2>Give Your Review</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page randomised words which don't
                  look even slightly when looking at its layout.
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
    </>
  );
};
