import React from "react";
import { withRouter } from "react-router";


function GuestReservationContent(props) {
  console.log(props);
  return (
    <div className="single-reservation">
      <div
        className="single-reservation--image"
        style={{ backgroundImage: `url(/${props.reservation.tourImage})` }}
      />
      <div className="single-reservation--text">
        <h2>{props.reservation.title}</h2>
        <h3>
          Tour guide: <span className="focus">John</span>
        </h3>
        <h3>Tour place: {props.reservation.place}</h3>
        <h3>Tour duration: {props.reservation.duration}</h3>
        <p>{props.reservation.description}</p>
      </div>
      <div className="single-reservation--date">
        <h1>
          25<span>{props.reservation.selectedDate}</span>
        </h1>
        <button
          className="btn btn--cancel"
          onClick={props.cancelReservation(
            props.reservation.tourID,
            props.history
          )}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default withRouter(GuestReservationContent);
