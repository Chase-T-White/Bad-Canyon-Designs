import React from "react";
import "./contact.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Contact = () => {
  return (
    <main className="contact">
      <header className="gallery-header">
        <h2 className="text-center">Contact</h2>
      </header>
      <Container>
        <Form className="contact__form">
          <Row>
            <Col>
              <Form.Label>First Name *</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col>
              <Form.Label>Last Name *</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Email *</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message *</Form.Label>
            <Form.Control as="textarea" row={10} />
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="Send me updates" checked />
            <Form.Check
              type="checkbox"
              label="Sign up for newsletter"
              checked
            />
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit" className="px-4 mb-5">
              Send
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </main>
  );
};

export default Contact;
