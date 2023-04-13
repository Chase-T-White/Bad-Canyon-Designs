import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import { formatPrice } from "../../utils/helpers";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./singleProduct.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const fetchProduct = products.find((product) => product.id === id);
  const { name, price, imageMain, description } = fetchProduct;

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
        imageMain,
        quantity: 1,
      })
    );
  };

  return (
    <main className="singleProduct mt-5">
      <Container fluid="lg" className="product-container">
        <Row xs={1} md={2}>
          <Col>
            <div className="product-img-container">
              <Image
                fluid
                src={imageMain}
                className="h-100 product-img"
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
          </Col>
          <Col className="product-text-container mb-5">
            <aside>
              <h2>{name}</h2>
              <p>Designs by Nickolas White</p>
              <p className="price">{formatPrice(price)}</p>
              <p>{description}</p>
              <Button onClick={addToCart}>Add To Cart</Button>
            </aside>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SingleProduct;
