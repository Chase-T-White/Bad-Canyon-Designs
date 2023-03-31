import React from "react";
import "./gallery.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Gallery = () => {
  const gallery = useSelector((state) => state.gallery.fullGallery);
  const categories = Object.keys(...gallery);

  return (
    <main className="gallery">
      <header className="gallery-header">
        <h2 className="text-center">Galleries</h2>
      </header>
      <Container>
        {categories.map((category, i) => {
          let galleryArray = gallery[0][category];
          const gallerySize = 9;
          if (galleryArray.length >= gallerySize) {
            galleryArray = galleryArray.slice(0, gallerySize);
          }
          return (
            <article key={i} className="subgallery">
              <h2 className="subgallery__heading">
                <Link to={`${category}`}>{category}</Link>
              </h2>
              <Row xs={1} sm={2} md={3}>
                {galleryArray.map((piece) => {
                  return (
                    <Col className="px-0">
                      <Link to={`${category}/${piece.id}`}>
                        <Image
                          fluid
                          src={piece.image}
                          className="gallery-img"
                        ></Image>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </article>
          );
        })}
      </Container>
    </main>
  );
};

export default Gallery;
