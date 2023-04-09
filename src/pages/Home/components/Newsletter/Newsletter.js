import React from "react";
import "./newsletter.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Newsletter = () => {
  return (
    <section>
      <Container>
        <Row sm={1} md={2}>
          <Col>
            <h3>
              Sign up for my newsletter to get exclusive deals and stay up to
              date on latest events, new projects, and discounts!
            </h3>
          </Col>
          <Col>
            <Form>
              <Form.Control type="email" placeholder="Enter Email" />
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
