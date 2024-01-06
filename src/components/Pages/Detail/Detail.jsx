import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Detail = () => {
  return (
    <section className='detail__page header' style={{padding: "5rem 0"}}>
      <Container>
        <Row>
            <Col lg={6}>
                <div>
                    <img src="https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
                <div>
                    <h1 className="text-center">Heading</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Detail
