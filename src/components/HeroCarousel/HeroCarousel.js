import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import artData from "../../data/artData.json";

const HeroCarousel = () => {
  return (
    <Carousel fade>
      {artData.map((piece, i) => {
        return (
          <Carousel.Item key={i}>
            <Image fluid src={piece.image}></Image>
            <Carousel.Caption>
              <h2>{piece.name}</h2>
              <p>{piece.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HeroCarousel;
