import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { galleryActions } from "../../store/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BiExpandAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import "./subGallery.css";
import { formatHeadings } from "../../utils/helpers";

const SubGallery = () => {
  const [show, setShow] = useState(false);
  const [modalArt, setModalArt] = useState([]);

  const url = useParams();
  const dispatch = useDispatch();
  const subGalleryArray = useSelector((state) => state.gallery.subGallery);

  useEffect(() => {
    dispatch(galleryActions.setSubGallery(url));
  }, [url, dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = (pieceID) => {
    const pullModalArt = subGalleryArray.find((piece) => {
      return piece.id === pieceID;
    });
    setModalArt(pullModalArt);
    setShow(true);
  };

  if (subGalleryArray === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <main>
        <header className="gallery-header mb-0">
          <h2 className="text-center subpage-heading">
            {formatHeadings(url.category)}
          </h2>
        </header>
        <article className={`${url.category} subGallery-bg`}>
          <Modal show={show} onHide={handleClose}>
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
          <Container>
            <Row xs={1} sm={2} md={3}>
              {subGalleryArray.map((piece, i) => {
                return (
                  <Col key={i} className="px-0 artPiece-container">
                    <Image
                      fluid
                      src={piece.image}
                      className="gallery-img"
                    ></Image>
                    <div className="artPiece__hoverBox">
                      <BiExpandAlt
                        className="artPiece__hoverBox-icon"
                        title="Expand"
                        onClick={() => handleShow(piece.id)}
                      />
                      <Link to={`${piece.id}`} title="Details">
                        <BsArrowRight className="artPiece__hoverBox-icon" />
                      </Link>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </article>
      </main>
    );
  }
};

export default SubGallery;
