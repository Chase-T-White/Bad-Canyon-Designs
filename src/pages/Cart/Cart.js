import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/helpers";
import { GoTrashcan } from "react-icons/go";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.itemsList);
  const total = useSelector((state) => state.cart.total);

  const removeItem = ({ id, quantity, price }) => {
    dispatch(cartActions.removeFromCart({ id, quantity, price }));
  };

  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <Container>
        <h3>
          There are no items in your cart.
          <br />
          Go, spend money. Then get excited to spend more money.
        </h3>
        <Link to={"../shop"}>
          <Button>Spend Money</Button>
        </Link>
        <Link to={"../gallery"}>
          <Button>Buy Art</Button>
        </Link>
      </Container>
    );
  }

  return (
    <main className="cart">
      <Container fluid="lg">
        <h2 className="text-center table-hover">
          Your Cart: {cartItems.length} Items
        </h2>
        <Table
          responsive
          className="text-white"
          striped
          bordered
          variant="dark"
        >
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, i) => {
              return (
                <tr key={i} className="item-row">
                  <td className="d-flex position-relative">
                    <Image
                      src={item.imageMain}
                      className="cart-img me-3"
                    ></Image>
                    <h5>{item.name}</h5>
                    <GoTrashcan
                      className="cart-trash-icon"
                      onClick={() => removeItem(item)}
                    />
                  </td>
                  <td>{formatPrice(item.price)}</td>
                  <td>{item.quantity}</td>
                  <td>{formatPrice(item.price * item.quantity)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Table
          className="text-white table-hover"
          striped
          bordered
          size="sm"
          variant="dark"
        >
          <tbody>
            <tr>
              <td>Subtotal:</td>
              <td>{formatPrice(total)}</td>
            </tr>
            <tr>
              <td>Sales Tax:</td>
              <td>{formatPrice(total * 0.1)}</td>
            </tr>
            <tr>
              <td>Grand Total:</td>
              <td>{formatPrice(total + total * 0.1)}</td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Button onClick={clearCart}>Clear Cart</Button>
          <Link to={"../checkout"}>
            <Button>Checkout</Button>
          </Link>
        </Row>
      </Container>
    </main>
  );
};

export default Cart;
