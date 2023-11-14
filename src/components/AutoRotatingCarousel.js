import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import FooterCard from "./FooterCard";

export default function AutoRotatingCarousel({ cards, footer }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Carousel
        renderButtonGroupOutside={true}
        responsive={responsive}
        autoPlay={footer ? false : true}
        infinite={footer ? false : true}
        draggable={footer ? true : false}
      >
        {!footer
          ? cards.map((card, index) => (
              <div key={index} className="mx-2">
                <Card content={card} />
              </div>
            ))
          : cards.map((card, index) => (
              <div key={index} className="mx-2">
                <FooterCard content={card} />
              </div>
            ))}
      </Carousel>
    </div>
  );
}
