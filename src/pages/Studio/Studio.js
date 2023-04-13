import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./studio.css";

const Studio = () => {
  return (
    <main>
      <header className="gallery-header">
        <h2 className="text-center">Studio</h2>
      </header>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <Image
                fluid
                src="../../assets/Studio/wolfwDog.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
            <Col className="quote text-white">
              <div>
                <p>
                  "Meet Strider, my trusted companion in art. He loves to show
                  off the artwork I create, and with his tail wagging, he even
                  insists on approving each piece before it's finished!"
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                fluid
                src="../../assets/Studio/studiowDog.jpg"
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
