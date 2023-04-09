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
        <Row xs={1} lg={2}>
          <Col>
            <h3 className="mb-4">
              Sign up for my newsletter to get exclusive deals and stay up to
              date on latest events, new projects, and discounts!
            </h3>
          </Col>
          <Col>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter Email"
                className="newsletter__form-input"
              />
              <Button
                variant="primary"
                type="submit"
                className="newsletter__button"
              >
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
