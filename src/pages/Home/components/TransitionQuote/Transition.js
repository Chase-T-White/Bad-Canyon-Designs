import React from "react";
import "./transition.css";
import { Container } from "react-bootstrap";

const Transition = ({ quote }) => {
  return (
    <section>
      <Container>
        <p className="transition-quote text-center py-4">{quote}</p>
      </Container>
    </section>
  );
};

export default Transition;
