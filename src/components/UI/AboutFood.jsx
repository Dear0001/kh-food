import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutFood = () => {
  return (
    <section className="about__food">
      <Container>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="image hover__img">
              <Link to="/detail">
                <img
                  src="https://source.unsplash.com/random"
                  className="img-fluid" alt="2"
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="image2 hover__img">
                <Link to="/detail">
                  <img
                    src="https://source.unsplash.com/random"
                    className="img-fluid"
                    alt="3"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="image2 hover__img">
                <Link to="/detail">
                  <img
                    src="https://source.unsplash.com/random"
                    className="img-fluid" alt="4"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutFood;
