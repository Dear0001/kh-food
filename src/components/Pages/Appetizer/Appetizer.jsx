import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";

const Appetizer = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const AppetizerData = [
    {
      id: 1,
      image: "https://source.unsplash.com/random/1000x1130",
      name: "បញ្ហយ(banh Jeang)",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/350x225",
      name: "មីឆា(Mi-cha)",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/350x225",
      name: "ណែមបំពង(Neam)",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/random/1000x800",
      name: "នំ(Nom)",
    },
  ];

  return (
    <section className="section__appetizer">
      <Container className="pt-5 pb-5">
        <Link to="/khmer-food" className="contron__back">
          <span className="back__home mt-5">Back</span>
        </Link>
        <h1 className="text-center text-black m-4">APPETIZER</h1>
        <Row>
          <Col lg={6} md={6} sm={12}>
          <div className="image hover__img" onClick={handleShow}>
            <Link to="/appertizer">
                <img src={AppetizerData[0].image} className="img-fluid" alt="ke bro" />
                <p className="text__center__image ph_text">{AppetizerData[0].name}</p>
            </Link>
          </div>

          </Col>
          <Col lg={6} md={6} sm={12}>
            <Row className="mb-4">
              {AppetizerData.slice(1, 3).map((item) => (
                <Col key={item.id} lg={6} md={6} sm={12}>
                  <div className="image2 hover__img" onClick={handleShow}>
                    <Link to="/appertizer">
                      <img
                        src={item.image}
                        className="img-fluid"
                        alt={item.name}
                      />
                      <p className="text__center__image ph_text">{item.name}</p>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
            <Col lg={12} md={12} sm={12}>
              <div className="image2 hover__img" onClick={handleShow}>
                <Link to="/appertizer">
                  <img
                    src={AppetizerData[3].image}
                    className="img-fluid"
                    alt="Nom"
                  />
                  <p className="text__center__image ph_text">
                    {AppetizerData[3].name}
                  </p>
                </Link>
              </div>
            </Col>
          </Col>
        </Row>
        {/* ///////////////////////////////////////////////// */}
        <div className="popup__detail">
          <Modal show={show} onHide={handleClose} dialogClassName="modal-fullscreen">
            <Modal.Body>
              <Container className="pop__detail">
                <Row>
                  <Col md={12}>
                    <iframe
                      // width="560"
                      // height="315"
                      src="https://www.youtube.com/embed/OhRLtqmDFao"
                      frameborder="0"
                      allowfullscreen
                      title="YouTube Video"
                    ></iframe>
                  </Col>
                </Row>
                <div className="title__detail pt-5 pb-5">
                  <h1 className="text-center">សម្លរម្ជូរព្រលិត</h1>
                </div>
                  <Row>
                    <Col md={5}>
                      <div className="detail__image">
                        <img src="https://oss7.tnaot.com/tnaot/image/2023/02/07/2fe8846aab3442ed8e3524bc6c47b333.png" alt="sjhabakj" />
                      </div>
                    </Col>
                    <Col md={7}>
                      <div className="text__detail">
                        <h2 style={{fontSize: "35px"}}>Ingredients</h2>
                        <div className="ingredients">
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          ត្រីត្រីកញ្ចុះ 3០០ក្រាម
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          ព្រលឹត បកសំបកចេញ រួចកាត់កង់ៗ 3០០ក្រាម
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                        ទឹកត្រី 1ស្លាបព្រាបាយ
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                        ប្រហុក 1ស្លាបព្រាបាយ
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          ក្រសាំង 2ផ្លែ
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                          ម្ទេសខ្មាំងក្រៀម ឬ ស្រស់ 4-5 គ្រាប់
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                        រំដេង 1ដុំ
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                        អំបិលម៉ដ្ឋ 1ស្លាបព្រាកាហ្វេ
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                        ស្ករ កន្លះស្លាបព្រាបាយ
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                        ម្សៅស៊ុប 1ស្លាបព្រាកាហ្វេ
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />
                        ម្អម 2ស្លាបព្រាបាយ
                        </label>
                        </div>
                      </div>
                    </Col>
                  </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Container>
    </section>
  );
};

export default Appetizer;
