import React from "react";
import { Link } from "react-router-dom";

export default function SingleTour({
  title,
  place,
  duration,
  people,
  description,
  tour_id,
  tourImage
}) {
  return (
    <div>
      {tourImage ? (
        <img src={`/${tourImage}`} alt="" style={{ width: "100px" }} />
      ) : null}
      <h2>{title}</h2>
      <h2>{place}</h2>
      <h2>{duration}</h2>
      <h2>{people}</h2>
      <h2>{description}</h2>
      <Link
        to={{
          pathname: `/guide/edittour/${tour_id}`
        }}
      >
        Edit
      </Link>
    </div>
  );
}
