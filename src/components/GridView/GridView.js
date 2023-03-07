import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../Product/Product";

const GridView = ({ products }) => {
  return (
    <section className="shop-products">
      <Row xs={1} md={2} className="g-4">
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <Product key={product.id} {...product} />
            </Col>
          );
        })}
      </Row>
      ;
    </section>
  );
};

export default GridView;
