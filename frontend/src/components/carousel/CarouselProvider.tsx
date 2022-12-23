import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./CarouselProvider.css";

type IProp={
  imagesArr: string[],
  showIndicators?:boolean
}

function CarouselProvider(prop:IProp) {
  return (
    <Carousel showIndicators={prop.showIndicators || false} showThumbs={prop.showIndicators || false}  autoPlay={true} interval={2000} infiniteLoop={true}>
      {prop.imagesArr.map((image:string) => {
        return <div className="caurousel-img">
        <img className="img-cover" src={image} />
      </div>
      })}
      </Carousel>
  );
}

export default CarouselProvider;
