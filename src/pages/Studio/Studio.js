import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./studio.css";

const Studio = () => {
  return (
    <main>
      <header className="studio-header">
        <Container>
          <p className="studio-header__quote text-center">
            Pleasure in the job puts perfection in the work. <br></br>—
            Aristotle
          </p>
        </Container>
      </header>
      <section className="studio-intro">
        <canvas id="canvas1"></canvas>
        <img src="assets/Adventure/Nicknofall.png" alt="Nick" />
      </section>
      {/* <section>
        <Container>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fbadcanyondesigns%2Fvideos%2F652043628533211%2F&show_text=false&width=440&t=0"
            width={440}
            height={476}
            style={{ border: "none", overflow: "hidden" }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </Container>
      </section> */}
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <Image
                fluid
                src="../../assets/Studio/wolfwDog.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
            <Col className="quote text-white">
              <div>
                <p>
                  "Meet Strider, my trusted companion in art. He loves to show
                  off the artwork I create, and with his tail wagging, he even
                  insists on approving each piece before it's finished!"
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                fluid
                src="../../assets/Studio/studiowDog.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Studio;
