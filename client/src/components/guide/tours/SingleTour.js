import React from "react";
import { Link } from "react-router-dom";

export default function SingleTour({ tour }) {
  const { title, place, duration, description, _id, tourImage } = tour;

  return (
    <div className="tours__single">
      <img src={`/${tourImage}`} alt="" />
      <h2>{title}</h2>
      <h3>{place}</h3>
      <h3>
        Guide name: <span className="focus">Jose</span>
      </h3>
      <h3>
        Duration: <span className="focus">{duration}</span>
      </h3>
      <p>{description}</p>
      <button className="btn btn--success" style={{ marginTop: "auto" }}>
        <Link
          to={{
            pathname: `/guide/alltours/${_id}`
          }}
        >
          View
        </Link>
      </button>
      <button className="btn btn--danger">
        <Link
          to={{
            pathname: `/guide/edittour/${_id}`
          }}
        >
          Edit
        </Link>
      </button>
    </div>
  );
}
