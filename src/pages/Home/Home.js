import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./home.css";

const Home = () => {
  return (
    <main className="home">
      {/* <div className={isLoad ? "preloader hidden" : "preloader"}></div> */}
      <Navbar bg="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>Shop</Nav.Link>
            <Nav.Link>Gallery</Nav.Link>
          </Nav>
          <Navbar.Brand>Bad Canyon Designs</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Story</Nav.Link>
            <Nav.Link>Studio</Nav.Link>
            <Nav.Link>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section className="hero">
        <h1 className="hero_title">The Art of Nick White</h1>
      </section>
    </main>
  );
};

export default Home;
