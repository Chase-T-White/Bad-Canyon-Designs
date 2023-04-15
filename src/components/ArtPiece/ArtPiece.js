import React from "react";
import "./artPiece.css";
import { useInView } from "react-intersection-observer";
import { BiExpandAlt } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useDispatch } from "react-redux";
import { galleryActions } from "../../store/gallerySlice";

const ArtPiece = ({ category, piece }) => {
  const url = useParams();
  const dispatch = useDispatch();
  const handleShow = () => {
    dispatch(galleryActions.handleShow(piece));
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Col
      ref={ref}
      className={`px-0 artPiece-container ${inView ? "reveal" : ""}`}
    >
      <Image fluid src={piece.image} className="artPiece__img"></Image>
      <div className="artPiece__hoverBox">
        <BiExpandAlt
          className="artPiece__hoverBox-icon"
          title="Expand"
          onClick={() => handleShow()}
        />
        <Link
          to={`${url.category !== undefined ? "" : category + "/"}${piece.id}`}
          title="Details"
        >
          <BsArrowRight className="artPiece__hoverBox-icon" />
        </Link>
      </div>
    </Col>
  );
};

export default ArtPiece;
