import React from "react";
import Button from "../Button/Button";
import "./Destination.css";
import CardLayout from "../Card/Card";

function Destination() {
  return (
    <div className="to-go-section">
      <h3 className="to-go">WHERE TO GO</h3>
      <div className="sec-header">
        <h2 className="pplr-destiny">Popular destination</h2>
        <Button
          style={{ border: "1px solid #063037", margin: "5px" }}
          arrowclr={"#063037"}
        />
      </div>
      <CardLayout />
    </div>
  );
}

export default Destination;
