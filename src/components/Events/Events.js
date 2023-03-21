import React from "react";
import "./events.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Events = () => {
  return (
    <section className="events">
      <h2 className="section-header">Events</h2>
      <Container>
        <article className="events-card">
          <Row>
            <Col className="events-text p-5">
              <header>
                <h3>Bisop's Art Walk</h3>
                <p>April 8th - 9th</p>
              </header>
            </Col>
            <Col className="events-img">
              <Image
                fluid
                src="/assets/Events/events10.jpg"
                className="event-img"
              ></Image>
            </Col>
          </Row>
        </article>
      </Container>
    </section>
  );
};

export default Events;
