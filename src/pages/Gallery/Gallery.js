import React, { useState } from "react";
import "./gallery.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiExpandAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { formatHeadings } from "../../utils/helpers";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [modalArt, setModalArt] = useState([]);
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  const gallery = useSelector((state) => state.gallery.fullGallery);
  const categories = Object.keys(...gallery);

  const handleClose = () => setShow(false);
  const handleShow = (category, pieceTitle) => {
    const pullModalArt = gallery[0][category].find((piece) => {
      return piece.title === pieceTitle;
    });
    setModalArt(pullModalArt);
    setShow(true);
  };

  return (
    <main className="gallery">
      <header className="gallery-header">
        <h2 className="text-center">Galleries</h2>
      </header>
      <Container>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-dark">{modalArt.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image fluid src={modalArt.image} className="gallery-img"></Image>
          </Modal.Body>
          <Modal.Footer>
            <Link to={`${modalArt.id}`}>
              <Button variant="primary">Details</Button>
            </Link>
          </Modal.Footer>
        </Modal>
        {categories.map((category, i) => {
          let galleryArray = gallery[0][category];
          const gallerySize = 9;
          if (galleryArray.length >= gallerySize) {
            galleryArray = galleryArray.slice(0, gallerySize);
          }
          return (
            <article key={i} className="subgallery">
              <h2 className="subgallery__heading">
                <Link to={`${category}`}>{formatHeadings(category)}</Link>
              </h2>
              <Row xs={1} sm={2} md={3}>
                {galleryArray.map((piece) => {
                  return (
                    <Col
                      ref={ref}
                      className={`px-0 artPiece-container ${inView ? "" : ""}`}
                    >
                      <Image
                        fluid
                        src={piece.image}
                        className="gallery-img"
                      ></Image>
                      <div className="artPiece__hoverBox">
                        <BiExpandAlt
                          className="artPiece__hoverBox-icon"
                          title="Expand"
                          onClick={() => handleShow(category, piece.title)}
                        />
                        <Link to={`${category}/${piece.id}`} title="Details">
                          <BsArrowRight className="artPiece__hoverBox-icon" />
                        </Link>
                      </div>
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
