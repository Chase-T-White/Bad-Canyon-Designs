import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const Product = ({ id, name, price, imageMain }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <Card>
      <Card.Img variant="top" src={imageMain} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button onClick={addToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
