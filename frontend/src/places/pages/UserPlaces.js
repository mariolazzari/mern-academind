import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Place one",
    description: "Place one description",
    imageUrl:
      "https://it.wikipedia.org/wiki/Riva_del_Garda#/media/File:Riva_del_Garda_-_10.jpg",
    address: " Via Fiume, 28, 38066 Riva del Garda TN",
    location: { lat: 40.4, lng: 41.41 },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Place two",
    description: "Place two description",
    imageUrl:
      "https://it.wikipedia.org/wiki/Riva_del_Garda#/media/File:Riva_del_Garda_-_10.jpg",
    address: " Via Fiume, 28, 38066 Riva del Garda TN",
    location: { lat: 40.4, lng: 41.41 },
    creator: "u2"
  }
];

const UserPlaces = () => {
  const { userId } = useParams();
  const userPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={userPlaces} />;
};

export default UserPlaces;
