import React from "react";
import "./Card.css";

const Card = props => (
  <div className={`card ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

export default Card;
