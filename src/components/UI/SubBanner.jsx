import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SubBanner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col sm={12} sx={12}>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-inner">
                <div className="carousel-item mobile active">
                  <img
                    src="https://nextfoodstop.files.wordpress.com/2015/06/20150615_120829.jpg"
                    className="d-block"
                    alt="banner image1"
                  />
                </div>
                <div className="carousel-item mobile">
                  <img
                    src="https://images.pexels.com/photos/699544/pexels-photo-699544.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="d-block"
                    alt="banner image2"
                  />
                </div>
                <div className="carousel-item mobile">
                  <img
                    src="https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/khmer-desserts.jpg"
                    className="d-block"
                    alt="banner image3"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubBanner;
