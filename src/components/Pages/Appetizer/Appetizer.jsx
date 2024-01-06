import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import {useState} from 'react'

const Appetizer = () => {
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
        <Link to="/" className="contron__back">
          <span className="back__home mt-5">Back</span>
        </Link>
        <h1 className="text-center text-black m-4">APPETIZER</h1>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="image hover__img" onClick={handleShow}>
              <Link to="/appertizer">
                <img
                  src={AppetizerData[0].image}
                  className="img-fluid"
                  alt="ke bro"
                />
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
                  <p className="text__center__image ph_text">{AppetizerData[3].name}</p>
                </Link>
              </div>
            </Col>
          </Col>
        </Row>
        <div className='popup__detail'>
          <Modal show={show} onHide={handleClose} dialogClassName="modal-fullscreen">
            <Modal.Header closeButton>
              <Modal.Title>Somlar Machuu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>សម្លម្ជូរ(Somlar Machuu) គឺជា​ពាក្យខ្មែរសំដៅទៅលើមុខម្ហូបខ្មែរមួយប្រភេទដែលប្រជាជននិយមចូលចិត្តជាសម្លប្រពៃណីមួយរបស់ខ្មែរសម្រាប់​ប្រភេទសម្លមានឱជារស​ជូរ ។</p>
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
