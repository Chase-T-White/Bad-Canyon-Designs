import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Story = () => {
  return (
    <main>
      <header className="studio-header">
        <Container>
          <p className="studio-header__quote text-center">
            "Creating art is like unlocking a door to enter into a world of my
            own making - where I can explore my imagination, express my
            emotions, and bring my ideas to life!"
          </p>
        </Container>
      </header>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col className="quote text-white">
              <div>
                <p>
                  "The joy of creation has been a constant in my life since I
                  was a child. Drawing and painting were a way of connecting
                  with the world around me and expressing my creativity. Even
                  now, many years later, a piece of art still carries in it the
                  same magical feeling I experienced all those years ago."
                </p>
              </div>
            </Col>
            <Col>
              <Image
                fluid
                src="../../assets/Adventure/shedsCollage2.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                fluid
                src="../../assets/Adventure/soloShed.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
            <Col>
              <Image
                fluid
                src="../../assets/Adventure/sheds.jpg"
                className="h-100"
                style={{ objectFit: "cover" }}
              ></Image>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <section>
            <Container>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fbadcanyondesigns%2Fvideos%2F2432064033680840%2F&show_text=false&width=476&t=0"
                width="476"
                height="476"
                style={{ border: "none", overflow: "hidden" }}
                frameborder="0"
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
                    src="../../assets/Adventure/adventuresBuffalo.jpg"
                    className="h-100"
                    style={{ objectFit: "cover" }}
                  ></Image>
                </Col>
                <Col className="quote text-white">
                  <div>
                    <p>
                      "I find joy in sculpting my body in the gym and in the
                      rugged outdoors, as I stand in awe among the majestic
                      wilderness following the tracks of my prey. Shed hunting
                      and hunting are my passions, but it is also the respect
                      for nature and the constant challenge that I find in the
                      art of the hunt that truly drive me."
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image
                    fluid
                    src="../../assets/Adventure/shedsCollage.jpg"
                    className="h-100"
                    style={{ objectFit: "cover" }}
                  ></Image>
                </Col>
                <Col>
                  <Image
                    fluid
                    src="../../assets/Adventure/adventuresArrows.jpg"
                    className="h-100"
                    style={{ objectFit: "cover" }}
                  ></Image>
                </Col>
              </Row>
            </Container>
          </section>
        </Container>
      </section>
    </main>
  );
};

export default Story;
