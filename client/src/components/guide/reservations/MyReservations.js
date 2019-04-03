import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllReservations } from "../../../actions/guideReservationActions";

class MyReservations extends Component {
  componentDidMount() {
    this.props.getAllReservations();
  }
  render() {
    const {
      guideReservationsLoading,
      guideReservations
    } = this.props.guideReservations;

    let reservationContent;

    if (guideReservationsLoading) {
      reservationContent = (
        <div className="loading">
          <img src="/img/loading.gif" alt="" />
        </div>
      );
    } else {
      reservationContent = (
        <section className="guest-tours">
          {guideReservations.map(reservation => {
            return (
              <div key={reservation._id}>
                <img
                  src={`/${reservation.tourImage}`}
                  alt=""
                  style={{ width: "100px" }}
                />
                <h2>{reservation.title}</h2>
                <h2>{reservation.selectedDate}</h2>
                <Link
                  to={{
                    pathname: `/guide/alltours/${reservation.tourID}`
                  }}
                >
                  Details
                </Link>
              </div>
            );
          })}
        </section>
      );
    }

    return (
      <div className="guest-main">
        <div className="container">
          <section className="my-reservations">{reservationContent}</section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guideReservations: state.guideReservations
});

export default connect(
  mapStateToProps,
  { getAllReservations }
)(MyReservations);
