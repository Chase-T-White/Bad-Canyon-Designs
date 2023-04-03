import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { galleryActions } from "../../store/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BiExpandAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import "./subGallery.css";

const SubGallery = () => {
  const url = useParams();
  const dispatch = useDispatch();
  const subGalleryArray = useSelector((state) => state.gallery.subGallery);

  useEffect(() => {
    dispatch(galleryActions.setSubGallery(url));
  }, [url]);

  if (subGalleryArray === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <main>
        <header className="gallery-header mb-0">
          <h2 className="text-center">{url.category}</h2>
        </header>
        <article className={`${url.category} subGallery-bg`}>
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
