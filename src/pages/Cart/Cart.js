import React from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/helpers";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.itemsList);
  const total = useSelector((state) => state.cart.total);
  return (
    <main>
      <Container>
        <h2>Your Cart: {cartItems.length} Items</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return (
                <tr>
                  <td>
                    <Image
                      fluid
                      src={item.imageMain}
                      className="mw-10rem"
                      style={{ objectFit: "cover" }}
                    ></Image>
                    <h5>{item.name}</h5>
                  </td>
                  <td>{formatPrice(item.price)}</td>
                  <td>{item.quantity}</td>
                  <td>{formatPrice(item.price * item.quantity)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Table>
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
      </Container>
    </main>
  );
};

export default Cart;
