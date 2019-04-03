import React from "react";
import { Link } from "react-router-dom";

export default function DetailsTourContent({ tour }, props) {
  console.log(tour);
  return (
    <>
      <button
        className="action"
        onClick={() => {
          window.history.back();
        }}
      >
        <i className="fas fa-chevron-left" />
        GO BACK
      </button>
      <div className="wrap">
        <div className="single-tour">
          <div
            className="single-tour__image"
            style={{ backgroundImage: `url(/${tour.tourImage})` }}
          >
            <h1>{tour.place}</h1>
          </div>
          <div className="single-tour__body">
            <div className="single-tour__text">
              <h2>{tour.title}</h2>

              <h3>{tour.duration}</h3>
              <h3>{tour.people}</h3>
              <p>{tour.description}</p>
            </div>
          </div>
          <button className="btn btn--danger">
            <Link
              to={{
                pathname: `/guide/edittour/${tour._id}`
              }}
            >
              Edit
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
