import React from "react";
import "./collage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Collage = () => {
  return (
    <section>
      <h2 className="section-header">Galleries</h2>
      <Container fluid="lg">
        <Row className="gallery-row">
          <Col className="gallery-img-container" xs={10}>
            <Link to={"gallery/landscapes_nature"}>
              <Image
                src="../../assets/Collages/recentWorks1.jpg"
                className="galleries-img gal-img__1"
              ></Image>
              <div className="hover-box">
                <p>Landscapes</p>
              </div>
            </Link>
          </Col>
          <Col className="icon-container" xs={2}>
            <GoChevronRight className="icon gallery-icon" />
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col className="icon-container" xs={2}>
            <GoChevronLeft className="icon gallery-icon" />
          </Col>
          <Col className="gallery-img-container" xs={10}>
            <Link to={"gallery/animals"}>
              <Image
                fluid
                src="../../assets/Collages/recentWorks3.jpg"
                className="galleries-img gal-img__2"
              ></Image>
              <div className="hover-box">
                <p>Animals</p>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col className="gallery-img-container" xs={10}>
            <Link to={"gallery/people"}>
              <Image
                fluid
                src="../../assets/Collages/recentWorks7.jpg"
                className="galleries-img gal-img__3"
              ></Image>
              <div className="hover-box">
                <p>People</p>
              </div>
            </Link>
          </Col>
          <Col className="icon-container" xs={2}>
            <GoChevronRight className="icon gallery-icon" />
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col className="icon-container" xs={2}>
            <GoChevronLeft className="icon gallery-icon" />
          </Col>
          <Col className="gallery-img-container" xs={10}>
            <Link to={"gallery/abstract"}>
              <Image
                fluid
                src="../../assets/Collages/recentWorks8.jpg"
                className="galleries-img gal-img__4"
              ></Image>
              <div className="hover-box">
                <p>Abstract</p>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="gallery-row">
          <Col className="gallery-img-container" xs={10}>
            <Link to={"gallery/crafts"}>
              <Image
                fluid
                src="../../assets/Collages/recentWorks9.jpg"
                className="galleries-img gal-img__5"
              ></Image>
              <div className="hover-box">
                <p>Crafts</p>
              </div>
            </Link>
          </Col>
          <Col className="icon-container" xs={2}>
            <GoChevronRight className="icon gallery-icon" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Collage;
