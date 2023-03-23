import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";

const Gallery = () => {
  const gallery = useSelector((state) => state.gallery.fullGallery);
  return (
    <main>
      <Container>
        {gallery.map((subGallery, i) => {
          let category = Object.keys(subGallery);
          console.log(subGallery);
          return (
            <article key={i}>
              <h3>{category[0]}</h3>
              <div>
                {for (let row = 0; row < 4; row++) {
                    <Row>
                      {for (let col = 0; col < 4; col++) {
                          <Col>
                            <Image fluid src={subGallery.category.image}></Image>
                          </Col>
                      }}
                    </Row>
                }}
              </div>
            </article>
          );
        })}
      </Container>
    </main>
  );
};

export default Gallery;
