import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Transition, Collage } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <main className="home">
      {/* <div className={isLoad ? "preloader hidden" : "preloader"}></div> */}
      <Navbar bg="light">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link>Shop</Nav.Link>
            <Nav.Link>Gallery</Nav.Link>
          </Nav>
          <Navbar.Brand className="nav-logo mx-5">
            Bad Canyon Designs
          </Navbar.Brand>
          <Nav>
            <Nav.Link>Story</Nav.Link>
            <Nav.Link>Studio</Nav.Link>
            <Nav.Link>Cart</Nav.Link>
          </Nav>
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
