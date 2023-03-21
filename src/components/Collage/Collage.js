import React from "react";
import "./collage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Collage = () => {
  return (
    <section>
      <h2 className="section-header">Galleries</h2>
      <Container fluid="lg">
        <Row className="gallery-row">
          <Col className="gallery-img-container">
            <Image
              src="../../assets/Collages/recentWorks1.jpg"
              className="galleries-img gal-img__1"
            ></Image>
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col className="gallery-img-container">
            <Image
              fluid
              src="../../assets/Collages/recentWorks3.jpg"
              className="galleries-img gal-img__2"
            ></Image>
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col className="gallery-img-container">
            <Image
              fluid
              src="../../assets/Collages/recentWorks7.jpg"
              className="galleries-img gal-img__3"
            ></Image>
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col className="gallery-img-container">
            <Image
              fluid
              src="../../assets/Collages/recentWorks8.jpg"
              className="galleries-img gal-img__4"
            ></Image>
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col className="gallery-img-container">
            <Image
              fluid
              src="../../assets/Collages/recentWorks6.jpg"
              className="galleries-img gal-img__5"
            ></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Collage;
