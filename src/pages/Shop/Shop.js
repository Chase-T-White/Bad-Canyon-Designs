import React from "react";
import { ProductList, Sort, Filter } from "../../components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Shop = () => {
  return (
    <main>
      <header>
        <div className="header-img">
          <Image
            fluid
            src="assets/headerImg.jpg"
            className="h-100"
            style={{ objectFit: "cover" }}
          ></Image>
        </div>
      </header>
      <Container fluid="xxl">
        <Row>
          <Col sm={3}>
            <Filter />
          </Col>
          <Col>
            <Sort />
            <ProductList />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Shop;
