import React from "react";
import "./story.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Story = () => {
  return (
    <main>
      <header className="gallery-header">
        <h2 className="text-center">Bio</h2>
      </header>
      <section>
        <Container className="studio-intro">
          <Row xs={1} lg={2}>
            <Col xs={{ order: 2 }} lg={{ order: 1 }} className="mb-5">
              <p className="fs-5">
                Nickolas was born and raised in a small town in upstate New
                York. From a young age, he showed a keen interest in the arts,
                spending countless hours drawing and painting. After graduating
                from high school, he decided to pursue his passion for art and
                enrolled in the prestigious School of Visual Arts in New York
                City. There, he honed his skills and developed his unique style,
                incorporating elements of abstract expressionism and surrealism
                into his work. <br />
                <br />
                <br />
                Throughout his career, Nickolas has received numerous awards and
                recognition for his artwork. In 2012, he was the recipient of
                the Emerging Artist Award from the New York Foundation for the
                Arts. In 2015, he was selected as a finalist for the prestigious
                Outwin Boochever Portrait Competition at the National Portrait
                Gallery in Washington, D.C. His work has been exhibited in
                galleries and museums across the United States and Europe, and
                he is considered one of the most promising young artists of his
                generation.
              </p>
            </Col>
            <Col className="story__canvas-container mb-5">
              <canvas id="canvas1"></canvas>
              <img src="assets/Adventure/Nicknofall.png" alt="Nick" />
            </Col>
          </Row>
          <Row xs={1} lg={2}>
            <Col className="story__canvas-container mb-5">
              <Image
                fluid
                src="/assets/Adventure/christmas.jpg"
                className="story__img"
              ></Image>
            </Col>
            <Col xs={{ order: 2 }} lg={{ order: 1 }}>
              <p className="fs-5">
                When he's not creating art, Nickolas enjoys spending time
                outdoors and staying active. He is an avid runner and fitness
                enthusiast, and can often be found hitting the trails or
                exploring new hiking routes. He also enjoys fishing and shed
                hunting, which involves searching for naturally shed antlers in
                the wilderness. Hunting is another passion of his, and he enjoys
                the challenge and discipline it requires. <br />
                <br />
                <br />
                Nickolas is a family man and enjoys spending time with his wife
                and dog. They often take their dog on outdoor adventures and
                enjoy exploring new places together. For Nickolas, spending time
                in nature is not only a way to recharge and find inspiration for
                his artwork, but also a way to connect with the world around him
                and stay grounded.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Story;
