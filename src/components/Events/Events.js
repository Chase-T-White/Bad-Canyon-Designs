import React from "react";
import "./events.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Events = () => {
  return (
    <section className="events">
      <header>
        <h4 className="section-header event-header">What's Happening</h4>
      </header>
      <Container>
        <article className="events-card">
          <Row>
            <Col className="events-img-container">
              <Image
                fluid
                src="/assets/Events/events10.jpg"
                className="event-img"
              ></Image>
            </Col>
            <Col className="events-text p-5">
              <header>
                <h2>Bisop's Art Walk</h2>
                <p>
                  April 8th - 9th <br /> 12 - 4PM
                </p>
                <p>Bisop's Walk and Talk Studio</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                  dolorem consectetur maiores rerum. Quos sit maxime, cum at
                  obcaecati quasi quaerat porro tenetur illum, laborum libero!
                  Itaque voluptate iure illum distinctio accusantium fugiat
                  laudantium inventore hic commodi ad tempore sit quisquam
                </p>
              </header>
            </Col>
            <Col className="events-col-3" lg={3}>
              <div>
                <Image fluid src="/assets/Events/events8.jpg"></Image>
              </div>
            </Col>
          </Row>
        </article>
      </Container>
    </section>
  );
};

export default Events;
