import React from "react";
import { Product } from "../../components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import products from "../../data/products.json";
import categories from "../../data/productFields.json";

const Shop = () => {
  return (
    <main>
      <aside>
        <h3 className="text-white">Filters</h3>
        <hr />
        <div className="categories text-white">
          {categories.map((category) => {
            return <p key={category.id}>{category.category}</p>;
          })}
        </div>
      </aside>
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
    </main>
  );
};

export default Shop;
