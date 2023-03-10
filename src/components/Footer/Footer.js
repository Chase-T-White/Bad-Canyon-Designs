import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col>Bad Canyon Designs &copy; {new Date().getFullYear()}</Col>
          <Col className="text-end">
            <Link
              to="https://www.facebook.com/badcanyondesigns/"
              className="me-3"
              target={"_blank"}
            >
              <AiFillFacebook />
            </Link>
            <AiFillInstagram className="me-3" />
            <AiFillTwitterSquare />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
