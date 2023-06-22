import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import "./CardItem.css";

function CardItem({ loc }) {
  return (
    <>
      <Card className=" text-black border-0 card_item">
        <Link to="/" className="card_link" style={{ width: "20em", height: "30em" }}>
          <Card.Img src={loc} alt="Card image" className="card_img" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Link>
      </Card>
    </>
  );
}

export default CardItem;
