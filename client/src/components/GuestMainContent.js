import React from "react";
import { Link } from "react-router-dom";

export default function GuestMainContent(props) {
  return (
    <div>
      {props.tour.tourImage ? (
        <img
          src={`/${props.tour.tourImage}`}
          alt=""
          style={{ width: "100px" }}
        />
      ) : null}
      <h1>{props.tour.title}</h1>
      <h2>{props.tour.place}</h2>
      <h2>{props.tour.duration}</h2>
      <button>
        <Link to={`/guest/alltours/${props.tour._id}`}>Check</Link>
      </button>
    </div>
  );
}
