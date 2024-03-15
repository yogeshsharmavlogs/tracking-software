import React from "react";
//import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="header">
      <div className="main-navigation">
        <nav className="navbar navbar-expand-lg">
          <div className="container position-relative">
            <a className="navbar-brand w-14 h-[200px]" href="/">
              <img
                className="h-[200px]"
                src="assets/img/logo/logo-light.png"
                alt="logo"
                style={{ background: "#063970" }}
              />
            </a>
            <div className="mobile-menu-right">
              <div className="search-btn">
                <button type="button" className="nav-right-link">
                  <i className="far fa-search"></i>
                </button>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-mobile-icon">
                  <i className="far fa-bars"></i>
                </span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu fade-down">
                    <li>
                      <a className="dropdown-item" href="#">
                        Tracking
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Team Management
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Leave Management
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Task Management
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Performance Calculator
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Chat
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Subscription
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/review">
                    Review Us
                  </a>
                </li>
              </ul>
              <div className="nav-right">
                {/* <div className="search-btn">
    <button type="button" className="nav-right-link"><i className="far fa-search"></i></button>
    </div> */}
                {/* <div className="cart-btn">
    <a href="#" className="nav-right-link"><i className="far fa-cart-plus"></i><span>0</span></a>
    </div> */}
                <div className="nav-right-btn mt-2">
                  <motion.a
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 8px rgb(255,255,255)",
                      boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                    href="#"
                    className="theme-btn"
                  >
                    <span className="far fa-plus-circle"></span>Purchase Our
                    Software
                  </motion.a>
                </div>
                <div className="sidebar-btn">
                  {/* <button type="button" className="nav-right-link"><i className="far fa-bars-sort"></i></button> */}
                </div>
              </div>
            </div>

            {/* <div className="search-area">
    <form action="#">
    <div className="form-group">
    <input type="text" className="form-control" placeholder="Type Keyword..."/>
    <button type="submit" className="search-icon-btn"><i className="far fa-search"></i></button>
    </div>
    </form>
    </div> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
