import React from "react";
import "./piecePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const PiecePage = () => {
  return (
    <article className="piece-section py-5 px-3">
      <Container fluid="lg">
        <Row>
          <Col>
            <Image
              fluid
              src="/assets/Gallery/animal21.jpg"
              className="piece-img"
            ></Image>
          </Col>
          <Col className="pt-2">
            <h5 className="fs-1">Painting Title</h5>
            <span className="d-block mb-4">$85.00</span>
            <p className="fs-4 ">Description of the art piece</p>
            <span className="d-block mb-4">Dimensions: 12' x 17'</span>
            <br />
            <Button>Add To Cart</Button>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default PiecePage;
