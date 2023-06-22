import React from "react";
import CardItem from "./CardItem";

import CardGroup from "react-bootstrap/CardGroup";

const images = [
  {
    id: 1,
    src: "/images/c (1).jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "/images/c (2).jpg",
    alt: "Image 2 ",
  },
  {
    id: 3,
    src: "/images/c (3).jpg",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "/images/c (4).jpg",
    alt: "Image 3",
  },
  {
    id: 5,
    src: "/images/c (5).jpg",
    alt: "Image 3",
  },
  {
    id: 5,
    src: "/images/c (6).jpg",
    alt: "Image 3",
  },
  {
    id: 5,
    src: "/images/c (7).jpg",
    alt: "Image 3",
  },
];

function CardLayout() {
  return (
    <CardGroup style={{ display: "flex" }} className="card">
      {images.map((img) => {
        return <CardItem loc={img.src} />;
      })}
    </CardGroup>
  );
}

export default CardLayout;
