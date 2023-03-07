import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Transition, Collage } from "../../components";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const amount = useSelector((state) => state.cart.amount);
  const dispatch = useDispatch();
  return (
    <main className="home">
      {/* <div className={isLoad ? "preloader hidden" : "preloader"}></div> */}
      <Navbar bg="light">
        <Container className="justify-content-center">
          <Nav>
            <Link to={"shop"}>Shop</Link>
            <Link to={"gallery"}>Gallery</Link>
          </Nav>
          <Link to={"/"}>
            <Navbar.Brand className="nav-logo mx-5">
              Bad Canyon Designs
            </Navbar.Brand>
          </Link>
          <Nav>
            <Link to={"story"}>Story</Link>
            <Link to={"studio"}>Studio</Link>
          </Nav>
          <Button>
            <Link
              to={isLoggedIn ? "/" : "checkout"}
              className="link text-white"
              onClick={() => {
                if (isLoggedIn) {
                  return authActions.logout();
                }
              }}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </Link>
          </Button>
          <Link to={"cart"}>
            <Button>
              <HiOutlineShoppingCart />
              {amount}
            </Button>
          </Link>
          <Nav.Link
            href="https://www.facebook.com/badcanyondesigns/"
            target={"_blank"}
          >
            <AiFillFacebook />
          </Nav.Link>
        </Container>
      </Navbar>
      <section className="hero">
        <Container>
          <h1 className="hero_title text-center pt-5 text-light">
            The Art of Nick White
          </h1>
          <Row className="mb-3">
            <Col>
              <Image fluid src="../../assets/homePics/heroTopA.jpg"></Image>
            </Col>
            <Col>
              <Image
                fluid
                src="../../assets/homePics/heroTopB.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                fluid
                src="../../assets/homePics/heroAsideA.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
            <Col>
              <Col className="mb-3">
                <Image
                  fluid
                  src="../../assets/homePics/heroMiddleA.jpg"
                ></Image>
              </Col>
              <Col>
                <Image
                  fluid
                  src="../../assets/homePics/heroMiddleB.jpg"
                ></Image>
              </Col>
            </Col>
            <Col>
              <Image
                fluid
                src="../../assets/homePics/heroAsideB.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
          </Row>
        </Container>
      </section>
      <Transition quote={"Health - Happiness - Adventure"} />
      <Collage />
      <Transition
        quote={
          "Creating art is like unlocking a door to enter into a world of my own making - where I can explore my imagination, express my emotions, and bring my ideas to life!"
        }
      />
    </main>
  );
};

export default Home;
