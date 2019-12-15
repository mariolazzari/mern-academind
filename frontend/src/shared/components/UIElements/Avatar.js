import React from "react";
import "./Avatar.css";

const Avatar = props => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ height: props.width, width: props.width }}
      />
    </div>
  );
};

export default Avatar;
