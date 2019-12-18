import React from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";

import "./PlaceItem.css";

const PlaceItem = props => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.imageUrl} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse>View on map</Button>
          <Button to={`/places/${props.id}`}>Edit</Button>
          <Button danger>Delete</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
