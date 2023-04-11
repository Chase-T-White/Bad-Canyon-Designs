import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { galleryActions } from "../../store/gallerySlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./subGallery.css";
import { formatHeadings } from "../../utils/helpers";
import { ArtPiece, ArtPieceModal } from "../../components";

const SubGallery = () => {
  const url = useParams();
  const dispatch = useDispatch();
  const subGalleryArray = useSelector((state) => state.gallery.subGallery);

  useEffect(() => {
    dispatch(galleryActions.setSubGallery(url));
  }, [url, dispatch]);

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
          <ArtPieceModal />
          <Container>
            <Row xs={1} sm={2} md={3}>
              {subGalleryArray.map((piece, i) => {
                return (
                  <ArtPiece key={i} category={url.category} piece={piece} />
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
