import React from "react";
import { Link } from "react-router-dom";

export default function Tour({ tour }) {
  return (
    <div>
      {tour.tourImage ? (
        <img src={`/${tour.tourImage}`} alt="" style={{ width: "100px" }} />
      ) : null}
      <h2>{tour.title}</h2>
      <h2>{tour.place}</h2>
      <h2>{tour.duration}</h2>
      <h2>{tour.people}</h2>
      <h2>{tour.description}</h2>
    </div>
  );
}
