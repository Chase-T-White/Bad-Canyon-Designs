import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { formatPrice } from "../../utils/helpers";

const Product = ({ id, name, price, imageMain }) => {
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
    <Link to={`${id}`}>
      <Card>
        <Card.Img variant="top" src={imageMain} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{formatPrice(price)}</Card.Text>
          <Button onClick={addToCart}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Product;
