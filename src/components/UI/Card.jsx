import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

const Card = () => {
  const dataTable = [
    {
      id: 1,
      image: "https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/340292502_538413028484986_443063108382547189_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeH7wRLrJAlGVHv0DhLebuuPcbnkOj5TsxtxueQ6PlOzG9CpmahoVDGBWfCHoIKTJq_0K60s7k5Im98JYTS9HZey&_nc_ohc=azFaB24XcecAX9AnbPR&_nc_ht=scontent.fpnh20-1.fna&oh=00_AfCF2_2hcwRYpTbRx_aasDs7-ArGPS-CJokBULGwvgtxBw&oe=65815F67",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      name: "Phea Dalen",
    },
    {
      id: 2,
      image: "https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/355492123_1454480772031986_8513549996855563739_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFTd85SvWi9Ni8SrXQX-I7obQa1hMAzmrFtBrWEwDOasee1g_3jS1aiRkEilaxI65UeYTU9_SWLysc86CMlP1xU&_nc_ohc=8rUC86h2UpIAX_Td2sR&_nc_ht=scontent.fpnh20-1.fna&oh=00_AfAAUrvyYLCbMcaurYXBiSzSDcQW5UYzbWcKmxiIGz0uHQ&oe=6581CC9A",
      description:
        "hello bro, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit magnam fuga unde?",
      name: "Sokkean Bunchhun",
    },
    {
      id: 3,
      image: "https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/357569988_1512770146207473_4341004927591381041_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGl20UhPP3u4dgMJzkoAwTDKrodveYFqlwquh295gWqXKAhZ7lPRSnnfHzMDHze4m9D_VNl35K1zXzAhRgXeWvR&_nc_ohc=nExBCFmh58IAX-qmvSX&_nc_ht=scontent.fpnh20-1.fna&oh=00_AfA6kGdqGtgqSokHmoaBYgGDZvR-CTPek_c4dFn4ePfoLA&oe=65807197",
      description:
        "so cool, This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      name: "Soun Samnange",
    },
  ];

  return (
    <section className="section__card header">
      <Container>
        <h1 className="text-center text-white">Porfolio of my team work</h1>
        <Row style={{ marginTop: "3.5rem" }}>
          {dataTable.map((item) => (
            <Col key={item.id} lg={4} md={6} sm={12}>
              <div className="card">
                <img src={item.image} className=" rounded-circle" alt="" />
                <div className="card-body" style={{ paddingBottom: "1rem" }}>
                  <span className="card-title">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} />
                    ))}
                  </span>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary disabled">
                      {item.name}
                    </small>
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Card;
