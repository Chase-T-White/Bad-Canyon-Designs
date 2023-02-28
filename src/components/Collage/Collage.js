import React from "react";
import "./collage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Collage = () => {
  return (
    <section>
      <Container>
        <Row className="mb-3">
          <Col>
            <Image
              fluid
              src="../../assets/Collages/recentWorks1.jpg"
              className="h-100"
              style={{ objectFit: "cover" }}
            ></Image>
          </Col>
          <Col className="collage-quote__container position-relative">
            <p className="collage-quote text-center position-absolute px-5">
              "My latest projects are inspired by the beauty of nature - from
              the vastness of the ocean to the intricate details of a single
              flower. I'm captivated by the way nature can evoke a sense of
              wonder, and I hope to capture this in my work."
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image
              fluid
              src="../../assets/Collages/recentWorks2.jpg"
              className="h-100"
              style={{ objectFit: "cover" }}
            ></Image>
          </Col>
          <Col>
            <Image
              fluid
              src="../../assets/Collages/recentWorks3.jpg"
              className="h-100"
              style={{ objectFit: "cover" }}
            ></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Collage;
