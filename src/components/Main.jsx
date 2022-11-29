import React, { useEffect } from "react";
import "../index.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./MainNavbar";

const Main = ({ user }) => {
  const images = [
    {
      src: "https://www.clarin.com/img/2022/01/31/ubicada-en-nordelta-la-casa___seOJ4SAm4_2000x1500__1.jpg",
      alt: "Propiedades",
    },
    {
      src: "https://static.tokkobroker.com/pictures/70515481465414329222348399778114687391599399167965672903064517771696124959743.jpg",
      alt: "Propiedades",
    },
    {
      src: "https://resizer.glanacion.com/resizer/0XlcLBvwqpq3IUYoTa1LfECez7Y=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/U47VADKKU5BYXHQ64FY4F6XNHY.jpg",
      alt: "Propiedades",
    },
    {
      src: "https://www.revistadeck.com/sitio/wp-content/uploads/Casa-CD.jpg",
      alt: "Propiedades",
    },
  ];
  return (
    <>
      <Carousel
        fade
        className="carousel-inner position:relative"
        controls={false}
        indicators={false}
        keyboard={false}
        pause={false}
      >
        {images.map((image) => (
          <Carousel.Item id="#cusCarousel">
            <img
              className="carousel-inner-main-img"
              src={image.src}
              alt={image.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default Main;
