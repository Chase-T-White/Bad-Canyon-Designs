import React from "react";
import { Product } from "../../components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { produceWithPatches } from "immer";

const Shop = () => {
  return (
    <main>
      <section className="shop-products">
        {produceWithPatches.map((product) => {
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Product {...product} />
            </Col>
          </Row>;
        })}
      </section>
    </main>
  );
};

export default Shop;
