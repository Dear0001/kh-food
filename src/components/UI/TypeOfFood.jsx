// TypeOfFood.jsx
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TypeOfFood = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleHoverOut = () => {
    setHovered(false);
  };

  return (
    <section className="type__food header pt-5 pb-5">
      <Container>
        <h1 className="text-black text-center mt-3 mb-5">TYPE OF FOOD</h1>
        <div className="carousel" data-bs-ride="carousel">
          <div className="image__group">
            <Row className="d-flex text-center align-center justify-content-cent">
              <Col lg={3} md={6} sx={6}>
                <div
                  className={`type__image hover__image ${hovered ? "hovered" : ""}`}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  <Link to="/appertizer">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6M747t-JjUDtjtmC9dJITu_giJfpzZ3z-Q&usqp=CAU"
                      className="img-fluid rounded-circle"
                      alt="image1"
                    />
                    <span className="hover__text">Non Bang</span>
                  </Link>
                </div>
              </Col>
              {/* ... (Repeat for other columns) */}
              <Col lg={3} md={6} sx={6}>
                <div
                  className={`type__image hover__image ${hovered ? "hovered" : ""}`}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  <Link to="/appertizer">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6M747t-JjUDtjtmC9dJITu_giJfpzZ3z-Q&usqp=CAU"
                      className="img-fluid rounded-circle"
                      alt="image1"
                    />
                    <span className="hover__text">Non Bang</span>
                  </Link>
                </div>
              </Col>
              {/* ... (Repeat for other columns) */}
              <Col lg={3} md={6} sx={6}>
                <div
                  className={`type__image hover__image ${hovered ? "hovered" : ""}`}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  <Link to="/appertizer">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6M747t-JjUDtjtmC9dJITu_giJfpzZ3z-Q&usqp=CAU"
                      className="img-fluid rounded-circle"
                      alt="image1"
                    />
                    <span className="hover__text">Non Bang</span>
                  </Link>
                </div>
              </Col>
              {/* ... (Repeat for other columns) */}
              <Col lg={3} md={6} sx={6}>
                <div
                  className={`type__image hover__image ${hovered ? "hovered" : ""}`}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  <Link to="/appertizer">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6M747t-JjUDtjtmC9dJITu_giJfpzZ3z-Q&usqp=CAU"
                      className="img-fluid rounded-circle"
                      alt="image1"
                    />
                    <span className="hover__text">Non Bang</span>
                  </Link>
                </div>
              </Col>
              {/* ... (Repeat for other columns) */}
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TypeOfFood;
