import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../../../assets/image/banner.png";

const Contact = () => {
  return (
    <section className="section__form">
      <Container className="text-black pt-1 pb-5">
        <h1 className="text-center">Contact</h1>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="contact__image">
              <img src={Banner} className="img-thumbnail" alt="..." />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Full Namwe
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby=""
                  placeholder="fullname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailHelp"
                  placeholder="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id=""
                  placeholder="Message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
