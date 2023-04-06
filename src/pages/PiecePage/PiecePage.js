import React, { useEffect } from "react";
import "./piecePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { galleryActions } from "../../store/gallerySlice";
import { cartActions } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/helpers";

const PiecePage = () => {
  const url = useParams();
  const dispatch = useDispatch();
  const pieceData = useSelector((state) => state.gallery.artPiece);

  useEffect(() => {
    dispatch(galleryActions.filterArtPiece(url));
  }, [url, dispatch]);

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id: pieceData.id,
        name: pieceData.title,
        price: pieceData.price,
        imageMain: pieceData.image,
        quantity: 1,
      })
    );
  };

  if (pieceData === null) {
    return <h1>loading...</h1>;
  } else {
    return (
      <article className="piece-section py-5 px-3">
        <Container fluid="lg">
          <Row>
            <Col>
              <Image fluid src={pieceData.image} className="piece-img"></Image>
            </Col>
            <Col className="pt-2">
              <h5 className="fs-1">{pieceData.title}</h5>
              <span className="d-block mb-4">
                {formatPrice(pieceData.price)}
              </span>
              <p className="fs-4 ">{pieceData.description}</p>
              <span className="d-block mb-4">
                Dimensions: {pieceData.dimensions}
              </span>
              <br />
              <Button onClick={addToCart}>Add To Cart</Button>
            </Col>
            /
          </Row>
        </Container>
      </article>
    );
  }
};

export default PiecePage;
