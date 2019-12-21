import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = props => {
  const mapRef = useRef();

  const { center, zoom } = props;
  useEffect(() => {
    console.log("center", center);
    console.log("zoom", zoom);

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom
    });
    // create marker in the center
    new window.google.maps.Marker({ position: center, map });
  }, [center, zoom]);

  return (
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}>
      map
    </div>
  );
};

export default Map;
