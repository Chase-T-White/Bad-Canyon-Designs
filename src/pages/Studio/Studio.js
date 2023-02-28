import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

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
      <section>
        <Container>
          <Row className="align-items-center">
            <Col className="quote text-white">
              <div>
                <p>
                  "My art studio is my sanctuary. It's a place where I can
                  express my creativity and explore my artistic vision. I feel
                  free and inspired when I'm in my studio, and I'm never more
                  alive than when I'm creating something new."
                </p>
              </div>
            </Col>
            <Col>
              <Image
                fluid
                src="../../assets/Studio/hatArt.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                fluid
                src="../../assets/Studio/bearwArtist.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
            <Col>
              <Image
                fluid
                src="../../assets/Studio/buffwArtist.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fbadcanyondesigns%2Fvideos%2F652043628533211%2F&show_text=false&width=440&t=0"
            width={440}
            height={476}
            style={{ border: "none", overflow: "hidden" }}
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </Container>
      </section>
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
