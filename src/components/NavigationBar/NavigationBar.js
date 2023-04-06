import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FiLogIn, FiLogOut } from "react-icons/fi";
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
    <Navbar collapseOnSelect expand="sm">
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
      <Row className="w-100">
        <Container fluid="xl">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="w-100 justify-content-evenly mx-auto nav-link-container">
              <Nav.Link
                eventKey="1"
                as={Link}
                to="gallery"
                className="nav-link"
              >
                Gallery
              </Nav.Link>
              <Nav.Link eventKey="2" as={Link} to="shop" className="nav-link">
                Shop
              </Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="story" className="nav-link">
                Story
              </Nav.Link>
              <Nav.Link eventKey="4" as={Link} to="studio" className="nav-link">
                Studio
              </Nav.Link>
              <Nav.Link
                eventKey="5"
                as={Link}
                to="Contact"
                className="nav-link"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Row>
      <Nav className="nav-icons">
        <div className="cart-container">
          <Link to={"cart"}>
            <HiOutlineShoppingCart className="cart-button" />
          </Link>
          {amount !== 0 && <div className="cart-amount">{amount}</div>}
        </div>
        {isLoggedIn ? (
          <FiLogOut className="cart-button" onClick={handleUserLog} />
        ) : (
          <FiLogIn className="cart-button" onClick={handleUserLog} />
        )}
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
