import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { galleryActions } from "../../store/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

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
        <header className="gallery-header">
          <h2 className="text-center">{url.category}</h2>
        </header>
        <Container>
          <Row xs={1} sm={2} md={3}>
            {subGalleryArray.map((piece, i) => {
              return (
                <Col key={i} className="px-0">
                  <Link to={`${piece.id}`}>
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
        </Container>
      </main>
    );
  }
};

export default SubGallery;
