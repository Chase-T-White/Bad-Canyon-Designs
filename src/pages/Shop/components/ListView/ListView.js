import React from "react";
import Row from "react-bootstrap/Row";
import { Product } from "../../../../components";

const ListView = ({ products }) => {
  return (
    <section>
      {products.map((product) => {
        return (
          <Row className="mb-4">
            <Product key={product.id} {...product} />
          </Row>
        );
      })}
    </section>
  );
};

export default ListView;
