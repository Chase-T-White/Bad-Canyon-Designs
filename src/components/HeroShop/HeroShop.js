import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const HeroShop = () => {
  return (
    <section className="heroShop">
      <header>
        <h4>Shop</h4>
      </header>
      <Container>
        <Row>
          <Col>
            <p>
              In celebration of the spirit of the huntsman, I am offering 10%
              off and free shipping on all hats for a limited time!
            </p>
          </Col>
          <Col>
            <Image fluid src="/assets/homeShop.jpg"></Image>
          </Col>
        </Row>
        <Row>
          <Row></Row>
        </Row>
      </Container>
    </section>
  );
};

export default HeroShop;
