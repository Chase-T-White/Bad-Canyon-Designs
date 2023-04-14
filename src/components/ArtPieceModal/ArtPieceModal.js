import React from "react";
import "./artPieceModal.css";
import { Link, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useSelector, useDispatch } from "react-redux";
import { galleryActions } from "../../store/gallerySlice";

const ArtPieceModal = () => {
  const url = useParams();
  console.log(url.category === undefined);
  const dispatch = useDispatch();
  const modalArt = useSelector((state) => state.gallery.modalArt);
  const show = useSelector((state) => state.gallery.showModal);
  const handleClose = () => dispatch(galleryActions.handleClose());
  return (
    <Modal
      show={show}
      onHide={() => handleClose()}
      centered
      dialogClassName="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">{modalArt.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image fluid src={modalArt.image} className="modal__img"></Image>
      </Modal.Body>
      <Modal.Footer>
        <Link
          to={`${url.category !== undefined ? "/" : modalArt.category + "/"}${
            modalArt.id
          }`}
        >
          <Button variant="primary">Details</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ArtPieceModal;
