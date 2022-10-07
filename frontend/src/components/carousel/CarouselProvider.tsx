import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./CarouselProvider.css";

function CarouselProvider() {
  return (
      <Carousel showIndicators={false} showThumbs={false}>
        <div className="caurousel-img">
          <img className="img-cover" src="https://source.unsplash.com/1620x600/?girl,bags" />
        </div>
        <div className="caurousel-img">
          <img className="img-cover" src="https://source.unsplash.com/1620x600/?girl,tshirts" />
        </div>
        <div className="caurousel-img">
          <img className="img-cover" src="https://source.unsplash.com/1620x600/?girl,jeans" />
        </div>
      </Carousel>
  );
}

export default CarouselProvider;
