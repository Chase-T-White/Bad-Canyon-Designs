import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { formatPrice } from "../../utils/helpers";
import "./product.css";

const Product = ({ id, name, price, imageMain, description }) => {
  const isGridView = useSelector((state) => state.view.gridView);
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

  if (isGridView) {
    return (
      <Card className="product-card h-100">
        <Link to={`${id}`}>
          <div className="product-card__img-container">
            <Card.Img
              variant="top"
              src={imageMain}
              className="product-card__img"
            />
          </div>
        </Link>
        <Card.Body className="product-card__body">
          <Link to={`${id}`}>
            <Card.Title>{name}</Card.Title>
          </Link>
          <Card.Text className="text-dark">{formatPrice(price)}</Card.Text>
          <Button onClick={addToCart}>Add to Cart</Button>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <article className="list-product-card">
        <Col md={4} xl={3} className="me-4">
          <Link to={`${id}`}>
            <Image fluid src={imageMain} className="list-product__img"></Image>
          </Link>
        </Col>
        <Col sm={6}>
          <div className="text-body">
            <Link to={`${id}`}>
              <h5>{name}</h5>
            </Link>
            <p className="text-dark">{formatPrice(price)}</p>
            <p className="text-dark">{description}</p>
            <Button className="list-button" onClick={addToCart}>
              Add to Cart
            </Button>
          </div>
        </Col>
      </article>
    );
  }
};

export default Product;
