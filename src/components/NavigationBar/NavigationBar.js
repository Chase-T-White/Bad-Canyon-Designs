import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import "./navbar.css";

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
    <Navbar expand="md" className="navbar">
      <Row>
        <Navbar.Brand className="d-flex align-items-center">
          <Link to={"/"}>
            <Image
              fluid
              src="../../assets/logoMain.jpg"
              className="nav-logo"
            ></Image>
          </Link>
        </Navbar.Brand>
      </Row>
      <Row>
        <Container fluid="xl">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"shop"} className="nav-link">
                Shop
              </Link>
              <Link to={"gallery"} className="nav-link">
                Gallery
              </Link>
              <Link to={"story"} className="nav-link">
                Story
              </Link>
              <Link to={"studio"} className="nav-link">
                Studio
              </Link>
            </Nav>
            <Nav className="justify-content-end align-items-end">
              <div className="cart-container">
                <Link to={"cart"}>
                  <HiOutlineShoppingCart className="cart-button" />
                </Link>
                <div className="cart-amount">{amount}</div>
              </div>
              <Button className="link text-white" onClick={handleUserLog}>
                {isLoggedIn ? "Logout" : "Login"}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Row>
    </Navbar>
  );
};

export default NavigationBar;
