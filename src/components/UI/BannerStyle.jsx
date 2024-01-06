import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const BannerStyle = () => {
  return (
    <>
      <section className="banner__section header">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="section__img" style={{ padding: "100px" }}>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/3a/a4/78/typical-cambodian-food.jpg" alt="1"/>
              </div>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex align-items-center justify-content-center text-black"
            >
              <div>
                <h1 className="text-center">Heading</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="banner__section">
        <Container>
          <Row className="tablet__respon">
            <Col lg={6} md={6} sm={12} className="order-lg-2">
              <div className="section__img" style={{ padding: "100px" }}>
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/07/3a/a4/78/typical-cambodian-food.jpg"
                  alt="Food"
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}
              className="d-flex align-items-center justify-content-center order-lg-1"
            >
              <div>
                <h1 className="text-center">Heading</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="banner__section header">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="section__img" style={{ padding: "100px" }}>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/3a/a4/78/typical-cambodian-food.jpg" alt="1"/>
              </div>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              className="d-flex align-items-center justify-content-center text-black"
            >
              <div>
                <h1 className="text-center">Heading</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="banner__section">
        <Container>
          <Row className="tablet__respon">
            <Col lg={6} md={6} sm={12} className="order-lg-2">
              <div className="section__img" style={{ padding: "100px" }}>
                <img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/07/3a/a4/78/typical-cambodian-food.jpg"
                  alt="Food"
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}
              className="d-flex align-items-center justify-content-center order-lg-1"
            >
              <div>
                <h1 className="text-center">Heading</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BannerStyle;
