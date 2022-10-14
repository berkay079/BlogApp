import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Carousel.css";
import js from "../assets/img/js.webp";
import react from "../assets/img/react.png";
import javascript from "../assets/img/javascript.png";

import Carousel from "react-bootstrap/Carousel";

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="Carouselstyle"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={javascript} alt="" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={js} alt="" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={react} alt="" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
