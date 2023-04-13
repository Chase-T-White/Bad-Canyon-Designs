import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Product } from "../../../../components";

const GridView = ({ products }) => {
  return (
    <section className="shop-products">
      <Row xs={1} sm={2} md={3} xl={4} className="g-4">
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <Product key={product.id} {...product} />
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default GridView;
