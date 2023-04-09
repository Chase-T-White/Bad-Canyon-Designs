import React from "react";
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
      <Container className="empty-cart">
        <header className="gallery-header">
          <h2 className="text-center">Cart</h2>
        </header>
        <h3 className="text-center mb-4">
          There are no items in your cart.
          <br />
          Go, spend money. Then get excited to spend more money.
        </h3>
        <div className="d-flex justify-content-center">
          <Link to={"../shop"}>
            <Button className="px-4 me-2">Spend Money</Button>
          </Link>
          <Link to={"../gallery"}>
            <Button className="px-4">Buy Art</Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <main className="cart">
      <Container fluid="lg">
        <header className="gallery-header">
          <h2 className="text-center">Cart</h2>
        </header>
        <h2 className="mb-4 text-center table-hover">
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
        <Row className="justify-content-end mx-0">
          <Table
            className="cart__total-table text-white"
            striped
            bordered
            size="sm"
            variant="dark"
          >
            <tbody>
              <tr>
                <td>Subtotal:</td>
                <td className="text-center">{formatPrice(total)}</td>
              </tr>
              <tr>
                <td>Sales Tax:</td>
                <td className="text-center">{formatPrice(total * 0.1)}</td>
              </tr>
              <tr>
                <td>Grand Total:</td>
                <td className="text-center">
                  {formatPrice(total + total * 0.1)}
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row className="mx-0 justify-content-end">
          <div className="cart__button-container">
            <Button onClick={clearCart} variant="outline-primary">
              Clear Cart
            </Button>
            <Link to={"../checkout"}>
              <Button>Checkout</Button>
            </Link>
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default Cart;
