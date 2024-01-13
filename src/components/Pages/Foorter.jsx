import React from "react";
import { Container } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Telegram,
  Discord,
  Tiktok,
  Twitter,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer__section bg-dark">
      <Container>
        <footer className="pt-5 pb-5">
          <div className="container-fluid start">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h2 className="">Follow Us On</h2>
                {/* tablet and desktop */}
                <div className="group__icon align-item-cnter justify-content-center">
                  <div className="sub__wrap" style={{ margin: "0" }}>
                    <span className="icon">
                      <Facebook />
                    </span>
                    <div className="icon" style={{ marginLeft: "60px" }}>
                      <Instagram />
                    </div>
                    <span className="icon">
                      <Telegram />
                    </span>
                  </div>
                  <div className="sub__wrap">
                    <div className="icon" style={{ marginLeft: "65px" }}>
                      <Discord />
                    </div>
                    <div className="icon" style={{ marginLeft: "20px" }}>
                      <Tiktok />
                    </div>
                    <div className="icon" style={{ marginLeft: "65px" }}>
                      <Twitter />
                    </div>
                  </div>
                </div>
                {/* mobile phone */}
                <div className="group__icon__mobile align-item-cnter justify-content-center mb-5">
                  <div className="sub__wrap" style={{ margin: "0" }}>
                    <span className="icon">
                      <Facebook />
                    </span>
                    <span className="icon">
                      <Instagram />
                    </span>
                    <span className="icon">
                      <Telegram />
                    </span>
                    <span className="icon">
                      <Discord />
                    </span>
                    <span className="icon">
                      <Twitter />
                    </span>
                    <span className="icon">
                      <Tiktok />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h2>Quite Link</h2>
                <ul className="navlist">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
                <ul className="nav__search">
                  <li id="openSearch">
                    <Link to="/">
                      <input type="text" placeholder="Search...." />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 text-white">
                <h2>Contact us</h2>
                <span className="footer__contact">+33333333333333</span>
                <span className="footer__contact">+33333333333333</span>
                <span className="footer__contact">+33333333333333</span>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </section>
  );
};

export default Footer;
