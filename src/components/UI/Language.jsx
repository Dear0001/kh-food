import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
const Language = () => {
  return (
    <section className='language__section pt-5 pb-5'>
      <Container className='container'>
        <h1 className='text-center'>KhmerFood around the world</h1>
        <div className="language__wrap">
            <Row>
                <Col lg={12}>
                  <Row>
                    <Col lg={4} md={4} sm={4}>
                        <span className='language__block'>Khmer</span>
                        <span className='language__block'>English</span>
                        <span className='language__block'>Thai</span>
                        <span className='language__block'>Thai</span>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                        <span className='language__block'>Khmer</span>
                        <span className='language__block'>English</span>
                        <span className='language__block'>Thai</span>
                        <span className='language__block'>Thai</span>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                        <span className='language__block'>Khmer</span>
                        <span className='language__block'>English</span>
                        <span className='language__block'>Thai</span>
                        <span className='language__block'>Thai</span>
                    </Col>
                  </Row>
                </Col>
            </Row>
        </div>
      </Container>
    </section>
  )
}

export default Language
