import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./studio.css";

const Studio = () => {
  return (
    <main className="studio">
      <header className="gallery-header">
        <h2 className="text-center">Studio</h2>
      </header>
      <section>
        <Container>
          <Row className="align-items-center mb-5">
            <video className="studio__video" autoPlay loop muted>
              <source src="/assets/studio-vid.mp4" type="video/mp4" />
            </video>
          </Row>
          <Row className="mb-3">
            <h2 className="text-center">Inside The Studio</h2>
          </Row>
          <Row>
            <Col>
              <Image
                fluid
                src="../../assets/Studio/hatArt.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
            <Col>
              <Image
                fluid
                src="../../assets/Studio/studiowDog.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
            <Col>
              <Image
                fluid
                src="../../assets/Studio/bearwArtist.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Studio;
