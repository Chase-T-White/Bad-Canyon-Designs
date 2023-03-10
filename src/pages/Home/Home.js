import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Transition, Collage } from "../../components";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const amount = useSelector((state) => state.cart.amount);
  const dispatch = useDispatch();

  return (
    <main className="home">
      {/* <div className={isLoad ? "preloader hidden" : "preloader"}></div> */}
      <section className="hero">
        <Container>
          <h1 className="hero_title text-center pt-5 mb-5 text-light">
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
