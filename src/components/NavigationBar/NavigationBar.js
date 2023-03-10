import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const NavigationBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const amount = useSelector((state) => state.cart.amount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserLog = () => {
    if (isLoggedIn) {
      return dispatch(authActions.logout());
    }

    navigate("login");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>Bad Canyon Designs</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"shop"}>Shop</Link>
            <Link to={"gallery"}>Gallery</Link>
            <Link to={"story"}>Story</Link>
            <Link to={"studio"}>Studio</Link>
          </Nav>
          <Nav className="me-auto">
            <Button className="link text-white" onClick={handleUserLog}>
              {isLoggedIn ? "Logout" : "Login"}
            </Button>
            <Link to={"cart"}>
              <Button>
                <HiOutlineShoppingCart />
                {amount}
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
