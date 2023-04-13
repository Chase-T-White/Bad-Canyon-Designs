import React from "react";
import { ProductList, Sort, Filter } from "./components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./shop.css";

const Shop = () => {
  return (
    <main>
      <header className="shop-header">
        <h2 className="text-center">Products</h2>
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
