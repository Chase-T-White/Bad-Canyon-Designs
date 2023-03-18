import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import artData from "../../data/artData.json";
import "./heroCarousel.css";

const HeroCarousel = () => {
  return (
    <Carousel className="carousel" fade>
      {artData.map((piece, i) => {
        return (
          <Carousel.Item key={i} className="carousel-item">
            <Image fluid src={piece.image} className="carousel-img"></Image>
            <Carousel.Caption>
              <h2 className="mb-4">{piece.description}</h2>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HeroCarousel;
