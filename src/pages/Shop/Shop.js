import React from "react";
import { ProductList, Sort, Filter } from "../../components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Shop = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col>
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
